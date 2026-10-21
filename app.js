/* ============================================================
   TESTHANE — uygulama motoru
   Saf JS, derleme yok, bağımlılık yok.
   ============================================================ */
(() => {
  "use strict";

  const STORE_KEY = "testhane.v1";
  const THEME_KEY = "testhane.theme";
  const view = document.getElementById("view");
  const confettiCanvas = document.getElementById("confetti");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------- tema */
  const themeBtn = document.getElementById("themeToggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function applyTheme(theme, persist = true) {
    const dark = theme === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    if (themeMeta) themeMeta.content = dark ? "#182033" : "#f5f2ea";
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
      themeBtn.setAttribute("aria-label", dark ? "Açık moda geç" : "Koyu moda geç");
      themeBtn.title = dark ? "Açık moda geç" : "Koyu moda geç";
    }
    if (persist) {
      try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch (e) { /* sessizce geç */ }
    }
  }

  applyTheme(currentTheme(), false);
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------------------------------------- depo */
  function loadStore() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY));
      if (raw && Array.isArray(raw.attempts)) {
        return { name: typeof raw.name === "string" ? raw.name : "", attempts: raw.attempts };
      }
    } catch (e) { /* sessizce geç */ }
    return { name: "", attempts: [] };
  }
  let store = loadStore();
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* dolu olabilir */ }
  }

  /* ---------------------------------------------------------- yardımcılar */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

  /* ---------------------------------------------------------- Vikipedi verisi */
  const WIKI = window.WIKI || { countries: [], people: [], places: [], planets: [], animals: [] };
  const EXTRAS = window.EXTRA_TESTS || {};
  const WIKI_EXTRAS = window.WIKI_EXTRAS || {};
  const NEW_TESTS = window.NEW_TESTS || [];
  const FOOD = window.FOOD_DB || { dishes: [] };

  /* ---------------------------------------------------------- ikonlar */
  const ICONS = {
    flag: '<path d="M5 21V4"/><path d="M5 4h9l-1.6 3L14 10H5"/>',
    landmark: '<path d="M3 21h18"/><path d="M6 21V10"/><path d="M10 21V10"/><path d="M14 21V10"/><path d="M18 21V10"/><path d="M2 10h20L12 3 2 10Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.7 3.6 5.7 3.6 9s-1.2 6.3-3.6 9c-2.4-2.7-3.6-5.7-3.6-9S9.6 5.7 12 3Z"/>',
    pin: '<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 5.5v16"/><path d="M8 7h8"/><path d="M8 11h6"/>',
    palette: '<path d="M12 21a9 9 0 1 1 9-9c0 2.2-1.8 3.5-3.6 3.5H15a2 2 0 0 0-1.7 3c.5.9 0 2.5-1.3 2.5Z"/><circle cx="7.5" cy="10.5" r=".9"/><circle cx="10" cy="7.2" r=".9"/><circle cx="14.4" cy="7.2" r=".9"/><circle cx="17.2" cy="10.3" r=".9"/>',
    flask: '<path d="M9 3h6"/><path d="M10 3v6l-5.2 9A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7.5 15h9"/>',
    crown: '<path d="m3 8 4 3 5-6 5 6 4-3-2 11H5L3 8Z"/><path d="M5 19h14"/>',
    planet: '<circle cx="12" cy="12" r="5.5"/><path d="M4.2 15.4c4 2 11.4 1.9 15.4-1.9"/><path d="M4.8 7.8C8.5 5 15.4 4.4 19 7"/>',
    tv: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="m8 3 4 4 4-4"/>',
    film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16"/><path d="M17 4v16"/><path d="M3 9h4"/><path d="M3 15h4"/><path d="M17 9h4"/><path d="M17 15h4"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    heart: '<path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.5 2.8C20.5 15 12 20.5 12 20.5Z"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9.5" r="2.2"/><path d="M16 14.8c2.6.3 5 2.2 5 5.2"/>',
    coffee: '<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/><path d="M17 9h2.5a2.5 2.5 0 0 1 0 5H17"/><path d="M7 3.5c0 1 1 1 1 2"/><path d="M11 3.5c0 1 1 1 1 2"/>',
    utensils: '<path d="M6 3v7a2 2 0 0 0 2 2v9"/><path d="M10 3v7a2 2 0 0 1-2 2"/><path d="M6 3v4"/><path d="M15 21V3c2.5 0 4 2.5 4 6s-1.5 5-4 5"/>',
    building: '<path d="M4 21V6l8-3 8 3v15"/><path d="M2 21h20"/><path d="M9 21v-5h6v5"/><path d="M8 9h2"/><path d="M14 9h2"/><path d="M8 12h2"/><path d="M14 12h2"/>',
    paw: '<circle cx="6.5" cy="9" r="1.8"/><circle cx="10" cy="5.5" r="1.8"/><circle cx="14" cy="5.5" r="1.8"/><circle cx="17.5" cy="9" r="1.8"/><path d="M12 20c-3.6 0-6-2-6-4.4 0-1.7 1.7-2.8 3.5-2.3l2.5.8 2.5-.8c1.8-.5 3.5.6 3.5 2.3C18 18 15.6 20 12 20Z"/>',
    alert: '<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5"/><circle cx="12" cy="17.2" r=".8" fill="currentColor" stroke="none"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"/>',
    star: '<path d="m12 3 2.7 5.7 6.3.9-4.6 4.4 1.1 6.2L12 17.3l-5.5 2.9 1.1-6.2L3 9.6l6.3-.9L12 3Z"/>',
    spark: '<path d="M12 2.5c.6 5 3 7.4 8 8-5 .6-7.4 3-8 8-.6-5-3-7.4-8-8 5-.6 7.4-3 8-8Z"/>',
    shuffle: '<path d="M4 7h3c4 0 6 10 10 10h3"/><path d="m17 14 3 3-3 3"/><path d="M4 17h3c1.6 0 2.9-1.6 4-3.4"/><path d="M14 8.4C14.9 7.5 15.9 7 17 7h3"/><path d="m17 4 3 3-3 3"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 5H4v2a4 4 0 0 0 4 4"/><path d="M16 5h4v2a4 4 0 0 1-4 4"/><path d="M12 13v5"/><path d="M8.5 21h7"/>',
    check: '<path d="m4.5 12.5 4.5 4.5L19.5 6.5"/>',
    x: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
    camera: '<path d="M3 8h3l2-3h8l2 3h3v12H3V8Z"/><circle cx="12" cy="13" r="4"/>',
    satellite: '<path d="m7 7 4 4"/><path d="m3 9 2-6 5 2-2 6-5-2Z"/><path d="m17 17 4-4"/><path d="m15 21 2-5 5 2-2 5-5-2Z"/>',
    map: '<path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z"/><path d="M9 4v14"/><path d="M15 6v14"/>',
    chart: '<path d="M3 21h18"/><path d="M6 21v-7"/><path d="M11 21V9"/><path d="M16 21v-4"/>'
  };

  function icon(name, cls = "") {
    const body = ICONS[name] || ICONS.spark;
    return `<svg class="ic${cls ? " " + cls : ""}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
  }

  const TEST_ICONS = {
    "hangi-istanbul-semtisin": "pin",
    "ne-kadar-icene-donuksun": "moon",
    "turkiye-genel-kultur": "star",
    "hangi-dizi-karakterisin": "tv",
    "mantik-ve-dikkat": "bolt",
    "toksik-misin": "alert",
    "hangi-meslek-sana-uygun": "briefcase",
    "muzik-zevkine-gore-ruh-halin": "music",
    "hangi-kahve-sensin": "coffee",
    "ne-kadar-iyi-bir-arkadassin": "users",
    "turk-dizi-film-testi": "film",
    "dunya-mutfagi": "utensils",
    "en-iyi-yemekler": "utensils",
    "mutfak-tanima": "utensils",
    "o-mu-bu-mu-yemek": "shuffle",
    "tabak-esle": "utensils",
    "hangi-sehirde-yasamalisin": "building",
    "wiki-bayraklar": "flag",
    "wiki-baskentler": "landmark",
    "wiki-kitalar": "globe",
    "wiki-bilim": "flask",
    "wiki-edebiyat": "book",
    "wiki-sanat": "palette",
    "wiki-tarih": "crown",
    "wiki-yerler": "compass",
    "wiki-yer-nerede": "pin",
    "wiki-gezegenler": "planet",
    "wiki-hayvanlar": "paw",
    "wiki-karisik": "shuffle",
    "o-mu-bu-mu": "shuffle",
    "hangi-donemde-yasamalisin": "crown",
    "hangi-tatil-tipisin": "compass",
    "hangi-film-turu-sensin": "film",
    "hangi-hayvan-sensin": "paw"
  };

  const CAT_ICONS = { "kişilik": "spark", "bilgi": "star", "eğlence": "tv", "ilişki": "heart" };
  const testIcon = (t) => TEST_ICONS[t.id] || CAT_ICONS[t.category] || "spark";

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function choices(correct, pool, label = (x) => x) {
    const correctLabel = label(correct);
    const seen = new Set([correctLabel]);
    const others = [];
    for (const item of shuffle(pool)) {
      const l = label(item);
      if (seen.has(l)) continue;
      seen.add(l);
      others.push(l);
      if (others.length === 3) break;
    }
    return shuffle([{ t: correctLabel, c: true }, ...others.map((t) => ({ t }))]);
  }

  function bgUrl(url) {
    const clean = String(url).replace(/&/g, "&amp;").replace(/"/g, "%22");
    return `url(&quot;${clean}&quot;)`;
  }

  function coverPhoto(url, tint = "rgba(10,10,12,.5)") {
    return `linear-gradient(160deg, rgba(10,10,12,.15) 0%, ${tint} 100%), ${bgUrl(url)} center/cover no-repeat`;
  }

  function bands(prefix, kind = "knowledge") {
    const sets = {
      knowledge: [
        { title: "Isınma Turu", desc: "Henüz başlangıçtasın ama merakın yerinde. Birkaç tur daha atsan çok fark edecek.", tags: ["başlangıç", "meraklı"] },
        { title: "Fena Değil", desc: "Temel bilgin sağlam; zor sorularda tökezledin. Doğru yoldasın.", tags: ["gelişiyor", "sağlam"] },
        { title: "Bilgi Küpü", desc: "Geniş bir bilgi ağın var. Çevrende \"bir ona sor\" denen kişi olabilirsin.", tags: ["bilgili", "güvenilir"] },
        { title: "Uzman", desc: "Neredeyse kusursuz. Bu havuz seni zorlamadı; daha zor bir seviyeyi hak ediyorsun.", tags: ["uzman", "keskin"] }
      ],
      visual: [
        { title: "Gözün Yeni Alışıyor", desc: "Görselleri tanımak zaman alır. Birkaç tur sonra aynı testte çok daha iyi olacaksın.", tags: ["başlangıç", "gözlem"] },
        { title: "İyi Gidiyorsun", desc: "Detayları yakalamaya başladın. Birkaç doğru daha seni üst lige taşır.", tags: ["gözlemci", "gelişiyor"] },
        { title: "Keskin Göz", desc: "Görsel hafızan güçlü. İnsanlar senin fark ettiğin detayları çoğu zaman görmüyor.", tags: ["keskin", "hafıza"] },
        { title: "Görsel Hafıza", desc: "Neredeyse hepsini bildin. Bu artık bilgi değil, gerçek bir hafıza gösterisi.", tags: ["uzman", "hafıza"] }
      ],
      space: [
        { title: "Yörüngeden Çıktın", desc: "Gezegenler seni biraz şaşırttı. Bir belgesel açsan her şey yerine oturur.", tags: ["başlangıç", "meraklı"] },
        { title: "Dünya Yerlisi", desc: "Güneş Sistemi'nde yolunu bulmaya başladın. Birkaç tur daha, tamamdır.", tags: ["gelişiyor", "meraklı"] },
        { title: "Yıldız Gözlemcisi", desc: "Gezegenleri iyi tanıyorsun. Gece gökyüzüne baktığında ne gördüğünü biliyorsun.", tags: ["gözlemci", "bilgili"] },
        { title: "Astronom", desc: "Güneş Sistemi senin için açık bir kitap. Sıradaki durak: derin uzay.", tags: ["uzman", "astronomi"] }
      ]
    };
    const mins = [0, 40, 70, 90];
    return sets[typeof kind === "string" && sets[kind] ? kind : "knowledge"]
      .map((b, i) => ({ id: `${prefix}-${i}`, min: mins[i], ...b }));
  }

  function buildWikiTests() {
    const out = [];

    /* --- ülkeler --- */
    const countries = WIKI.countries.filter((c) => c.flag);
    const turkey = countries.find((c) => c.name === "Türkiye") || countries[0];

    if (countries.length >= 8) {
      out.push({
        id: "wiki-bayraklar",
        title: "Bayraklardan ülkeleri tanı",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: 10,
        cover: `linear-gradient(150deg, rgba(10,10,12,.25), rgba(10,10,12,.92)), ${bgUrl(turkey.flag)} center/contain no-repeat, #14141a`,
        photoCover: true,
        accent: "#ff4b4b",
        desc: `${countries.length} ülkenin bayrağı arasından rastgele 10 tanesi. Bakalım kaçını tanıyorsun?`,
        minutes: 3,
        questions: countries.map((c) => ({
          q: "Bu bayrak hangi ülkeye ait?",
          image: c.flag,
          imageFit: "contain",
          fact: `Başkent: ${c.capital}`,
          wiki: c.page,
          a: choices(c, countries, (x) => x.name)
        })),
        results: bands("bayrak", "knowledge")
      });
    }

    const capitals = [...new Set(countries.map((c) => c.capital))];
    if (countries.length >= 8 && capitals.length >= 8) {
      out.push({
        id: "wiki-baskentler",
        title: "Dünya başkentleri",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: 10,
        cover: "linear-gradient(140deg,#1f4b8f 0%,#2f8f8a 55%,#0a0a0c 100%)",
        accent: "#4b9dff",
        desc: `${countries.length} ülkenin başkenti. Rastgele 10 soruda coğrafya bilgini zorluyoruz.`,
        minutes: 3,
        questions: countries.map((c) => ({
          q: `${c.name} ülkesinin başkenti hangisi?`,
          fact: c.continent ? `${c.name}, ${c.continent} kıtasında yer alıyor.` : "",
          wiki: c.page,
          a: choices(c.capital, capitals)
        })),
        results: bands("baskent", "knowledge")
      });
    }

    const multi = countries.filter((c) => c.continent);
    const continents = [...new Set(multi.map((c) => c.continent))];
    if (multi.length >= 8 && continents.length >= 4) {
      out.push({
        id: "wiki-kitalar",
        title: "Ülkeler ve kıtalar",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: 10,
        cover: "linear-gradient(140deg,#2f8f6a 0%,#1f4b8f 55%,#0a0a0c 100%)",
        accent: "#6ee7d8",
        desc: "Bu ülke hangi kıtada? Kolay görünüyor, ta ki karıştırmaya başlayana kadar.",
        minutes: 3,
        questions: multi.map((c) => ({
          q: `${c.name} hangi kıtada yer alır?`,
          fact: `Başkent: ${c.capital}`,
          wiki: c.page,
          a: choices(c.continent, continents)
        })),
        results: bands("kita", "knowledge")
      });
    }

    /* --- kişiler --- */
    const fields = [
      ["bilim", "Bilim insanlarını tanı", "#6ee7d8"],
      ["edebiyat", "Dünya yazarlarını tanı", "#b79cff"],
      ["sanat", "Ressamlar ve müzisyenler", "#ff8a4c"],
      ["tarih", "Tarihî kişiler", "#ffd84b"]
    ];

    for (const [field, title, accent] of fields) {
      const pool = WIKI.people.filter((p) => p.field === field && p.img);
      if (pool.length < 4) continue;

      out.push({
        id: "wiki-" + field,
        title,
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: Math.min(10, pool.length),
        cover: coverPhoto(pool[0].img, "rgba(10,10,12,.48)"),
        photoCover: true,
        accent,
        desc: `${pool.length} portre, rastgele ${Math.min(10, pool.length)} soru. Bu yüzü tanıyor musun?`,
        minutes: 3,
        questions: pool.map((p) => ({
          q: "Bu kişi kim?",
          image: p.img,
          imageFit: "contain",
          mediaDark: true,
          fact: p.desc || p.fact,
          wiki: p.page,
          a: choices(p, pool, (x) => x.name)
        })),
        results: bands("wiki-" + field, "visual")
      });
    }

    /* --- tarihî yerler --- */
    const places = WIKI.places.filter((p) => p.img);
    if (places.length >= 8) {
      out.push({
        id: "wiki-yerler",
        title: "Dünyadan tarihî yerler",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: 10,
        cover: coverPhoto(places[0].img, "rgba(10,10,12,.45)"),
        photoCover: true,
        accent: "#ff8a4c",
        desc: "Ayasofya'dan Machu Picchu'ya " + places.length + " yer. Görselden tanıyabilecek misin?",
        minutes: 3,
        questions: places.map((p) => ({
          q: "Bu yer hangisi?",
          image: p.img,
          imageFit: "cover",
          fact: `${p.city}, ${p.country}`,
          wiki: p.page,
          a: choices(p, places, (x) => x.name)
        })),
        results: bands("yer", "visual")
      });

      const cities = [...new Set(places.map((p) => p.city))];
      if (cities.length >= 6) {
        out.push({
          id: "wiki-yer-nerede",
          title: "Bu yer nerede?",
          category: "bilgi",
          mode: "trivia",
          dynamic: true,
          sample: 10,
          cover: coverPhoto(places[6]?.img || places[0].img, "rgba(10,10,12,.46)"),
          photoCover: true,
          accent: "#4b9dff",
          desc: "Görseldeki yer hangi şehirde? Türkiye ve dünyadan " + places.length + " durak.",
          minutes: 3,
          questions: places.map((p) => ({
            q: `${p.name} hangi şehirde?`,
            image: p.img,
            imageFit: "cover",
            fact: p.country,
            wiki: p.page,
            a: choices(p.city, cities)
          })),
          results: bands("nerede", "visual")
        });
      }
    }

    /* --- gezegenler --- */
    const planets = WIKI.planets.filter((p) => p.img);
    if (planets.length >= 6) {
      out.push({
        id: "wiki-gezegenler",
        title: "Gezegenleri tanı",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: planets.length,
        cover: coverPhoto(planets[4]?.img || planets[0].img, "rgba(10,10,12,.42)"),
        photoCover: true,
        accent: "#b79cff",
        desc: "Güneş Sistemi'nin sekiz gezegeni. Görselden hangisi olduğunu söyleyebilir misin?",
        minutes: 3,
        questions: planets.map((p) => ({
          q: "Bu hangi gezegen?",
          image: p.img,
          imageFit: "contain",
          mediaDark: true,
          fact: p.fact,
          wiki: p.page,
          a: choices(p, planets, (x) => x.name)
        })),
        results: bands("gezegen", "space")
      });
    }

    /* --- hayvanlar --- */
    const animals = (WIKI.animals || []).filter((a) => a.img);
    if (animals.length >= 8) {
      out.push({
        id: "wiki-hayvanlar",
        title: "Hayvanları tanı",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: Math.min(10, animals.length),
        cover: coverPhoto(animals[0].img, "rgba(10,10,12,.42)"),
        photoCover: true,
        accent: "#6ee7d8",
        desc: `${animals.length} hayvan, rastgele ${Math.min(10, animals.length)} soru. Bu canlıyı tanıyor musun?`,
        minutes: 3,
        questions: animals.map((a) => ({
          q: "Bu hangi hayvan?",
          image: a.img,
          imageFit: "cover",
          fact: a.desc || a.fact,
          wiki: a.page,
          a: choices(a, animals, (x) => x.name)
        })),
        results: bands("hayvan", "visual")
      });
    }

    /* --- hepsini karıştır --- */
    const pool = out.flatMap((t) => t.questions);
    if (pool.length >= 40) {
      out.push({
        id: "wiki-karisik",
        title: "Büyük karışık test",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        hero: true,
        sample: 20,
        cover: coverPhoto(animals[3]?.img || places[6]?.img || planets[4]?.img || countries[0].flag, "rgba(10,10,12,.46)"),
        photoCover: true,
        accent: "#c9f23c",
        desc: `${pool.length} soruluk dev havuzdan rastgele 20 soru. Bayrak, başkent, portre, yer, gezegen ve hayvanlar bir arada.`,
        minutes: 6,
        questions: pool,
        results: bands("karisik", "knowledge")
      });
    }

    return out;
  }

  /* --- yemek verisinden görselli testler (tools/build-food.mjs üretimi) --- */

  /* persona ağırlıkları: yemeğin "ruhu" */
  const FOOD_W = {
    "döner": { etci: 2, sokak: 1 }, "İskender": { etci: 2, hamur: 1 },
    "menemen": { sofra: 2 }, "baklava": { tatli: 2 }, "mantı": { hamur: 2 },
    "köfte": { etci: 2 }, "simit": { sokak: 2, hamur: 1 }, "çiğ köfte": { sokak: 2, etci: 1 },
    "mücver": { sofra: 2 }, "karnıyarık": { sofra: 2 }, "içli köfte": { sofra: 2, etci: 1 },
    "kısır": { sofra: 1, sokak: 1 }, "lahmacun": { sokak: 2, hamur: 1 }, "pide": { hamur: 2, etci: 1 },
    "börek": { hamur: 2 }, "lokum": { tatli: 2 }, "boza": { tatli: 1, sokak: 1 },
    "aşure": { tatli: 2 }, "tavuk göğsü": { tatli: 2 }, "kokoreç": { sokak: 2 },
    "İmam bayıldı": { sofra: 2 }, "kumpir": { sokak: 2 }, "mercimek çorbası": { sofra: 2 },
    "helva": { tatli: 2 }, "pilav": { sofra: 2 }, "balık ekmek": { deniz: 2, sokak: 1 },
    "şiş kebap": { etci: 2 }, "falafel": { sokak: 2 }, "humus": { sofra: 1, sokak: 1 },
    "pizza": { hamur: 2 }, "lasagna": { sofra: 2 }, "spagetti": { sofra: 2 },
    "risotto": { sofra: 2 }, "focaccia": { hamur: 2 }, "sushi": { deniz: 2 },
    "ramen": { sofra: 2 }, "sashimi": { deniz: 2 }, "tempura": { sofra: 2 },
    "udon": { sofra: 2 }, "gyoza": { sofra: 2 }, "taco": { sokak: 2 },
    "burrito": { sokak: 2 }, "guacamole": { sofra: 1, sokak: 1 }, "enchilada": { sofra: 2 },
    "hamburger": { sokak: 2, etci: 1 }, "hot dog": { sokak: 2 }, "paella": { sofra: 2, deniz: 1 },
    "churros": { tatli: 2 }, "tortilla İspanyol": { sofra: 2 }, "croissant": { hamur: 2 },
    "ratatouille": { sofra: 2 }, "baguette": { hamur: 2 }, "soğan çorbası": { sofra: 2 },
    "şnitzel": { etci: 2 }, "balık ve cips": { sokak: 2, deniz: 1 }, "ceviçe": { deniz: 2 },
    "tiramisu": { tatli: 2 }, "poutine": { sokak: 2 }, "kuskus": { sofra: 2 },
    "pastel de nata": { tatli: 2 }, "pavlova": { tatli: 2 }, "pad thai": { sofra: 2 },
    "Tom Yum çorbası": { sofra: 2, deniz: 1 }, "Pho": { sofra: 2 }, "biryani": { sofra: 2 },
    "masala": { sofra: 2 }, "Pekin ördeği": { sofra: 1, etci: 1 }, "dim sum": { sofra: 2 },
    "Kimçi": { sofra: 2 }, "bibimbap": { sofra: 2 },
    "feijoada": { sofra: 2, etci: 1 }, "empanada": { sokak: 2 }, "arepa": { sokak: 2 },
    "gyros": { sokak: 2, etci: 1 }, "pierogi": { sofra: 2 }
  };
  const dishW = (name) => FOOD_W[String(name)] || FOOD_W[String(name).toLocaleLowerCase("tr")] || null;
  const FOOD_RESULTS = [
    { id: "etci", title: "Ateşli etçil", desc: "Senin sofra kuralları net: önce et var, gerisi hikâye. Izgara kokusu bile seni çabuk ikna eder.", tags: ["et", "ızgara", "cesur"] },
    { id: "tatli", title: "Şerbetli şahin", desc: "Tatlıya ayrılan konum pazarlık kabul etmiyor. Menüde tatlı yoksa sipariş tamam sayılmaz.", tags: ["tatlı", "şerbet", "keyif"] },
    { id: "hamur", title: "Hamur işi sanatçısı", desc: "Sıcak, içi dolu hamur işi senin mutlu yeri. Börek kokusu seni odaya çağırır.", tags: ["hamur", "sıcak", "pratik"] },
    { id: "sokak", title: "Sokak lezzeti avcısı", desc: "Senin favori restoran sokak. Tezgâh başında yenen her şey masadakinden lezzetli.", tags: ["sokak", "kâşif", "pragmatik"] },
    { id: "deniz", title: "Denizin çocuğu", desc: "Deniz kenarı, tuzlu rüzgâr ve taze balık: senin mutfağın mavi. Balık yoksa menüde eksik var.", tags: ["deniz", "balık", "taze"] },
    { id: "sofra", title: "Ev sofrası huzuru", desc: "Senin lezzet tanımı evin sıcaklığı. Bir tepsi pilav, sabır isteyen bir çorba, uzun bir sofra sohbeti.", tags: ["ev yemeği", "sıcak", "aile"] }
  ];

  function buildBigOMuBuMu(id, title, cuisine, desc) {
    const mapped = (FOOD.dishes || []).filter((d) =>
      d.img && dishW(d.name) && (!cuisine || d.cuisine === cuisine));
    if (mapped.length < 10) return [];
    const pairs = [];
    const queue = shuffle(mapped);
    for (let i = 0; i < queue.length - 1; i += 2) pairs.push([queue[i], queue[i + 1]]);
    if (pairs.length < 5) return [];
    return [{
      id,
      title,
      category: "eğlence",
      mode: "personality",
      dynamic: true,
      sample: 10,
      cover: coverPhoto(pairs[0][0].img, "rgba(10,10,12,.5)"),
      photoCover: true,
      accent: "#ff5c93",
      desc,
      minutes: 3,
      questions: pairs.map(([a, b]) => ({
        q: "Hangisi bugünün ruhuna daha yakın? Fotoğrafa bak, kararı ver.",
        big: true,
        a: [
          { t: a.name, i: a.img, w: dishW(a.name) },
          { t: b.name, i: b.img, w: dishW(b.name) }
        ]
      })),
      results: FOOD_RESULTS
    }];
  }

  function buildFoodTests() {
    const dishes = (FOOD.dishes || []).filter((d) => d.img);
    const out = [];
    if (dishes.length < 8) return out;

    out.push(...buildBigOMuBuMu(
      "o-mu-bu-mu-turk", "O mu bu mu? — Türk yemekleri", "Türkiye",
      "Türk mutfak dövüşü: iki büyük fotoğraf, tek karar. Döner mü menemen mi? Bakalım tarzın hangi tabakta saklı."
    ));
    out.push(...buildBigOMuBuMu(
      "o-mu-bu-mu-lezzet", "O mu bu mu? — dünya yemekleri", null,
      "Sushi mi burger mi? Ramen mi pilav mı? Dünyanın lezzetlerini kafa kafaya koyuyoruz; her kartta iki büyük fotoğraf var."
    ));

    /* --- en iyi yemekler: fotoğraftan yemeği tanı --- */
    out.push({
      id: "en-iyi-yemekler",
      title: "Dünyanın en iyi yemekleri",
      category: "bilgi",
      mode: "trivia",
      dynamic: true,
      sample: 10,
      cover: coverPhoto(dishes[0].img, "rgba(10,10,12,.46)"),
      photoCover: true,
      accent: "#ff8a4c",
      desc: `${dishes.length} yemek klasiği, fotoğraflı. Bu tabağın adını söyleyebilir misin?`,
      minutes: 3,
      questions: dishes.map((d) => ({
        q: "Bu yemek hangisi?",
        image: d.img,
        imageFit: "cover",
        fact: `${d.cuisine} mutfağı${d.desc ? " · " + d.desc.split(" — ").slice(1).join(" — ") : ""}`,
        wiki: d.page,
        a: choices(d, dishes, (x) => x.name)
      })),
      results: bands("yemek", "visual")
    });

    /* --- o mu bu mu: yemek — fotoğraftan mutfak tahmini, iki seçenek --- */
    const cuisines = [...new Set(dishes.map((d) => d.cuisine))];
    if (cuisines.length >= 4) {
      out.push({
        id: "o-mu-bu-mu-yemek",
        title: "O mu bu mu? — yemek",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: 10,
        cover: coverPhoto(dishes[Math.floor(Math.random() * dishes.length)].img, "rgba(10,10,12,.5)"),
        photoCover: true,
        accent: "#c9f23c",
        desc: `Fotoğrafı gör, iki seçenekten birine say: bu lezzet hangi mutfağın? ${dishes.length} yemek.`,
        minutes: 3,
        questions: dishes.map((d) => {
          const others = cuisines.filter((c) => c !== d.cuisine);
          const opponent = others[Math.floor(Math.random() * others.length)];
          return {
            q: "Bu yemeğin anavatanı hangisi?",
            image: d.img,
            imageFit: "cover",
            fact: d.name,
            wiki: d.page,
            a: shuffle([{ t: d.cuisine, c: true }, { t: opponent }])
          };
        }),
        results: bands("mutfak", "knowledge")
      });
    }

    /* --- hangi mutfak?: 4 seçenekli, fotoğraflı, büyük havuz --- */
    if (cuisines.length >= 6) {
      out.push({
        id: "mutfak-tanima",
        title: "Hangi mutfağın?",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: 10,
        cover: coverPhoto(dishes[Math.floor(Math.random() * dishes.length)].img, "rgba(10,10,12,.46)"),
        photoCover: true,
        accent: "#7ee0a2",
        desc: `${dishes.length} yemek fotoğrafı, ${cuisines.length} ülke. Mutfak tahmin döngüsünün en zorlu turu.`,
        minutes: 4,
        questions: dishes.map((d) => ({
          q: "Bu tabak hangi mutfağın klasiği?",
          image: d.img,
          imageFit: "cover",
          fact: `${d.name}${d.desc ? " · " + d.desc.split(" — ").slice(1).join(" — ") : ""}`,
          wiki: d.page,
          a: choices(d.cuisine, cuisines)
        })),
        results: bands("hangimuthak", "visual")
      });
    }

    /* --- tabak eşleştir: tariften tabağa, cevaplar fotoğraflı --- */
    const described = dishes.filter((d) => {
      const text = (d.desc || "").split(" — ").slice(1).join(" — ").trim();
      return text.length >= 22;
    });
    if (described.length >= 8 && dishes.length >= 8) {
      out.push({
        id: "tabak-esle",
        title: "Tabak eşleştir",
        category: "bilgi",
        mode: "trivia",
        dynamic: true,
        sample: 10,
        cover: coverPhoto(described[0].img, "rgba(10,10,12,.46)"),
        photoCover: true,
        accent: "#ffd84b",
        desc: "İpucunu oku, doğru tabağın fotoğrafını seç. Bu turda cevaplar resimli!",
        minutes: 3,
        questions: described.map((target) => {
          const others = shuffle(dishes.filter((d) => d.name !== target.name))
            .slice(0, 3)
            .map((d) => ({ t: d.name, i: d.img }));
          const glue = (target.desc || "").split(" — ").slice(1).join(" — ").trim();
          return {
            q: `Bu tabak hangisi? ${target.cuisine} mutfağı · ipucu: ${glue}`,
            fact: target.name,
            wiki: target.page,
            a: shuffle([{ t: target.name, i: target.img, c: true }, ...others])
          };
        }),
        results: bands("tabak", "visual")
      });
    }

    return out;
  }

  /* --- el yapımı testlere ek sorular ve Wikimedia fotoğrafları --- */
  function applyExtras() {
    TESTS.forEach((test) => {
      const meta = EXTRAS.meta && EXTRAS.meta[test.id];
      if (meta) Object.assign(test, meta);

      const added = EXTRAS.questions && EXTRAS.questions[test.id];
      if (Array.isArray(added)) test.questions.push(...added);

      test.questions.forEach((q) => {
        if (!q.imageKey) return;
        const extra = WIKI_EXTRAS[q.imageKey];
        if (!extra || !extra.img) return;
        q.image = extra.img;
        if (!q.imageFit) q.imageFit = "cover";
        if (!q.wiki && extra.page) q.wiki = extra.page;
        if (!q.fact && extra.desc) q.fact = extra.desc;
      });

      const coverKey = (EXTRAS.covers && EXTRAS.covers[test.id]) || test.coverKey;
      const cover = coverKey && WIKI_EXTRAS[coverKey] && WIKI_EXTRAS[coverKey].img;
      if (cover) {
        test.cover = coverPhoto(cover, "rgba(10,10,12,.46)");
        test.photoCover = true;
      }
    });
  }

  if (NEW_TESTS.length) TESTS.push(...NEW_TESTS);
  applyExtras();

  let ALL_TESTS = null;
  const TEST_ORDER = [
    "o-mu-bu-mu-turk", "o-mu-bu-mu-lezzet", "mutfak-tanima", "tabak-esle",
    "wiki-bayraklar", "en-iyi-yemekler", "o-mu-bu-mu-yemek",
    "o-mu-bu-mu", "hangi-hayvan-sensin", "hangi-istanbul-semtisin",
    "turkiye-genel-kultur", "mantik-ve-dikkat"
  ];
  function allTests() {
    if (!ALL_TESTS) {
      const flat = [...TESTS, ...buildWikiTests(), ...buildFoodTests()];
      ALL_TESTS = flat
        .map((t, i) => ({ t, i }))
        .sort((a, b) => {
          const ia = TEST_ORDER.indexOf(a.t.id); const ib = TEST_ORDER.indexOf(b.t.id);
          const pa = ia === -1 ? 900 + a.i : ia;
          const pb = ib === -1 ? 900 + b.i : ib;
          return pa - pb;
        })
        .map((x) => x.t);
    }
    return ALL_TESTS;
  }

  const byId = (id) => allTests().find((t) => t.id === id) || null;

  function dayKey(ts) {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function dayIndex() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }

  function calcStreak(attempts) {
    const days = [...new Set(attempts.map((a) => dayKey(a.at)))].sort().reverse();
    if (!days.length) return 0;
    const today = dayKey(Date.now());
    const yesterday = dayKey(Date.now() - 86400000);
    if (days[0] !== today && days[0] !== yesterday) return 0;
    let streak = 1;
    let cursor = new Date(days[0] + "T12:00:00");
    for (let i = 1; i < days.length; i++) {
      cursor = new Date(cursor.getTime() - 86400000);
      if (dayKey(cursor.getTime()) === days[i]) streak++;
      else break;
    }
    return streak;
  }

  function stats() {
    const solved = new Set(store.attempts.map((a) => a.testId)).size;
    const correct = store.attempts.reduce((sum, a) => sum + (a.score || 0), 0);
    return { solved, correct, streak: calcStreak(store.attempts) };
  }

  function testStats(test) {
    const at = store.attempts.filter((a) => a.testId === test.id);
    let best = null;
    at.forEach((a) => {
      if (typeof a.pct === "number" && (best === null || a.pct > best)) best = a.pct;
    });
    const count = at.length;
    const last = count ? Math.max(...at.map((a) => a.at)) : null;
    return { count, best, last };
  }

  function relDate(ts) {
    if (!ts) return "";
    const today = dayKey(Date.now());
    const yest = dayKey(Date.now() - 86400000);
    const d = dayKey(ts);
    if (d === today) return "bugün";
    if (d === yest) return "dün";
    return `${Math.max(1, Math.floor((Date.now() - ts) / 86400000))} gün önce`;
  }

  /* ---------------------------------------------------------- paylaşılan tahta
     Sonuçlar anonim bir textdb.dev hücresinde saklanır: isim + test + sonuç.
     Çevrimdışıyken sessizce boş listeye düşer; okuma başarısızsa yazmıyoruz
     (tahtayı kazayla silmemek için). Son okuma localStorage'da yedeklenir. */
  const BOARD_URL = "https://textdb.dev/api/data/thboard2x9k41";

  async function boardList() {
    const ctrl = new AbortController();
    const kill = setTimeout(() => ctrl.abort(), 6000);
    try {
      const res = await fetch(`${BOARD_URL}?t=${Date.now()}`, { cache: "no-store", signal: ctrl.signal });
      const arr = JSON.parse(await res.text());
      const list = Array.isArray(arr) ? arr : null;
      if (list) {
        try { localStorage.setItem("testhane.board", JSON.stringify(list)); } catch (e) { /* dolu olabilir */ }
        return { list, ok: true };
      }
    } catch (e) { /* ağ hatası: yedeğe düş */ }
    finally {
      clearTimeout(kill);
    }
    let cached = null;
    try { cached = JSON.parse(localStorage.getItem("testhane.board") || "null"); } catch (e2) { /* bozuk yedek */ }
    return { list: Array.isArray(cached) ? cached : null, ok: false };
  }

  async function boardFetch() {
    const { list } = await boardList();
    return list || [];
  }

  async function boardPush(entry) {
    const { list } = await boardList();
    if (!list) return; /* okuma başarısız — yazma iptal */
    list.unshift(entry);
    try {
      await fetch(BOARD_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(list.slice(0, 80))
      });
      try { localStorage.setItem("testhane.board", JSON.stringify(list.slice(0, 80))); } catch (e) { /* sessiz */ }
    } catch (e) { /* sessizce geç; sonuç yerel zaten kayıtlı */ }
  }

  /* ---------------------------------------------------------- sonuç hesaplama */
  function computeOutcome(test, questions, answers) {
    if (test.mode === "trivia") {
      let correct = 0;
      questions.forEach((q, i) => {
        const opt = q.a[answers[i]];
        if (opt && opt.c) correct++;
      });
      const pct = Math.round((correct / questions.length) * 100);
      const sorted = [...test.results].sort((a, b) => b.min - a.min);
      const result = sorted.find((r) => pct >= r.min) || test.results[0];
      return { result, score: correct, total: questions.length, pct };
    }

    const weights = {};
    questions.forEach((q, i) => {
      const opt = q.a[answers[i]];
      if (!opt || !opt.w) return;
      for (const [key, val] of Object.entries(opt.w)) {
        weights[key] = (weights[key] || 0) + val;
      }
    });
    let best = test.results[0];
    let bestVal = -1;
    test.results.forEach((r) => {
      const val = weights[r.id] || 0;
      if (val > bestVal) { bestVal = val; best = r; }
    });
    return { result: best, score: null, total: questions.length, pct: null, weights };
  }

  function attemptFor(test, resultId) {
    if (state.last && state.last.testId === test.id && state.last.result.id === resultId) {
      return state.last;
    }
    return [...store.attempts].reverse().find((a) => a.testId === test.id && a.resultId === resultId) || null;
  }

  /* ---------------------------------------------------------- durum */
  const state = {
    quiz: null,          // { test, idx, answers, locked }
    filter: "tümü",
    query: "",
    last: null,          // son tamamlanan testin sonucu
    celebrated: false
  };

  /* ---------------------------------------------------------- ana sayfa */
  function renderHome() {
    document.title = "TESTHANE — kendini ölç";
    const tests = allTests();
    const daily = tests[dayIndex() % tests.length];
    const s = stats();
    const wikiCount = tests.filter((t) => t.dynamic).length;
    const flagCount = WIKI.countries.filter((c) => c.flag).length;
    const totalQ = tests.reduce((n, t) => n + (t.hero ? 0 : t.questions.length), 0);
    const totalLabel = totalQ.toLocaleString("tr-TR");
    const collage = ["ne-kadar-icene-donuksun", "hangi-istanbul-semtisin"]
      .map((id) => tests.find((t) => t.id === id))
      .filter(Boolean);

    view.innerHTML = `
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="kicker"><span class="kicker-dot"></span>${tests.length} test · ${totalLabel} soru · türkçe</p>
            <h1 class="hero-title"><span class="hero-k1">Kendini</span><span class="hero-k2">ölç.</span></h1>
            <p class="hero-sub">Kişilik testleri, bilgi yarışmaları ve mantık soruları.
              Cevap ver, sonucunu gör, arkadaşlarınla paylaş.</p>
            <div class="hero-actions">
              <button class="btn btn-primary" id="randomBtn">Rastgele test <span class="btn-arrow">→</span></button>
              <a class="btn btn-ghost daily" href="#/test/${daily.id}">
                <span class="daily-tag">günün testi</span>${esc(daily.title)}
              </a>
              <label class="hero-name" for="heroName">takma ad <input id="heroName" maxlength="24" placeholder="misafir" value="${esc(store.name)}" autocomplete="off"></label>
            </div>
            <p class="hero-source">
              ${flagCount} ülke bayrağı, ${WIKI.people.length} portre, ${WIKI.places.length} tarihî yer,
              ${(WIKI.animals || []).length} hayvan, ${(FOOD.dishes || []).length} yemek fotoğrafı —
              <a href="https://tr.wikipedia.org" target="_blank" rel="noopener">Vikipedi</a> ve
              <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikimedia Commons</a>'tan.
            </p>
          </div>

          <div class="hero-collage" aria-hidden="true">
            ${collage.map((t, i) => `
              <div class="hv-card hv-${i === 0 ? "a" : "b"}" style="background:${t.cover}">
                <span class="hv-tag">${esc(t.category)}</span>
                <span class="hv-name">${esc(t.title)}</span>
              </div>`).join("")}
            <div class="hv-result">
              <span>sonuç</span>
              <b>${esc((daily.results && daily.results[0].title) || "—")}</b>
            </div>
            <span class="hv-mark">01 / ${String(tests.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div class="stats">
          <div class="stat"><b>${s.solved}</b><span>çözülen test</span></div>
          <div class="stat"><b>${s.correct}</b><span>doğru cevap</span></div>
          <div class="stat"><b>${s.streak}</b><span>günlük seri</span></div>
          <div class="stat"><b>${wikiCount}</b><span>Vikipedi testi</span></div>
        </div>
        <p class="hero-personal">
          ${store.attempts.length
            ? `<b>${store.name.trim() ? esc(store.name.trim()) + ", " : ""}</b>${store.attempts.length} tur attın, ${s.correct} doğru cevap biriktirdin.`
            : "Henüz kayıt yok. İlk testini çöz."}
        </p>
        <div class="home-feed" id="homeFeed"><p class="feed-title">son çözenler</p><ul class="tahta"><li class="tahta-empty">yükleniyor…</li></ul></div>
      </section>

      <section class="catalog">
        <div class="catalog-head">
          <div>
            <h2>Test <em>kütüphanesi</em></h2>
            <p class="catalog-sub">${tests.length} test, ${totalLabel} soru. Aradığını bul, başla.</p>
          </div>
          <label class="search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path></svg>
            <input id="search" type="search" placeholder="Test ara…" autocomplete="off" value="${esc(state.query)}">
          </label>
        </div>
        <div class="chips" id="chips"></div>
        <div class="grid" id="grid"></div>
        <p class="empty" id="empty" hidden>Bu aramaya uyan bir test yok. Başka bir kelime dene.</p>
      </section>

      <footer class="site-foot">
        <span>TESTHANE — kendini ölç</span>
        <span>${tests.length} test · ${totalLabel} soru · vikipedi + wikidata</span>
      </footer>
    `;

    $("#randomBtn").addEventListener("click", () => {
      const t = allTests()[Math.floor(Math.random() * allTests().length)];
      location.hash = `#/test/${t.id}`;
    });
    $("#heroName").addEventListener("input", (e) => {
      store.name = e.target.value.slice(0, 24);
      saveStore();
      if (store.name && state.pendingEntry) {
        state.pendingEntry.n = store.name;
        boardPush(state.pendingEntry);
        state.pendingEntry = null;
      }
    });
    boardFetch().then((list) => {
      const el = $("#homeFeed ul");
      if (!el) return;
      const rows = list.filter((e) => e && e.n && e.r).slice(0, 6);
      const av = (n) => `<span class="av sm">${esc((n || "?").trim().charAt(0).toLocaleUpperCase("tr"))}</span>`;
      el.innerHTML = rows.length
        ? rows.map((e) => `
            <li>
              <a class="who" href="#/profil/${esc(encodeURIComponent(e.n))}">${av(e.n)}<b>${esc((e.n || "").slice(0, 24))}</b></a>
              <span>${esc(`${e.ti || ""} — ${e.r || ""}`)}</span>
              <i>${relDate(e.at)}</i>
            </li>`).join("")
        : `<li class="tahta-empty">Henüz kimse yazmamış — ilk isim sen ol!</li>`;
    });
    $("#search").addEventListener("input", (e) => {
      state.query = e.target.value;
      paintGrid();
    });

    paintChips();
    paintGrid();
    window.scrollTo(0, 0);
  }

  function paintChips() {
    const chips = ["tümü", "vikipedi", ...new Set(allTests().map((t) => t.category))];
    const wrap = $("#chips");
    if (!wrap) return;
    wrap.innerHTML = chips.map((c) => `
      <button class="chip ${state.filter === c ? "on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>
    `).join("");
    $$(".chip", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.filter = btn.dataset.cat;
        paintChips();
        paintGrid();
      });
    });
  }

  function paintGrid() {
    const grid = $("#grid");
    if (!grid) return;
    const q = state.query.trim().toLocaleLowerCase("tr");
    const list = allTests().filter((t) => {
      const okCat = state.filter === "tümü"
        || (state.filter === "vikipedi" ? !!t.dynamic : t.category === state.filter);
      const haystack = t.title + " " + t.desc + " " + t.category + (t.dynamic ? " vikipedi wikimedia" : "");
      const okQ = !q || haystack.toLocaleLowerCase("tr").includes(q);
      return okCat && okQ;
    });

    grid.innerHTML = list.map(cardHTML).join("");
    const empty = $("#empty");
    if (empty) empty.hidden = list.length > 0;
  }

  function cardHTML(t) {
    const done = store.attempts.some((a) => a.testId === t.id);
    const st = testStats(t);
    const count = defaultCount(t);
    return `
      <a class="card ${t.hero ? "is-hero" : ""}" href="#/test/${t.id}">
        <div class="card-cover ${t.photoCover ? "has-photo" : ""}" style="background:${t.cover}">
          <span class="card-icon">${icon(testIcon(t))}</span>
          <span class="card-cat">${esc(t.category)}</span>
          ${t.dynamic ? `<span class="card-src">wikimedia</span>` : ""}
          ${done ? `<span class="card-done">${icon("check")}${st.count > 1 ? st.count + "× çözüldü" : "çözüldü"}</span>` : ""}
        </div>
        <div class="card-body">
          <h3>${esc(t.title)}</h3>
          <p>${esc(t.desc)}</p>
          <div class="card-meta">
            <span>${count} soru</span><i>·</i><span>${t.minutes} dk</span>
            ${st.best !== null ? `<i>·</i><span>en iyi %${st.best}</span>` : ""}
            <span class="card-go">başla <b>→</b></span>
          </div>
        </div>
      </a>
    `;
  }

  /* ---------------------------------------------------------- test tanıtım */
  function defaultCount(test) {
    const total = test.questions.length;
    return Math.min(test.sample || total, total);
  }

  function countChoices(test) {
    const total = test.questions.length;
    return [...new Set([5, 10, 20].filter((n) => n < total).concat(total))].sort((a, b) => a - b);
  }

  function renderIntro(test) {
    if (!test) return renderHome();
    document.title = `${test.title} — TESTHANE`;
    const tests = allTests();
    const other = tests.filter((t) => t.id !== test.id && t.category === test.category).slice(0, 3);
    const fill = other.length < 3
      ? tests.filter((t) => t.id !== test.id && !other.includes(t)).slice(0, 3 - other.length)
      : [];
    const total = test.questions.length;
    const chosen = defaultCount(test);
    const counts = countChoices(test);
    const maxOpts = Math.min(9, Math.max(...test.questions.map((q) => q.a.length)));
    const st = testStats(test);

    view.innerHTML = `
      <section class="intro">
        <a class="link-back" href="#/">← tüm testler</a>
        <div class="intro-card">
          <div class="intro-cover ${test.photoCover ? "has-photo" : ""}" style="background:${test.cover}">
            <span class="intro-icon">${icon(testIcon(test))}</span>
            <span class="intro-cat">${esc(test.category)}</span>
            ${test.dynamic ? `<span class="intro-wiki">wikimedia</span>` : ""}
          </div>
          <div class="intro-body">
            <p class="kicker" id="introKicker">${chosen} soru · ${test.minutes} dakika</p>
            <h1>${esc(test.title)}</h1>
            <p class="intro-desc">${esc(test.desc)}</p>
            <p class="intro-stats" aria-live="polite">
              ${st.count
                ? `<b>${st.count}</b> tur çözdün${st.best !== null ? ` · en iyi <b>%${st.best}</b>` : ""} · son: ${relDate(st.last)}`
                : `bu testi daha önce çözmüş değilsin — ilk turun kabarıyor 🎬`}
            </p>

            <div class="pick" id="pick">
              <span class="pick-label">kaç soru?</span>
              <div class="pick-opts" role="group" aria-label="Soru sayısı seç">
                ${counts.map((n) => `
                  <button class="pick-btn ${n === chosen ? "on" : ""}" data-n="${n}" type="button">
                    ${n === total ? `tümü <em>${total}</em>` : n}
                  </button>`).join("")}
              </div>
              ${test.mode === "personality" && total > 5 ? `<p class="pick-note">Kısa turda sonuç yaklaşık çıkar; tam sonuç için tümünü seç.</p>` : ""}
            </div>

            <div class="intro-meta">
              <span><b id="metaCount">${chosen}</b> soru</span>
              <span><b>${test.dynamic ? test.questions.length : test.results.length}</b> ${test.dynamic ? "soruluk havuz" : "olası sonuç"}</span>
              <span><b>${test.minutes}</b> dakika</span>
            </div>
            <button class="btn btn-primary btn-wide" id="startBtn">
              Teste başla · <span id="startCount">${chosen}</span> soru <span class="btn-arrow">→</span>
            </button>
            ${test.dynamic || test.photoCover ? `<p class="intro-src">Görseller: Wikimedia Commons · Bilgiler: Vikipedi (CC BY-SA)</p>` : ""}
            <p class="hint">Klavyeden 1–${maxOpts} tuşlarıyla da cevaplayabilirsin; bilgi testlerinde Enter ile sonraki soruya geçersin, ← ile geri dönersin.</p>
          </div>
        </div>

        ${[...other, ...fill].length ? `
          <div class="more">
            <h2>Bunlar da var</h2>
            <div class="more-row">
              ${[...other, ...fill].map((t) => `
                <a class="mini" href="#/test/${t.id}">
                  <span class="mini-icon" style="background:${t.cover}">${icon(testIcon(t))}</span>
                  <span>
                    <b>${esc(t.title)}</b>
                    <em>${t.questions.length} soru · ${esc(t.category)}</em>
                  </span>
                </a>`).join("")}
            </div>
          </div>` : ""}
      </section>
    `;

    const pick = $("#pick");
    const kicker = $("#introKicker");
    const metaCount = $("#metaCount");
    const startCount = $("#startCount");
    $$(".pick-btn", pick).forEach((btn) => {
      btn.addEventListener("click", () => {
        const n = Number(btn.dataset.n);
        $$(".pick-btn", pick).forEach((b) => b.classList.toggle("on", b === btn));
        kicker.textContent = `${n} soru · ${test.minutes} dakika`;
        metaCount.textContent = n;
        startCount.textContent = n;
      });
    });

    $("#startBtn").addEventListener("click", () => {
      const n = Number($(".pick-btn.on", pick)?.dataset.n || chosen);
      location.hash = `#/oyna/${test.id}/${n}`;
    });
    window.scrollTo(0, 0);
  }

  /* ---------------------------------------------------------- soru akışı */
  function startQuiz(test, count = 0) {
    if (!test) return renderHome();
    const total = test.questions.length;
    const wanted = count > 0 ? Math.min(count, total) : defaultCount(test);
    const questions = wanted < total || test.dynamic
      ? shuffle(test.questions).slice(0, wanted)
      : [...test.questions];
    state.quiz = { test, questions, idx: 0, answers: [], locked: false, count: wanted };
    renderQuestion();
  }

  function quizBack() {
    const quiz = state.quiz;
    if (!quiz || quiz.locked || quiz.idx === 0) return;
    quiz.idx--;
    quiz.answers.length = quiz.idx;
    renderQuestion();
  }

  function renderQuestion() {
    const quiz = state.quiz;
    if (!quiz) return renderHome();
    const { test, idx, questions } = quiz;
    const q = questions[idx];
    const n = questions.length;
    const pct = Math.round((idx / n) * 100);
    document.title = `${idx + 1}/${n} · ${test.title} — TESTHANE`;

    const upcoming = questions[idx + 1];
    if (upcoming?.image) {
      const pre = new Image();
      pre.src = upcoming.image;
    }

    view.innerHTML = `
      <section class="quiz${q.big ? " split" : ""}">
        <div class="quiz-top">
          <a class="quiz-back" href="#/test/${test.id}" aria-label="Testten çık">✕</a>
          ${idx > 0 ? `<button class="quiz-prev link" id="prevBtn" type="button" aria-label="Önceki soruya dön">← geri</button>` : ""}
          <div class="bar" role="progressbar" aria-valuenow="${idx}" aria-valuemin="0" aria-valuemax="${n}">
            <i style="width:${pct}%"></i>
          </div>
          <span class="quiz-count">${idx + 1}<em>/${n}</em></span>
        </div>

        <div class="qcard">
          <p class="q-kicker">SORU ${String(idx + 1).padStart(2, "0")}${test.dynamic ? '<em>· wikimedia</em>' : ""}</p>
          <h2 class="q-text">${esc(q.q)}</h2>

          ${q.image ? `
            <figure class="q-media ${q.imageFit === "contain" ? "contain" : "photo"}${q.mediaDark ? " dark" : ""}">
              <img src="${esc(q.image)}" alt="Sorudaki görsel" loading="eager" referrerpolicy="no-referrer">
            </figure>` : ""}
          <div class="opts${q.big ? " big" : ""}" role="group" aria-label="Seçenekler">
            ${q.a.map((o, i) => q.big && o.i ? `
              <button class="opt bigvis" data-i="${i}" style="--d:${i * 60}ms">
                <span class="opt-hero" style="background-image:url(&quot;${esc(String(o.i).replace(/&/g, "&amp;").replace(/"/g, "%22"))}&quot;)" role="img" aria-label="${esc(o.t || "")}"></span>
                <span class="opt-key">${i + 1}</span>
                <span class="opt-text">${esc(o.t)}</span>
              </button>` : `
              <button class="opt ${o.i ? "vis" : ""}" data-i="${i}" style="--d:${i * 45}ms">
                <span class="opt-key">${i + 1}</span>
                ${o.i ? `<span class="opt-thumb" style="background-image:url(&quot;${esc(String(o.i).replace(/&/g, "&amp;").replace(/"/g, "%22"))}&quot;)" role="img" aria-label="${esc(o.t || "")}"></span>` : ""}
                <span class="opt-text${o.hideText ? " sr-only" : ""}">${esc(o.t)}</span>
              </button>`).join("")}
          </div>
        </div>

        <div class="quiz-foot">
          <span>${esc(test.title)}</span>
          <button class="link" id="quitBtn">testten çık</button>
        </div>
      </section>
    `;

    $$(".opt", view).forEach((btn) => {
      btn.addEventListener("click", () => choose(Number(btn.dataset.i)));
    });
    $("#prevBtn")?.addEventListener("click", quizBack);
    $("#quitBtn").addEventListener("click", () => {
      if (confirm("Testten çıkmak istediğine emin misin? Cevaplar kaydedilmez.")) {
        state.quiz = null;
        location.hash = `#/test/${test.id}`;
      }
    });

    requestAnimationFrame(() => $(".qcard")?.classList.add("in"));
    window.scrollTo(0, 0);
  }

  function choose(index) {
    const quiz = state.quiz;
    if (!quiz || quiz.locked) return;
    const test = quiz.test;
    const q = quiz.questions[quiz.idx];
    const btn = $(`.opt[data-i="${index}"]`, view);
    if (!btn) return;

    quiz.locked = true;

    const isTrivia = test.mode === "trivia";
    let delay = reduceMotion ? 40 : 260;

    if (isTrivia) {
      const correctIndex = q.a.findIndex((o) => o.c);
      const correct = q.a[correctIndex];
      const isRight = index === correctIndex;

      $$(".opt", view).forEach((b, i) => {
        if (i === correctIndex) b.classList.add("correct");
        else if (i === index) b.classList.add("wrong");
        else b.classList.add("dim");
      });

      const fb = document.createElement("div");
      fb.className = "feedback " + (isRight ? "ok" : "no");
      fb.setAttribute("role", "status");
      fb.setAttribute("aria-live", "polite");
      fb.innerHTML = `
        <b>${icon(isRight ? "check" : "x", "fb-ic")}${isRight ? "Doğru" : "Doğru cevap: " + esc(correct.t)}</b>
        ${q.fact ? `<span>${esc(q.fact)}</span>` : ""}
        ${q.wiki ? `<a href="${esc(q.wiki)}" target="_blank" rel="noopener">Vikipedi ↗</a>` : ""}
      `;
      $(".qcard").appendChild(fb);
      delay = reduceMotion ? 80 : 2100;

      const next = document.createElement("button");
      next.type = "button";
      next.className = "feedback-next link";
      next.textContent = "sonraki →";
      next.addEventListener("click", () => {
        if (state.quiz === quiz && quiz.advance) quiz.advance();
      });
      fb.appendChild(next);
    } else {
      btn.classList.add("sel");
      $$(".opt", view).forEach((b) => { if (b !== btn) b.classList.add("dim"); });
    }

    quiz.advance = () => {
      clearTimeout(quiz.timer);
      if (state.quiz !== quiz) return;
      quiz.advance = null;
      quiz.answers[quiz.idx] = index;
      quiz.idx++;
      quiz.locked = false;
      if (quiz.idx >= quiz.questions.length) finishQuiz();
      else renderQuestion();
    };
    quiz.timer = setTimeout(() => {
      if (state.quiz !== quiz) return;
      if (quiz.advance) quiz.advance();
    }, delay);
  }

  /* tahtaya "kimin neyi seçtiği" detayını hazırlar (soru başına seçim) */
  function buildBoardDetail(test, questions, answers) {
    return questions.slice(0, 12).map((q, i) => {
      const opt = q.a[answers[i]];
      if (!opt) return null;
      const base = { q: String(q.q || "").slice(0, 42), u: String(opt.t || "").slice(0, 60) };
      if (test.mode === "trivia") {
        const correct = q.a.find((o) => o.c);
        base.ok = opt.c ? 1 : 0;
        base.k = String(correct ? correct.t : "").slice(0, 60);
      }
      return base;
    }).filter(Boolean);
  }

  function finishQuiz() {
    const { test, questions, answers } = state.quiz;
    const outcome = computeOutcome(test, questions, answers);
    store.attempts.push({
      testId: test.id,
      resultId: outcome.result.id,
      score: outcome.score,
      total: outcome.total,
      pct: outcome.pct,
      at: Date.now()
    });
    if (store.attempts.length > 400) store.attempts = store.attempts.slice(-400);
    saveStore();
    state.last = { testId: test.id, ...outcome };
    state.celebrated = false;
    state.quiz = null;
    location.hash = `#/sonuc/${test.id}/${outcome.result.id}`;
    /* paylaşılan tahtaya yaz: isim yoksa sonuç ekranında isim girilince yazılır */
    const entry = {
      n: store.name || "",
      t: test.id,
      ti: test.title,
      r: outcome.result.title,
      s: outcome.pct,
      sc: typeof outcome.score === "number" ? [outcome.score, outcome.total] : null,
      d: buildBoardDetail(test, questions, answers),
      at: Date.now()
    };
    if (store.name) {
      state.pendingEntry = null;
      boardPush(entry);
    } else {
      state.pendingEntry = entry;
    }
  }

  /* ---------------------------------------------------------- sonuç */
  function renderResult(test, resultId) {
    if (!test) return renderHome();
    const result = test.results.find((r) => r.id === resultId) || test.results[0];
    const attempt = attemptFor(test, result.id);
    document.title = `${result.title} — ${test.title}`;
    const badgeIcon = test.mode === "trivia" && attempt && attempt.pct >= 70 ? "trophy" : testIcon(test);

    const scoreHtml = test.mode === "trivia" && attempt && typeof attempt.score === "number" ? `
      <div class="score">
        <div class="ring" style="--p:${attempt.pct}">
          <div class="ring-in">
            <b>${attempt.score}</b>
            <span>/${attempt.total}</span>
          </div>
        </div>
        <p class="score-label">%${attempt.pct} doğru</p>
      </div>` : "";

    view.innerHTML = `
      <section class="result" style="--accent:${test.accent}">
        <p class="kicker">${esc(test.title)} · sonuç</p>
        <div class="result-card">
          <div class="result-glow" style="background:${test.accent}"></div>
          <div class="result-inner">
            <span class="result-badge">${icon(badgeIcon)}</span>
            <h1>${esc(result.title)}</h1>
            ${scoreHtml}
            <p class="result-desc">${esc(result.desc)}</p>
            <div class="tags">
              ${result.tags.map((t) => `<span>${esc(t)}</span>`).join("")}
            </div>

            <label class="name-row" for="nameInput">
              <span>Kartına adını yaz</span>
              <input id="nameInput" maxlength="24" placeholder="Adın" value="${esc(store.name)}" autocomplete="off">
            </label>

            <div class="result-actions">
              <button class="btn btn-primary" id="dlBtn">Kartı indir <span>PNG</span></button>
              <button class="btn btn-ghost" id="shareBtn">Paylaş</button>
            </div>
          </div>
        </div>

        <div class="result-links">
          <a class="btn btn-ghost" href="#/oyna/${test.id}/${attempt?.total || defaultCount(test)}">${icon("shuffle")} Tekrar çöz</a>
          <a class="btn btn-ghost" href="#/istatistik/${test.id}">${icon("chart")} Kim ne yapmış →</a>
          <a class="btn btn-ghost" href="#/">${icon("map")} Diğer testler</a>
        </div>
        ${test.dynamic || test.photoCover ? `
          <p class="wiki-credit">Görseller ve bilgiler:
            <a href="https://tr.wikipedia.org" target="_blank" rel="noopener">Vikipedi</a> /
            <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikimedia Commons</a>
            · CC BY-SA
          </p>` : ""}
      </section>
    `;

    $("#nameInput").addEventListener("input", (e) => {
      store.name = e.target.value.slice(0, 24);
      saveStore();
      /* isim ilk kez yazıldıysa bekleyen sonucu tahtaya gönder */
      if (store.name && state.pendingEntry) {
        state.pendingEntry.n = store.name;
        boardPush(state.pendingEntry);
        state.pendingEntry = null;
      }
    });
    $("#dlBtn").addEventListener("click", () => downloadCard(test, result, attempt, $("#dlBtn")));
    $("#shareBtn").addEventListener("click", () => shareResult(test, result, attempt, $("#shareBtn")));

    if (!state.celebrated && state.last && state.last.testId === test.id) {
      state.celebrated = true;
      const good = test.mode === "trivia" ? (attempt?.pct ?? 0) >= 60 : true;
      if (good && !reduceMotion) confetti();
    }
    window.scrollTo(0, 0);
  }

  /* ---------------------------------------------------------- istatistik arena
     Sonuç ekranı sade kaldı; tüm istatistik burada: zirve tablosu,
     son çözenler feed'i, test seçiliyken dağılım barları + soru kırılımı. */
  function aggBar(label, n, total) {
    const pct = Math.round((n / total) * 100);
    return `
      <div class="agg-opt">
        <span class="agg-label">${esc(label || "—")}</span>
        <i class="agg-bar"><u style="width:${pct}%"></u></i>
        <em>${pct}%</em>
      </div>`;
  }

  function renderStatsPage(testId) {
    const test = testId ? byId(testId) : null;
    document.title = test ? `${test.title} — istatistik — TESTHANE` : "İstatistik Arena — TESTHANE";
    view.innerHTML = `
      <section class="intro">
        <a class="link-back" href="#/">← ${test ? esc(test.title) : "tüm testler"}</a>
        <div class="intro-card arena-card">
          <p class="kicker">${test ? "test arenası · tahtadan canlı veri" : "istatistik arena · tahtadan canlı veri"}</p>
          <h1>${test ? "Kim ne yapmış?" : "Arena Şov"}</h1>
          <div class="arena-zone" id="arenaZone"><p class="agg-empty">yükleniyor…</p></div>
        </div>
      </section>
    `;
    window.scrollTo(0, 0);
    boardFetch().then((list) => {
      const zone = $("#arenaZone");
      if (!zone) return;
      const clean = list.filter((e) => e && e.n && e.r);
      if (!clean.length) {
        zone.innerHTML = `<p class="agg-empty">Henüz kimse oynamadı — ilk turu sen çöz, arena hemen canlansın 🎯</p>`;
        return;
      }
      /* zirve: isim bazında tur sayısı + ort. doğruluk */
      const byName = new Map();
      clean.forEach((e) => {
        const k = (e.n || "").toLocaleLowerCase("tr");
        const rec = byName.get(k) || { name: e.n, tur: 0, tests: new Set(), pcts: [] };
        rec.tur++;
        if (e.t) rec.tests.add(e.t);
        if (typeof e.s === "number") rec.pcts.push(e.s);
        byName.set(k, rec);
      });
      const podium = [...byName.values()]
        .map((r) => ({ ...r, avg: r.pcts.length ? Math.round(r.pcts.reduce((a, b) => a + b, 0) / r.pcts.length) : null }))
        .sort((a, b) => b.tur - a.tur || (b.avg || 0) - (a.avg || 0))
        .slice(0, 6);
      const medals = ["🥇", "🥈", "🥉"];
      const av = (n, cls) => `<span class="av ${cls || ""}">${esc((n || "?").trim().charAt(0).toLocaleUpperCase("tr"))}</span>`;
      const podBox = (r, i) => `
        <a class="pod p${i + 1}" href="#/profil/${esc(encodeURIComponent(r.name))}">
          ${av(r.name)}
          <span class="medal">${medals[i]}</span>
          <b>${esc(r.name)}</b>
          <i>${r.tur} tur${r.avg !== null ? ` · %${r.avg}` : ""} · ${r.tests.size} test</i>
        </a>`;
      const top = podium.slice(0, 3);
      const rest = podium.slice(3);
      /* son çözenler: test seçiliyken o testten, değilse her şeyden */
      const feed = clean.filter((e) => !test || e.t === test.id).slice(0, 8);
      let html = `
        <p class="zone-title">zirve</p>
        ${top.length ? `<div class="podium-top">${[1, 0, 2].map((i) => (top[i] ? podBox(top[i], i) : "")).join("")}</div>` : ""}
        ${rest.length ? `<ol class="podium-rest">${rest.map((r) => `
          <li><a href="#/profil/${esc(encodeURIComponent(r.name))}">
            ${av(r.name, "sm")}
            <b>${esc(r.name)}</b>
            <i>${r.tur} tur${r.avg !== null ? ` · %${r.avg}` : ""} · ${r.tests.size} test</i>
          </a></li>`).join("")}</ol>` : ""}
        <p class="zone-title">son çözenler</p>
        <ul class="tahta">${feed.length
          ? feed.map((e) => {
              const score = Array.isArray(e.sc) ? `${e.sc[0]}/${e.sc[1]}` : (typeof e.s === "number" ? `%${e.s}` : "");
              return `
              <li>
                <a class="who" href="#/profil/${esc(encodeURIComponent(e.n))}">${av(e.n, "sm")}<b>${esc((e.n || "").slice(0, 24))}</b></a>
                <span>${esc(test ? e.r : `${e.ti || ""} — ${e.r}`)}</span>
                <i>${score}${score ? " · " : ""}${relDate(e.at)}</i>
              </li>`;
            }).join("")
          : `<li class="tahta-empty">${test ? "Bu testi henüz kimse yazmamış — ilk isim sen ol!" : "Henüz kimse yazmamış."}</li>`}</ul>`;
      /* test seçiliyken: sonuç dağılımı + soru başına seçim kırılımı */
      if (test) {
        const mine = clean.filter((e) => e.t === test.id);
        const contested = mine.filter((e) => e.r);
        const resRows = [...contested.reduce((m, e) => m.set(e.r, (m.get(e.r) || 0) + 1), new Map()).entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5);
        const byQ = new Map();
        mine.forEach((e) => (e.d || []).forEach((x) => {
          if (!x || !x.q) return;
          const rec = byQ.get(x.q) || { q: x.q, total: 0, opts: new Map() };
          rec.total++;
          rec.opts.set(x.u, (rec.opts.get(x.u) || 0) + 1);
          byQ.set(x.q, rec);
        }));
        const qRows = [...byQ.values()]
          .filter((r) => r.total >= 2)
          .sort((a, b) => b.total - a.total)
          .slice(0, 6)
          .map((r) => {
            const top = [...r.opts.entries()].sort((a, b) => b[1] - a[1])[0];
            return `
            <details class="agg-q">
              <summary>${esc(r.q)} <em>en çok: ${esc((top && top[0]) || "—")}</em></summary>
              ${[...r.opts.entries()].sort((a, b) => b[1] - a[1]).map(([o, n]) => aggBar(o, n, r.total)).join("")}
            </details>`;
          });
        if (mine.length) {
          html += `
            <p class="zone-title">herkes böyle seçti</p>
            ${contested.length ? resRows.map(([r, n]) => aggBar(r, n, contested.length)).join("") : `<p class="agg-empty">Sonuç dağılımı için bekleniyor…</p>`}
            ${qRows.length ? qRows.join("") : `<p class="agg-empty">Soru kırılımı 2 kişiden sonra açılır.</p>`}`;
        } else {
          html += `<p class="zone-title">herkes böyle seçti</p><p class="agg-empty">Bu test için henüz veri yok — beklemeden bir tur at 💫</p>`;
        }
      }
      zone.innerHTML = html;
    });
  }

  /* ---------------------------------------------------------- kişi profili
     Tahtadan o isme ait tüm kayıtlar: kaç tur, kaç test, ortalama doğruluk. */
  function renderProfile(name) {
    document.title = `${name} — TESTHANE`;
    const av = (cls) => `<span class="av ${cls}">${esc((name || "").trim().charAt(0).toLocaleUpperCase("tr"))}</span>`;
    view.innerHTML = `
      <section class="intro">
        <a class="link-back" href="#/">← tüm testler</a>
        <div class="intro-card profile-card">
          <div class="profile-hero">
            ${av("lg")}
            <div>
              <p class="kicker">kişi profili · tahtadan canlı veri</p>
              <h1>${esc(name)}</h1>
            </div>
          </div>
          <div class="stat-tiles" id="profileStats"></div>
          <ul class="tahta attempts" id="profileRows"><li class="tahta-empty">yükleniyor…</li></ul>
        </div>
      </section>
    `;
    window.scrollTo(0, 0);
    boardFetch().then((list) => {
      const statsEl = $("#profileStats");
      const rowsEl = $("#profileRows");
      if (!rowsEl) return;
      const rows = list.filter((e) => e && ((e.n || "").toLocaleLowerCase("tr") === name.toLocaleLowerCase("tr")));
      if (!rows.length) {
        rowsEl.innerHTML = `<li class="tahta-empty">Bu isimde kayıt yok — belki henüz testini tamamlamadı 🤔</li>`;
        return;
      }
      const trivia = rows.filter((e) => typeof e.s === "number");
      const avg = trivia.length ? Math.round(trivia.reduce((n, e) => n + e.s, 0) / trivia.length) : null;
      const tests = new Set(rows.map((e) => e.t));
      const last = Math.max(...rows.map((e) => e.at || 0));
      if (statsEl) {
        statsEl.innerHTML = `
          <div class="tile"><b>${rows.length}</b><span>çözülen tur</span></div>
          <div class="tile"><b>${tests.size}</b><span>farklı test</span></div>
          ${avg !== null ? `<div class="tile"><b>%${avg}</b><span>ort. doğruluk</span></div>` : ""}
          <div class="tile"><b>${relDate(last)}</b><span>son çıkış</span></div>
        `;
      }
      rowsEl.innerHTML = rows.map((e) => {
        const score = Array.isArray(e.sc) ? `${e.sc[0]}/${e.sc[1]}` : (typeof e.s === "number" ? `%${e.s}` : "—");
        const picks = Array.isArray(e.d) && e.d.length ? `
          <details class="picks">
            <summary>${e.d.length} sorunun seçimleri</summary>
            <ol>${e.d.map((x, i) => `
              <li class="${x.ok === 1 ? "d-ok" : x.ok === 0 ? "d-no" : "d-neu"}">
                <em>${x.ok === 1 ? "✓" : x.ok === 0 ? "✗" : "→"}</em>${esc(x.u)}
                ${x.ok === 0 ? `<u>doğrusu: ${esc(x.k)}</u>` : ""}
              </li>`).join("")}</ol>
          </details>` : "";
        return `
          <li class="attempt">
            <div class="attempt-head">
              <b><a href="#/test/${esc(e.t)}">${esc(e.ti || e.t)}</a></b>
              <span>${esc(e.r || "")}</span>
              <i>${score} · ${relDate(e.at)}</i>
            </div>
            ${picks}
          </li>`;
      }).join("");
    });
  }

  /* ---------------------------------------------------------- paylaşım */
  async function shareResult(test, result, attempt, btn) {
    const url = location.href;
    const scoreLine = test.mode === "trivia" && attempt && typeof attempt.score === "number"
      ? `\nSkorum: ${attempt.score}/${attempt.total} (%${attempt.pct})`
      : "";
    const text = `${test.title}${scoreLine}\nSonucum: ${result.title}\nSen de dene:`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "TESTHANE", text, url });
        return;
      } catch (e) { /* kullanıcı iptal etti */ }
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      const old = btn.textContent;
      btn.textContent = "Link kopyalandı";
      setTimeout(() => { btn.textContent = old; }, 1800);
    } catch (e) {
      window.prompt("Linki kopyala:", url);
    }
  }

  /* ---------------------------------------------------------- PNG kart */
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const word of words) {
      const test = line ? line + " " + word : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function hueOf(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawStar(ctx, cx, cy, outer, inner, points = 5) {
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 ? inner : outer;
      const a = -Math.PI / 2 + (i * Math.PI) / points;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  }

  async function downloadCard(test, result, attempt, btn) {
    const old = btn.textContent;
    btn.textContent = "Hazırlanıyor…";
    try {
      if (document.fonts && document.fonts.ready) await document.fonts.ready;

      const W = 1080, H = 1350;
      const c = document.createElement("canvas");
      c.width = W; c.height = H;
      const ctx = c.getContext("2d");
      const hue = hueOf(result.id + test.id);
      const pad = 86;
      const hasName = Boolean(store.name.trim());
      const hasScore = test.mode === "trivia" && attempt && typeof attempt.score === "number";
      const dark = currentTheme() === "dark";
      const ink = dark ? "#f3eee3" : "#15130f";
      const paper = dark ? "#151b2a" : "#f3eee4";
      const surface = dark ? "#1f293c" : "#fffdf8";
      const line = dark ? "#303b52" : "#dcd4c6";
      const inkRgb = dark ? "243,238,227" : "21,19,15";
      const paperRgb = dark ? "21,27,42" : "243,238,228";
      const accentInk = "#14120e";
      const accent = test.accent || `hsl(${hue}, 85%, 62%)`;
      const accentSoft = /^#[0-9a-f]{6}$/i.test(accent) ? accent + "2b" : "rgba(43,70,255,.17)";

      const titleFont = "italic 600 88px 'Fraunces', Georgia, serif";
      const descFont = "400 30px 'Space Grotesk', sans-serif";

      // ölçüm (satır kırma)
      ctx.font = titleFont;
      const titleLines = wrapText(ctx, result.title, W - pad * 2 - 40).slice(0, 2);
      ctx.font = descFont;
      const descLines = wrapText(ctx, result.desc, W - pad * 2 - 60).slice(0, 9);

      const paint = (offset) => {
        // sade kâğıt zemin
        ctx.fillStyle = paper;
        ctx.fillRect(0, 0, W, H);

        // yumuşak renk ışıkları
        const g1 = ctx.createRadialGradient(W - 30, -20, 0, W - 30, -20, 620);
        g1.addColorStop(0, accentSoft);
        g1.addColorStop(1, `rgba(${paperRgb},0)`);
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, W, H);

        const g2 = ctx.createRadialGradient(30, H - 20, 0, 30, H - 20, 560);
        g2.addColorStop(0, dark ? "rgba(129,147,255,.13)" : "rgba(43,70,255,.07)");
        g2.addColorStop(1, `rgba(${paperRgb},0)`);
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, W, H);

        // kart yüzeyi
        ctx.fillStyle = surface;
        roundRect(ctx, 34, 34, W - 68, H - 68, 34);
        ctx.fill();

        // üst aksan çizgisi
        ctx.save();
        roundRect(ctx, 34, 34, W - 68, H - 68, 34);
        ctx.clip();
        ctx.fillStyle = accent;
        ctx.fillRect(34, 34, W - 68, 9);
        ctx.restore();

        ctx.strokeStyle = line;
        ctx.lineWidth = 2;
        roundRect(ctx, 34, 34, W - 68, H - 68, 34);
        ctx.stroke();

        // üst etiket
        ctx.textAlign = "left";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = ink;
        ctx.font = "700 27px 'IBM Plex Mono', monospace";
        ctx.fillText("TESTHANE", pad, 112);

        ctx.textAlign = "right";
        ctx.fillStyle = `rgba(${inkRgb},.52)`;
        ctx.font = "500 21px 'IBM Plex Mono', monospace";
        ctx.fillText(test.mode === "trivia" ? "BİLGİ TESTİ" : "KİŞİLİK TESTİ", W - pad, 112);

        ctx.strokeStyle = line;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pad, 148);
        ctx.lineTo(W - pad, 148);
        ctx.stroke();

        if (hasName) {
          ctx.textAlign = "left";
          ctx.fillStyle = `rgba(${inkRgb},.6)`;
          ctx.font = "600 22px 'IBM Plex Mono', monospace";
          ctx.fillText(store.name.trim().toLocaleUpperCase("tr"), pad, 190);
        }

        // rozet
        let y = (hasName ? 214 : 184) + offset;
        const badgeSize = 86;
        const bx = (W - badgeSize) / 2;
        ctx.fillStyle = accent;
        roundRect(ctx, bx, y, badgeSize, badgeSize, 24);
        ctx.fill();
        drawStar(ctx, W / 2, y + badgeSize / 2, 28, 8, 4);
        ctx.fillStyle = accentInk;
        ctx.fill();
        y += badgeSize + 50;

        // test adı
        ctx.textAlign = "center";
        ctx.fillStyle = `rgba(${inkRgb},.55)`;
        ctx.font = "600 22px 'IBM Plex Mono', monospace";
        ctx.fillText(test.title.toLocaleUpperCase("tr"), W / 2, y);
        y += 18;

        // sonuç başlığı
        ctx.fillStyle = ink;
        ctx.font = titleFont;
        titleLines.forEach((textLine) => {
          y += 80;
          ctx.fillText(textLine, W / 2, y);
        });

        // skor
        if (hasScore) {
          const scoreText = `${attempt.score} / ${attempt.total} · %${attempt.pct}`;
          ctx.font = "600 28px 'IBM Plex Mono', monospace";
          const pillW = ctx.measureText(scoreText).width + 62;
          y += 24;
          ctx.fillStyle = accent;
          roundRect(ctx, (W - pillW) / 2, y - 34, pillW, 54, 27);
          ctx.fill();
          ctx.fillStyle = accentInk;
          ctx.fillText(scoreText, W / 2, y + 3);
          y += 58;
        }

        // açıklama
        ctx.fillStyle = `rgba(${inkRgb},.78)`;
        ctx.font = descFont;
        y += 30;
        descLines.forEach((textLine) => {
          y += 44;
          ctx.fillText(textLine, W / 2, y);
        });

        // etiketler
        ctx.font = "600 20px 'IBM Plex Mono', monospace";
        const tagWidths = result.tags.map((t) => ctx.measureText(t.toLocaleUpperCase("tr")).width + 42);
        const totalW = tagWidths.reduce((a, b) => a + b, 0) + (result.tags.length - 1) * 12;
        let x = (W - totalW) / 2;
        const tagY = y + 56;
        result.tags.forEach((tag, i) => {
          const tw = tagWidths[i];
          ctx.fillStyle = `rgba(${inkRgb},.035)`;
          roundRect(ctx, x, tagY - 26, tw, 46, 23);
          ctx.fill();
          ctx.strokeStyle = line;
          ctx.lineWidth = 2;
          roundRect(ctx, x, tagY - 26, tw, 46, 23);
          ctx.stroke();
          ctx.fillStyle = `rgba(${inkRgb},.72)`;
          ctx.fillText(tag.toLocaleUpperCase("tr"), x + tw / 2, tagY + 5);
          x += tw + 12;
        });

        // alt bilgi
        ctx.strokeStyle = line;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pad, H - 118);
        ctx.lineTo(W - pad, H - 118);
        ctx.stroke();

        ctx.textAlign = "left";
        ctx.fillStyle = `rgba(${inkRgb},.55)`;
        ctx.font = "500 22px 'IBM Plex Mono', monospace";
        ctx.fillText("kendini ölç", pad, H - 72);
        ctx.textAlign = "right";
        ctx.fillStyle = ink;
        ctx.font = "700 22px 'IBM Plex Mono', monospace";
        ctx.fillText("testhane", W - pad, H - 72);

        return tagY + 24;
      };

      const contentEnd = paint(0);
      const shift = Math.max(0, Math.round((H - 150 - contentEnd) / 2));
      if (shift > 0) paint(shift);

      c.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `testhane-${test.id}-${result.id}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
        btn.textContent = old;
      }, "image/png");
    } catch (e) {
      console.error(e);
      btn.textContent = "Tekrar dene";
      setTimeout(() => { btn.textContent = old; }, 1800);
    }
  }

  /* ---------------------------------------------------------- konfeti */
  function confetti() {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      confettiCanvas.width = innerWidth * dpr;
      confettiCanvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const colors = ["#c9f23c", "#ff5c93", "#5b8cff", "#ff8a4c", "#a98bff", "#161410"];
    const parts = Array.from({ length: 110 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 220,
      y: innerHeight * 0.42,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -11 - 3,
      g: 0.22 + Math.random() * 0.16,
      w: 5 + Math.random() * 7,
      h: 8 + Math.random() * 10,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: colors[(Math.random() * colors.length) | 0],
      life: 1
    }));
    let raf = 0;
    const t0 = performance.now();
    const tick = (now) => {
      const elapsed = now - t0;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach((p) => {
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.vx *= 0.995;
        p.life = Math.max(0, 1 - elapsed / 2800);
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (elapsed < 2800) raf = requestAnimationFrame(tick);
      else { cancelAnimationFrame(raf); ctx.clearRect(0, 0, innerWidth, innerHeight); }
    };
    raf = requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------------- PWA */
  const canInstall = typeof navigator !== "undefined" && "serviceWorker" in navigator
    && (location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname));
  if (canInstall) {
    navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(() => { /* dosya sunucusuz açıldı */ });
  }

  /* ---------------------------------------------------------- yönlendirme */
  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "test" && parts[1]) return renderIntro(byId(parts[1]));
    if (parts[0] === "oyna" && parts[1]) return startQuiz(byId(parts[1]), Number(parts[2]) || 0);
    if (parts[0] === "sonuc" && parts[1] && parts[2]) return renderResult(byId(parts[1]), parts[2]);
    if (parts[0] === "istatistik") return renderStatsPage(parts[1]);
    if (parts[0] === "profil" && parts[1]) return renderProfile(decodeURIComponent(parts[1]));
    state.quiz = null;
    return renderHome();
  }

  window.addEventListener("hashchange", route);

  const randomBtn = $("#navRandom");
  if (randomBtn) {
    randomBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const tests = allTests();
      const pick = tests[Math.floor(Math.random() * tests.length)];
      const target = `#/oyna/${pick.id}`;
      if (location.hash === target) {
        state.quiz = null;
        startQuiz(pick);
      } else {
        location.hash = target;
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    const target = e.target;
    if (target && typeof target.matches === "function" && target.matches("input, textarea, [contenteditable='true']")) return;
    if (state.quiz && /^[1-9]$/.test(e.key)) {
      const i = Number(e.key) - 1;
      const current = state.quiz.questions[state.quiz.idx];
      if (current && i < current.a.length) choose(i);
    }
    if (e.key === "Enter" && state.quiz && state.quiz.locked && state.quiz.advance) {
      e.preventDefault();
      state.quiz.advance();
    }
    if (e.key === "Escape" && state.quiz) {
      state.quiz = null;
      location.hash = "#/";
    }
    if (e.key === "ArrowLeft") quizBack();
  });

  route();
})();
