/* ============================================================
   TESTHANE — el yapımı testler için Wikimedia görselleri
   Çalıştırma: node tools/build-extras.mjs
   Çıktı:      data/wiki-extras.js  (WIKI_EXTRAS sabiti)
   ============================================================ */

import fs from "node:fs/promises";
import path from "node:path";

const UA = { "User-Agent": "TESTHANE/1.0 (educational quiz project; contact: local)" };
const OUT = path.resolve("data/wiki-extras.js");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJSON(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(45000) });
      if (res.status === 429) throw new Error("HTTP 429 (hız sınırı)");
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.json();
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(e.message.includes("429") ? 5000 * (i + 1) : 800 * (i + 1));
    }
  }
}

/* Anahtar → Türkçe Vikipedi madde adı */
const EXTRA_PAGES = {
  /* kapaklar */
  "istanbul": "İstanbul",
  "kapadokya": "Kapadokya",
  "satranc": "Satranç",
  "narsisizm": "Narsisizm",
  "ofis": "Ofis",
  "konser": "Konser",
  "turk-kahvesi": "Türk kahvesi",
  "arkadaslik": "Arkadaşlık",
  "kemal-sunal": "Kemal Sunal",
  "baklava": "Baklava",
  "lizbon": "Lizbon",
  "kavsak": "Kavşak",
  "ronesans": "Rönesans",
  "tatil": "Tatil",
  "sinema": "Sinema",
  "kurt": "Kurt",

  /* Türkiye genel kültür */
  "van-golu": "Van Gölü",
  "efes": "Efes",
  "tbmm": "Türkiye Büyük Millet Meclisi",
  "agri-dagi": "Ağrı Dağı",
  "sultanahmet": "Sultanahmet Camii",
  "pamukkale": "Pamukkale",
  "kizilirmak": "Kızılırmak",
  "amasya": "Amasya",
  "anitkabir": "Anıtkabir",
  "gobeklitepe": "Göbeklitepe",
  "nemrut": "Nemrut Dağı",
  "sumela": "Sümela Manastırı",
  "aspendos": "Aspendos",
  "truva": "Truva",
  "safranbolu": "Safranbolu",
  "divrigi": "Divriği Ulu Camii",
  "ishakpasa": "İshak Paşa Sarayı",
  "zeugma": "Zeugma",
  "balikligol": "Balıklıgöl",
  "uzungol": "Uzungöl",
  "oludeniz": "Ölüdeniz",
  "hattusa": "Hattuşa",
  "sardes": "Sardes",
  "bergama": "Bergama",
  "ani": "Ani",
  "perge": "Perge",
  "assos": "Assos",
  "olimpos": "Olimpos",
  "mardin": "Mardin",
  "goreme": "Göreme",
  "dolmabahce": "Dolmabahçe Sarayı",
  "topkapi": "Topkapı Sarayı",
  "kizkulesi": "Kız Kulesi",
  "galata": "Galata Kulesi",

  /* Türk dizi ve film */
  "tarik-akan": "Tarık Akan",
  "sener-sen": "Şener Şen",
  "munir-ozkul": "Münir Özkul",
  "cagan-irmak": "Çağan Irmak",
  "halit-ziya": "Halit Ziya Uşaklıgil",
  "cem-yilmaz": "Cem Yılmaz",
  "ali-atay": "Ali Atay",
  "kenan-imirzalioglu": "Kenan İmirzalıoğlu",
  "kaan-urgancioglu": "Kaan Urgancıoğlu",
  "binnur-kaya": "Binnur Kaya",
  "gulse-birsel": "Gülse Birsel",
  "ata-demirer": "Ata Demirer",
  "sahan-gokbakar": "Şahan Gökbakar",
  "yesilcam": "Yeşilçam",
  "turk-sinemasi": "Türk sineması",
  "turkan-soray": "Türkan Şoray",
  "hulya-kocyigit": "Hülya Koçyiğit",
  "cuneyt-arkin": "Cüneyt Arkın",
  "yilmaz-guney": "Yılmaz Güney",
  "adile-nasit": "Adile Naşit",
  "halit-akcatepe": "Halit Akçatepe",
  "zeki-alasya": "Zeki Alasya",
  "metin-akpinar": "Metin Akpınar",
  "gulsen-bubikoglu": "Gülşen Bubikoğlu",
  "banu-alkan": "Banu Alkan",
  "trt": "Türkiye Radyo Televizyon Kurumu",
  "hababam": "Hababam Sınıfı",
  "susuz-yaz": "Susuz Yaz",
  "umut": "Umut (film)",
  "selvi-boylum-al-yazmalim": "Selvi Boylum Al Yazmalım",
  "esan-ustad": "Eşkıya (film)",
  "vizontele": "Vizontele",
  "gokhan-ozoguz": "Gökhan Özoğuz",
  "berguzar-korel": "Bergüzar Korel",
  "haluk-bilginer": "Haluk Bilginer",
  "tuncel-kurtiz": "Tuncel Kurtiz",
  "erdem-kivanc": "Erdem Kıvanç",

  /* Dünya mutfağı */
  "paella": "Paella",
  "sushi": "Sushi",
  "taco": "Taco",
  "croissant": "Croissant",
  "pizza": "Pizza",
  "kimchi": "Kimchi",
  "humus": "Nohut",
  "pad-thai": "Tayland mutfağı",
  "feijoada": "Brezilya mutfağı",
  "gulas": "Gulaş",
  "tiramisu": "Tiramisu",
  "ramen": "Ramen",
  "pho": "Vietnam mutfağı",
  "falafel": "Falafel",
  "musakka": "Musakka",
  "risotto": "Risotto",
  "tapas": "Tapas",
  "bors": "Borş çorbası",
  "kuskus": "Kuskus",
  "poutine": "Poutine",
  "bibimbap": "Bibimbap",
  "tom-yum": "Tayland mutfağı",
  "currywurst": "Currywurst",
  "fish-and-chips": "Fish and chips",
  "empanada": "Empanada",
  "arepa": "Arepa",
  "pekin-ordegi": "Pekin ördeği",
  "doner": "Döner",
  "lahmacun": "Lahmacun",
  "manti": "Mantı",
  "kunefe": "Künefe",
  "iskender": "İskender kebap",
  "cig-kofte": "Çiğ köfte",
  "dolma": "Dolma",
  "menemen": "Menemen",
  "simit": "Simit",
  "baklava-tatli": "Baklava"
};

/* Doğrudan Commons dosyası gerektiren kapaklar */
const DIRECT_FILES = {
  "icene-donukluk": {
    file: "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    desc: "Sis Denizinde Gezgin, Caspar David Friedrich"
  },
  "istanbul": {
    file: "Historical peninsula and modern skyline of Istanbul.jpg",
    desc: "İstanbul'un tarihî yarımadası ve modern silüeti"
  },
  "televizyon": {
    file: "Family watching television 1958.jpg",
    desc: "1958'de televizyon izleyen bir aile"
  },
  "kavsak": {
    file: "Two roads diverge in a wood - geograph.org.uk - 594238.jpg",
    desc: "Ormanda ikiye ayrılan yol"
  }
};

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchPages(titles) {
  const found = new Map();
  const unique = [...new Set(titles)];
  for (const group of chunk(unique, 20)) {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "pageimages|description|info|pageprops",
      inprop: "url",
      ppprop: "wikibase_item",
      piprop: "thumbnail|name",
      pithumbsize: "900",
      redirects: "1",
      titles: group.join("|")
    });
    try {
      const data = await getJSON("https://tr.wikipedia.org/w/api.php?" + params);
      const q = data.query || {};
      const redirects = new Map((q.redirects || []).map((r) => [r.from, r.to]));
      const normalized = new Map((q.normalized || []).map((r) => [r.from, r.to]));
      const resolve = (title) => {
        let t = title;
        for (let i = 0; i < 3; i++) {
          t = normalized.get(t) || t;
          t = redirects.get(t) || t;
        }
        return t;
      };
      const byTitle = new Map((q.pages || []).map((p) => [p.title, p]));
      for (const title of group) {
        const page = byTitle.get(resolve(title));
        if (page && !page.missing) found.set(title, page);
      }
    } catch (e) {
      console.log("  toplu sorgu hatası:", e.message);
    }
    await sleep(350);
  }
  return found;
}

async function fetchP18(qids) {
  const map = new Map();
  const ids = [...new Set(qids.filter(Boolean))];
  for (const group of chunk(ids, 50)) {
    const params = new URLSearchParams({
      action: "wbgetentities",
      format: "json",
      formatversion: "2",
      ids: group.join("|"),
      props: "claims"
    });
    try {
      const data = await getJSON("https://www.wikidata.org/w/api.php?" + params);
      const ents = Array.isArray(data.entities) ? data.entities : Object.values(data.entities || {});
      for (const ent of ents) {
        const file = ent.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
        if (file) map.set(ent.id, file);
      }
    } catch (e) {
      console.log("  P18 hatası:", e.message);
    }
    await sleep(300);
  }
  return map;
}

const BAD_FILE = /(signature|imza|autograph|logo|coat[_ ]of[_ ]arms|map|harita)/i;

function pageToItem(page, p18 = new Map()) {
  const qid = page.pageprops?.wikibase_item;
  const candidate = p18.get(qid) || "";
  const file = BAD_FILE.test(candidate) ? "" : candidate;
  const img = file
    ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=900`
    : (page.thumbnail?.source || "");
  return {
    img,
    page: page.fullurl || "",
    desc: (page.description || "").replace(/\s*\(.*?\)\s*/g, "").trim()
  };
}

console.log("El yapımı testler için Wikimedia görselleri çekiliyor…");
const entries = Object.entries(EXTRA_PAGES);
const pages = await fetchPages(entries.map(([, title]) => title));
const p18 = await fetchP18([...pages.values()].map((p) => p.pageprops?.wikibase_item));
const extras = {};
let missing = 0;

for (const [key, direct] of Object.entries(DIRECT_FILES)) {
  extras[key] = {
    img: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(direct.file)}?width=900`,
    page: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(direct.file.replace(/ /g, "_"))}`,
    desc: direct.desc
  };
}

for (const [key, title] of entries) {
  if (extras[key]) continue;
  const direct = DIRECT_FILES[key];
  if (direct) {
    extras[key] = {
      img: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(direct.file)}?width=900`,
      page: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(direct.file.replace(/ /g, "_"))}`,
      desc: direct.desc
    };
    continue;
  }
  const page = pages.get(title);
  if (!page) {
    console.log("  madde yok:", key, "→", title);
    missing++;
    continue;
  }
  const item = pageToItem(page, p18);
  if (!item.img) {
    console.log("  görsel yok:", key, "→", title);
    missing++;
    continue;
  }
  extras[key] = item;
}

const header = `/* ============================================================
   TESTHANE — el yapımı testlerin Wikimedia görselleri
   Bu dosya otomatik üretildi: tools/build-extras.mjs
   Kaynak: Vikipedi (CC BY-SA) ve Wikimedia Commons
   ============================================================ */

`;
const body = "const WIKI_EXTRAS = " + JSON.stringify(extras, null, 1) + ";\n\nif (typeof window !== \"undefined\") window.WIKI_EXTRAS = WIKI_EXTRAS;\n";
await fs.writeFile(OUT, header + body, "utf8");

const kb = Math.round(Buffer.byteLength(header + body) / 1024);
console.log(`yazıldı: ${OUT} (${kb} KB)`);
console.log(`özet: ${Object.keys(extras).length} görsel, ${missing} eksik`);
