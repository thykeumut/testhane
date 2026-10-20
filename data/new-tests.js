/* ============================================================
   TESTHANE — yeni testler
   O mu bu mu? + popüler kişilik testi formatları
   ============================================================ */

const NEW_TESTS = [
  /* ---------------------------------------------------------- 1 */
  {
    id: "o-mu-bu-mu",
    title: "O mu bu mu?",
    category: "eğlence",
    mode: "personality",
    cover: "linear-gradient(135deg,#ff5c93 0%,#a98bff 48%,#5b8cff 100%)",
    coverKey: "kavsak",
    accent: "#ff5c93",
    desc: "İki seçenek, tek sen. 18 küçük kararla hangi tarafının daha baskın olduğunu bulalım.",
    minutes: 3,
    questions: [
      {
        q: "Cuma gecesi kapı çaldı. Hangisi daha cazip?",
        a: [
          { t: "Kalabalık bir açılış gecesi, müzik yüksek", w: { sosyal: 2, macera: 1 } },
          { t: "Evde battaniye, film ve kimse gelmesin", w: { huzur: 2, yaratici: 1 } }
        ]
      },
      {
        q: "Tatil planı masaya açıldı.",
        a: [
          { t: "Bilinmeyen bir rotaya sırt çantasıyla çıkmak", w: { macera: 2, ozgur: 1 } },
          { t: "Aynı otel, tanıdık kahvaltı, tanıdık deniz", w: { huzur: 2, mantik: 1 } }
        ]
      },
      {
        q: "Önüne beklenmedik bir fırsat çıktı.",
        a: [
          { t: "Hemen atlarım, detayları yolda düşünürüm", w: { macera: 2, ozgur: 1 } },
          { t: "Artısını eksisini yazar, sonra karar veririm", w: { mantik: 2, huzur: 1 } }
        ]
      },
      {
        q: "Kariyer deyince aklına ne geliyor?",
        a: [
          { t: "Kendi işim, kendi kurallarım", w: { ozgur: 2, macera: 1 } },
          { t: "Net bir yol, düzenli bir gelir", w: { mantik: 2, huzur: 1 } }
        ]
      },
      {
        q: "Boş bir cumartesi öğleden sonrası.",
        a: [
          { t: "Bir şey çizerim, yazarım, üretirim", w: { yaratici: 2, ozgur: 1 } },
          { t: "Arkadaşları toplar, bir şeyler yaparım", w: { sosyal: 2, macera: 1 } }
        ]
      },
      {
        q: "Yola çıkmadan önce.",
        a: [
          { t: "Plan yapmam, akışına bırakırım", w: { ozgur: 2, macera: 1 } },
          { t: "Her günü önceden planlarım", w: { mantik: 2, huzur: 1 } }
        ]
      },
      {
        q: "Kulaklıkta hangisi daha iyi geliyor?",
        a: [
          { t: "Canlı müzik, kalabalık, yüksek ses", w: { sosyal: 2, macera: 1 } },
          { t: "Kulaklık, yalnız bir yürüyüş", w: { huzur: 2, yaratici: 1 } }
        ]
      },
      {
        q: "Bir şeyi denemeden önce.",
        a: [
          { t: "Denemeden bilemem", w: { macera: 2, ozgur: 1 } },
          { t: "Önce küçük bir test yaparım", w: { mantik: 2, yaratici: 1 } }
        ]
      },
      {
        q: "Yaşamak için neresi?",
        a: [
          { t: "Merkezde, her şeyin yakınında", w: { sosyal: 2, ozgur: 1 } },
          { t: "Sessiz, yeşil, biraz uzak", w: { huzur: 2, yaratici: 1 } }
        ]
      },
      {
        q: "Yeni bir şey öğrenirken.",
        a: [
          { t: "Deneyerek, hata yaparak", w: { macera: 2, yaratici: 1 } },
          { t: "Okuyarak, not alarak", w: { mantik: 2, huzur: 1 } }
        ]
      },
      {
        q: "Restoranda menü önünde.",
        a: [
          { t: "Hiç denemediğim bir tarifi seçerim", w: { yaratici: 2, macera: 1 } },
          { t: "Bildiğim ve sevdiğim yemeği söylerim", w: { huzur: 2, mantik: 1 } }
        ]
      },
      {
        q: "Yakın ilişkide senin için daha önemli olan?",
        a: [
          { t: "Beni şaşırt, plansız gel", w: { macera: 2, ozgur: 1 } },
          { t: "Beni tanı, sakin ve tutarlı ol", w: { huzur: 2, mantik: 1 } }
        ]
      },
      {
        q: "Elinde biraz fazla para var.",
        a: [
          { t: "Birikim yaparım, güvenceyi severim", w: { mantik: 2, huzur: 1 } },
          { t: "Deneyime harcarım, anı biriktiririm", w: { macera: 2, yaratici: 1 } }
        ]
      },
      {
        q: "Bir proje başlıyor.",
        a: [
          { t: "Kendi başıma, kendi kurallarımla", w: { ozgur: 2, yaratici: 1 } },
          { t: "Ekip halinde, ortak akılla", w: { sosyal: 2, mantik: 1 } }
        ]
      },
      {
        q: "Bir günün boş kaldı.",
        a: [
          { t: "Şehirde kaybolur, yeni bir sokak bulurum", w: { ozgur: 2, macera: 1 } },
          { t: "Evde bir proje başlatırım", w: { yaratici: 2, huzur: 1 } }
        ]
      },
      {
        q: "Bir sorun çıktığında.",
        a: [
          { t: "Hemen bir çözüm bulurum", w: { mantik: 2, macera: 1 } },
          { t: "Önce duyguyu anlamaya çalışırım", w: { yaratici: 2, huzur: 1 } }
        ]
      },
      {
        q: "Kutlama zamanı.",
        a: [
          { t: "Büyük bir parti, herkes davetli", w: { sosyal: 2, macera: 1 } },
          { t: "İki kişilik sessiz bir akşam", w: { huzur: 2, yaratici: 1 } }
        ]
      },
      {
        q: "Hayatın genel planı.",
        a: [
          { t: "Sürprizlere açık, akışta kalmak", w: { macera: 2, ozgur: 1 } },
          { t: "Kendi düzenimi kurmak ve korumak", w: { huzur: 2, mantik: 1 } }
        ]
      }
    ],
    results: [
      {
        id: "macera",
        title: "Sırt Çantalı",
        desc: "Konfor senin için iyi bir başlangıç, ama hikâye hep yolun dışında başlıyor. Yeni yer, yeni insan ve biraz belirsizlik seni canlı tutuyor. Önce atlarsın, planı yolda kurarsın. Bu cesaret bazen riskli ama hayatını asla sıkıcı yapmıyor.",
        tags: ["cesur", "meraklı", "hareketli"]
      },
      {
        id: "huzur",
        title: "Sakin Sığınak",
        desc: "Hayatın gürültüsünü sevmiyorsun; iyi bir kahve, tanıdık bir koku ve sessiz bir köşe senin için lüks. İlişkilerinde güven ve süreklilik arıyorsun. İnsanlar senin yanında nefes alıyor, çünkü sen acele etmiyorsun.",
        tags: ["sakin", "güvenilir", "evcimen"]
      },
      {
        id: "sosyal",
        title: "Sahne Işığı",
        desc: "İnsan enerjisi seni şarj ediyor. Bir masayı toplamak, yeni biriyle tanışmak, ortamı hareketlendirmek sana doğal geliyor. Yalnızlık bazen dinlenme, ama uzun sürerse sıkılıyorsun. Senin için hayat, birlikte hatırlanan anlardan oluşuyor.",
        tags: ["sosyal", "enerjik", "bağlantı"]
      },
      {
        id: "mantik",
        title: "Soğukkanlı Planlayıcı",
        desc: "Önce düşünürsün, sonra adım atarsın. Duygularını yok saymıyorsun ama kararlarını onlara bırakmıyorsun. Plan, liste ve netlik seni rahatlatıyor. İnsanlar paniklerken senin sakin kalman, çevrendekiler için görünmez bir güvence.",
        tags: ["mantıklı", "düzenli", "güvenilir"]
      },
      {
        id: "yaratici",
        title: "Hayal Atölyesi",
        desc: "Aklında sürekli bir fikir, bir cümle, bir renk dönüyor. Sıradan olanı alıp başka bir şeye çevirmeyi seviyorsun. Bazen dağınık görünebilirsin ama o dağınıklığın içinde kendine ait bir düzen var. Senin için üretmek, nefes almak gibi.",
        tags: ["yaratıcı", "hayalperest", "özgün"]
      },
      {
        id: "ozgur",
        title: "Özgür Ruh",
        desc: "Kalıplar, beklentiler ve \"herkes böyle yapıyor\" cümlesi seni yoruyor. Kendi yolunu çizmek, kendi kurallarını koymak istiyorsun. Bağ kurarsın ama bağımlı olmazsın. Senin özgürlüğün kaçmak değil, kendin kalabilmek.",
        tags: ["bağımsız", "özgür", "kendi yolunda"]
      }
    ]
  },

  /* ---------------------------------------------------------- 2 */
  {
    id: "hangi-donemde-yasamalisin",
    title: "Hangi dönemde yaşamalısın?",
    category: "kişilik",
    mode: "personality",
    cover: "linear-gradient(135deg,#a98bff 0%,#ff8a4c 54%,#c9f23c 100%)",
    coverKey: "ronesans",
    accent: "#a98bff",
    desc: "Zaman makinesi yok ama zevklerin var. Hangi dönemin havasını taşıdığını 16 soruda görelim.",
    minutes: 3,
    questions: [
      {
        q: "Sabah uyandığında pencereden ne görmek istersin?",
        a: [
          { t: "Tapınaklar, zeytin ağaçları, tozlu bir agora", w: { antik: 2, ronesans: 1 } },
          { t: "Kale duvarları, atlar, sisli bir vadi", w: { ortacag: 2, antik: 1 } },
          { t: "Atölyeler, kubbeler, taze boya kokusu", w: { ronesans: 2, sanayi: 1 } },
          { t: "Fabrika bacaları, tren düdüğü", w: { sanayi: 2, ronesans: 1 } },
          { t: "Neon tabelalar, kasetçalar, renkli afişler", w: { seksenler: 2, sanayi: 1 } },
          { t: "Cam kuleler, sessiz elektrikli araçlar", w: { gelecek: 2, seksenler: 1 } }
        ]
      },
      {
        q: "Kıyafet seçimin?",
        a: [
          { t: "Tunik, sandalet, doğal kumaş", w: { antik: 2 } },
          { t: "Katmanlı elbise, pelerin, deri", w: { ortacag: 2 } },
          { t: "Kadife, ipek, işlemeli detaylar", w: { ronesans: 2 } },
          { t: "Takım elbise, palto, saat", w: { sanayi: 2 } },
          { t: "Renkli ceket, kot, büyük gözlük", w: { seksenler: 2 } },
          { t: "Minimal, teknik kumaş, sade kesim", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Kulaklığında hangi ses var?",
        a: [
          { t: "Lir, flüt, doğal ritimler", w: { antik: 2, ronesans: 1 } },
          { t: "Ozan, kilise ilahisi, davul", w: { ortacag: 2 } },
          { t: "Orkestra, oda müziği, çok seslilik", w: { ronesans: 2 } },
          { t: "Marş, bando, fabrika ritmi", w: { sanayi: 2 } },
          { t: "Synth-pop, kaset, parlak gitar", w: { seksenler: 2, sanayi: 1 } },
          { t: "Dijital, elektronik, deneysel", w: { gelecek: 2, seksenler: 1 } }
        ]
      },
      {
        q: "Bir yerden bir yere nasıl gidersin?",
        a: [
          { t: "Yürüyerek ya da at sırtında", w: { antik: 2 } },
          { t: "At arabasıyla, yavaş yavaş", w: { ortacag: 2 } },
          { t: "Yelkenliyle, rüzgâra güvenerek", w: { ronesans: 2, antik: 1 } },
          { t: "Buharlı trenle, dumanın içinden", w: { sanayi: 2 } },
          { t: "Metroyla, walkman eşliğinde", w: { seksenler: 2, sanayi: 1 } },
          { t: "Otonom araçla, sessizce", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Haber sana nasıl ulaşsın?",
        a: [
          { t: "Şehir meydanında bir haberciyle", w: { antik: 2 } },
          { t: "Mühürlü mektupla", w: { ortacag: 2 } },
          { t: "Matbaadan çıkan taze bir gazeteyle", w: { ronesans: 2 } },
          { t: "Telgraf telleriyle", w: { sanayi: 2 } },
          { t: "Televizyon ve telefonla", w: { seksenler: 2 } },
          { t: "Anlık bildirimle, kişiselleştirilmiş", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Eğlence deyince?",
        a: [
          { t: "Agorada tiyatro ve tartışma", w: { antik: 2 } },
          { t: "Turnuva, şölen, ateş etrafında hikâye", w: { ortacag: 2 } },
          { t: "Saray balosu, resim, müzik", w: { ronesans: 2 } },
          { t: "Dünya fuarı, sirk, ilk sinema", w: { sanayi: 2 } },
          { t: "Video klip, arcade, gece kulübü", w: { seksenler: 2 } },
          { t: "Sanal gerçeklik, etkileşimli hikâye", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Ev nasıl olmalı?",
        a: [
          { t: "Taş ev, avlu, su kuyusu", w: { antik: 2 } },
          { t: "Kale, şato, büyük salon", w: { ortacag: 2 } },
          { t: "Şehir konağı, freskler, kitaplık", w: { ronesans: 2 } },
          { t: "İşçi mahallesi, duman, tuğla", w: { sanayi: 2 } },
          { t: "Apartman, posterler, renkli halı", w: { seksenler: 2 } },
          { t: "Akıllı ev, sade yüzeyler", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Senin için en önemli değer?",
        a: [
          { t: "Doğayla uyum", w: { antik: 2 } },
          { t: "Sadakat ve inanç", w: { ortacag: 2 } },
          { t: "Sanat ve insanın merkezde olması", w: { ronesans: 2 } },
          { t: "Üretim ve ilerleme", w: { sanayi: 2 } },
          { t: "Özgürlük ve kendini ifade", w: { seksenler: 2 } },
          { t: "Merak ve sürdürülebilirlik", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Akşam yemeğinde masada ne var?",
        a: [
          { t: "Ateşte pişmiş yemek, zeytinyağı, ekmek", w: { antik: 2 } },
          { t: "Çorba, kök sebze, kara ekmek", w: { ortacag: 2 } },
          { t: "Baharat, taze ot, şarap", w: { ronesans: 2 } },
          { t: "Konserve, et, fabrika üretimi", w: { sanayi: 2 } },
          { t: "Fast food, renkli şeker, gazoz", w: { seksenler: 2 } },
          { t: "Bitki bazlı, laboratuvarda üretilmiş", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Hayalindeki iş?",
        a: [
          { t: "Zanaatkâr, heykeltıraş, çiftçi", w: { antik: 2 } },
          { t: "Şövalye, rahip, saray kâtibi", w: { ortacag: 2 } },
          { t: "Ressam, mimar, mucit", w: { ronesans: 2 } },
          { t: "Mühendis, ustabaşı, demiryolcu", w: { sanayi: 2 } },
          { t: "Müzisyen, reklamcı, mağaza sahibi", w: { seksenler: 2 } },
          { t: "Veri bilimci, tasarımcı, araştırmacı", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Gece nasıl aydınlanıyor?",
        a: [
          { t: "Yıldızlar ve kandil", w: { antik: 2 } },
          { t: "Mum ve şömine", w: { ortacag: 2 } },
          { t: "Şamdan ve tablo ışığı", w: { ronesans: 2 } },
          { t: "Gaz lambası ve duman", w: { sanayi: 2 } },
          { t: "Neon ve kaset ışığı", w: { seksenler: 2 } },
          { t: "Ekran ve akıllı aydınlatma", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Tatile çıkıyorsun.",
        a: [
          { t: "Kervanla, bilinmeyen topraklara", w: { antik: 2 } },
          { t: "Hac yolunda, manevi bir yolculuğa", w: { ortacag: 2 } },
          { t: "Avrupa şehirlerinde sanat turuna", w: { ronesans: 2 } },
          { t: "Trenle, yeni açılan hatta", w: { sanayi: 2 } },
          { t: "Otostopla, kaset listesi eşliğinde", w: { seksenler: 2 } },
          { t: "Uzay turuyla, yörüngeye", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Bir sansasyon çıktı. Kaynağın?",
        a: [
          { t: "Efsane ve şehir meydanı", w: { antik: 2 } },
          { t: "Ferman ve kilise", w: { ortacag: 2 } },
          { t: "Gazete ve mektup", w: { ronesans: 2 } },
          { t: "Telgraf ve gazete", w: { sanayi: 2 } },
          { t: "Televizyon", w: { seksenler: 2 } },
          { t: "Sosyal akış ve bildirim", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Aşkın dili?",
        a: [
          { t: "Şiir, tanrılar, kader", w: { antik: 2 } },
          { t: "Gizli mektup, yasak buluşma", w: { ortacag: 2 } },
          { t: "Portre, sır, uzun bakış", w: { ronesans: 2 } },
          { t: "Görücü usulü, sabırlı mektuplar", w: { sanayi: 2 } },
          { t: "Telefon, kaset, gece yarısı konuşması", w: { seksenler: 2 } },
          { t: "Uygulama, algoritma, dijital mesaj", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Bir günlük lüksün?",
        a: [
          { t: "Hamam ve ziyafet", w: { antik: 2 } },
          { t: "Büyük bir şölen, ateş, müzik", w: { ortacag: 2 } },
          { t: "Kütüphane ve resim atölyesi", w: { ronesans: 2 } },
          { t: "Dünya fuarı ve yeni bir saat", w: { sanayi: 2 } },
          { t: "Konser ve alışveriş", w: { seksenler: 2 } },
          { t: "Sessizlik ve kişisel alan", w: { gelecek: 2 } }
        ]
      },
      {
        q: "Seni en çok ne heyecanlandırır?",
        a: [
          { t: "Keşfedilmemiş topraklar", w: { antik: 2 } },
          { t: "Büyük bir zafer", w: { ortacag: 2 } },
          { t: "Yeni bir fikir", w: { ronesans: 2 } },
          { t: "Çalışan bir makine", w: { sanayi: 2 } },
          { t: "Yeni bir sound", w: { seksenler: 2 } },
          { t: "Henüz var olmayan bir şey", w: { gelecek: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "antik",
        title: "Antik Çağ",
        desc: "Taş, toprak, zeytin ve gökyüzü... Senin ruhun daha yavaş, daha fiziksel bir dünyaya ait. İnsanların doğayla ve birbirleriyle doğrudan bağ kurduğu bir hayatı özlüyorsun. Felsefe, zanaat ve uzun sohbetler senin için modern dünyanın kaçırdığı şeyler.",
        tags: ["doğa", "felsefe", "sade"]
      },
      {
        id: "ortacag",
        title: "Orta Çağ",
        desc: "Sisli kaleler, büyük salonlar ve ateşin etrafında anlatılan hikâyeler... Sen sadakat, aidiyet ve biraz da gizem arıyorsun. Kalabalığın içinde kaybolmak yerine, kendine ait küçük bir dünya kurmayı seviyorsun. Modern hayatın hızı seni yoruyor.",
        tags: ["gizemli", "sadık", "atmosferik"]
      },
      {
        id: "ronesans",
        title: "Rönesans",
        desc: "Sanat, fikir ve insanın merkeze geldiği bir dönem senin için ideal. Öğrenmeyi, üretmeyi ve güzel olanı bir arada seviyorsun. Etrafındaki her şeyin biraz daha estetik, biraz daha anlamlı olmasını istiyorsun. Merakın senin en güçlü pusulan.",
        tags: ["sanat", "meraklı", "estetik"]
      },
      {
        id: "sanayi",
        title: "Sanayi Devrimi",
        desc: "Bir şeyin nasıl çalıştığını görmek, bir fikri somut bir ürüne dönüştürmek seni heyecanlandırıyor. Düzen, üretim ve ilerleme sana güven veriyor. Romantik değil, gerçekçisin; ama iyi bir makine kadar şiirsel olabileceğini de biliyorsun.",
        tags: ["üretken", "pratik", "ilerlemeci"]
      },
      {
        id: "seksenler",
        title: "Seksenler",
        desc: "Renk, müzik, posterler ve biraz kitsch... Sen hayatın fazla cilalı olmasından hoşlanmıyorsun. Analog sıcaklık, kaset sesi ve sokak kültürü sana daha gerçek geliyor. Bugünün hızına değil, kendi ritmine göre yaşıyorsun.",
        tags: ["retro", "renkli", "özgür"]
      },
      {
        id: "gelecek",
        title: "Gelecek",
        desc: "Bugünün kuralları sana dar geliyor; henüz olmayan şeyler daha ilginç. Teknoloji, tasarım ve yeni yaşam biçimleri seni heyecanlandırıyor. Geçmişe nostaljiyle bakmıyorsun, çünkü aklın sürekli bir sonraki adımda. Sen bir taslak değil, güncelleme gibisin.",
        tags: ["yenilikçi", "teknoloji", "meraklı"]
      }
    ]
  },

  /* ---------------------------------------------------------- 3 */
  {
    id: "hangi-tatil-tipisin",
    title: "Hangi tatil tipisin?",
    category: "kişilik",
    mode: "personality",
    cover: "linear-gradient(135deg,#6ee7d8 0%,#5b8cff 52%,#a98bff 100%)",
    coverKey: "tatil",
    accent: "#6ee7d8",
    desc: "Bavulunu nasıl topladığından nerede uyandığına kadar... Sana en uygun tatil tipini bul.",
    minutes: 3,
    questions: [
      {
        q: "Bavulunu açtığında ilk ne görünür?",
        a: [
          { t: "Mayolar, güneş kremi, plaj havlusu", w: { deniz: 2 } },
          { t: "Rahat yürüyüş ayakkabısı, sırt çantası", w: { sehir: 2, sirtcantasi: 1 } },
          { t: "Kamp malzemesi, matara, pusula", w: { doga: 2 } },
          { t: "Rehber kitap, biletler, not defteri", w: { kultur: 2 } },
          { t: "Tek kabin, ipek gömlek, iyi bir parfüm", w: { luks: 2 } },
          { t: "Sadece gerekli olanlar, gerisi yolda", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Nerede uyanmak istersin?",
        a: [
          { t: "Denize bakan bir otel odasında", w: { deniz: 2 } },
          { t: "Şehrin ortasında, sokak sesleriyle", w: { sehir: 2 } },
          { t: "Çadırda, kuş sesleriyle", w: { doga: 2 } },
          { t: "Tarihî bir konakta, avluda", w: { kultur: 2 } },
          { t: "Geniş bir süitte, geç kahvaltıyla", w: { luks: 2 } },
          { t: "Hostelde, yeni tanıştığın insanlarla", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Tatilin sabahı ilk işin?",
        a: [
          { t: "Denize girmek", w: { deniz: 2 } },
          { t: "Bir kafede kahve içmek", w: { sehir: 2 } },
          { t: "Doğa yürüyüşüne çıkmak", w: { doga: 2 } },
          { t: "Müze kuyruğuna girmek", w: { kultur: 2 } },
          { t: "Geç kahvaltı, sonra spa", w: { luks: 2 } },
          { t: "Otobüs terminaline gitmek", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Akşam planın?",
        a: [
          { t: "Gün batımını izlemek", w: { deniz: 2 } },
          { t: "Sokak lezzetleri peşinde kaybolmak", w: { sehir: 2 } },
          { t: "Ateş yakmak, yıldızlara bakmak", w: { doga: 2 } },
          { t: "Tarihî bir meydanda yürümek", w: { kultur: 2 } },
          { t: "Şef menüsü eşliğinde akşam yemeği", w: { luks: 2 } },
          { t: "Hostelde tanıştığın insanlarla takılmak", w: { sirtcantasi: 2, sehir: 1 } }
        ]
      },
      {
        q: "Telefonunda en çok hangi fotoğraf var?",
        a: [
          { t: "Deniz, kum, ayaklar", w: { deniz: 2 } },
          { t: "Sokaklar, tabelalar, insanlar", w: { sehir: 2 } },
          { t: "Dağlar, ağaçlar, manzara", w: { doga: 2 } },
          { t: "Mimari detaylar, eserler", w: { kultur: 2 } },
          { t: "Tabaklar, kokteyller, manzara", w: { luks: 2 } },
          { t: "Yeni insanlar, yolda çekilmiş kareler", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Plan konusunda?",
        a: [
          { t: "Hiç plan yapmam, denize girerim", w: { deniz: 2 } },
          { t: "Günlük bir rota çizerim", w: { sehir: 2 } },
          { t: "Parkuru önceden araştırırım", w: { doga: 2 } },
          { t: "Biletleri ve müzeleri önceden ayarlarım", w: { kultur: 2 } },
          { t: "Her şey rezerve, hiçbir şeyi düşünmem", w: { luks: 2 } },
          { t: "Esnek kalırım, nereye giderse", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Yemek seçimin?",
        a: [
          { t: "Deniz ürünleri, taze balık", w: { deniz: 2 } },
          { t: "Sokak yemeği, yerel esnaf", w: { sehir: 2 } },
          { t: "Kamp ateşinde basit bir yemek", w: { doga: 2 } },
          { t: "Yöresel mutfak, geleneksel tarif", w: { kultur: 2 } },
          { t: "Fine dining, tadım menüsü", w: { luks: 2 } },
          { t: "Marketten ne bulursam", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Kalabalık sana nerede iyi gelir?",
        a: [
          { t: "Plajda, herkes denizde", w: { deniz: 2 } },
          { t: "Pazarda, sokakta, meydanda", w: { sehir: 2 } },
          { t: "Doğada, kalabalıktan uzakta", w: { doga: 2 } },
          { t: "Müzede, sergide", w: { kultur: 2 } },
          { t: "Otel lobisinde, kokteyl saatinde", w: { luks: 2 } },
          { t: "Hostel ortak alanında", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Tatilden aklında kalan?",
        a: [
          { t: "Denize girme özgürlüğü", w: { deniz: 2 } },
          { t: "Kaybolduğum sokaklar", w: { sehir: 2 } },
          { t: "Uzun bir yürüyüş", w: { doga: 2 } },
          { t: "Öğrendiğim bir hikâye", w: { kultur: 2 } },
          { t: "Kendimi iyi hissettiğim an", w: { luks: 2 } },
          { t: "Tanıştığım insanlar", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Döndüğünde?",
        a: [
          { t: "Bronz ten, tuzlu saç", w: { deniz: 2 } },
          { t: "Dolu bir fotoğraf galerisi", w: { sehir: 2 } },
          { t: "Çamurlu ayakkabılar, temiz bir kafa", w: { doga: 2 } },
          { t: "Bir defter dolusu not", w: { kultur: 2 } },
          { t: "Dinlenmiş bir beden", w: { luks: 2 } },
          { t: "Anlatacak bir sürü hikâye", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Bütçen daha çok nereye gitsin?",
        a: [
          { t: "Deniz kenarı, iyi bir konum", w: { deniz: 2 } },
          { t: "Şehir içi ulaşım ve etkinlikler", w: { sehir: 2 } },
          { t: "Kamp ekipmanı ve doğa", w: { doga: 2 } },
          { t: "Müzeler, turlar, rehberler", w: { kultur: 2 } },
          { t: "Konfor, yemek, deneyim", w: { luks: 2 } },
          { t: "Ucuz biletler, uzun yol", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Yalnız kalmak istesen nereye gidersin?",
        a: [
          { t: "Issız bir koy", w: { deniz: 2 } },
          { t: "Kalabalık bir şehirde tek başıma", w: { sehir: 2 } },
          { t: "Ormanda, çadırda", w: { doga: 2 } },
          { t: "Bir müzenin boş salonuna", w: { kultur: 2 } },
          { t: "Spa, sauna, sessiz bir oda", w: { luks: 2 } },
          { t: "Yol boyunca, tanımadığım insanlarla", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Tatilde en çok ne seni yorar?",
        a: [
          { t: "Kum, tuz, sürekli nem", w: { deniz: 1, luks: 1 } },
          { t: "Trafik, kalabalık, gürültü", w: { sehir: 1, doga: 1 } },
          { t: "Böcekler, konforsuz uyku", w: { doga: 1, luks: 1 } },
          { t: "Uzun kuyruklar, kapalı yerler", w: { kultur: 1, deniz: 1 } },
          { t: "Her şeyin planlı olması", w: { luks: 1, sirtcantasi: 1 } },
          { t: "Belirsizlik, nerede uyuyacağım sorusu", w: { sirtcantasi: 1 } }
        ]
      },
      {
        q: "Bir günün var. Nasıl geçsin?",
        a: [
          { t: "Tekne turu, deniz, güneş", w: { deniz: 2 } },
          { t: "Yürüyüş turu, sokaklar, kafeler", w: { sehir: 2 } },
          { t: "Tırmanış, patika, manzara", w: { doga: 2 } },
          { t: "Müze, tarihî yapı, rehber", w: { kultur: 2 } },
          { t: "Brunch, spa, akşam yemeği", w: { luks: 2 } },
          { t: "Otostop, yeni bir kasaba", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Hatıra olarak ne alırsın?",
        a: [
          { t: "Deniz kabuğu, biraz kum", w: { deniz: 2 } },
          { t: "Magnet, kartpostal", w: { sehir: 2 } },
          { t: "Kuru yaprak, taş", w: { doga: 2 } },
          { t: "Kitap, el işi, yerel sanat", w: { kultur: 2 } },
          { t: "Mücevher, iyi bir parça", w: { luks: 2 } },
          { t: "Bilet, fotoğraf, hikâye", w: { sirtcantasi: 2 } }
        ]
      },
      {
        q: "Tatil senin için en çok ne demek?",
        a: [
          { t: "Dinlenmek, hiçbir şey yapmamak", w: { deniz: 2 } },
          { t: "Keşfetmek, yeni yerler görmek", w: { sehir: 2 } },
          { t: "Doğayla bağ kurmak", w: { doga: 2 } },
          { t: "Öğrenmek, kültür biriktirmek", w: { kultur: 2 } },
          { t: "Kendine iyi davranmak", w: { luks: 2 } },
          { t: "Özgür olmak, akışta kalmak", w: { sirtcantasi: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "deniz",
        title: "Deniz & Kum",
        desc: "Tatil senin için mavi bir sayfa: güneş, tuz, ıslak saç ve hiçbir yere yetişmeme hali. Zihnini boşaltmanın en kısa yolu su. Konforun bozulmasına değil, manzaranın değişmesine ihtiyacın var. İyi bir plaj, sana bir haftalık terapi gibi geliyor.",
        tags: ["deniz", "dinlence", "güneş"]
      },
      {
        id: "sehir",
        title: "Şehir Kaşifi",
        desc: "Senin için tatil, yeni bir şehrin ritmine karışmak. Sabah bir kafede başlayıp akşam bilmediğin bir sokakta biten günler seni mutlu ediyor. Müze, pazar, metro ve yerel lezzet... Keşfetmek senin dinlenme biçimin.",
        tags: ["şehir", "keşif", "kültür"]
      },
      {
        id: "doga",
        title: "Doğa Kampçısı",
        desc: "Beton ve bildirim seslerinden uzaklaşmak sana iyi geliyor. Çadır, yürüyüş, ateş ve erken kalkan bir sabah... Konforu değil, sadeliği arıyorsun. Doğada küçüldükçe aslında kendine daha çok yer açıyorsun.",
        tags: ["doğa", "sade", "macera"]
      },
      {
        id: "kultur",
        title: "Kültür Gezgini",
        desc: "Bir yerin hikâyesini öğrenmeden oradan ayrılmak istemiyorsun. Müze, tarihî sokak, yerel mutfak ve rehberli tur senin için tatilin kalbi. Fotoğraf çekmekten çok, o anın bağlamını anlamaya çalışıyorsun. Döndüğünde bavuldan çok bilgi birikiyor.",
        tags: ["kültür", "tarih", "meraklı"]
      },
      {
        id: "luks",
        title: "Lüks Kaçamak",
        desc: "Tatil, hayatın geri kalanına benzemek zorunda değil. İyi bir yatak, özenli bir kahvaltı, sessiz bir spa ve doğru manzara... Kendine iyi davranmayı biliyorsun. Bu israf değil; yoğun hayatının karşılığını vermek.",
        tags: ["konfor", "estetik", "dinlence"]
      },
      {
        id: "sirtcantasi",
        title: "Sırt Çantalı",
        desc: "Biletini alır, çantana birkaç parça koyar ve yola çıkarsın. Plan seni sıkar, sürprizler seni canlı tutar. Yeni insanlar, hosteller ve belirsiz rotalar senin hikâyeni yazıyor. Döndüğünde en değerli hatıran, planlamadığın andır.",
        tags: ["özgür", "macera", "esnek"]
      }
    ]
  },

  /* ---------------------------------------------------------- 4 */
  {
    id: "hangi-film-turu-sensin",
    title: "Hangi film türüsün?",
    category: "eğlence",
    mode: "personality",
    cover: "linear-gradient(135deg,#ff8a4c 0%,#ff5c93 48%,#5b8cff 100%)",
    coverKey: "sinema",
    accent: "#ff8a4c",
    desc: "Sinemada hangi tür seni koltuğa çiviliyor? 16 soruda film zevkini çöz.",
    minutes: 3,
    questions: [
      {
        q: "Hangi ruh halinde film açarsın?",
        a: [
          { t: "Eğlenmek, gülümsemek", w: { romantik: 2 } },
          { t: "Gerilmek, nefesimi tutmak", w: { gerilim: 2 } },
          { t: "Düşünmek, duygulanmak", w: { dram: 2 } },
          { t: "Kaçmak, başka bir dünyaya gitmek", w: { fantastik: 2 } },
          { t: "Öğrenmek, gerçeği görmek", w: { belgesel: 2 } },
          { t: "Geleceği hayal etmek", w: { bilimkurgu: 2 } }
        ]
      },
      {
        q: "Açılış sahnesi nerede geçsin?",
        a: [
          { t: "Uzak bir gezegende", w: { bilimkurgu: 2 } },
          { t: "Paris'te bir kafede", w: { romantik: 2 } },
          { t: "Karanlık bir ormanda", w: { gerilim: 2 } },
          { t: "Gerçek bir köyde, gerçek insanlarla", w: { belgesel: 2 } },
          { t: "Büyülü bir krallıkta", w: { fantastik: 2 } },
          { t: "Küçük bir kasabada", w: { dram: 2 } }
        ]
      },
      {
        q: "Başroldeki karakter?",
        a: [
          { t: "Bir bilim insanı", w: { bilimkurgu: 2 } },
          { t: "Âşık bir insan", w: { romantik: 2 } },
          { t: "Bir dedektif", w: { gerilim: 2 } },
          { t: "Gerçek bir kişi", w: { belgesel: 2 } },
          { t: "Seçilmiş kişi", w: { fantastik: 2 } },
          { t: "Sıradan bir insan", w: { dram: 2 } }
        ]
      },
      {
        q: "Müzik nasıl olsun?",
        a: [
          { t: "Synth, elektronik, uzay sesleri", w: { bilimkurgu: 2 } },
          { t: "Piyano, yaylılar, sıcak melodiler", w: { romantik: 2 } },
          { t: "Derin bas, gerilim tıklamaları", w: { gerilim: 2 } },
          { t: "Doğal sesler, hafif arka plan", w: { belgesel: 2 } },
          { t: "Büyük orkestra, koro", w: { fantastik: 2 } },
          { t: "Akustik, sade, duygusal", w: { dram: 2 } }
        ]
      },
      {
        q: "Final nasıl bitsin?",
        a: [
          { t: "Açık uçlu, düşündüren", w: { bilimkurgu: 2 } },
          { t: "Mutlu, iç ısıtan", w: { romantik: 2 } },
          { t: "Ters köşe, şok eden", w: { gerilim: 2 } },
          { t: "Gerçek, olduğu gibi", w: { belgesel: 2 } },
          { t: "Destansı, büyük bir zafer", w: { fantastik: 2 } },
          { t: "Buruk, iz bırakan", w: { dram: 2 } }
        ]
      },
      {
        q: "Film süresi?",
        a: [
          { t: "Uzun ve katmanlı, 2.5 saat", w: { dram: 2, bilimkurgu: 1 } },
          { t: "90 dakika, tempolu", w: { romantik: 2, gerilim: 1 } },
          { t: "Kısa ve öz", w: { belgesel: 2 } },
          { t: "Destansı, üçleme olabilir", w: { fantastik: 2 } },
          { t: "Gerilim hiç düşmesin", w: { gerilim: 2 } },
          { t: "Fikir yoğun olsun", w: { bilimkurgu: 2 } }
        ]
      },
      {
        q: "Görsel dil?",
        a: [
          { t: "Neon, mavi, metal", w: { bilimkurgu: 2 } },
          { t: "Sıcak tonlar, yumuşak ışık", w: { romantik: 2 } },
          { t: "Gölge, yağmur, dar alan", w: { gerilim: 2 } },
          { t: "Doğal ışık, gerçek mekân", w: { belgesel: 2 } },
          { t: "Renkli, büyülü, abartılı", w: { fantastik: 2 } },
          { t: "Sade, yakın plan, yüz odaklı", w: { dram: 2 } }
        ]
      },
      {
        q: "Yan karakter?",
        a: [
          { t: "Zeki, tuhaf bir uzman", w: { bilimkurgu: 2 } },
          { t: "Duygusal, destekleyici arkadaş", w: { romantik: 2 } },
          { t: "Gizemli, güvenilmez", w: { gerilim: 2 } },
          { t: "Gerçek hayattan biri", w: { belgesel: 2 } },
          { t: "Cesur, komik yol arkadaşı", w: { fantastik: 2 } },
          { t: "Kırılgan, karmaşık", w: { dram: 2 } }
        ]
      },
      {
        q: "İzleme ortamın?",
        a: [
          { t: "Büyük ekran, sinema", w: { bilimkurgu: 2 } },
          { t: "Evde, biriyle, battaniye altında", w: { romantik: 2 } },
          { t: "Gece, yalnız, ışıklar kapalı", w: { gerilim: 2 } },
          { t: "Sessiz bir odada, not alarak", w: { belgesel: 2 } },
          { t: "Arkadaşlarla, yüksek sesle", w: { fantastik: 2 } },
          { t: "Yalnız, telefonu uzağa koyarak", w: { dram: 2 } }
        ]
      },
      {
        q: "Konu seç?",
        a: [
          { t: "Teknoloji ve insan", w: { bilimkurgu: 2 } },
          { t: "Aşk ve tesadüf", w: { romantik: 2 } },
          { t: "Suç ve çözülmeyen sır", w: { gerilim: 2 } },
          { t: "Doğa, tarih, gerçek olay", w: { belgesel: 2 } },
          { t: "Büyü ve kehanet", w: { fantastik: 2 } },
          { t: "Aile ve geçmiş", w: { dram: 2 } }
        ]
      },
      {
        q: "Kaçmak istediğinde nereye?",
        a: [
          { t: "Başka bir gezegene", w: { bilimkurgu: 2 } },
          { t: "Romantik bir şehre", w: { romantik: 2 } },
          { t: "Çözülmesi gereken bir gizeme", w: { gerilim: 2 } },
          { t: "Gerçek bir hikâyenin içine", w: { belgesel: 2 } },
          { t: "Bir masala", w: { fantastik: 2 } },
          { t: "Başka birinin hayatına", w: { dram: 2 } }
        ]
      },
      {
        q: "Kötü karakter?",
        a: [
          { t: "Kontrolden çıkmış yapay zekâ", w: { bilimkurgu: 2 } },
          { t: "Eski sevgili", w: { romantik: 2 } },
          { t: "Seri katil", w: { gerilim: 2 } },
          { t: "Sistemin kendisi", w: { belgesel: 2 } },
          { t: "Karanlık lord", w: { fantastik: 2 } },
          { t: "Geçmişten gelen bir yara", w: { dram: 2 } }
        ]
      },
      {
        q: "Hangi replik seni çeker?",
        a: [
          { t: "\"Yıldızlara gidiyoruz.\"", w: { bilimkurgu: 2 } },
          { t: "\"Seni seviyorum.\"", w: { romantik: 2 } },
          { t: "\"Kapıyı açma.\"", w: { gerilim: 2 } },
          { t: "\"Gerçek bu.\"", w: { belgesel: 2 } },
          { t: "\"Kader seni seçti.\"", w: { fantastik: 2 } },
          { t: "\"Eve dön.\"", w: { dram: 2 } }
        ]
      },
      {
        q: "Renk paleti?",
        a: [
          { t: "Mavi, mor, soğuk", w: { bilimkurgu: 2 } },
          { t: "Pembe, sıcak, parlak", w: { romantik: 2 } },
          { t: "Siyah, yeşil, gri", w: { gerilim: 2 } },
          { t: "Doğal, kahverengi, yeşil", w: { belgesel: 2 } },
          { t: "Altın, kırmızı, büyülü", w: { fantastik: 2 } },
          { t: "Soluk, toprak, sade", w: { dram: 2 } }
        ]
      },
      {
        q: "Filmde en sevdiğin duygu?",
        a: [
          { t: "Merak", w: { bilimkurgu: 2 } },
          { t: "Heyecan", w: { romantik: 2 } },
          { t: "Korku", w: { gerilim: 2 } },
          { t: "Hayranlık", w: { belgesel: 2 } },
          { t: "Şaşkınlık", w: { fantastik: 2 } },
          { t: "Hüzün", w: { dram: 2 } }
        ]
      },
      {
        q: "Film bittiğinde ne olursun?",
        a: [
          { t: "Uzun uzun düşünürüm", w: { bilimkurgu: 2 } },
          { t: "Gülümserim", w: { romantik: 2 } },
          { t: "Derin bir nefes alırım", w: { gerilim: 2 } },
          { t: "Yeni bir şey öğrenmiş olurum", w: { belgesel: 2 } },
          { t: "Hayal kurmaya başlarım", w: { fantastik: 2 } },
          { t: "Bir süre sessiz kalırım", w: { dram: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "bilimkurgu",
        title: "Bilim Kurgu",
        desc: "Gelecek, teknoloji ve \"ya olursa?\" sorusu seni içine çekiyor. Sıradan dünyanın kurallarını sorgulayan hikâyeleri seviyorsun. Görsel olarak cesur, fikir olarak iddialı filmler senin alanın. Film bittiğinde aklında bir soru kalması hoşuna gidiyor.",
        tags: ["meraklı", "teknoloji", "hayal"]
      },
      {
        id: "romantik",
        title: "Romantik Komedi",
        desc: "Hayatın içinde sıcaklık, mizah ve biraz da klişe arıyorsun. Kendini iyi hissettiren, sonunda içini ısıtan hikâyeler senin ilacın. Duyguları saklamıyorsun; iyi bir replik seni günlerce etkileyebilir. Sinema senin için kucaklaşmak gibi.",
        tags: ["duygusal", "sıcak", "iyimser"]
      },
      {
        id: "gerilim",
        title: "Gerilim",
        desc: "Masanın altındaki tehlike, kapanmayan kapı ve çözülmeyen sır... Seni en çok belirsizlik heyecanlandırıyor. Kontrolü kaybetme hissiyle güvenli bir mesafeden oynamayı seviyorsun. Tahmin etmek, yanılmak ve sonunda \"biliyordum\" demek senin eğlencen.",
        tags: ["meraklı", "cesur", "analitik"]
      },
      {
        id: "belgesel",
        title: "Belgesel",
        desc: "Gerçek hikâyeler, senin için en iyi kurgudan daha güçlü. Bir şeyin nasıl olduğunu, kimin ne yaşadığını öğrenmek istiyorsun. Film senin için kaçış değil, dünyayı daha iyi anlama aracı. Sonunda bir şey öğrenmediysen eksik kalmışsın gibi geliyor.",
        tags: ["meraklı", "gerçekçi", "öğrenen"]
      },
      {
        id: "fantastik",
        title: "Fantastik",
        desc: "Büyü, ejderha ve başka bir dünya... Gerçeklik bazen fazla dar geliyor. Sen hayal gücünün sınırsız olduğu hikâyelerde nefes alıyorsun. Renkli dünyalar, destansı yolculuklar ve seçilmiş olma hissi seni çocukluğundaki heyecana geri götürüyor.",
        tags: ["hayalperest", "cesur", "renkli"]
      },
      {
        id: "dram",
        title: "Dram",
        desc: "Seni en çok insan hikâyeleri etkiliyor. Büyük patlamalar değil, bir bakış, bir sessizlik, bir veda... Film bittiğinde bir süre konuşmak istemiyorsun. Duyguların derinliğine inmeyi seviyorsun; bu yüzden iyi bir dram sende iz bırakıyor.",
        tags: ["duygusal", "derin", "gerçekçi"]
      }
    ]
  },

  /* ---------------------------------------------------------- 5 */
  {
    id: "hangi-hayvan-sensin",
    title: "Hangi hayvansın?",
    category: "kişilik",
    mode: "personality",
    cover: "linear-gradient(135deg,#c9f23c 0%,#6ee7d8 52%,#5b8cff 100%)",
    coverKey: "kurt",
    accent: "#c9f23c",
    desc: "İçgüdülerin hangi hayvana benziyor? 16 soruda ruh hayvanını bul.",
    minutes: 3,
    questions: [
      {
        q: "Enerjin daha çok nasıl?",
        a: [
          { t: "Sakin, gözlemci, kendi halinde", w: { kedi: 2 } },
          { t: "Yüksek, hareketli, dışa dönük", w: { kopek: 2 } },
          { t: "Tetikte, kontrollü, stratejik", w: { kurt: 2 } },
          { t: "Neşeli, oyunbaz, sosyal", w: { yunus: 2 } },
          { t: "Bağımsız, mesafeli, keskin", w: { kartal: 2 } },
          { t: "Yumuşak, dengeli, sakin", w: { panda: 2 } }
        ]
      },
      {
        q: "Sabah uyanınca?",
        a: [
          { t: "Biraz daha yatakta kalırım", w: { kedi: 2 } },
          { t: "Hemen dışarı çıkmak isterim", w: { kopek: 2 } },
          { t: "Erken kalkar, sessizce plan yaparım", w: { kurt: 2 } },
          { t: "Koşuya ya da spora giderim", w: { yunus: 2 } },
          { t: "Yüksekten manzarayı izlerim", w: { kartal: 2 } },
          { t: "Yavaş başlarım, acele etmem", w: { panda: 2 } }
        ]
      },
      {
        q: "Sosyal ortamda?",
        a: [
          { t: "Az kişiyle, seçerek konuşurum", w: { kedi: 2 } },
          { t: "Herkesle tanışır, sohbet ederim", w: { kopek: 2 } },
          { t: "Küçük grubun içinde kalırım", w: { kurt: 2 } },
          { t: "Ortamı hareketlendiririm", w: { yunus: 2 } },
          { t: "Bir köşeden izler, gerekince konuşurum", w: { kartal: 2 } },
          { t: "Sakin kalır, kimseyi zorlamam", w: { panda: 2 } }
        ]
      },
      {
        q: "Bir çatışma çıktığında?",
        a: [
          { t: "Geri çekilir, mesafemi korurum", w: { kedi: 2 } },
          { t: "Konuşur, hemen çözmeye çalışırım", w: { kopek: 2 } },
          { t: "Sessiz kalır, strateji kurarım", w: { kurt: 2 } },
          { t: "Şakayla yumuşatırım", w: { yunus: 2 } },
          { t: "Tepeden bakar, taraf olmam", w: { kartal: 2 } },
          { t: "Kaçınır, huzuru korurum", w: { panda: 2 } }
        ]
      },
      {
        q: "Rutinin nasıl?",
        a: [
          { t: "Kendi ritmim var, kimse karışmasın", w: { kedi: 2 } },
          { t: "Düzenli ve planlı", w: { kopek: 2 } },
          { t: "Esnek ama hep tetikte", w: { kurt: 2 } },
          { t: "Oyun ve değişiklik iyi gelir", w: { yunus: 2 } },
          { t: "Gökyüzü kadar geniş, sınır yok", w: { kartal: 2 } },
          { t: "Yavaş, dinlenmeye yer açan", w: { panda: 2 } }
        ]
      },
      {
        q: "Sevgiyi nasıl gösterirsin?",
        a: [
          { t: "Mesafeli ama sadık", w: { kedi: 2 } },
          { t: "Açık, sıcak, sarılarak", w: { kopek: 2 } },
          { t: "Sessiz bir sadakatle", w: { kurt: 2 } },
          { t: "Temas, oyun, birlikte zaman", w: { yunus: 2 } },
          { t: "Özgürlük vererek", w: { kartal: 2 } },
          { t: "Yumuşak bir sakinlikle", w: { panda: 2 } }
        ]
      },
      {
        q: "İş hayatında?",
        a: [
          { t: "Bağımsız çalışırım", w: { kedi: 2 } },
          { t: "Ekipte, insanlarla birlikte", w: { kopek: 2 } },
          { t: "Liderlik eder, yön belirlerim", w: { kurt: 2 } },
          { t: "İletişim ve iş birliği benim işim", w: { yunus: 2 } },
          { t: "Strateji ve büyük resim", w: { kartal: 2 } },
          { t: "Denge ve sürdürülebilirlik", w: { panda: 2 } }
        ]
      },
      {
        q: "Boş zamanın?",
        a: [
          { t: "Uyku, güneş, sessizlik", w: { kedi: 2 } },
          { t: "Parkta koşu, oyun", w: { kopek: 2 } },
          { t: "Doğada uzun yürüyüş", w: { kurt: 2 } },
          { t: "Deniz, su, hareket", w: { yunus: 2 } },
          { t: "Yüksek bir yer, geniş manzara", w: { kartal: 2 } },
          { t: "İyi yemek, sonra dinlenme", w: { panda: 2 } }
        ]
      },
      {
        q: "Seni en çok ne korkutur?",
        a: [
          { t: "Kontrolü kaybetmek", w: { kedi: 2 } },
          { t: "Yalnız kalmak", w: { kopek: 2 } },
          { t: "İhanet", w: { kurt: 2 } },
          { t: "Sıkılmak", w: { yunus: 2 } },
          { t: "Sınırlandırılmak", w: { kartal: 2 } },
          { t: "Gürültü ve kaos", w: { panda: 2 } }
        ]
      },
      {
        q: "Stilin?",
        a: [
          { t: "Zarif, sade, seçici", w: { kedi: 2 } },
          { t: "Sportif, rahat, enerjik", w: { kopek: 2 } },
          { t: "Doğal, koyu, dayanıklı", w: { kurt: 2 } },
          { t: "Renkli, canlı, neşeli", w: { yunus: 2 } },
          { t: "Minimal, keskin, dikkat çekmeyen", w: { kartal: 2 } },
          { t: "Yumuşak, bol, konforlu", w: { panda: 2 } }
        ]
      },
      {
        q: "Arkadaşlıkta?",
        a: [
          { t: "Az ve öz", w: { kedi: 2 } },
          { t: "Herkese açık", w: { kopek: 2 } },
          { t: "Sürüye sadık", w: { kurt: 2 } },
          { t: "Eğlenceli, sürekli iletişimde", w: { yunus: 2 } },
          { t: "İlham veren, mesafeli", w: { kartal: 2 } },
          { t: "Huzur veren, dinleyen", w: { panda: 2 } }
        ]
      },
      {
        q: "Yemek konusunda?",
        a: [
          { t: "Seçiciyim, sevdiğimi yerim", w: { kedi: 2 } },
          { t: "Hızlı yer, hemen devam ederim", w: { kopek: 2 } },
          { t: "Avımı bekler, doğru anı kollarım", w: { kurt: 2 } },
          { t: "Paylaşmayı severim", w: { yunus: 2 } },
          { t: "Yüksekten seçerim, acelem yok", w: { kartal: 2 } },
          { t: "Yavaş yer, tadını çıkarırım", w: { panda: 2 } }
        ]
      },
      {
        q: "Tatil tercihin?",
        a: [
          { t: "Evde, kendi köşemde", w: { kedi: 2 } },
          { t: "Kamp, doğa, hareket", w: { kopek: 2 } },
          { t: "Issız orman, uzun patika", w: { kurt: 2 } },
          { t: "Deniz, ada, su sporları", w: { yunus: 2 } },
          { t: "Dağ, yüksek rakım, sessizlik", w: { kartal: 2 } },
          { t: "Spa, sakin otel, iyi yemek", w: { panda: 2 } }
        ]
      },
      {
        q: "İletişim tarzın?",
        a: [
          { t: "Bakışlar ve küçük işaretler", w: { kedi: 2 } },
          { t: "Sesli, sıcak, doğrudan", w: { kopek: 2 } },
          { t: "Az konuşur, çok gözlemlerim", w: { kurt: 2 } },
          { t: "Tıklamalar, sesler, neşe", w: { yunus: 2 } },
          { t: "Net ve mesafeli", w: { kartal: 2 } },
          { t: "Sakin, yumuşak, dinleyen", w: { panda: 2 } }
        ]
      },
      {
        q: "Hayat mottosu?",
        a: [
          { t: "Kendi alanım, kendi kurallarım", w: { kedi: 2 } },
          { t: "Birlikte daha iyi", w: { kopek: 2 } },
          { t: "Sürüye sadık, kendine dürüst", w: { kurt: 2 } },
          { t: "Akışta kal, oyunu bırakma", w: { yunus: 2 } },
          { t: "Yukarıdan bak, büyük resmi gör", w: { kartal: 2 } },
          { t: "Yavaş yaşa, dengeyi koru", w: { panda: 2 } }
        ]
      },
      {
        q: "Seni tek kelimeyle anlatsalar?",
        a: [
          { t: "Gizem", w: { kedi: 2 } },
          { t: "Sadakat", w: { kopek: 2 } },
          { t: "İçgüdü", w: { kurt: 2 } },
          { t: "Neşe", w: { yunus: 2 } },
          { t: "Özgürlük", w: { kartal: 2 } },
          { t: "Sakinlik", w: { panda: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "kedi",
        title: "Kedi",
        desc: "Bağımsızlığına düşkün, seçici ve zarifsin. Herkesle hemen yakınlaşmazsın; güvenini kazanmak zaman ister. Kendi alanına saygı gösterilmesini beklersin. Ama sevdiğinde, o sıcaklık bir anda bütün mesafeni unutturur.",
        tags: ["bağımsız", "zarif", "seçici"]
      },
      {
        id: "kopek",
        title: "Köpek",
        desc: "Sadakatin ve enerjin bulaşıcı. İnsanları bir araya getirmek, onları mutlu etmek sana doğal geliyor. Duygularını açıkça gösterirsin; oyuna da sevgiye de her zaman hazırsın. Senin için hayat, birlikte koşarken güzel.",
        tags: ["sadık", "enerjik", "sosyal"]
      },
      {
        id: "kurt",
        title: "Kurt",
        desc: "İçgüdülerine güvenen, gözlemci ve stratejik bir yapın var. Kalabalığa değil, kendi sürüne bağlısın. Yalnız kalmaktan korkmuyorsun; aksine, kararlarını en iyi yalnızken veriyorsun. Sadakatin sessiz ama çok güçlü.",
        tags: ["içgüdüsel", "sadık", "bağımsız"]
      },
      {
        id: "yunus",
        title: "Yunus",
        desc: "Neşen ve iletişimin insanları kendine çekiyor. Merak eder, oynar, bağ kurarsın. Ciddiyet sana göre değil; hayatın akışında eğlenceyi bulmakta üstüne yok. İnsanlar senin yanında daha hafif hissediyor.",
        tags: ["neşeli", "sosyal", "meraklı"]
      },
      {
        id: "kartal",
        title: "Kartal",
        desc: "Yüksekten bakmayı, büyük resmi görmeyi seviyorsun. Kalabalığın içinde bile kendi alanını koruyorsun. Özgürlük senin için vazgeçilmez; sınırlandırılmak seni en çok yoran şey. Hedefini gördüğünde kimse seni yavaşlatamaz.",
        tags: ["özgür", "stratejik", "gözlemci"]
      },
      {
        id: "panda",
        title: "Panda",
        desc: "Sakin, yumuşak ve dengeyi önemseyen bir tarafın var. Hayatı acele etmeden yaşamayı, iyi yemeyi ve dinlenmeyi seviyorsun. İnsanlara güven veriyorsun; yanında kimse kendini yarışta hissetmiyor. Senin gücün, sakinliğinde saklı.",
        tags: ["sakin", "denge", "sevimli"]
      }
    ]
  }
];

if (typeof window !== "undefined") window.NEW_TESTS = NEW_TESTS;
