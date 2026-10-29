# TESTHANE

Kendini ölç. Kişilik testleri, bilgi yarışmaları, mantık soruları ve Vikipedi'den çekilmiş görselli testler — tek klasörde, derleme yok, bağımlılık yok.

## Ne var?

- **57 test** — 18 el yazımı + 31 görselli bilgi/kişilik testi + 8 yemek testi
- **Ortak tahta**: test sonunda adını yaz; kim ne sonuç aldı görsün (`textdb.dev`, sunucusuz)
- **~2.560 soruluk havuz** — istediğin turda 5, 10, 20 veya tüm soruları seç:
  - 200 ülke bayrağı
  - 200 ülkenin başkenti; 192 ülkenin kıtası
  - 83 portre (bilim insanları, yazarlar, ressamlar/müzisyenler, tarihî kişiler)
  - 54 tarihî yer (Türkiye + dünya)
  - 8 gezegen
  - 37 hayvan
  - 61 yemek klasiği, fotoğraflı; 37'sinde tarifi okuyup tabak eşleştirme
  - 828 soruluk **Büyük karışık test**
  - 367 el yazımı soru; uzun testlerde 16–34 soru
- **Soru sayısı seçimi** — test tanıtımında `5 / 10 / 20 / tümü` düğmeleri; seçim teste başlarken uygulanır
- **Açık / koyu tema** — sağ üstteki düğme; tercih `localStorage` ile hatırlanır, sistem temasına uyum sağlar
- **Vikipedi filtresi** — ana sayfadaki `vikipedi` çipiyle görselli testleri tek tıkla ayır
- **İki sonuç motoru**
  - `personality`: seçenek ağırlıkları toplanır, en yüksek sonuç kazanır
  - `trivia`: doğru sayısına göre yüzdelik dilim
  - `knockout` (kupa): seçilen aday sonraki turda kalmaya devam eder, her tur biri elenir ve sonda tek şampiyon kalır
- **Kupa turnuvası testleri** — Renk kupası, Hayvan kupası, Dünya kupası: "Sarı mı kırmızı mı?" tarzı; kazanınca aynı aday sıradaki rakibiyle devam eder, en sonda tek kazanan sonuç olur. ← geri düğmesi önceki tura döner
- **Anında geri bildirim** — doğru cevap, kısa bilgi ve ilgili Vikipedi bağlantısı; `sonraki →` düğmesi veya Enter ile beklemeden geçilir
- **PWA** — manifest + service worker ile kurulabilir; uygulama kabuğu ve çözülmüş Wikimedia görselleri çevrimdışı da gelir
- **Fotoğraflı el yazımı testler** — 18 testin tamamında Wikimedia kapak fotoğrafı; bilgi testlerinde soru görselleri
- **Sonuç kartı** — 1080×1350 PNG olarak indirilebilir; açık/koyu temaya uyum sağlar, Web Share API ile paylaşılabilir
- **Yerel istatistik** — çözülen test, toplam doğru, günlük seri (localStorage)
- **Mobil öncelikli** — tek elle kullanılacak şekilde tasarlandı

## Testler

| Test | Tür | Kaynak |
|---|---|---|
| Hangi İstanbul semtisin? | kişilik | el yazımı |
| Ne kadar içe dönüksün? | kişilik | el yazımı |
| Hangi dizi karakterisin? | eğlence | el yazımı |
| Toksik misin? | ilişki | el yazımı |
| Hangi meslek sana uygun? | kişilik | el yazımı |
| Müzik zevkine göre ruh hâlin | eğlence | el yazımı |
| Türkiye genel kültür testi | bilgi | el yazımı |
| Mantık ve dikkat testi | bilgi | el yazımı |
| Hangi kahve senin ruhun? | eğlence | el yazımı |
| Ne kadar iyi bir arkadaşsın? | ilişki | el yazımı |
| Türk dizi ve film testi | bilgi | el yazımı |
| Dünya mutfağı testi | bilgi | el yazımı |
| Hangi şehirde yaşamalısın? | eğlence | el yazımı |
| O mu bu mu? | eğlence | el yazımı |
| Hangi dönemde yaşamalısın? | kişilik | el yazımı |
| Hangi tatil tipisin? | kişilik | el yazımı |
| Hangi film türüsün? | eğlence | el yazımı |
| Hangi hayvansın? | kişilik | el yazımı |
| Bayraklardan ülkeleri tanı | bilgi | Vikipedi / Commons |
| Dünya başkentleri | bilgi | Wikidata |
| Ülkeler ve kıtalar | bilgi | Wikidata |
| Bilim insanlarını tanı | bilgi | Vikipedi |
| Dünya yazarlarını tanı | bilgi | Vikipedi |
| Ressamlar ve müzisyenler | bilgi | Vikipedi |
| Tarihî kişiler | bilgi | Vikipedi |
| Dünyadan tarihî yerler | bilgi | Vikipedi |
| Bu yer nerede? | bilgi | Vikipedi |
| Gezegenleri tanı | bilgi | Vikipedi |
| Hayvanları tanı | bilgi | Vikipedi / Commons |
| Dünyanın en iyi yemekleri | bilgi | Vikipedi / Commons |
| O mu bu mu? — yemek | bilgi | Vikipedi / Commons |
| Tabak eşleştir (resimli cevaplar) | bilgi | Vikipedi / Commons |
| O mu bu mu? — Türk yemekleri (büyük görselli) | kişilik | Vikipedi / Commons |
| O mu bu mu? — dünya yemekleri (büyük görselli) | kişilik | Vikipedi / Commons |
| O mu bu mu? — sokak lezzetleri (büyük görselli) | kişilik | Vikipedi / Commons |
| O mu bu mu? — ev sofrası (büyük görselli) | kişilik | Vikipedi / Commons |
| O mu bu mu? — tatlılar (büyük görselli) | kişilik | Vikipedi / Commons |
| O mu bu mu? — hamur işi (büyük görselli) | kişilik | Vikipedi / Commons |
| O mu bu mu? — hayvanlar (büyük görselli) | kişilik | Vikipedi / Commons |
| O mu bu mu? — seyahat (büyük görselli) | kişilik | Vikipedi |
| O mu bu mu? — portreler (büyük görselli) | kişilik | Vikipedi |
| Renk kupası (turnuvalı: son kalan rengin) | kişilik | programda üretilen SVG |
| Hayvan kupası (turnuvalı: son kalan) | eğlence | Vikipedi / Commons |
| Dünya kupası: son kalan yer (turnuvalı) | eğlence | Vikipedi |
| Bu yer hangi ülkede? | bilgi | Vikipedi |
| Bu portre hangi meslekten? | bilgi | Vikipedi |
| Bu hayvanın adresi ne? (deniz/gökyüzü/kara) | bilgi | Vikipedi |
| Bu foto neyin nesi? (görsel karışık) | bilgi | tüm havuzlar |
| Tatlı mı tuzlu mu? | bilgi | Vikipedi / Commons |
| Bu gezegen kaçıncı sırada? | bilgi | Vikipedi |
| Bu hayvanın sınıfı hangisi? (memeli/kuş/…) | bilgi | Vikipedi |
| Bayrak eşleştir (cevaplar bayrak fotoğrafı) | bilgi | Wikidata |
| Türkiye eserleri: hangi ilde? | bilgi | Vikipedi |
| Bayrağı görün, başkent bil | bilgi | Wikidata |
| Bu bayrak hangi kıtadan? | bilgi | Wikidata |
| Büyük karışık test | bilgi | tüm havuzlar |

## Çalıştırma

En hızlısı: `index.html` dosyasına çift tıkla.

Sıcak yenileme ile çalışmak istersen:

```bash
npx serve .
# veya
python -m http.server 8000
```

> Not: Vikipedi testlerindeki görseller Wikimedia sunucularından yüklenir, bu yüzden internet bağlantısı gerekir (ilk yüklemeden sonra service worker çözülmüş görselleri önbelleğe alır). PWA özellikleri yalnızca HTTPS veya localhost üzerinden çalışır; `index.html`'e çift tıklayınca her şey normal çalışmaya devam eder.

## Vikipedi verisini yenilemek

Tüm görsel ve bilgiler `data/wiki.js` içinde önbelleklenmiştir. Yeniden üretmek için:

```bash
node tools/build-wiki.mjs
node tools/build-extras.mjs
```

`build-extras.mjs`, el yazımı testlerin kapak ve soru görsellerini `data/wiki-extras.js` içine yazar. Betik şunları yapar:

1. **Wikidata SPARQL** — 201 ülkenin Türkçe adı, başkenti, kıtası, bayrağı ve Vikipedi bağlantısı
2. **Vikipedi API** — kişi ve yerler için kısa açıklama, ilk paragraf ve yedek görsel
3. **Wikidata P18** — portre/fotoğrafın asıl kaynağı; imza, logo ve harita gibi görseller elenir
4. **Wikimedia Commons** — görselleri `Special:FilePath` üzerinden 520–720 px boyutunda servis eder
5. **Hayvanlar** — 37 hayvanın Türkçe adı, kısa açıklaması ve temsili görseli

Yeni kişi/yer/hayvan eklemek için betikteki `PEOPLE`, `PLACES` ve `ANIMALS` listelerine bir satır ekleyip betiği tekrar çalıştır. Wikidata yoğun saatlerde `429` dönebilir; birkaç dakika sonra yeniden dene.

## Yayına alma

### GitHub Pages (ücretsiz)

1. GitHub'da yeni bir repo aç.
2. Tüm dosyaları yükle: `index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js`, `icon.svg`, `icon-maskable.svg`, `data/` ve `tools/`.
3. `Settings → Pages → Source: Deploy from a branch → main / root`.
4. Birkaç dakika sonra `https://kullaniciadi.github.io/repo-adi/` adresinde yayında.

### Netlify Drop

[app.netlify.com/drop](https://app.netlify.com/drop) sayfasına klasörü sürükle bırak. Link anında hazır.

### Vercel

```bash
npx vercel --prod
```

Statik site olduğu için ayar gerekmez.

## Dosyalar

```
testhane/
├─ index.html
├─ styles.css
├─ app.js
├─ manifest.json      # PWA manifesti
├─ sw.js              # service worker (cabuk + Wikimedia görsel önbelleği)
├─ icon.svg           # uygulama ikonu (SVG)
├─ icon-maskable.svg  # Android başlatıcı için maskable ikon
├─ data/
│  ├─ tests.js        # ilk 13 el yazımı test
│  ├─ new-tests.js    # O mu bu mu + 4 yeni kişilik testi
│  ├─ extra-tests.js  # ek sorular, kapak anahtarları, güncel tanıtımlar
│  ├─ wiki.js         # Vikipedi/Wikidata'dan üretilen veri
│  ├─ wiki-extras.js  # el yazımı testlerin Wikimedia görselleri
│  └─ food.js         # yemek testleri verisi (fotoğraflı)
└─ tools/
   ├─ build-wiki.mjs  # Vikipedi/Wikidata veri toplama betiği
   ├─ build-extras.mjs# el yazımı test görselleri betiği
   └─ build-food.mjs  # yemek verisi betiği (pageimages API)
```

## Yeni test eklemek

`data/tests.js` içindeki `TESTS` dizisinin sonuna ekle:

```js
{
  id: "test-id",                 // URL'de görünür, benzersiz olmalı
  title: "Test başlığı",
  category: "kişilik",           // kişilik | bilgi | eğlence | ilişki
  mode: "personality",           // ya da "trivia"
  cover: "linear-gradient(...)",
  accent: "#d7ff3e",
  desc: "Kısa açıklama.",
  minutes: 3,
  questions: [
    {
      q: "Soru?",
      a: [
        { t: "Seçenek", w: { sonucId: 2 } },      // personality
        { t: "Seçenek", c: true }                 // trivia: doğru cevap
      ]
    }
  ],
  results: [
    { id: "sonucId", title: "Sonuç", desc: "Açıklama.", tags: ["etiket"] }
    // trivia için: { id, min: 70, title, desc, tags }  → yüzdelik alt sınır
  ]
}
```

Kurallar:

- `personality` testlerinde her seçeneğin `w` ağırlıkları, `results` içindeki `id`'lerle eşleşmeli.
- `trivia` testlerinde her soruda **tam olarak bir** `c: true` olmalı.
- `trivia` sonuçlarında `min` alanı yüzdelik alt sınırdır; en yüksekten aşağı sıralanır.
- Kart ve tanıtım ikonları `app.js` içindeki `TEST_ICONS` haritasından gelir; yeni test için `test-id` satırı ekle.

### Görselli soru

Soruya `image`, `imageFit` (`cover` veya `contain`), `fact` ve `wiki` alanları eklenebilir. El yazımı testlerde bunun yerine `data/wiki-extras.js` içindeki bir anahtarı `imageKey` olarak vermek yeterlidir:

```js
{
  q: "Bu bayrak hangi ülkeye ait?",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Turkey.svg?width=480",
  imageFit: "contain",
  fact: "Başkent: Ankara",
  wiki: "https://tr.wikipedia.org/wiki/Türkiye",
  a: [ /* dört seçenek, biri c:true */ ]
}
```

## Lisans ve kaynak

- Site kodu: serbestçe kullanılabilir.
- Vikipedi metinleri: **CC BY-SA 4.0** — kaynak bağlantıları her soruda ve sonuç ekranında verilir.
- Wikimedia Commons görselleri: kendi lisanslarına tabidir; görselin Commons sayfasından doğrulanabilir.
- Wikidata verisi: **CC0**.

Görselleri kendi sunucunda barındırmak istersen `data/wiki.js` içindeki URL'leri indirip yerel yolla değiştirebilirsin.

---

TESTHANE — kendini ölç.
