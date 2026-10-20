/* ============================================================
   TESTHANE — yemek verisi toplayıcı
   Çalıştırma:  node tools/build-food.mjs
   Çıktı:       data/food.js  (FOOD_DB sabiti)
   Kaynak: Vikipedi özet API (rest_v1) → CC BY-SA
   ============================================================ */

import fs from "node:fs/promises";
import path from "node:path";

const UA = { "User-Agent": "TESTHANE/1.0 (educational quiz project; contact: local)" };
const OUT = path.resolve("data/food.js");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJSON(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(30000) });
      if (res.status === 429) throw new Error("HTTP 429");
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.json();
    } catch (e) {
      if (i === tries - 1) return null;
      await sleep(600 * (i + 1));
    }
  }
}

/* [vikipedi başlığı (tr), üye/yemek adı görünen, mutfak] */
const DISHES = [
  ["Pizza", "pizza", "İtalya"],
  ["Lasagna", "lasagna", "İtalya"],
  ["Spagetti Bolonyez", "spagetti", "İtalya"],
  ["Risotto", "risotto", "İtalya"],
  ["Focaccia", "focaccia", "İtalya"],
  ["Sushi", "sushi", "Japonya"],
  ["Ramen", "ramen", "Japonya"],
  ["Sashimi", "sashimi", "Japonya"],
  ["Tempura", "tempura", "Japonya"],
  ["Odon", "udon", "Japonya"],
  ["Taco", "taco", "Meksika"],
  ["Burrito", "burrito", "Meksika"],
  ["Guacamole", "guacamole", "Meksika"],
  ["Enchilada", "enchilada", "Meksika"],
  ["Hamburger", "hamburger", "ABD"],
  ["Sosisli sandviç", "hot dog", "ABD"],
  ["Paella", "paella", "İspanya"],
  ["Churros", "churros", "İspanya"],
  ["Tortilla İspanyol", "tortilla İspanyol", "İspanya"],
  ["Croissant", "croissant", "Fransa"],
  ["Ratatouille", "ratatouille", "Fransa"],
  ["Baget", "baguette", "Fransa"],
  ["Fransız soğan çorbası", "soğan çorbası", "Fransa"],
  ["Döner kebap", "döner", "Türkiye"],
  ["İskender kebap", "İskender", "Türkiye"],
  ["Menemen (yemek)", "menemen", "Türkiye"],
  ["Baklava", "baklava", "Türkiye"],
  ["Mantı (yemek)", "mantı", "Türkiye"],
  ["Köfte", "köfte", "Türkiye"],
  ["Simit", "simit", "Türkiye"],
  ["Çiğ köfte", "çiğ köfte", "Türkiye"],
  ["Falafel", "falafel", "Orta Doğu"],
  ["Humus", "humus", "Orta Doğu"],
  ["Şiş kebap", "şiş kebap", "Orta Doğu"],
  ["Pad Tay", "pad thai", "Tayland"],
  ["Tom Yum", "Tom Yum çorbası", "Tayland"],
  ["Pho", "Pho", "Vietnam"],
  ["Biryani", "biryani", "Hindistan"],
  ["Masala köri", "masala", "Hindistan"],
  ["Pekin ördeği", "Pekin ördeği", "Çin"],
  ["Dim sum", "dim sum", "Çin"],
  ["Kimci", "Kimçi", "Kore"],
  ["Bibimbap", "bibimbap", "Kore"],
  ["Feijoada", "feijoada", "Brezilya"],
  ["Empanada", "empanada", "Arjantin"],
  ["Arepa", "arepa", "Venezüella"],
  ["Gyros", "gyros", "Yunanistan"],
  ["Paskalya ucuzu", "pierogi", "Polonya"]
];

/* en.wikipedia fallback başlıkları */
const EN_FALLBACK = {
  "Spagetti Bolonyez": "Bolognese sauce",
  "Odon": "Udon",
  "Sosisli sandviç": "Hot dog",
  "Tortilla İspanyol": "Spanish omelette",
  "Baget": "Baguette",
  "Fransız soğan çorbası": "French onion soup",
  "Menemen (yemek)": "Menemen (food)",
  "Mantı (yemek)": "Manti (food)",
  "Kimci": "Kimchi",
  "Paskalya ucuzu": "Pierogi",
  "Tom Yum": "Tom yum",
  "Pho": "Pho",
  "Masala köri": "Curry",
  "Lasagna": "Lasagne",
  "Risotto": "Risotto",
  "Sushi": "Sushi",
  "Ramen": "Ramen",
  "Sashimi": "Sashimi",
  "Croissant": "Croissant",
  "Ratatouille": "Ratatouille",
  "Churros": "Churros",
  "Döner kebap": "Doner kebab",
  "Humus": "Hummus",
  "Şiş kebap": "Shish kebab",
  "Pad Tay": "Pad thai",
  "Biryani": "Biryani",
  "Feijoada": "Feijoada"
};

/* toplu pageimages sorgusu: { başlık → {img, page, desc} } */
async function batch(host, titles) {
  const chunks = [];
  for (let i = 0; i < titles.length; i += 20) chunks.push(titles.slice(i, i + 20));
  const found = new Map();
  for (const chunk of chunks) {
    const url = `https://${host}/w/api.php?action=query&format=json&redirects=1` +
      `&prop=pageimages|description&piprop=thumbnail&pithumbsize=640` +
      `&titles=${encodeURIComponent(chunk.map((t) => t.replace(/ /g, "_")).join("|"))}`;
    const data = await getJSON(url);
    if (!data || !data.query || !data.query.pages) continue;
    const pages = new Map(Object.values(data.query.pages).map((p) => [p.title, p]));
    const norm = new Map();
    if (data.query.normalized) for (const n of data.query.normalized) norm.set(n.from, n.to);
    const redir = new Map();
    if (data.query.redirects) for (const r of data.query.redirects) redir.set(r.from, r.to);
    for (const requested of chunk) {
      let key = norm.get(requested) || requested;
      key = redir.get(key) || key;
      const p = pages.get(key);
      if (!p) continue;
      const img = p.thumbnail && p.thumbnail.source
        ? p.thumbnail.source.replace(/^http:/, "https:")
        : "";
      if (!img) continue;
      found.set(requested, {
        img: img + (img.includes("?") ? "&" : "?") + "width=640",
        page: `https://${host}/wiki/${encodeURIComponent(p.title.replace(/ /g, "_"))}`,
        desc: p.description || ""
      });
    }
    await sleep(600);
  }
  return found;
}

const out = [];
const trTitles = DISHES.map((d) => d[0]);
const trHits = await batch("tr.wikipedia.org", trTitles);

const missing = DISHES.filter((d) => !trHits.has(d[0]) && EN_FALLBACK[d[0]]);
const enHits = await batch("en.wikipedia.org", missing.map((d) => EN_FALLBACK[d[0]]));

for (const [title, display, cuisine] of DISHES) {
  let hit = trHits.get(title) || enHits.get(EN_FALLBACK[title]);
  if (!hit) {
    console.log(`— görsel yok: ${display}`);
    continue;
  }
  out.push({
    name: display.charAt(0).toLocaleUpperCase("tr") + display.slice(1),
    cuisine,
    img: hit.img,
    page: hit.page,
    desc: hit.desc ? `${display} — ${hit.desc}` : ""
  });
  console.log(`✓ ${display}  (${out.length})`);
}

const js = `/* ============================================================
   TESTHANE — yemek verisi
   Bu dosya otomatik üretildi: tools/build-food.mjs
   Kaynak: Vikipedi (CC BY-SA) ve Wikimedia Commons
   ============================================================ */

const FOOD_DB = {
 dishes: ${JSON.stringify(out, null, 1)}
};
`;
await fs.writeFile(OUT, js, "utf8");
console.log(`\ndata/food.js yazıldı — ${out.length} yemek kaydı.`);
