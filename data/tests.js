/* ============================================================
   TESTHANE — test içerikleri
   Yeni test eklemek için dizinin sonuna aynı şablonla ekle.
   mode: "personality" (ağırlıklı sonuç) | "trivia" (doğru sayısı)
   ============================================================ */

const TESTS = [
  /* ---------------------------------------------------------- 1 */
  {
    id: "hangi-istanbul-semtisin",
    title: "Hangi İstanbul semtisin?",
    category: "kişilik",
    mode: "personality",
    cover: "linear-gradient(135deg,#ff8a4c 0%,#ff4b8a 52%,#7b4bff 100%)",
    accent: "#ff4b8a",
    desc: "Ruhunun adresini sekiz soruda buluyoruz. Bakalım hangi semtin havasını taşıyorsun.",
    minutes: 3,
    questions: [
      {
        q: "Cuma akşamı seni nerede buluruz?",
        a: [
          { t: "Konserde, ön sırada, sesim kısılmış", w: { kadikoy: 2, beyoglu: 1 } },
          { t: "Sahilde bir şeyler içerken, ayaklar denize doğru", w: { bakirkoy: 2, besiktas: 1 } },
          { t: "Rezervasyonlu, şık bir akşam yemeğinde", w: { nisantasi: 2 } },
          { t: "Evde, çay demledim, kimse gelmesin", w: { uskudar: 2 } }
        ]
      },
      {
        q: "Cumartesi sabahı ilk işin ne?",
        a: [
          { t: "Kahveyi alıp martıları izlemek", w: { kadikoy: 1, bakirkoy: 2 } },
          { t: "Koşu, duş, tertemiz bir gün", w: { besiktas: 2 } },
          { t: "Telefona bakmak: kim, nerede, ne yapıyor?", w: { beyoglu: 2, nisantasi: 1 } },
          { t: "Perdeyi açmadan biraz daha uyumak", w: { uskudar: 2 } }
        ]
      },
      {
        q: "Ev arkadaşı ilanın nasıl olurdu?",
        a: [
          { t: "\"Evde huzur isteyen, erken yatan aranıyor\"", w: { uskudar: 2 } },
          { t: "\"Kapı açık olsun, sürekli insan gelsin\"", w: { beyoglu: 2, kadikoy: 1 } },
          { t: "\"Düzenli, spor yapan, sessiz\"", w: { besiktas: 2, nisantasi: 1 } },
          { t: "\"Kafası rahat, müzik açık, takılmalık\"", w: { kadikoy: 2, bakirkoy: 1 } }
        ]
      },
      {
        q: "Üç günlük tatil hakkın var. Nereye?",
        a: [
          { t: "Bilmediğim bir şehir, gece hayatı", w: { beyoglu: 2 } },
          { t: "Adalar: bisiklet, deniz, simit", w: { kadikoy: 2, bakirkoy: 1 } },
          { t: "Butik otel, iyi kahvaltı, hiç plan yok", w: { nisantasi: 2 } },
          { t: "Telefonun çekmediği bir köy", w: { uskudar: 2 } }
        ]
      },
      {
        q: "Alışverişe çıktın. Rotan neresi?",
        a: [
          { t: "Vintage dükkanlar, pazarlık serbest", w: { kadikoy: 2 } },
          { t: "Bildiğim marka, tek seferde, kaliteli", w: { nisantasi: 2 } },
          { t: "Spor mağazası, teknik malzeme", w: { besiktas: 2 } },
          { t: "İnternetten, ne lazımsa, hızlıca", w: { uskudar: 1, bakirkoy: 1 } }
        ]
      },
      {
        q: "Bir sorun çıktığında ilk tepkin ne olur?",
        a: [
          { t: "Yüz yüze konuşurum, hemen", w: { beyoglu: 2, kadikoy: 1 } },
          { t: "Plan yaparım, adım adım çözerim", w: { besiktas: 2, nisantasi: 1 } },
          { t: "Geri çekilir, kendi kendime düşünürüm", w: { uskudar: 2 } },
          { t: "Akışına bırakırım, bir şekilde olur", w: { bakirkoy: 2 } }
        ]
      },
      {
        q: "Kulaklığında ne var?",
        a: [
          { t: "Rock, indie, canlı kayıtlar", w: { kadikoy: 2 } },
          { t: "Elektronik, gece setleri", w: { beyoglu: 2 } },
          { t: "Caz, klasik, akşam yemeği müziği", w: { nisantasi: 2 } },
          { t: "Eski Türkçe şarkılar, radyo", w: { uskudar: 2 } }
        ]
      },
      {
        q: "Kendini tek cümleyle anlatsan?",
        a: [
          { t: "\"Kalabalığın içinde kaybolmayı severim.\"", w: { beyoglu: 2 } },
          { t: "\"Sakinlik benim lüksüm.\"", w: { uskudar: 2 } },
          { t: "\"Her şeyin tadını çıkarırım, yarın ne olur bilmem.\"", w: { bakirkoy: 2 } },
          { t: "\"Detaylara takılırım, her şey yerinde olsun.\"", w: { nisantasi: 1, besiktas: 1 } },
          { t: "\"Herkesin gittiği yerde olmak zorunda değilim.\"", w: { kadikoy: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "kadikoy",
        title: "Kadıköy",
        desc: "Sen bir cumartesi akşamısın: biraz dağınık, çok canlı, herkesin uğradığı yer. Kendi kuralını kendin koyarsın, kimsenin onayına ihtiyacın yok. Kalabalığı seversin ama kalabalığa karışmazsın.",
        tags: ["bağımsız", "sosyal", "müzik"]
      },
      {
        id: "besiktas",
        title: "Beşiktaş",
        desc: "Disiplinli, sportif ve lüksten de vazgeçmeyen bir tarafın var. Hayatın bir programı olsun istiyorsun; plansızlık seni yoruyor. Sadakatin ve netliğin çevrendekiler için bir liman.",
        tags: ["disiplinli", "sadık", "aktif"]
      },
      {
        id: "beyoglu",
        title: "Beyoğlu",
        desc: "Gece senin saat dilimin. Yeni insan, yeni hikaye, yeni bir sokak... Sıkılmayı en büyük tehlike olarak görüyorsun. Enerjin bulaşıcı, ama bazen kendine de biraz sessizlik borçlusun.",
        tags: ["gece", "meraklı", "kaotik"]
      },
      {
        id: "nisantasi",
        title: "Nişantaşı",
        desc: "Estetik senin için bir tercih değil, standart. Detayları fark eder, iyi olanı hemen ayırt edersin. İnsanlar seni cool bulur; sen ise sadece işini doğru yapmak istiyorsun.",
        tags: ["zarif", "seçici", "detaycı"]
      },
      {
        id: "uskudar",
        title: "Üsküdar",
        desc: "İçinde eski bir radyo çalıyor: sakin, derin, biraz hüzünlü. Kalabalıktan değil, gürültüden kaçıyorsun. Az insan, çok anlam senin formülün; yanında kalanlar şanslı.",
        tags: ["sakin", "derin", "seçici"]
      },
      {
        id: "bakirkoy",
        title: "Bakırköy",
        desc: "Rahatlığın mimarısın. Hayatı fazla ciddiye almadan, denize karşı bir çayla her şeyi çözebilirsin. İnsanlar senin yanında gevşiyor; sen de bunu iyi biliyorsun.",
        tags: ["rahat", "pozitif", "dost"]
      }
    ]
  },

  /* ---------------------------------------------------------- 2 */
  {
    id: "ne-kadar-icene-donuksun",
    title: "Ne kadar içe dönüksün?",
    category: "kişilik",
    mode: "personality",
    cover: "linear-gradient(135deg,#4b9dff 0%,#7b4bff 55%,#ff4bd8 100%)",
    accent: "#7b4bff",
    desc: "Sosyal enerjini nerede harcıyorsun, nerede şarj ediyorsun? On soruda net cevap.",
    minutes: 3,
    questions: [
      {
        q: "Telefonun çaldı, numarayı tanımıyorsun.",
        a: [
          { t: "Açarım, kim olduğunu öğrenirim", w: { disa: 2 } },
          { t: "Açarım ama konuşmayı kısa tutarım", w: { denge: 1, disa: 1 } },
          { t: "Açmam, mesaj atmasını beklerim", w: { intro: 2 } },
          { t: "Açarım, sonra \"kimdi bu\" diye düşünürüm", w: { intro: 1, buka: 1 } }
        ]
      },
      {
        q: "Kalabalık bir davete girdin.",
        a: [
          { t: "Herkese merhaba, kendimi tanıtırım", w: { disa: 2 } },
          { t: "Birkaç kişiyle derin sohbet kurarım", w: { denge: 2, buka: 1 } },
          { t: "Tanıdık arar, bulunca yanına yerleşirim", w: { intro: 2 } },
          { t: "Birini bulup erken kaçarım", w: { intro: 1, buka: 2 } }
        ]
      },
      {
        q: "Yeni bir iş yerinde ilk gün.",
        a: [
          { t: "Herkese merhaba, isimleri ezberlerim", w: { disa: 2 } },
          { t: "Önce gözlemlerim, sonra ısınırım", w: { denge: 2, buka: 1 } },
          { t: "Kimse konuşmazsa benim için daha iyi", w: { intro: 2 } },
          { t: "Bir kişiyle tanışıp onun üzerinden açılırım", w: { buka: 2, denge: 1 } }
        ]
      },
      {
        q: "Enerjini asıl ne doldurur?",
        a: [
          { t: "İnsanlar, sohbet, hareket", w: { disa: 2 } },
          { t: "Müzik, yürüyüş, tek başına zaman", w: { intro: 2, buka: 1 } },
          { t: "Yakın arkadaşlarla uzun bir sohbet", w: { denge: 2 } },
          { t: "Tamamen yalnız kalmak", w: { intro: 2, denge: 1 } }
        ]
      },
      {
        q: "Mesajlaşma alışkanlığın?",
        a: [
          { t: "Sesli mesaj atarım, yazmak uzun", w: { disa: 2 } },
          { t: "Uzun uzun yazarım, detay önemli", w: { denge: 1, buka: 1 } },
          { t: "Kısa cevap, nokta.", w: { intro: 2 } },
          { t: "Bazen günlerce açmam", w: { intro: 2, buka: 1 } }
        ]
      },
      {
        q: "Plan iptal oldu. İçinden ne geçiyor?",
        a: [
          { t: "Hemen başka bir plan arıyorum", w: { disa: 2 } },
          { t: "Evde film, battaniye... harika", w: { denge: 2, intro: 1 } },
          { t: "Bir arkadaşı ararım, bir şeyler yaparız", w: { buka: 2 } },
          { t: "Oh be.", w: { intro: 2 } }
        ]
      },
      {
        q: "Sessizlik senin için?",
        a: [
          { t: "Ölüm gibi, bir şey söyleyin", w: { disa: 2 } },
          { t: "Bazen iyi, bazen sıkıcı", w: { denge: 2 } },
          { t: "En sevdiğim ses", w: { intro: 2, buka: 1 } },
          { t: "Duruma göre değişir", w: { buka: 2 } }
        ]
      },
      {
        q: "Sunum yapman gerekiyor.",
        a: [
          { t: "Sahne beni besler", w: { disa: 2 } },
          { t: "Hazırlanırım, yaparım, biter", w: { denge: 2 } },
          { t: "Ölürüm, ama yine de yaparım", w: { intro: 2 } },
          { t: "Ekiple paylaşacak şekilde ayarlarım", w: { buka: 2 } }
        ]
      },
      {
        q: "Sosyal medyada?",
        a: [
          { t: "Sık paylaşırım, etkileşim severim", w: { disa: 2 } },
          { t: "Hikaye izlerim, bazen paylaşırım", w: { denge: 1, buka: 1 } },
          { t: "Sessizce takip ederim", w: { intro: 2 } },
          { t: "Nadiren girerim", w: { intro: 2, denge: 1 } }
        ]
      },
      {
        q: "Bir hafta boyunca kimseyle konuşmasan?",
        a: [
          { t: "İkinci gün patlarım", w: { disa: 2 } },
          { t: "Kitap, film, kendimle iyi vakit", w: { denge: 2, intro: 1 } },
          { t: "Üretmeye başlarım", w: { buka: 2 } },
          { t: "Cennet.", w: { intro: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "intro",
        title: "Tam İçe Dönük",
        desc: "Kalabalık seni yoruyor, sessizlik şarj ediyor. Az ama derin ilişkiler kuruyorsun; herkes seni tanımıyor ama tanıyanlar çok iyi tanıyor. Kendi dünyanı kurmakta üstüne yok.",
        tags: ["sakin", "derin", "bağımsız"]
      },
      {
        id: "denge",
        title: "Dengeli",
        desc: "Hem kalabalıkta hem yalnızken iyi vakit geçirebiliyorsun. İnsanlarla olmayı seviyorsun ama kendine de alan açmayı biliyorsun. Bu denge çoğu insanın yıllarca aradığı şey.",
        tags: ["dengeli", "esnek", "sağlam"]
      },
      {
        id: "disa",
        title: "Dışa Dönük",
        desc: "Enerjin odanın havasını değiştiriyor. İnsanlarla konuşmak seni dolduruyor, yalnızlık ise bir ceza gibi. Ama arada bir kendine de kulak vermeyi unutma.",
        tags: ["sosyal", "enerjik", "açık"]
      },
      {
        id: "buka",
        title: "Sosyal Bukalemun",
        desc: "Girdiğin ortama göre şekil alıyorsun: bazen en sessiz kişi, bazen en çok konuşan. Bu bir yetenek, ama herkesi memnun etmek için kendi rengini kaybetme.",
        tags: ["uyumlu", "gözlemci", "çok yönlü"]
      }
    ]
  },

  /* ---------------------------------------------------------- 3 */
  {
    id: "turkiye-genel-kultur",
    title: "Türkiye genel kültür testi",
    category: "bilgi",
    mode: "trivia",
    cover: "linear-gradient(135deg,#ff4b4b 0%,#ff8a4c 55%,#ffd84b 100%)",
    accent: "#ff4b4b",
    desc: "On soru, dört seçenek. Tarih, coğrafya ve kültürden acımasız bir tarama.",
    minutes: 2,
    questions: [
      {
        q: "Türkiye'nin en büyük gölü hangisidir?",
        a: [
          { t: "Tuz Gölü" },
          { t: "Van Gölü", c: true },
          { t: "Beyşehir Gölü" },
          { t: "Eğirdir Gölü" }
        ]
      },
      {
        q: "Türk edebiyatının ilk romanı kabul edilen eser hangisidir?",
        a: [
          { t: "Araba Sevdası" },
          { t: "İntibah" },
          { t: "Taaşşuk-ı Talat ve Fitnat", c: true },
          { t: "Çalıkuşu" }
        ]
      },
      {
        q: "Antik Efes kenti hangi ilimizde bulunur?",
        a: [
          { t: "İzmir", c: true },
          { t: "Muğla" },
          { t: "Aydın" },
          { t: "Manisa" }
        ]
      },
      {
        q: "TBMM hangi yıl açılmıştır?",
        a: [
          { t: "1919" },
          { t: "1920", c: true },
          { t: "1921" },
          { t: "1923" }
        ]
      },
      {
        q: "Türkiye'nin en yüksek dağı hangisidir?",
        a: [
          { t: "Erciyes Dağı" },
          { t: "Süphan Dağı" },
          { t: "Kaçkar Dağı" },
          { t: "Ağrı Dağı", c: true }
        ]
      },
      {
        q: "Türkiye'den UNESCO Dünya Mirası Listesi'ne giren ilk yer neresidir?",
        a: [
          { t: "İstanbul Tarihi Alanları", c: true },
          { t: "Göreme ve Kapadokya" },
          { t: "Pamukkale" },
          { t: "Truva Antik Kenti" }
        ]
      },
      {
        q: "Pamukkale travertenleri hangi ilimizdedir?",
        a: [
          { t: "Denizli", c: true },
          { t: "Afyonkarahisar" },
          { t: "Muğla" },
          { t: "Isparta" }
        ]
      },
      {
        q: "Cumhuriyet hangi yıl ilan edilmiştir?",
        a: [
          { t: "1920" },
          { t: "1921" },
          { t: "1923", c: true },
          { t: "1924" }
        ]
      },
      {
        q: "Türkiye'nin en uzun nehri hangisidir?",
        a: [
          { t: "Fırat" },
          { t: "Kızılırmak", c: true },
          { t: "Sakarya" },
          { t: "Yeşilırmak" }
        ]
      },
      {
        q: "Aşağıdaki illerden hangisinin Karadeniz'e kıyısı yoktur?",
        a: [
          { t: "Samsun" },
          { t: "Trabzon" },
          { t: "Amasya", c: true },
          { t: "Sinop" }
        ]
      }
    ],
    results: [
      { id: "r0", min: 0, title: "Fena Değil Ama...", desc: "Temel şeyler yerinde ama detaylarda kayboluyorsun. Bir belgesel, bir harita, bir ansiklopedi... Eksikleri kapatmak sandığından kolay.", tags: ["başlangıç", "meraklı"] },
      { id: "r40", min: 40, title: "Sağlam Temel", desc: "Ortalamanın üstünde bir genel kültürün var. Günlük sohbetlerde rahatça konuşabilirsin; birkaç doğru daha seni üst lige taşır.", tags: ["ortalama üstü", "güvenilir"] },
      { id: "r70", min: 70, title: "Bilgi Küpü", desc: "Tarih, coğrafya, kültür... çoğu konuda fikrin var ve çoğu zaman doğru. Çevrende \"bir ona sor\" denen kişi sensin.", tags: ["bilgili", "güçlü"] },
      { id: "r90", min: 90, title: "Yürüyen Ansiklopedi", desc: "Bu test seni zorlamadı, biliyoruz. Neredeyse hiç hata yapmadan bitirdin. Artık daha zor bir seviye hak ediyorsun.", tags: ["uzman", "kusursuz"] }
    ]
  },

  /* ---------------------------------------------------------- 4 */
  {
    id: "hangi-dizi-karakterisin",
    title: "Hangi dizi karakterisin?",
    category: "eğlence",
    mode: "personality",
    cover: "linear-gradient(135deg,#63e6d2 0%,#4b9dff 50%,#7b4bff 100%)",
    accent: "#63e6d2",
    desc: "Bir dizinin içine girsem hangi karakter olurdum? Sekiz soruda cevabı veriyoruz.",
    minutes: 3,
    questions: [
      {
        q: "Bir kriz anında ne yaparsın?",
        a: [
          { t: "Ortalığı karıştırır, sonra çözerim", w: { kaos: 2 } },
          { t: "Plan yaparım, herkesi yönlendiririm", w: { stratejist: 2 } },
          { t: "Önce insanları sakinleştiririm", w: { kalp: 2 } },
          { t: "Şaka yaparım, ortam yumuşasın", w: { komik: 2 } },
          { t: "İzlerim, kim ne yapıyor anlarım", w: { golge: 2 } }
        ]
      },
      {
        q: "Seni en iyi anlatan replik hangisi?",
        a: [
          { t: "\"Ben hallederim.\"", w: { stratejist: 2 } },
          { t: "\"Bu iş burada bitmez.\"", w: { kaos: 2 } },
          { t: "\"Kalbin ne diyorsa onu yap.\"", w: { kalp: 2 } },
          { t: "\"Bir dakika, ciddi bir şey mi oldu?\"", w: { komik: 2 } },
          { t: "\"...\"", w: { golge: 2 } }
        ]
      },
      {
        q: "Grup sohbetinde kimsin?",
        a: [
          { t: "Tartışmayı başlatan", w: { kaos: 2 } },
          { t: "Planı kuran, karar veren", w: { stratejist: 2 } },
          { t: "Herkese destek olan", w: { kalp: 2 } },
          { t: "Sadece sticker atan", w: { komik: 2 } },
          { t: "Okuyup geçen", w: { golge: 2 } }
        ]
      },
      {
        q: "Final bölümünde başına ne gelir?",
        a: [
          { t: "Ölürüm ama geri gelirim", w: { kaos: 2 } },
          { t: "Her şeyi ben çözerim", w: { stratejist: 2 } },
          { t: "Sevdiğimle mutlu son", w: { kalp: 2 } },
          { t: "Yanlış kişiye sarılırım", w: { komik: 2 } },
          { t: "Kimse görmeden çıkar giderim", w: { golge: 2 } }
        ]
      },
      {
        q: "En büyük korkun?",
        a: [
          { t: "Sıkıcı olmak", w: { kaos: 2 } },
          { t: "Kontrolü kaybetmek", w: { stratejist: 2 } },
          { t: "Yalnız kalmak", w: { kalp: 2 } },
          { t: "Ciddiye alınmamak", w: { komik: 2 } },
          { t: "Görünür olmak", w: { golge: 2 } }
        ]
      },
      {
        q: "Kostüm departmanı sana ne giydirir?",
        a: [
          { t: "Her şey üst üste, renkli", w: { kaos: 2 } },
          { t: "Siyah, keskin, pahalı", w: { stratejist: 2 } },
          { t: "Rahat, yumuşak, sıcak", w: { kalp: 2 } },
          { t: "Baskılı tişört", w: { komik: 2 } },
          { t: "Kapüşon, koyu renk", w: { golge: 2 } }
        ]
      },
      {
        q: "Bir hata yaptın. Ne olur?",
        a: [
          { t: "Büyütürüm, herkes duyar", w: { kaos: 2 } },
          { t: "Analiz eder, düzeltirim", w: { stratejist: 2 } },
          { t: "Özür dilerim, telafi ederim", w: { kalp: 2 } },
          { t: "Şakaya bağlarım", w: { komik: 2 } },
          { t: "Sessizce düzeltirim", w: { golge: 2 } }
        ]
      },
      {
        q: "Dizinin türü ne olsun?",
        a: [
          { t: "Gerilim", w: { kaos: 2 } },
          { t: "Politik dram", w: { stratejist: 2 } },
          { t: "Romantik", w: { kalp: 2 } },
          { t: "Sitcom", w: { komik: 2 } },
          { t: "Gizem", w: { golge: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "kaos",
        title: "Kaos Motoru",
        desc: "Dizinin en eğlenceli ve en yorucu karakteri sensin. Bir sorun çıktığında orada olursun; genelde sorunun çıkma sebebi de sensin. Ama kimse senin olduğun sahneleri atlamıyor.",
        tags: ["kaotik", "eğlenceli", "cesur"]
      },
      {
        id: "stratejist",
        title: "Sessiz Stratejist",
        desc: "Herkesin panik yaptığı yerde sen üç adım sonrasını düşünüyorsun. Az konuşuyorsun, çok biliyorsun. Dizinin gerçek beyni sensin.",
        tags: ["planlı", "soğukkanlı", "zeki"]
      },
      {
        id: "kalp",
        title: "Kalbin Sesi",
        desc: "Dizinin vicdanı sensin. İnsanlar sana geliyor çünkü onları gerçekten dinliyorsun. Bu bazen yorucu oluyor, ama senin sıcaklığın olmadan hikaye eksik kalıyor.",
        tags: ["duygusal", "destek", "sadık"]
      },
      {
        id: "komik",
        title: "Komik Yan Karakter",
        desc: "Ağır sahneleri bile hafifleten kişi sensin. Espri senin kalkanın; bazen de insanları kendinden uzak tutma yöntemin. Ama sen olmasan dizi çekilmezdi.",
        tags: ["esprili", "rahat", "sevilen"]
      },
      {
        id: "golge",
        title: "Gölgedeki İsim",
        desc: "Sahnede az görünüyorsun ama her şeyin farkındasın. Konuştuğunda herkes susuyor. Gizem senin doğal hâlin, bu yüzden en çok merak edilen karakter de sensin.",
        tags: ["gizemli", "gözlemci", "derin"]
      }
    ]
  },

  /* ---------------------------------------------------------- 5 */
  {
    id: "mantik-ve-dikkat",
    title: "Mantık ve dikkat testi",
    category: "bilgi",
    mode: "trivia",
    cover: "linear-gradient(135deg,#d7ff3e 0%,#63e6d2 55%,#4b9dff 100%)",
    accent: "#d7ff3e",
    desc: "Matematik dehası olmana gerek yok; dikkat ve biraz sabır yeter. Tuzak sorular var, dikkatli oku.",
    minutes: 3,
    questions: [
      {
        q: "2, 4, 8, 16, ... dizisinde sıradaki sayı kaçtır?",
        a: [
          { t: "24" },
          { t: "32", c: true },
          { t: "30" },
          { t: "20" }
        ]
      },
      {
        q: "5 tavuk 5 günde 5 yumurta yumurtluyor. 100 tavuk 100 günde kaç yumurta yumurtlar?",
        a: [
          { t: "100" },
          { t: "500" },
          { t: "1000" },
          { t: "2000", c: true }
        ]
      },
      {
        q: "Saat tam 3:15'te akrep ile yelkovan arasındaki açı kaç derecedir?",
        a: [
          { t: "0" },
          { t: "7,5", c: true },
          { t: "15" },
          { t: "22,5" }
        ]
      },
      {
        q: "Sepette 3 elma var. 3 çocuğa her birine bir elma verdin ama sepette hâlâ 1 elma kaldı. Nasıl?",
        a: [
          { t: "Matematik hatası var" },
          { t: "Elmalardan biri sahte" },
          { t: "Bir çocuğa sepetle birlikte verdim", c: true },
          { t: "Sepette 4 elma vardı" }
        ]
      },
      {
        q: "Ali, Veli'den büyük. Veli, Can'dan büyük. En küçük kim?",
        a: [
          { t: "Ali" },
          { t: "Veli" },
          { t: "Can", c: true },
          { t: "Eşitler" }
        ]
      },
      {
        q: "1, 1, 2, 3, 5, 8, ... dizisinde sıradaki sayı kaçtır?",
        a: [
          { t: "11" },
          { t: "12" },
          { t: "13", c: true },
          { t: "16" }
        ]
      },
      {
        q: "Trende 40 kişi var. İlk durakta 12 kişi indi, 8 kişi bindi. Trende kaç kişi kaldı?",
        a: [
          { t: "36", c: true },
          { t: "40" },
          { t: "44" },
          { t: "32" }
        ]
      },
      {
        q: "Hangisi diğerlerinden farklı?",
        a: [
          { t: "121" },
          { t: "144" },
          { t: "169" },
          { t: "180", c: true }
        ]
      },
      {
        q: "3 kg pamuk mu daha ağır, 3 kg demir mi?",
        a: [
          { t: "Demir" },
          { t: "Pamuk" },
          { t: "Eşitler", c: true },
          { t: "Hacme bağlı" }
        ]
      },
      {
        q: "2'nin 10. kuvveti kaçtır?",
        a: [
          { t: "512" },
          { t: "1024", c: true },
          { t: "2048" },
          { t: "1000" }
        ]
      }
    ],
    results: [
      { id: "m0", min: 0, title: "Beyin Mola Verdi", desc: "Bugün dikkatin biraz dağınık görünüyor. Soruları hızlı okumak seni yanıltmış olabilir. Bir kahve, bir tur daha?", tags: ["mola", "tekrar dene"] },
      { id: "m40", min: 40, title: "Dikkat Var", desc: "Temel mantık yerinde. Tuzak sorularda birkaç kez düştün ama toparlanabilirsin. Yavaş okumak senin süper gücün olabilir.", tags: ["toparlanır", "dikkatli"] },
      { id: "m70", min: 70, title: "Keskin Zeka", desc: "Soruları hızlı ve doğru okuyorsun. Özellikle tuzak soruları fark etmen güçlü yanın. Bu kafayla sınavlarda rahat edersin.", tags: ["zeki", "hızlı"] },
      { id: "m90", min: 90, title: "Mantık Makinesi", desc: "Neredeyse kusursuz. Hem dikkat hem mantık aynı anda çalışıyor. Bu testi bitiren insan sayısı az; sen o azınlıktansın.", tags: ["kusursuz", "analitik"] }
    ]
  },

  /* ---------------------------------------------------------- 6 */
  {
    id: "toksik-misin",
    title: "Toksik misin?",
    category: "ilişki",
    mode: "personality",
    cover: "linear-gradient(135deg,#ff4b8a 0%,#ff4b4b 55%,#7b4bff 100%)",
    accent: "#ff4b8a",
    desc: "Acımasız ama dürüst bir ayna. Cevaplarını değiştirmek yok, ilk aklına geleni seç.",
    minutes: 3,
    questions: [
      {
        q: "Eski sevgilin gece 02:00'de \"nasılsın?\" diye yazdı.",
        a: [
          { t: "Cevap vermem", w: { yesil: 2 } },
          { t: "\"İyiyim, sen?\" diye cevap veririm", w: { sari: 1, kirmizi: 1 } },
          { t: "\"Şimdi mi aklına geldim?\" diye yazarım", w: { sari: 2 } },
          { t: "Ekran görüntüsü alıp gruba atarım", w: { kirmizi: 2, boss: 1 } }
        ]
      },
      {
        q: "Tartışma sırasında ne yaparsın?",
        a: [
          { t: "Dinlerim, anlamaya çalışırım", w: { yesil: 2 } },
          { t: "Savunmaya geçerim", w: { sari: 2 } },
          { t: "Konuyu değiştiririm", w: { kirmizi: 1 } },
          { t: "Ben haklıyım, tartışma bitmiştir", w: { boss: 2 } }
        ]
      },
      {
        q: "Yakın bir arkadaşın büyük bir başarı kazandı.",
        a: [
          { t: "İçten sevinirim, kutlarım", w: { yesil: 2 } },
          { t: "\"Ben de yaparım\" derim", w: { sari: 1, kirmizi: 1 } },
          { t: "Kıskanırım, belli etmem", w: { kirmizi: 1 } },
          { t: "Hiçbir şey söylemem", w: { sari: 2 } }
        ]
      },
      {
        q: "Hatalı olduğunu anladın.",
        a: [
          { t: "Özür dilerim", w: { yesil: 2 } },
          { t: "\"Ama sen de...\" derim", w: { sari: 2 } },
          { t: "Özür dilemem, unuturum", w: { kirmizi: 1 } },
          { t: "Özür beklerim", w: { boss: 2 } }
        ]
      },
      {
        q: "Sınırlar konusunda?",
        a: [
          { t: "Gerekince hayır diyebilirim", w: { yesil: 2 } },
          { t: "Bazen diyebilirim, bazen diyemem", w: { sari: 2 } },
          { t: "Herkese evet derim", w: { kirmizi: 1, boss: 1 } },
          { t: "İnsanlar bana hayır diyemez", w: { boss: 2 } }
        ]
      },
      {
        q: "Sosyal medyada?",
        a: [
          { t: "Neredeyse hiç paylaşmam", w: { yesil: 1 } },
          { t: "Nadiren, önemli şeyleri", w: { yesil: 1, sari: 1 } },
          { t: "Her şeyi paylaşırım", w: { kirmizi: 2 } },
          { t: "İnsanları sessizce takip ederim", w: { sari: 2 } }
        ]
      },
      {
        q: "Biri seni eleştirdi.",
        a: [
          { t: "Dinlerim, haklı olabilir", w: { yesil: 2 } },
          { t: "Kendimi savunurum", w: { sari: 2 } },
          { t: "Karşı saldırıya geçerim", w: { kirmizi: 2 } },
          { t: "\"Kim olduğumu biliyor musun?\"", w: { boss: 2 } }
        ]
      },
      {
        q: "İlişkilerde sen?",
        a: [
          { t: "Açık konuşurum, dinlerim", w: { yesil: 2 } },
          { t: "Kavga ederim ama sonra düzelirim", w: { sari: 1 } },
          { t: "Küserim, konuşmam", w: { kirmizi: 2 } },
          { t: "Kontrol etmek isterim", w: { boss: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "yesil",
        title: "Yeşil Bayrak",
        desc: "Duygusal olgunluğun yüksek. Sınır koyabiliyor, hatalarını kabul edebiliyor ve karşındakini gerçekten dinliyorsun. Bu kadar sağlıklı olman bazen insanları şaşırtıyor.",
        tags: ["sağlıklı", "dengeli", "güvenli"]
      },
      {
        id: "sari",
        title: "Sarı Alarm",
        desc: "Kötü niyetli değilsin ama bazı alışkanlıkların ilişkileri yoruyor: savunmaya geçmek, kin tutmak, konuyu değiştirmek. Fark ettiğin an değiştirebileceğin şeylerin çoğu bunlar.",
        tags: ["farkında", "gelişime açık"]
      },
      {
        id: "kirmizi",
        title: "Kırmızı Alarm",
        desc: "Öfken ve gururun çoğu zaman mantığının önüne geçiyor. İnsanlar seni seviyor ama yoruluyor. Küçük bir özür, büyük bir fark yaratabilir.",
        tags: ["tutkulu", "öfkeli", "dürüst"]
      },
      {
        id: "boss",
        title: "Final Boss",
        desc: "Kontrol sende olsun istiyorsun, her konuda. Bu karizmatik bir özellik ama karşındakiler için yorucu olabilir. Bazen sadece dinlemek, kazanmaktan daha etkili.",
        tags: ["baskın", "karizmatik", "kontrolcü"]
      }
    ]
  },

  /* ---------------------------------------------------------- 7 */
  {
    id: "hangi-meslek-sana-uygun",
    title: "Hangi meslek sana uygun?",
    category: "kişilik",
    mode: "personality",
    cover: "linear-gradient(135deg,#4b9dff 0%,#63e6d2 50%,#d7ff3e 100%)",
    accent: "#4b9dff",
    desc: "Maaş değil, karakter sorusu: hangi iş seni yormadan besler? Sekiz soruda işaretleri topluyoruz.",
    minutes: 3,
    questions: [
      {
        q: "Boş bir günün var. Ne yaparsın?",
        a: [
          { t: "Bir şeyler kurar, tamir ederim", w: { muhendis: 2 } },
          { t: "Çizerim, tasarlarım", w: { tasarimci: 2 } },
          { t: "Birine bir şey anlatırım", w: { ogretmen: 2 } },
          { t: "Fırsat arar, fikir geliştiririm", w: { girisimci: 2 } },
          { t: "Okurum, araştırırım", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Seni en çok ne sinirlendirir?",
        a: [
          { t: "Verimsizlik ve düzensizlik", w: { muhendis: 2 } },
          { t: "Kötü tasarım ve özensizlik", w: { tasarimci: 2 } },
          { t: "Anlaşılmamak", w: { ogretmen: 2 } },
          { t: "Boşa geçen zaman", w: { girisimci: 2 } },
          { t: "Yanlış bilgi", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Grup projesinde üstlendiğin rol?",
        a: [
          { t: "Planı ve sistemi kurarım", w: { muhendis: 2 } },
          { t: "Sunumu ve görseli tasarlarım", w: { tasarimci: 2 } },
          { t: "Herkesi motive ederim", w: { ogretmen: 2 } },
          { t: "Fikri satarım, insan bulurum", w: { girisimci: 2 } },
          { t: "Kaynakları tarar, doğrusunu bulurum", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Para senin için?",
        a: [
          { t: "Düzenli ve garantili olmalı", w: { muhendis: 2 } },
          { t: "Değer ürettiğim işten gelmeli", w: { tasarimci: 2 } },
          { t: "Anlamlı bir iş yeter", w: { ogretmen: 2 } },
          { t: "Büyük risk, büyük getiri", w: { girisimci: 2 } },
          { t: "Huzur yeter", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Boş zamanında elin neye gider?",
        a: [
          { t: "Bir şeyi sökmek, tamir etmek", w: { muhendis: 2 } },
          { t: "Moodboard, renk, tipografi", w: { tasarimci: 2 } },
          { t: "Birine bir konuyu anlatmak", w: { ogretmen: 2 } },
          { t: "İş fikri düşünmek", w: { girisimci: 2 } },
          { t: "Makale, video, belgesel", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "İnsanlar seni nasıl tanımlar?",
        a: [
          { t: "Çözen kişi", w: { muhendis: 2 } },
          { t: "Yaratıcı kişi", w: { tasarimci: 2 } },
          { t: "Sabırlı kişi", w: { ogretmen: 2 } },
          { t: "İkna edici kişi", w: { girisimci: 2 } },
          { t: "Meraklı kişi", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Bir sorunla karşılaştın. Yaklaşımın?",
        a: [
          { t: "Sistemi kurar, tekrarını engellerim", w: { muhendis: 2 } },
          { t: "Deneyimi düzeltirim", w: { tasarimci: 2 } },
          { t: "İnsanları eğitirim", w: { ogretmen: 2 } },
          { t: "Çözümü paketleyip satarım", w: { girisimci: 2 } },
          { t: "Kök nedeni bulurum", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Kariyer hedefin?",
        a: [
          { t: "Sağlam bir sistemin parçası olmak", w: { muhendis: 2 } },
          { t: "İmza atacağım işler yapmak", w: { tasarimci: 2 } },
          { t: "İz bırakan öğrenciler yetiştirmek", w: { ogretmen: 2 } },
          { t: "Kendi şirketimi kurmak", w: { girisimci: 2 } },
          { t: "Yeni bir bilgi üretmek", w: { arastirmaci: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "muhendis",
        title: "Mühendis",
        desc: "Sistemler, süreçler ve \"neden böyle çalışıyor\" sorusu senin alanın. Kaosu düzene çevirmekten keyif alıyorsun. Yazılım, makine, elektrik... hangisi olursa olsun, senin yerin bir şeyleri çalıştırmak.",
        tags: ["analitik", "sistemli", "çözümcü"]
      },
      {
        id: "tasarimci",
        title: "Tasarımcı",
        desc: "Gözün her şeyi fark ediyor: hizasız bir yazı, kötü bir renk, yavan bir sunum. İşin sadece güzel olması değil, doğru hissettirmesi. Tasarım, ürün, marka... estetik senin dilin.",
        tags: ["yaratıcı", "detaycı", "estetik"]
      },
      {
        id: "ogretmen",
        title: "Öğretmen / Eğitmen",
        desc: "Bildiğin bir şeyi karşındakine gerçekten anlatabildiğinde mutlu oluyorsun. Sabrın ve anlatma yeteneğin var. Eğitim, mentorluk, içerik üretimi sana doğal geliyor.",
        tags: ["sabırlı", "anlatıcı", "ilham veren"]
      },
      {
        id: "girisimci",
        title: "Girişimci",
        desc: "Var olan düzene bakıp \"bu daha iyi olabilir\" diyenlerdensin. Risk seni korkutmuyor, sıkıcılık korkutuyor. Kendi işini kurmak ya da bir ürünü sıfırdan büyütmek senin yolun.",
        tags: ["cesur", "vizyoner", "risk alan"]
      },
      {
        id: "arastirmaci",
        title: "Araştırmacı",
        desc: "Yüzeysel cevaplar seni tatmin etmiyor. Bir konuya girince en dibine kadar gidiyorsun. Bilim, akademi, veri analizi, gazetecilik... merakın senin mesleğin olabilir.",
        tags: ["meraklı", "derin", "sabırlı"]
      }
    ]
  },

  /* ---------------------------------------------------------- 8 */
  {
    id: "muzik-zevkine-gore-ruh-halin",
    title: "Müzik zevkine göre ruh hâlin",
    category: "eğlence",
    mode: "personality",
    cover: "linear-gradient(135deg,#7b4bff 0%,#ff4bd8 50%,#ff8a4c 100%)",
    accent: "#b79cff",
    desc: "Kulaklığındaki şarkılar aslında seni anlatıyor. Sekiz soruda müzik zevkinden ruh hâlini okuyoruz.",
    minutes: 3,
    questions: [
      {
        q: "Yolda yürürken ne dinliyorsun?",
        a: [
          { t: "Tempolu bir şey, adımlar hızlansın", w: { enerji: 2 } },
          { t: "Sakin, akışına bırakan bir şey", w: { sakin: 2 } },
          { t: "Hüzünlü, içine dönen bir şey", w: { melankolik: 2 } },
          { t: "Gece seti, şehir ışıkları", w: { gece: 2 } },
          { t: "Bilmediğim, garip bir şey", w: { kaos: 2 } }
        ]
      },
      {
        q: "Kötü bir gün geçirdin. Ne açarsın?",
        a: [
          { t: "Dans ettiren bir şey", w: { enerji: 2 } },
          { t: "Ambient, yağmur sesi", w: { sakin: 2 } },
          { t: "En hüzünlü şarkıyı, sonuna kadar", w: { melankolik: 2 } },
          { t: "Gece gezmesi, kulaklık, şehir", w: { gece: 2 } },
          { t: "Rastgele bir playlist, ne çıkarsa", w: { kaos: 2 } }
        ]
      },
      {
        q: "En sevdiğin an?",
        a: [
          { t: "Konserde, kalabalığın içinde", w: { enerji: 2 } },
          { t: "Kulaklıkla tek başına yürümek", w: { sakin: 2 } },
          { t: "Yağmurda pencere kenarı", w: { melankolik: 2 } },
          { t: "Sabaha karşı boş şehir", w: { gece: 2 } },
          { t: "Yeni bir şarkı keşfetmek", w: { kaos: 2 } }
        ]
      },
      {
        q: "Şarkı sözleri senin için?",
        a: [
          { t: "Eğlenceli, dans edilesi", w: { enerji: 2 } },
          { t: "Az söz, çok atmosfer", w: { sakin: 2 } },
          { t: "Anlamlı ve hüzünlü", w: { melankolik: 2 } },
          { t: "Gece, şehir, yalnızlık", w: { gece: 2 } },
          { t: "Derin ve garip", w: { kaos: 2 } }
        ]
      },
      {
        q: "Playlist'inin adı ne olurdu?",
        a: [
          { t: "\"Mutlu ol\"", w: { enerji: 2 } },
          { t: "\"Derin nefes\"", w: { sakin: 2 } },
          { t: "\"Yağmur\"", w: { melankolik: 2 } },
          { t: "\"03:00\"", w: { gece: 2 } },
          { t: "\"Deneme\"", w: { kaos: 2 } }
        ]
      },
      {
        q: "Konserde neredesin?",
        a: [
          { t: "Ön sırada, zıplıyorum", w: { enerji: 2 } },
          { t: "Arkada, oturarak, dinliyorum", w: { sakin: 2 } },
          { t: "Gözlerim dolu, şarkıya eşlik ediyorum", w: { melankolik: 2 } },
          { t: "Mekânın havasını soluyorum", w: { gece: 2 } },
          { t: "Sahne arkasını merak ediyorum", w: { kaos: 2 } }
        ]
      },
      {
        q: "Ses seviyesi?",
        a: [
          { t: "Sonuna kadar", w: { enerji: 2 } },
          { t: "Orta, rahatsız etmeyen", w: { sakin: 2 } },
          { t: "Kulaklıkta yüksek, dünyayı kapat", w: { melankolik: 2 } },
          { t: "Gece için düşük, fon gibi", w: { gece: 2 } },
          { t: "Rastgele", w: { kaos: 2 } }
        ]
      },
      {
        q: "Müzik senin için ne?",
        a: [
          { t: "Enerji kaynağı", w: { enerji: 2 } },
          { t: "Kaçış ve huzur", w: { sakin: 2 } },
          { t: "Duyguların dili", w: { melankolik: 2 } },
          { t: "Gece arkadaşı", w: { gece: 2 } },
          { t: "Keşif alanı", w: { kaos: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "enerji",
        title: "Enerji Bombası",
        desc: "Müzik senin için bir yakıt. Tempolu bir şarkı ruh hâlini anında değiştirebiliyor. İnsanlar senin enerjini seviyor; sen de onu paylaşmayı seviyorsun.",
        tags: ["hareketli", "pozitif", "sosyal"]
      },
      {
        id: "sakin",
        title: "Sakin Dalga",
        desc: "Gürültüyü değil, derinliği arıyorsun. Ambient, akustik, lo-fi... Müzik senin için bir nefes alma alanı. Bu dinginlik çevrendekilere de iyi geliyor.",
        tags: ["dingin", "huzurlu", "içsel"]
      },
      {
        id: "melankolik",
        title: "Melankolik Romantik",
        desc: "Hüzünlü şarkılar seni yıkmıyor, tam tersine iyi hissettiriyor. Duygularını müzikle işliyorsun. Romantik, derin ve biraz da eski kafalı bir tarafın var.",
        tags: ["duygusal", "romantik", "derin"]
      },
      {
        id: "gece",
        title: "Gece Kuşu",
        desc: "Şehir uyurken sen uyanıksın. Müziğin en çok geceye yakışıyor; kalabalık azalınca sesler netleşiyor. Yalnızlık senin için bir sorun değil, bir atmosfer.",
        tags: ["gece", "gizemli", "bağımsız"]
      },
      {
        id: "kaos",
        title: "Kaos",
        desc: "Tür, tür değil senin için. Bir gün metal, bir gün caz, bir gün bilmediğin bir dilde bir şey. Keşfetmek senin müziği dinleme biçimin; sıkılmak sana göre değil.",
        tags: ["meraklı", "deneysel", "özgür"]
      }
    ]
  },

  /* ---------------------------------------------------------- kahve */
  {
    id: "hangi-kahve-sensin",
    title: "Hangi kahve senin ruhun?",
    category: "eğlence",
    mode: "personality",
    cover: "linear-gradient(135deg,#5a3a24 0%,#c98b4b 55%,#f3d9a4 100%)",
    accent: "#c98b4b",
    desc: "Sert mi, yumuşak mı, yoksa buz gibi mi? Sekiz soruda senin kahveni buluyoruz.",
    minutes: 3,
    questions: [
      {
        q: "Sabah uyandığında ilk düşüncen ne?",
        a: [
          { t: "Kahve. Şu an. Acil.", w: { espresso: 2 } },
          { t: "Bugün kimseyle konuşmasam da olur.", w: { turk: 2 } },
          { t: "Plan hazır: spor, duş, verimli gün.", w: { espresso: 1, filtre: 1 } },
          { t: "Yatakta biraz daha, telefonla.", w: { buzlu: 2 } },
          { t: "Sevdiklerime günaydın yazacağım.", w: { latte: 2 } }
        ]
      },
      {
        q: "Kahveni nasıl içersin?",
        a: [
          { t: "Sade, sert, tek yudum", w: { espresso: 2 } },
          { t: "Bol sütlü, yumuşak", w: { latte: 2 } },
          { t: "Buzlu, soğuk, ferah", w: { buzlu: 2 } },
          { t: "Cezvede, falıyla birlikte", w: { turk: 2 } },
          { t: "Filtre, uzun uzun, yudum yudum", w: { filtre: 2 } }
        ]
      },
      {
        q: "Bir kafe seçeceksin. Kriterin ne?",
        a: [
          { t: "Hızlı servis, ayakta içip çıkacağım", w: { espresso: 2 } },
          { t: "Pencere kenarı, sessiz bir köşe", w: { filtre: 2 } },
          { t: "Fotoğraflık, trend, herkes orada", w: { buzlu: 2 } },
          { t: "Eski, ahşap, müdavimlerin yeri", w: { turk: 2 } },
          { t: "Rahat koltuk, uzun sohbet", w: { latte: 2 } }
        ]
      },
      {
        q: "Kötü bir gün geçirdin. Ne yaparsın?",
        a: [
          { t: "Kısa bir yürüyüş, hemen toparlanırım", w: { espresso: 2 } },
          { t: "Battaniye, dizi, sıcak bir şey", w: { latte: 2 } },
          { t: "Arkadaşları çağırırım, dışarı çıkarız", w: { buzlu: 2 } },
          { t: "Tek başıma oturur, düşünürüm", w: { filtre: 2 } },
          { t: "Ailemin yanına giderim", w: { turk: 2 } }
        ]
      },
      {
        q: "Üç günlük tatil planın?",
        a: [
          { t: "Şehir turu: müze, yürüyüş, maraton", w: { espresso: 1, buzlu: 1 } },
          { t: "Sahil, kitap, hiçbir plan yok", w: { filtre: 2 } },
          { t: "Her gün yeni bir mekân, yeni bir insan", w: { buzlu: 2 } },
          { t: "Köy, sakinlik, telefon çekmese de olur", w: { turk: 2 } },
          { t: "Sevdiklerimle aynı ev, bol kahvaltı", w: { latte: 2 } }
        ]
      },
      {
        q: "Sosyal medyada seni en çok ne anlatır?",
        a: [
          { t: "Neredeyse hiç paylaşım yapmam", w: { filtre: 2 } },
          { t: "Estetik kareler, iyi ışık", w: { buzlu: 2 } },
          { t: "Anlık hikâyeler, kaotik enerji", w: { espresso: 1, latte: 1 } },
          { t: "Eski fotoğraflar, nostalji", w: { turk: 2 } },
          { t: "Sohbetler, DM'ler, bağlantılar", w: { latte: 2 } }
        ]
      },
      {
        q: "Arkadaşların seni nasıl tanımlar?",
        a: [
          { t: "İşini bilen, net, dolambaçsız", w: { espresso: 2 } },
          { t: "Sıcak, herkese yer var", w: { latte: 2 } },
          { t: "Enerjisi yüksek, biraz kaos", w: { buzlu: 2 } },
          { t: "Sakin, dinleyen, acele etmeyen", w: { filtre: 2 } },
          { t: "Köklerine bağlı, geleneksel", w: { turk: 2 } }
        ]
      },
      {
        q: "Bir karar vereceksin. Yöntemin?",
        a: [
          { t: "Hızlıca, sezgime güvenirim", w: { espresso: 2 } },
          { t: "Artı ve eksileri yazarım", w: { filtre: 2 } },
          { t: "Herkese sorarım, fikirleri dinlerim", w: { latte: 2 } },
          { t: "Denerim, yaşayarak öğrenirim", w: { buzlu: 2 } },
          { t: "Büyüklerime danışırım", w: { turk: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "espresso",
        title: "Espresso",
        desc: "Az, öz, sert. Lafı uzatmazsın; bir işi ya tam yaparsın ya hiç. İnsanlar seni bazen fazla ciddi bulur, oysa sen sadece zamanını boşa harcamak istemiyorsun. Yüksek dozda enerji, düşük dozda sabır.",
        tags: ["net", "hızlı", "yoğun"]
      },
      {
        id: "latte",
        title: "Latte",
        desc: "Yumuşak, sıcak, herkesin kendini iyi hissettiği bir tarafın var. İnsanları bir araya getirir, ortamı yumuşatırsın. Kendi sınırlarını bazen unutuyorsun; biraz da kendine yer aç.",
        tags: ["sıcak", "sosyal", "denge"]
      },
      {
        id: "filtre",
        title: "Filtre Kahve",
        desc: "Acelen yok; her şeyin zamanla oturacağına inanıyorsun. Sessizliği, uzun sohbetleri ve küçük ritüelleri seversin. Dışarıdan sakin görünürsün ama kafanın içinde hep bir şeyler demleniyor.",
        tags: ["sakin", "düşünceli", "ritüel"]
      },
      {
        id: "buzlu",
        title: "Buzlu Latte",
        desc: "Serin, dinamik, biraz da gösterişli. Yeniliği seviyorsun; aynı yerde uzun süre kalmak seni sıkıyor. Enerjin bulaşıcı, ama bazen her şeyi aynı anda yapmaya çalışmaktan yoruluyorsun.",
        tags: ["dinamik", "meraklı", "trend"]
      },
      {
        id: "turk",
        title: "Türk Kahvesi",
        desc: "Geleneksel, derin ve sabırlı. Bir fincan kahvenin kırk yıl hatırı olduğuna inananlardansın. Köklerin, anıların ve ritüellerin senin için önemli. Yavaş ama unutulmaz bir iz bırakıyorsun.",
        tags: ["gelenek", "derin", "sadık"]
      }
    ]
  },

  /* ---------------------------------------------------------- arkadaşlık */
  {
    id: "ne-kadar-iyi-bir-arkadassin",
    title: "Ne kadar iyi bir arkadaşsın?",
    category: "ilişki",
    mode: "personality",
    cover: "linear-gradient(135deg,#6ee7d8 0%,#4b9dff 55%,#b79cff 100%)",
    accent: "#4b9dff",
    desc: "Sır tutar mısın, yoksa her şeyi şakaya mı bağlarsın? Sekiz soruda arkadaşlık tarzını çıkarıyoruz.",
    minutes: 3,
    questions: [
      {
        q: "Arkadaşın gece üçte arıyor. Ne yaparsın?",
        a: [
          { t: "Açarım: \"Ne oldu, iyi misin?\"", w: { yakin: 2 } },
          { t: "Mesaj atarım: \"Sabah konuşalım.\"", w: { mesafeli: 1, dinleyen: 1 } },
          { t: "Açarım, bir espriyle ortamı yumuşatırım", w: { eglence: 2 } },
          { t: "Dinlerim, çözüm bulana kadar bırakmam", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Doğum günü yaklaşıyor. Planın?",
        a: [
          { t: "Unutmam, günler önceden plan yaparım", w: { yakin: 2 } },
          { t: "Bir mesaj yeter, abartmaya gerek yok", w: { mesafeli: 2 } },
          { t: "Sürpriz parti, herkesi çağırırım", w: { eglence: 2 } },
          { t: "Onun gerçekten istediği küçük bir şey alırım", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Sana bir sır verildi. Sonra ne olur?",
        a: [
          { t: "Mezara gider, kimseye söylemem", w: { yakin: 2 } },
          { t: "Kimseye söylemem ama bazen unuturum", w: { mesafeli: 1, dinleyen: 1 } },
          { t: "Ciddi tutarım ama espriye malzeme olur", w: { eglence: 1, yakin: 1 } },
          { t: "Detayları not ederim, çünkü önemli", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşınla ciddi bir tartışma yaşadın. Ne yaparsın?",
        a: [
          { t: "Yüzleşirim, konuşmadan rahat edemem", w: { yakin: 2 } },
          { t: "Uzaklaşırım, kafamı toplayınca dönerim", w: { mesafeli: 2 } },
          { t: "Şakaya bağlarım, gerginliği dağıtırım", w: { eglence: 2 } },
          { t: "Onu dinlerim, anlamaya çalışırım", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşın büyük bir başarı kazandı. İçinden ne geçer?",
        a: [
          { t: "İçten sevinirim, onunla gurur duyarım", w: { yakin: 2 } },
          { t: "Kıskanırım ama belli etmem", w: { mesafeli: 2 } },
          { t: "Kutlama organize ederim, bu an kutlanmalı", w: { eglence: 2 } },
          { t: "Nasıl daha da ileri gidebileceğini konuşurum", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşın zor bir dönemden geçiyor. Sen?",
        a: [
          { t: "Ararım, \"kapıdayım\" derim", w: { yakin: 2 } },
          { t: "Beklerim, isterse gelsin", w: { mesafeli: 2 } },
          { t: "Moral veririm, güldürmeye çalışırım", w: { eglence: 2 } },
          { t: "Dinlerim, yargılamam, tavsiye dayatmam", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Ortak bir plan yapılıyor. Senin rolün?",
        a: [
          { t: "Organize ederim, herkesi toparlarım", w: { yakin: 1, eglence: 1 } },
          { t: "Uyarım, sürpriz olmasın, net olsun", w: { mesafeli: 2 } },
          { t: "Son anda planı değiştiririm, hayat kısa", w: { eglence: 2 } },
          { t: "Herkesin isteğini sorar, ortak nokta bulurum", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşın senin için hangi cümleyi söyler?",
        a: [
          { t: "Sen olmasan ne yapardım, bilmiyorum", w: { yakin: 2 } },
          { t: "Bazen uzak duruyorsun ama kötü biri değilsin", w: { mesafeli: 2 } },
          { t: "Seninle her yer eğlenceli", w: { eglence: 2 } },
          { t: "Seni dinlemek bana iyi geliyor", w: { dinleyen: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "yakin",
        title: "Sırt Dayanan",
        desc: "Arkadaşlık senin için bir söz: zor günde aranacak kişi olmak. Sadakatin ve cesaretin çevrendekilere güven veriyor. Bazen herkesin yükünü taşımaya çalışıyorsun; senin de birine yaslanmaya hakkın var.",
        tags: ["sadık", "güvenilir", "cesur"]
      },
      {
        id: "mesafeli",
        title: "Mesafeli",
        desc: "Yakınlık senin için yavaş inşa edilen bir şey. Herkesle samimi olmak zorunda değilsin; seçtiğin birkaç kişiye derin bağlarla bağlanırsın. Sınırlarını koruman güzel, ama bazen kapıyı biraz aralaman yeterli.",
        tags: ["sınırlar", "seçici", "bağımsız"]
      },
      {
        id: "eglence",
        title: "Eğlence Perisi",
        desc: "Topluluğun enerjisi sensin. Gerginliği dağıtır, herkesi güldürür, anıyı unutulmaz yaparsın. Ama bazen her şeyin şakaya bağlanması, gerçek duyguların görünmesini engelliyor. Ciddi anlar da seninle güzel.",
        tags: ["eğlenceli", "enerjik", "sosyal"]
      },
      {
        id: "dinleyen",
        title: "Dinleyen Kulak",
        desc: "İnsanlar sana anlatır çünkü yargılamadan dinlersin. Detayları hatırlar, doğru anda doğru şeyi söylersin. Kendi ihtiyaçlarını geri plana atmamaya dikkat et; dinlenmek de senin hakkın.",
        tags: ["empati", "sabırlı", "güvenli"]
      }
    ]
  },

  /* ---------------------------------------------------------- türk dizi/film */
  {
    id: "turk-dizi-film-testi",
    title: "Türk dizi ve film testi",
    category: "bilgi",
    mode: "trivia",
    cover: "linear-gradient(135deg,#ff4b8a 0%,#7b4bff 55%,#0a0a0c 100%)",
    accent: "#ff4b8a",
    desc: "Hababam Sınıfı'ndan Yargı'ya, G.O.R.A.'dan Çukurova'ya: 12 soruluk nostalji turu.",
    minutes: 4,
    questions: [
      {
        q: "Hababam Sınıfı filmlerinde İnek Şaban'ı kim canlandırdı?",
        a: [
          { t: "Kemal Sunal", c: true },
          { t: "Tarık Akan" },
          { t: "Şener Şen" },
          { t: "Münir Özkul" }
        ],
        fact: "Kemal Sunal, İnek Şaban karakteriyle Türk sinemasının en sevilen figürlerinden biri oldu.",
        wiki: "https://tr.wikipedia.org/wiki/Kemal_Sunal"
      },
      {
        q: "\"Babam ve Oğlum\" filminin yönetmeni kimdir?",
        a: [
          { t: "Çağan Irmak", c: true },
          { t: "Nuri Bilge Ceylan" },
          { t: "Yılmaz Güney" },
          { t: "Ferzan Özpetek" }
        ],
        fact: "Çağan Irmak'ın 2005 yapımı filmi, bir ailenin dağılışını ve babalık ilişkisini anlatır.",
        wiki: "https://tr.wikipedia.org/wiki/Babam_ve_O%C4%9Flum"
      },
      {
        q: "\"Muhteşem Yüzyıl\" hangi padişahın dönemini anlatır?",
        a: [
          { t: "Kanuni Sultan Süleyman", c: true },
          { t: "Fatih Sultan Mehmet" },
          { t: "Yavuz Sultan Selim" },
          { t: "II. Abdülhamid" }
        ],
        fact: "Dizi, Kanuni Sultan Süleyman'ın saltanat yıllarını ve saraydaki ilişkileri konu alır.",
        wiki: "https://tr.wikipedia.org/wiki/Muhte%C5%9Fem_Y%C3%BCzy%C4%B1l"
      },
      {
        q: "\"Kurtlar Vadisi\"nin baş karakteri kimdir?",
        a: [
          { t: "Polat Alemdar", c: true },
          { t: "Süleyman Çakır" },
          { t: "Memati Baş" },
          { t: "Abdülhey Çoban" }
        ],
        fact: "Polat Alemdar, dizinin merkezindeki gizli ajan karakteridir.",
        wiki: "https://tr.wikipedia.org/wiki/Kurtlar_Vadisi"
      },
      {
        q: "\"Aşk-ı Memnu\" romanının yazarı kimdir?",
        a: [
          { t: "Halid Ziya Uşaklıgil", c: true },
          { t: "Reşat Nuri Güntekin" },
          { t: "Yakup Kadri Karaosmanoğlu" },
          { t: "Peyami Safa" }
        ],
        fact: "Halid Ziya Uşaklıgil'in romanı, yasak bir aşk etrafında dönen bir aile dramıdır.",
        wiki: "https://tr.wikipedia.org/wiki/A%C5%9Fk-%C4%B1_Memnu"
      },
      {
        q: "\"G.O.R.A.\" filminin başrolündeki komedyen kimdir?",
        a: [
          { t: "Cem Yılmaz", c: true },
          { t: "Ata Demirer" },
          { t: "Şahan Gökbakar" },
          { t: "Tolgahan Sayışman" }
        ],
        fact: "Cem Yılmaz, Arif karakteriyle uzay komedisinin unutulmazları arasına girdi.",
        wiki: "https://tr.wikipedia.org/wiki/G.O.R.A."
      },
      {
        q: "\"Leyla ile Mecnun\" dizisinde Mecnun'u kim canlandırdı?",
        a: [
          { t: "Ali Atay", c: true },
          { t: "Serkan Keskin" },
          { t: "Osman Sonant" },
          { t: "Ahmet Mümtaz Taylan" }
        ],
        fact: "Ali Atay'ın Mecnun yorumu, absürt mizahın sevilen örneklerinden biri oldu.",
        wiki: "https://tr.wikipedia.org/wiki/Leyla_ile_Mecnun_(dizi)"
      },
      {
        q: "\"Ezel\" dizisinde Ezel karakterini kim oynadı?",
        a: [
          { t: "Kenan İmirzalıoğlu", c: true },
          { t: "Cansel Elçin" },
          { t: "Barış Falay" },
          { t: "Tuncel Kurtiz" }
        ],
        fact: "Kenan İmirzalıoğlu, intikam peşindeki Ezel karakterine hayat verdi.",
        wiki: "https://tr.wikipedia.org/wiki/Ezel_(dizi)"
      },
      {
        q: "\"Yargı\" dizisinde savcı Ilgaz Kaya'yı kim canlandırıyor?",
        a: [
          { t: "Kaan Urgancıoğlu", c: true },
          { t: "Çağatay Ulusoy" },
          { t: "Barış Arduç" },
          { t: "İbrahim Çelikkol" }
        ],
        fact: "Kaan Urgancıoğlu, dizide savcı Ilgaz karakterini oynuyor.",
        wiki: "https://tr.wikipedia.org/wiki/Yarg%C4%B1_(dizi)"
      },
      {
        q: "\"Bir Zamanlar Çukurova\" dizisi hangi ilde geçer?",
        a: [
          { t: "Adana", c: true },
          { t: "İzmir" },
          { t: "Antalya" },
          { t: "Mersin" }
        ],
        fact: "Dizi, Adana'nın Çukurova bölgesinde geçen bir hikâyeyi anlatır.",
        wiki: "https://tr.wikipedia.org/wiki/Bir_Zamanlar_%C3%87ukurova"
      },
      {
        q: "\"Diriliş: Ertuğrul\" hangi tarihî kişiyi anlatır?",
        a: [
          { t: "Ertuğrul Gazi", c: true },
          { t: "Osman Gazi" },
          { t: "Orhan Gazi" },
          { t: "Süleyman Şah" }
        ],
        fact: "Dizi, Osmanlı Devleti'nin kuruluşuna giden yolda Ertuğrul Gazi'nin hikâyesini anlatır.",
        wiki: "https://tr.wikipedia.org/wiki/Dirili%C5%9F:_Ertu%C4%9Frul"
      },
      {
        q: "\"Avrupa Yakası\"nda Dilber Hala'yı kim canlandırdı?",
        a: [
          { t: "Binnur Kaya", c: true },
          { t: "Gülse Birsel" },
          { t: "Hasibe Eren" },
          { t: "Ata Demirer" }
        ],
        fact: "Binnur Kaya, Dilber Hala karakteriyle dizinin en akılda kalan isimlerinden oldu.",
        wiki: "https://tr.wikipedia.org/wiki/Avrupa_Yakas%C4%B1"
      }
    ],
    results: [
      { id: "dizi-0", min: 0, title: "Yeni Başlayan", desc: "Dizilerin adını duymuşsun ama detaylar biraz bulanık. Bir hafta sonu maratonu her şeyi düzeltir.", tags: ["başlangıç", "meraklı"] },
      { id: "dizi-1", min: 40, title: "Ekran Aşığı", desc: "Popüler yapımları takip ediyorsun. Birkaç klasik daha izlersen bu testi kolayca geçersin.", tags: ["izleyici", "gelişiyor"] },
      { id: "dizi-2", min: 70, title: "Dizi Uzmanı", desc: "Türk dizi ve film tarihine hâkimsin. Arkadaşların \"bu hangi diziydi?\" diye sana soruyor.", tags: ["uzman", "nostaljik"] },
      { id: "dizi-3", min: 90, title: "Ekran Efsanesi", desc: "Neredeyse hiç yanlış yok. Senin için TV kapanmıyor; arşiv hep açık.", tags: ["efsane", "arşiv"] }
    ]
  },

  /* ---------------------------------------------------------- dünya mutfağı */
  {
    id: "dunya-mutfagi",
    title: "Dünya mutfağı testi",
    category: "bilgi",
    mode: "trivia",
    cover: "linear-gradient(135deg,#ffd84b 0%,#ff8a4c 55%,#ff4b8a 100%)",
    accent: "#ff8a4c",
    desc: "Paella, sushi, taco, baklava... 12 soruda dünya mutfağında geziniyoruz.",
    minutes: 4,
    questions: [
      {
        q: "Paella hangi ülkenin mutfağına ait?",
        a: [
          { t: "İspanya", c: true },
          { t: "İtalya" },
          { t: "Portekiz" },
          { t: "Fransa" }
        ],
        fact: "Paella, Valencia bölgesinde pirinç, safran ve deniz ürünleriyle yapılan bir İspanyol yemeğidir.",
        wiki: "https://tr.wikipedia.org/wiki/Paella"
      },
      {
        q: "Sushi hangi ülkenin mutfağıyla özdeşleşmiştir?",
        a: [
          { t: "Japonya", c: true },
          { t: "Çin" },
          { t: "Kore" },
          { t: "Tayland" }
        ],
        fact: "Sushi, pirinç ve genellikle çiğ balıkla hazırlanan bir Japon mutfağı klasiğidir.",
        wiki: "https://tr.wikipedia.org/wiki/Sushi"
      },
      {
        q: "Taco hangi ülkenin sokak lezzetidir?",
        a: [
          { t: "Meksika", c: true },
          { t: "İspanya" },
          { t: "Brezilya" },
          { t: "Peru" }
        ],
        fact: "Taco, mısır veya buğday tortillası içine et, fasulye ve sebze konularak yapılır.",
        wiki: "https://tr.wikipedia.org/wiki/Taco"
      },
      {
        q: "Croissant hangi ülkenin mutfağıyla anılır?",
        a: [
          { t: "Fransa", c: true },
          { t: "Avusturya" },
          { t: "Belçika" },
          { t: "İsviçre" }
        ],
        fact: "Croissant'nın kökeni Viyana'ya dayansa da bugünkü haliyle Fransız fırınlarının simgesidir.",
        wiki: "https://tr.wikipedia.org/wiki/Croissant"
      },
      {
        q: "Pizza ilk olarak hangi İtalyan şehrinde ortaya çıktı?",
        a: [
          { t: "Napoli", c: true },
          { t: "Roma" },
          { t: "Milano" },
          { t: "Venedik" }
        ],
        fact: "Napoli, özellikle margarita pizzasıyla ünlü. Pizza napoletana UNESCO listesinde.",
        wiki: "https://tr.wikipedia.org/wiki/Pizza"
      },
      {
        q: "Kimchi hangi ülkenin fermente sebze yemeğidir?",
        a: [
          { t: "Kore", c: true },
          { t: "Japonya" },
          { t: "Çin" },
          { t: "Vietnam" }
        ],
        fact: "Kimchi, genellikle lahana ve turpla yapılan, baharatlı bir Kore fermente yiyeceğidir.",
        wiki: "https://tr.wikipedia.org/wiki/Kimchi"
      },
      {
        q: "Humus hangi bölgenin mutfağında öne çıkar?",
        a: [
          { t: "Orta Doğu", c: true },
          { t: "Balkanlar" },
          { t: "Güneydoğu Asya" },
          { t: "Kuzey Avrupa" }
        ],
        fact: "Humus, nohut, tahin, limon ve sarımsakla yapılan bir Orta Doğu mezesidir.",
        wiki: "https://tr.wikipedia.org/wiki/Humus"
      },
      {
        q: "Baklava hangi ülkenin mutfağının simgelerinden biridir?",
        a: [
          { t: "Türkiye", c: true },
          { t: "Yunanistan" },
          { t: "İran" },
          { t: "Lübnan" }
        ],
        fact: "Baklava, ince açılmış yufka, fıstık veya ceviz ve şerbetle yapılan bir tatlıdır.",
        wiki: "https://tr.wikipedia.org/wiki/Baklava"
      },
      {
        q: "Pad Thai hangi ülkenin mutfağına ait?",
        a: [
          { t: "Tayland", c: true },
          { t: "Vietnam" },
          { t: "Malezya" },
          { t: "Endonezya" }
        ],
        fact: "Pad Thai, pirinç eriştesi, yumurta, sebze ve sosla hazırlanan bir Tayland sokağı klasiğidir.",
        wiki: "https://tr.wikipedia.org/wiki/Pad_Thai"
      },
      {
        q: "Feijoada hangi ülkenin ulusal yemeklerinden biridir?",
        a: [
          { t: "Brezilya", c: true },
          { t: "Arjantin" },
          { t: "Kolombiya" },
          { t: "Şili" }
        ],
        fact: "Feijoada, siyah fasulye ve etle yapılan, Brezilya'da pirinçle servis edilen bir yemektir.",
        wiki: "https://tr.wikipedia.org/wiki/Feijoada"
      },
      {
        q: "Gulaş hangi ülkenin mutfağıyla anılır?",
        a: [
          { t: "Macaristan", c: true },
          { t: "Avusturya" },
          { t: "Çekya" },
          { t: "Polonya" }
        ],
        fact: "Gulaş, Macaristan'da kırmızı et, soğan ve paprika ile yapılan bir yahni türüdür.",
        wiki: "https://tr.wikipedia.org/wiki/Gula%C5%9F"
      },
      {
        q: "Tiramisu hangi ülkenin tatlısıdır?",
        a: [
          { t: "İtalya", c: true },
          { t: "Fransa" },
          { t: "İspanya" },
          { t: "Yunanistan" }
        ],
        fact: "Tiramisu, mascarpone, kahve ve kakao ile hazırlanan İtalyan kökenli bir tatlıdır.",
        wiki: "https://tr.wikipedia.org/wiki/Tiramisu"
      }
    ],
    results: [
      { id: "mutfak-0", min: 0, title: "Çatalı Yeni Aldın", desc: "Dünya mutfağı seni biraz zorladı. Bir yemek belgeseli aç, işler hızla değişir.", tags: ["başlangıç", "aç"] },
      { id: "mutfak-1", min: 40, title: "Meraklı Damak", desc: "Temel lezzetleri biliyorsun. Menüde yeni bir şey görünce denemekten korkmuyorsun.", tags: ["meraklı", "gelişiyor"] },
      { id: "mutfak-2", min: 70, title: "Gurme", desc: "Mutfağın coğrafyasını iyi biliyorsun. Arkadaşların yeni restoran seçerken sana soruyor.", tags: ["gurme", "bilgili"] },
      { id: "mutfak-3", min: 90, title: "Dünya Şefi", desc: "Neredeyse hepsini bildin. Senin için dünya bir menü, her ülke bir tarif.", tags: ["şef", "uzman"] }
    ]
  },

  /* ---------------------------------------------------------- şehir */
  {
    id: "hangi-sehirde-yasamalisin",
    title: "Hangi şehirde yaşamalısın?",
    category: "eğlence",
    mode: "personality",
    cover: "linear-gradient(135deg,#4b9dff 0%,#6ee7d8 55%,#ffd84b 100%)",
    accent: "#4b9dff",
    desc: "İstanbul'un kaosu mu, Lizbon'un sakinliği mi? Sekiz soruda sana uygun şehri buluyoruz.",
    minutes: 3,
    questions: [
      {
        q: "Sabah rutinin nasıl başlar?",
        a: [
          { t: "Simit, çay, vapur sesi", w: { istanbul: 2 } },
          { t: "Bisikletle parkta kısa bir tur", w: { berlin: 2 } },
          { t: "Okyanus manzarası ve espresso", w: { lizbon: 2 } },
          { t: "Metro, hız, kalabalık", w: { tokyo: 2 } },
          { t: "Koşu, bagel, haberler", w: { newyork: 2 } },
          { t: "Geç kahvaltı, güneş, plaj", w: { barselona: 2 } }
        ]
      },
      {
        q: "Çalışma ortamın nasıl olsun?",
        a: [
          { t: "Karmaşa içinde yaratıcılık", w: { istanbul: 2 } },
          { t: "Düzen, verimlilik, net kurallar", w: { berlin: 2 } },
          { t: "Deniz kenarı, sakin bir masa", w: { lizbon: 2 } },
          { t: "Teknoloji, dakiklik, sessizlik", w: { tokyo: 2 } },
          { t: "Hırs, networking, yüksek tempo", w: { newyork: 2 } },
          { t: "Sanat, esneklik, geç saatler", w: { barselona: 2 } }
        ]
      },
      {
        q: "Cuma gecesi planın?",
        a: [
          { t: "Meyhane, müzik, kalabalık", w: { istanbul: 2 } },
          { t: "Kulüp, tekno, sabaha kadar", w: { berlin: 2 } },
          { t: "Fado dinlemek, bir kadeh şarap", w: { lizbon: 2 } },
          { t: "Neon ışıklar, karaoke", w: { tokyo: 2 } },
          { t: "Rooftop parti, yeni insanlar", w: { newyork: 2 } },
          { t: "Tapas, sokak, gece yürüyüşü", w: { barselona: 2 } }
        ]
      },
      {
        q: "Bütçen ve konfor anlayışın?",
        a: [
          { t: "Kalabalıkla paylaşırım, esnek olur", w: { istanbul: 2 } },
          { t: "Dengeli, konforlu, planlı", w: { berlin: 2 } },
          { t: "Uygun fiyat, deniz, sadelik", w: { lizbon: 2 } },
          { t: "Pahalı ama düzenli ve güvenli", w: { tokyo: 2 } },
          { t: "Pahalı, hızlı, fırsatlarla dolu", w: { newyork: 2 } },
          { t: "Orta bütçe, canlı sokaklar", w: { barselona: 2 } }
        ]
      },
      {
        q: "Hava durumu tercihin?",
        a: [
          { t: "Dört mevsim bir günde, kaos", w: { istanbul: 2 } },
          { t: "Gri, serin, sakin", w: { berlin: 2 } },
          { t: "Güneş, rüzgar, okyanus", w: { lizbon: 2 } },
          { t: "Nemli, yağmurlu, mevsimli", w: { tokyo: 2 } },
          { t: "Sert kış, sıcak yaz", w: { newyork: 2 } },
          { t: "Neredeyse hep yaz", w: { barselona: 2 } }
        ]
      },
      {
        q: "Şehirde ulaşım denince?",
        a: [
          { t: "Vapur, yürüyüş, trafik", w: { istanbul: 2 } },
          { t: "Bisiklet, bisiklet, bisiklet", w: { berlin: 2 } },
          { t: "Tramvay, dik yokuşlar", w: { lizbon: 2 } },
          { t: "Kusursuz metro, dakiklik", w: { tokyo: 2 } },
          { t: "7/24 metro, sarı taksi", w: { newyork: 2 } },
          { t: "Yürüyüş, sahil, bisiklet", w: { barselona: 2 } }
        ]
      },
      {
        q: "Akşam yemeğinde ne olsun?",
        a: [
          { t: "Meze, balık, uzun sofra", w: { istanbul: 2 } },
          { t: "Döner, sokak yemeği, hızlı", w: { berlin: 2 } },
          { t: "Deniz ürünü, taze ekmek", w: { lizbon: 2 } },
          { t: "Ramen, sessiz bir köşe", w: { tokyo: 2 } },
          { t: "Burger, diner, koca porsiyon", w: { newyork: 2 } },
          { t: "Tapas, paylaşmak, geç saat", w: { barselona: 2 } }
        ]
      },
      {
        q: "Şehrini tek kelimeyle anlatsan?",
        a: [
          { t: "Köprü", w: { istanbul: 2 } },
          { t: "Özgürlük", w: { berlin: 2 } },
          { t: "Melankoli", w: { lizbon: 2 } },
          { t: "Düzen", w: { tokyo: 2 } },
          { t: "Hız", w: { newyork: 2 } },
          { t: "Tutku", w: { barselona: 2 } }
        ]
      }
    ],
    results: [
      {
        id: "istanbul",
        title: "İstanbul",
        desc: "Kaosun içinde bir ritim buluyorsun. İki kıta, üç bin yıl ve bitmeyen bir enerji... Sen de hem kalabalığı hem de köşene çekilmeyi aynı gün yaşayabilenlerdensin.",
        tags: ["kaotik", "tutkulu", "katmanlı"]
      },
      {
        id: "berlin",
        title: "Berlin",
        desc: "Özgürlük senin için bir yaşam biçimi. Düzenle bohemliği aynı masada buluşturuyorsun. Gece hayatı, sanat ve bisiklet: senin şehrin gri ama asla sıkıcı değil.",
        tags: ["özgür", "düzenli", "yaratıcı"]
      },
      {
        id: "lizbon",
        title: "Lizbon",
        desc: "Yavaşlık senin lüksün. Okyanus, yokuşlar ve melankolik şarkılar... Hayatı acele etmeden, tadını çıkararak yaşamak istiyorsun. Belki biraz nostaljik, ama kesinlikle sıkıcı değil.",
        tags: ["sakin", "nostaljik", "deniz"]
      },
      {
        id: "tokyo",
        title: "Tokyo",
        desc: "Düzen ve verimlilik seni rahatlatıyor. Kalabalığın içinde kendi sessiz balonunu kurmayı biliyorsun. Teknoloji, gelenek ve dakiklik bir arada: tam senlik.",
        tags: ["düzenli", "sakin", "modern"]
      },
      {
        id: "newyork",
        title: "New York",
        desc: "Hırs, hareket ve fırsat. \"Bir gün\" demeyi sevmiyorsun; \"bugün\" diyorsun. Şehir seni yorabilir ama asla sıkıcı olmaz. Hayatın bir maraton, sen de ön sıradasın.",
        tags: ["hırslı", "hızlı", "sosyal"]
      },
      {
        id: "barselona",
        title: "Barselona",
        desc: "Tutku ve estetik senin pusulan. Geç kahvaltılar, uzun akşam yemekleri, sanat ve deniz... Hayatı bir kutlama gibi yaşamak istiyorsun. Plan yapmak yerine anın tadını çıkarıyorsun.",
        tags: ["tutkulu", "sosyal", "yaratıcı"]
      }
    ]
  }
];

/* Küçük bir yazım hatası testi: sonuç id'leri karakterlerle eşleşmeli */
if (typeof window !== "undefined") window.TESTS = TESTS;
