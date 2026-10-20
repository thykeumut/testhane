/* ============================================================
   TESTHANE — Vikipedi / Wikidata veri toplayıcı
   Çalıştırma:  node tools/build-wiki.mjs
   Çıktı:       data/wiki.js  (WIKI sabiti)
   ============================================================ */

import fs from "node:fs/promises";
import path from "node:path";

const UA = { "User-Agent": "TESTHANE/1.0 (educational quiz project; contact: local)" };
const OUT = path.resolve("data/wiki.js");
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

/* ---------------------------------------------------------- ülkeler */
async function fetchCountries() {
  const query = `
    SELECT ?c ?cLabel ?capLabel ?flag ?continentLabel ?article WHERE {
      ?c wdt:P31 wd:Q3624078 .
      ?c wdt:P36 ?cap .
      OPTIONAL { ?c wdt:P41 ?flag . }
      OPTIONAL { ?c wdt:P30 ?continent . }
      OPTIONAL {
        ?article schema:about ?c ;
                 schema:isPartOf <https://tr.wikipedia.org/> .
      }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "tr,en". }
    }
    LIMIT 400
  `;
  const url = "https://query.wikidata.org/sparql?format=json&query=" + encodeURIComponent(query);
  const data = await getJSON(url);
  const map = new Map();

  for (const b of data.results.bindings) {
    const qid = b.c.value.split("/").pop();
    const name = b.cLabel.value;
    const capital = b.capLabel.value;
    if (!name || !capital) continue;
    const item = map.get(qid) || { q: qid, name, capital, continents: [], flag: "", page: "" };
    if (b.flag && !item.flag) item.flag = b.flag.value.replace(/^http:/, "https:");
    if (b.continentLabel) {
      const c = b.continentLabel.value;
      if (!item.continents.includes(c)) item.continents.push(c);
    }
    if (b.article && !item.page) item.page = b.article.value;
    map.set(qid, item);
  }

  const list = [...map.values()]
    .filter((c) => c.name && c.capital)
    .map((c) => ({
      name: c.name,
      capital: c.capital,
      continent: c.continents.length === 1 ? c.continents[0] : "",
      continents: c.continents,
      flag: c.flag ? c.flag + "?width=480" : "",
      page: c.page || "https://tr.wikipedia.org/wiki/" + encodeURIComponent(c.name.replace(/ /g, "_"))
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "tr"));

  const withFlag = list.filter((c) => c.flag).length;
  console.log(`ülke: ${list.length} (bayraklı: ${withFlag})`);
  return list;
}

/* ---------------------------------------------------------- kişiler */
const PEOPLE = [
  ["Albert Einstein", "bilim"], ["Marie Curie", "bilim"], ["Isaac Newton", "bilim"],
  ["Charles Darwin", "bilim"], ["Nikola Tesla", "bilim"], ["Ada Lovelace", "bilim"],
  ["Aziz Sancar", "bilim"], ["Cahit Arf", "bilim"], ["Stephen Hawking", "bilim"],
  ["Galileo Galilei", "bilim"], ["Rosalind Franklin", "bilim"], ["Alexander Fleming", "bilim"],
  ["Alan Turing", "bilim"], ["Gregor Mendel", "bilim"], ["Niels Bohr", "bilim"],
  ["Michael Faraday", "bilim"], ["Louis Pasteur", "bilim"], ["Johannes Kepler", "bilim"],

  ["Yaşar Kemal", "edebiyat"], ["Orhan Pamuk", "edebiyat"], ["Sabahattin Ali", "edebiyat"],
  ["Nâzım Hikmet", "edebiyat"], ["Ahmet Hamdi Tanpınar", "edebiyat"], ["Halide Edib Adıvar", "edebiyat"],
  ["Reşat Nuri Güntekin", "edebiyat"], ["Oğuz Atay", "edebiyat"], ["Franz Kafka", "edebiyat"],
  ["Fyodor Dostoyevski", "edebiyat"], ["Lev Tolstoy", "edebiyat"], ["Virginia Woolf", "edebiyat"],
  ["William Shakespeare", "edebiyat"], ["George Orwell", "edebiyat"], ["Victor Hugo", "edebiyat"],
  ["Johann Wolfgang von Goethe", "edebiyat"], ["Miguel de Cervantes", "edebiyat"], ["Halit Ziya Uşaklıgil", "edebiyat"],

  ["Vincent van Gogh", "sanat"], ["Pablo Picasso", "sanat"], ["Leonardo da Vinci", "sanat"],
  ["Michelangelo", "sanat"], ["Frida Kahlo", "sanat"], ["Salvador Dalí", "sanat"],
  ["Wolfgang Amadeus Mozart", "sanat"], ["Ludwig van Beethoven", "sanat"], ["Johann Sebastian Bach", "sanat"],
  ["Mimar Sinan", "sanat"], ["Osman Hamdi Bey", "sanat"], ["Claude Monet", "sanat"],
  ["Rembrandt", "sanat"], ["Frédéric Chopin", "sanat"], ["Barış Manço", "sanat"],
  ["Zeki Müren", "sanat"], ["Neşet Ertaş", "sanat"],

  ["Mustafa Kemal Atatürk", "tarih"], ["Fatih Sultan Mehmet", "tarih"],
  ["Kanuni Sultan Süleyman", "tarih"], ["Piri Reis", "tarih"],
  ["Barbaros Hayreddin Paşa", "tarih"], ["Halil İnalcık", "tarih"],
  ["İlber Ortaylı", "tarih"],

  ["Richard Feynman", "bilim"], ["Katherine Johnson", "bilim"], ["Nikola Kopernik", "bilim"],
  ["Dmitri Mendeleev", "bilim"], ["Jane Goodall", "bilim"], ["İbn-i Sina", "bilim"],

  ["Marcel Proust", "edebiyat"], ["Gabriel García Márquez", "edebiyat"], ["Agatha Christie", "edebiyat"],
  ["J. R. R. Tolkien", "edebiyat"], ["Mehmet Akif Ersoy", "edebiyat"], ["Yunus Emre", "edebiyat"],

  ["Gustav Klimt", "sanat"], ["Edvard Munch", "sanat"], ["Johannes Vermeer", "sanat"],
  ["Andy Warhol", "sanat"], ["Freddie Mercury", "sanat"], ["Sertab Erener", "sanat"],

  ["Napolyon Bonapart", "tarih"], ["Jül Sezar", "tarih"], ["Kleopatra", "tarih"],
  ["Büyük İskender", "tarih"], ["Cengiz Han", "tarih"], ["Kösem Sultan", "tarih"]
];

/* ---------------------------------------------------------- toplu Vikipedi sorgusu */
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchPages(titles) {
  const found = new Map();

  for (const group of chunk(titles, 20)) {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "pageimages|extracts|description|info|pageprops",
      inprop: "url",
      ppprop: "wikibase_item",
      piprop: "thumbnail|name",
      exintro: "1",
      explaintext: "1",
      exsentences: "2",
      pilimit: "max",
      pithumbsize: "520",
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

/* ---------------------------------------------------------- Wikidata P18 (portre/foto) */
const BAD_FILE = /(signature|imza|autograph|logo|coat[_ ]of[_ ]arms|map|harita)/i;

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

function pageToItem(page, size = 520, p18 = new Map()) {
  const qid = page.pageprops?.wikibase_item;
  const candidate = p18.get(qid) || "";
  const p18File = BAD_FILE.test(candidate) ? "" : candidate;
  const pageFile = BAD_FILE.test(page.pageimage || "") ? "" : page.pageimage;
  const file = p18File || pageFile;
  const img = file
    ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${size}`
    : pageFile
      ? (page.thumbnail?.source || "").split("?")[0]
      : "";

  return {
    name: page.title,
    desc: (page.description || "").replace(/\s*\(.*?\)\s*/g, "").trim(),
    fact: (page.extract || "").replace(/\s+/g, " ").split(". ")[0].slice(0, 160),
    img,
    page: page.fullurl || ""
  };
}

/* ---------------------------------------------------------- kişiler */
async function fetchPeople() {
  const pages = await fetchPages(PEOPLE.map(([title]) => title));
  const p18 = await fetchP18([...pages.values()].map((p) => p.pageprops?.wikibase_item));
  const out = [];

  for (const [title, field] of PEOPLE) {
    const page = pages.get(title);
    if (!page) {
      console.log("  atlandı:", title);
      continue;
    }
    const item = pageToItem(page, 520, p18);
    if (!item.img) {
      console.log("  görselsiz atlandı:", title);
      continue;
    }
    out.push({ ...item, field });
  }
  console.log("kişi:", out.length);
  return out;
}

/* ---------------------------------------------------------- tarihî yerler */
const PLACES = [
  ["Ayasofya", "İstanbul", "Türkiye"], ["Topkapı Sarayı", "İstanbul", "Türkiye"],
  ["Galata Kulesi", "İstanbul", "Türkiye"], ["Sultanahmet Camii", "İstanbul", "Türkiye"],
  ["Dolmabahçe Sarayı", "İstanbul", "Türkiye"], ["Kız Kulesi", "İstanbul", "Türkiye"],
  ["Rumeli Hisarı", "İstanbul", "Türkiye"], ["Kapadokya", "Nevşehir", "Türkiye"],
  ["Pamukkale", "Denizli", "Türkiye"], ["Efes", "İzmir", "Türkiye"],
  ["Göbeklitepe", "Şanlıurfa", "Türkiye"], ["Nemrut Dağı", "Adıyaman", "Türkiye"],
  ["Sümela Manastırı", "Trabzon", "Türkiye"], ["Aspendos", "Antalya", "Türkiye"],
  ["Truva", "Çanakkale", "Türkiye"], ["Anıtkabir", "Ankara", "Türkiye"],
  ["Bergama", "İzmir", "Türkiye"], ["Safranbolu", "Karabük", "Türkiye"],
  ["Divriği Ulu Camii", "Sivas", "Türkiye"], ["İshak Paşa Sarayı", "Ağrı", "Türkiye"],
  ["Zeugma", "Gaziantep", "Türkiye"], ["Hasankeyf", "Batman", "Türkiye"],
  ["Ölüdeniz", "Muğla", "Türkiye"], ["Uzungöl", "Trabzon", "Türkiye"],
  ["Balıklıgöl", "Şanlıurfa", "Türkiye"], ["Alanya Kalesi", "Antalya", "Türkiye"],
  ["Aphrodisias", "Aydın", "Türkiye"], ["Aizanoi", "Kütahya", "Türkiye"],
  ["Sardes", "Manisa", "Türkiye"],

  ["Eyfel Kulesi", "Paris", "Fransa"], ["Kolezyum", "Roma", "İtalya"],
  ["Pisa Kulesi", "Pisa", "İtalya"], ["Machu Picchu", "Cusco", "Peru"],
  ["Gize Piramitleri", "Gize", "Mısır"], ["Tac Mahal", "Agra", "Hindistan"],
  ["Çin Seddi", "Pekin", "Çin"], ["Özgürlük Heykeli", "New York", "ABD"],
  ["Big Ben", "Londra", "Birleşik Krallık"], ["Sagrada Familia", "Barselona", "İspanya"],
  ["Petra", "Petra", "Ürdün"], ["Stonehenge", "Salisbury", "Birleşik Krallık"],

  ["Hattuşa", "Çorum", "Türkiye"], ["Göreme", "Nevşehir", "Türkiye"],
  ["Ani", "Kars", "Türkiye"], ["Perge", "Antalya", "Türkiye"],
  ["Olimpos", "Antalya", "Türkiye"], ["Assos", "Çanakkale", "Türkiye"],
  ["Uçhisar Kalesi", "Nevşehir", "Türkiye"], ["Yazılıkaya", "Çorum", "Türkiye"],

  ["Notre-Dame Katedrali", "Paris", "Fransa"], ["Versay Sarayı", "Versay", "Fransa"],
  ["Brandenburg Kapısı", "Berlin", "Almanya"], ["Atina Akropolisi", "Atina", "Yunanistan"],
  ["Alhambra", "Granada", "İspanya"], ["Chichen Itza", "Yucatán", "Meksika"],
  ["Angkor Wat", "Siem Reap", "Kamboçya"], ["Sidney Opera Binası", "Sidney", "Avustralya"]
];

async function fetchPlaces() {
  const pages = await fetchPages(PLACES.map(([title]) => title));
  const p18 = await fetchP18([...pages.values()].map((p) => p.pageprops?.wikibase_item));
  const out = [];

  for (const [title, city, country] of PLACES) {
    const page = pages.get(title);
    if (!page) {
      console.log("  atlandı:", title);
      continue;
    }
    const item = pageToItem(page, 720, p18);
    if (!item.img) {
      console.log("  görselsiz atlandı:", title);
      continue;
    }
    out.push({ ...item, city, country });
  }
  console.log("yer:", out.length);
  return out;
}

/* ---------------------------------------------------------- gezegenler */
const PLANETS = [
  ["Merkür", "Güneş'e en yakın gezegen."],
  ["Venüs", "Güneş Sistemi'nin en sıcak gezegeni."],
  ["Dünya", "Üzerinde yaşam bulunan tek bilinen gezegen."],
  ["Mars", "Kızıl Gezegen olarak bilinir."],
  ["Jüpiter", "Güneş Sistemi'nin en büyük gezegeni."],
  ["Satürn", "Halkalarıyla ünlü gaz devi."],
  ["Uranüs", "Yan yatmış ekseniyle dönen buz devi."],
  ["Neptün", "Güneş'e en uzak gezegen."]
];

async function fetchPlanets() {
  const pages = await fetchPages(PLANETS.map(([title]) => title));
  const p18 = await fetchP18([...pages.values()].map((p) => p.pageprops?.wikibase_item));
  const out = [];

  for (const [title, fact] of PLANETS) {
    const page = pages.get(title);
    if (!page) {
      console.log("  atlandı:", title);
      continue;
    }
    const item = pageToItem(page, 720, p18);
    if (!item.img) {
      console.log("  görselsiz atlandı:", title);
      continue;
    }
    out.push({ ...item, name: title, fact });
  }
  console.log("gezegen:", out.length);
  return out;
}

/* ---------------------------------------------------------- hayvanlar */
const ANIMALS = [
  "Aslan", "Kaplan", "Fil", "Zürafa", "Panda", "Koala", "Kanguru", "Penguen",
  "Kutup ayısı", "Kurt", "Tilki", "Kartal", "Baykuş", "Yunus", "Mavi balina",
  "Köpek balığı", "Ahtapot", "Denizanası", "Timsah", "Yılan", "Kurbağa",
  "Kelebek", "Arı", "Karınca", "Örümcek", "Tavşan", "Sincap", "Deve",
  "Gergedan", "Su aygırı", "Çita", "Leopar", "Şempanze", "Goril", "Flamingo",
  "Tavus kuşu", "Papağan", "Karga"
];

async function fetchAnimals() {
  const pages = await fetchPages(ANIMALS);
  const p18 = await fetchP18([...pages.values()].map((p) => p.pageprops?.wikibase_item));
  const out = [];

  for (const title of ANIMALS) {
    const page = pages.get(title);
    if (!page) {
      console.log("  atlandı:", title);
      continue;
    }
    const item = pageToItem(page, 720, p18);
    if (!item.img) {
      console.log("  görselsiz atlandı:", title);
      continue;
    }
    out.push(item);
  }
  console.log("hayvan:", out.length);
  return out;
}

/* ---------------------------------------------------------- çalıştır */
console.log("Vikipedi / Wikidata'dan veri çekiliyor…");
const countries = await fetchCountries();
const people = await fetchPeople();
const places = await fetchPlaces();
const planets = await fetchPlanets();
const animals = await fetchAnimals();

const wiki = {
  fetchedAt: new Date().toISOString(),
  source: "Vikipedi / Wikimedia Commons",
  countries,
  people,
  places,
  planets,
  animals
};

const header = `/* ============================================================
   TESTHANE — Vikipedi / Wikidata verisi
   Bu dosya otomatik üretildi: tools/build-wiki.mjs
   Kaynak: Vikipedi (CC BY-SA) ve Wikimedia Commons
   Yeniden üretmek için: node tools/build-wiki.mjs
   ============================================================ */

`;
const body = "const WIKI = " + JSON.stringify(wiki, null, 1) + ";\n\nif (typeof window !== \"undefined\") window.WIKI = WIKI;\n";
await fs.writeFile(OUT, header + body, "utf8");

const kb = Math.round(Buffer.byteLength(header + body) / 1024);
console.log(`yazıldı: ${OUT} (${kb} KB)`);
console.log(`özet: ${countries.length} ülke, ${people.length} kişi, ${places.length} yer, ${planets.length} gezegen, ${animals.length} hayvan`);
