/* ============================================================
   TESTHANE — ek sorular, fotoğraf kapakları ve güncel tanıtımlar
   El yapımı testleri bu dosya genişletir.
   ============================================================ */

const EXTRA_TESTS = {
  meta: {
    "hangi-istanbul-semtisin": {
      desc: "Ruhunun adresini on sekiz soruda buluyoruz. Bakalım hangi semtin havasını taşıyorsun.",
      minutes: 5
    },
    "ne-kadar-icene-donuksun": {
      desc: "Sosyal enerjini nerede harcıyorsun, nerede şarj ediyorsun? Yirmi soruda net cevap.",
      minutes: 4
    },
    "turkiye-genel-kultur": {
      desc: "Otuz soru, dört seçenek. Tarih, coğrafya, kültür ve şaşırtıcı detaylardan acımasız bir tarama.",
      minutes: 6
    },
    "hangi-dizi-karakterisin": {
      desc: "Bir dizinin içine girsem hangi karakter olurdum? On sekiz soruda cevabı veriyoruz.",
      minutes: 4
    },
    "mantik-ve-dikkat": {
      desc: "Matematik dehası olmana gerek yok; dikkat ve biraz sabır yeter. Yirmi beş sorunun bir kısmı tuzak.",
      minutes: 5
    },
    "toksik-misin": {
      desc: "Acımasız ama dürüst bir ayna. On sekiz soruda cevaplarını değiştirmek yok, ilk aklına geleni seç.",
      minutes: 4
    },
    "hangi-meslek-sana-uygun": {
      desc: "Maaş değil, karakter sorusu: hangi iş seni yormadan besler? On sekiz soruda işaretleri topluyoruz.",
      minutes: 4
    },
    "muzik-zevkine-gore-ruh-halin": {
      desc: "Kulaklığındaki şarkılar aslında seni anlatıyor. On sekiz soruda müzik zevkinden ruh hâlini okuyoruz.",
      minutes: 4
    },
    "hangi-kahve-sensin": {
      desc: "Sert mi, yumuşak mı, yoksa buz gibi mi? On sekiz soruda senin kahveni buluyoruz.",
      minutes: 4
    },
    "ne-kadar-iyi-bir-arkadassin": {
      desc: "Sır tutar mısın, yoksa her şeyi şakaya mı bağlarsın? On sekiz soruda arkadaşlık tarzını çıkarıyoruz.",
      minutes: 4
    },
    "turk-dizi-film-testi": {
      desc: "Hababam Sınıfı'ndan Yargı'ya, Yeşilçam'dan G.O.R.A.'ya: otuz dört soruluk dev nostalji turu.",
      minutes: 7
    },
    "dunya-mutfagi": {
      desc: "Paella, sushi, taco, baklava... Otuz iki soruda dünya mutfağında geziniyoruz.",
      minutes: 7
    },
    "hangi-sehirde-yasamalisin": {
      desc: "İstanbul'un kaosu mu, Lizbon'un sakinliği mi? On sekiz soruda sana uygun şehri buluyoruz.",
      minutes: 4
    }
  },

  covers: {
    "hangi-istanbul-semtisin": "istanbul",
    "ne-kadar-icene-donuksun": "icene-donukluk",
    "turkiye-genel-kultur": "kapadokya",
    "hangi-dizi-karakterisin": "televizyon",
    "mantik-ve-dikkat": "satranc",
    "toksik-misin": "narsisizm",
    "hangi-meslek-sana-uygun": "ofis",
    "muzik-zevkine-gore-ruh-halin": "konser",
    "hangi-kahve-sensin": "turk-kahvesi",
    "ne-kadar-iyi-bir-arkadassin": "arkadaslik",
    "turk-dizi-film-testi": "turk-sinemasi",
    "dunya-mutfagi": "baklava",
    "hangi-sehirde-yasamalisin": "lizbon"
  },

  questions: {
    "hangi-istanbul-semtisin": [
      {
        q: "Arkadaşlarınla akşam yemeği için yer seçiyorsun.",
        a: [
          { t: "Sahilde balık, uzun sofra", w: { kadikoy: 2, bakirkoy: 1 } },
          { t: "Şık bir restoran, iyi servis", w: { nisantasi: 2 } },
          { t: "Meyhane, canlı müzik, kalabalık", w: { beyoglu: 2 } },
          { t: "Sakin bir çay bahçesi, erken biter", w: { uskudar: 2 } },
          { t: "Spor sonrası pratik ve lezzetli bir yer", w: { besiktas: 2 } }
        ]
      },
      {
        q: "Yeni bir semte taşınacaksın. En çok neye bakarsın?",
        a: [
          { t: "Denize yakınlık ve sahil yürüyüşü", w: { bakirkoy: 2, kadikoy: 1 } },
          { t: "Gece hayatı ve sokağın enerjisi", w: { beyoglu: 2 } },
          { t: "Park, spor salonu, temiz sokaklar", w: { besiktas: 2 } },
          { t: "Kafe kalitesi ve vitrinler", w: { nisantasi: 2 } },
          { t: "Sessizlik ve komşuluk", w: { uskudar: 2 } },
          { t: "Pazar, esnaf, bohem sokaklar", w: { kadikoy: 2 } }
        ]
      },
      {
        q: "Bir arkadaşın seni son dakika bir etkinliğe çağırdı.",
        a: [
          { t: "Hemen evet, zaten dışarı çıkmak istiyordum", w: { beyoglu: 2, kadikoy: 1 } },
          { t: "Nerede, kim var, ne giyilir? Önce öğrenirim", w: { nisantasi: 2 } },
          { t: "Sahil kenarıysa gelirim", w: { bakirkoy: 2 } },
          { t: "Aktif bir şeyse varım", w: { besiktas: 2 } },
          { t: "Evde kalmayı tercih ederim, iyi eğlenceler", w: { uskudar: 2 } }
        ]
      },
      {
        q: "Şehre gelen misafirini bir günde nereye götürürsün?",
        a: [
          { t: "Tarihî yarımada: camiler, saraylar, turistik tur", w: { nisantasi: 1, beyoglu: 1 } },
          { t: "Kadıköy pazarı, sahil, vapur", w: { kadikoy: 2 } },
          { t: "Beşiktaş'tan vapur, sahilde uzun yürüyüş", w: { besiktas: 2 } },
          { t: "Beyoğlu'nda sokak sokak dolaşmak", w: { beyoglu: 2 } },
          { t: "Üsküdar'da sakin bir gün, çay ve manzara", w: { uskudar: 2 } },
          { t: "Bakırköy'de deniz kenarı, kahvaltı, keyif", w: { bakirkoy: 2 } }
        ]
      },
      {
        q: "Evde tek başına bir akşam geçireceksin.",
        a: [
          { t: "Yeni bir albüm açıp pencereyi kapatırım", w: { kadikoy: 2 } },
          { t: "Şehir ışıklarına karşı bir şeyler içerim", w: { beyoglu: 2 } },
          { t: "Erken yatarım, yarın sporum var", w: { besiktas: 2 } },
          { t: "Bir film, iyi bir atıştırmalık, huzur", w: { bakirkoy: 2 } },
          { t: "Çay demler, kitap açar, telefonu kapatırım", w: { uskudar: 2 } },
          { t: "Cilt bakımı, düzen, güzel bir akşam rutini", w: { nisantasi: 2 } }
        ]
      },
      {
        q: "Alışverişe çıktığında seni en çok ne heyecanlandırır?",
        a: [
          { t: "İkinci el dükkanlarda bulduğum hazineler", w: { kadikoy: 2 } },
          { t: "Yeni sezon, kaliteli kumaş, iyi kesim", w: { nisantasi: 2 } },
          { t: "Spor ekipmanı ve teknik detaylar", w: { besiktas: 2 } },
          { t: "Rahat, gündelik, deniz kenarında giyilecek şeyler", w: { bakirkoy: 2 } },
          { t: "Sade, işlevsel, gereksiz hiçbir şey yok", w: { uskudar: 1, besiktas: 1 } },
          { t: "Sokakta gezerken karşıma çıkan küçük dükkanlar", w: { beyoglu: 2 } }
        ]
      },
      {
        q: "Trafikte sıkıştın. Tepkin ne olur?",
        a: [
          { t: "Müzik açarım, bir şekilde akar", w: { bakirkoy: 2, kadikoy: 1 } },
          { t: "Sinirlerim bozulur, kısa yolu düşünürüm", w: { beyoglu: 2 } },
          { t: "Bu saatte bu yola neden çıktım diye plan yaparım", w: { besiktas: 2, nisantasi: 1 } },
          { t: "Sabırla beklerim, yapacak bir şey yok", w: { uskudar: 2 } },
          { t: "Arabayı bırakıp yürümeyi düşünürüm", w: { kadikoy: 2 } }
        ]
      },
      {
        q: "Yeni işin için bir ofis seçeceksin. Nerede olsun?",
        a: [
          { t: "Merkezde, her yere yürüme mesafesinde", w: { beyoglu: 2 } },
          { t: "Sahilde, pencereden deniz görünsün", w: { bakirkoy: 2 } },
          { t: "Prestijli bir plaza, iyi bir adres", w: { nisantasi: 2 } },
          { t: "Sakin, huzurlu, işe odaklanacağım bir yer", w: { uskudar: 2 } },
          { t: "Genç, dinamik, spor salonu olan bir yer", w: { besiktas: 2, kadikoy: 1 } }
        ]
      },
      {
        q: "Gece yürüyüşüne çıktın. Rotan neresi?",
        a: [
          { t: "Sahil boyunca, deniz sesiyle", w: { bakirkoy: 2, kadikoy: 1 } },
          { t: "Ara sokaklar, açık dükkanlar, insanlar", w: { beyoglu: 2 } },
          { t: "Işıklı caddeler, vitrinler, güvenli bir güzergah", w: { nisantasi: 2 } },
          { t: "Sessiz sokaklar, kimseyle karşılaşmadan", w: { uskudar: 2 } },
          { t: "Park çevresi, tempolu bir yürüyüş", w: { besiktas: 2 } }
        ]
      },
      {
        q: "Bir yabancıya İstanbul'u tek cümleyle anlatacaksın.",
        a: [
          { t: "\"Biraz her şey, biraz hiçbir şey; tam bir kaos.\"", w: { beyoglu: 2 } },
          { t: "\"Deniz, simit ve martı; burada yavaşlamayı öğrenirsin.\"", w: { bakirkoy: 2, kadikoy: 1 } },
          { t: "\"Her köşede tarih, her sabahta yeni bir başlangıç.\"", w: { nisantasi: 1, uskudar: 1 } },
          { t: "\"Enerjisi yüksek, ritmi hızlı; kendine yer açmalısın.\"", w: { besiktas: 2 } },
          { t: "\"Kalabalığın içinde huzur bulmayı öğretir.\"", w: { uskudar: 2 } },
          { t: "\"Bir yakası ayrı, öbür yakası bambaşka.\"", w: { kadikoy: 2 } }
        ]
      }
    ],

    "ne-kadar-icene-donuksun": [
      {
        q: "İş yerinde öğle arası geldi. Ne yaparsın?",
        a: [
          { t: "Herkese katılır, kalabalık masaya otururum", w: { disa: 2 } },
          { t: "Bir iki yakın arkadaşla çıkarım", w: { denge: 2 } },
          { t: "Kulaklığımı takar, yalnız yürürüm", w: { intro: 2 } },
          { t: "Kim nereye gidiyor diye bakar, ona göre karar veririm", w: { buka: 2 } }
        ]
      },
      {
        q: "Tanımadığın insanlarla bir hafta tatile çıktın.",
        a: [
          { t: "Tanışır, grubun enerjisini yükseltirim", w: { disa: 2 } },
          { t: "Yavaş yavaş ısınır, birkaç kişiyle yakınlaşırım", w: { denge: 2 } },
          { t: "Kendi planımı yapar, herkesle mesafemi korurum", w: { intro: 2 } },
          { t: "Gruba uyar, ortama göre şekil alırım", w: { buka: 2 } }
        ]
      },
      {
        q: "Bir arkadaşın derdini anlatmaya başladı.",
        a: [
          { t: "Hemen ararım, yanına giderim", w: { disa: 1, denge: 1 } },
          { t: "Uzun uzun dinler, doğru soruları sorarım", w: { denge: 2 } },
          { t: "Yazışarak dinlemeyi tercih ederim", w: { intro: 2 } },
          { t: "O an neye ihtiyacı varsa ona göre davranırım", w: { buka: 2 } }
        ]
      },
      {
        q: "Doğum günün yaklaşıyor. Nasıl geçsin?",
        a: [
          { t: "Büyük bir parti, herkes gelsin", w: { disa: 2 } },
          { t: "Yakın arkadaşlarla küçük bir yemek", w: { denge: 2 } },
          { t: "Evde, kendimle, hiçbir zorunluluk olmadan", w: { intro: 2 } },
          { t: "Kimin geleceğine göre plan yaparım", w: { buka: 2 } }
        ]
      },
      {
        q: "Sinemada yanına tanımadığın biri oturdu.",
        a: [
          { t: "Merhaba der, muhabbet başlatırım", w: { disa: 2 } },
          { t: "Kısa bir selam, sonra filmime dönerim", w: { denge: 2 } },
          { t: "İçimden \"keşke boş kalsaydı\" derim", w: { intro: 2 } },
          { t: "Ortam nasılsa ona uyarım", w: { buka: 2 } }
        ]
      },
      {
        q: "Bir konferansta kahve molası var.",
        a: [
          { t: "Hemen yeni insanlarla tanışırım", w: { disa: 2 } },
          { t: "Tanıdık birini bulur, onunla sohbet ederim", w: { denge: 2 } },
          { t: "Telefonuma bakar, köşede tek başıma dururum", w: { intro: 2 } },
          { t: "Kim açık görünüyorsa ona yaklaşırım", w: { buka: 2 } }
        ]
      },
      {
        q: "Komşun kapıyı çaldı, beş dakika sohbet etmek istiyor.",
        a: [
          { t: "Buyur ederim, çay koyarım", w: { disa: 2 } },
          { t: "Kapıda konuşuruz, sonra işime dönerim", w: { denge: 2 } },
          { t: "Kısa ve net cevap verir, kapatırım", w: { intro: 2 } },
          { t: "Moduma göre ya içeri alır ya kapıda tutarım", w: { buka: 2 } }
        ]
      },
      {
        q: "Uzun bir hafta sonun var. Planın?",
        a: [
          { t: "Dışarı çıkar, her gün birini görürüm", w: { disa: 2 } },
          { t: "Bir gün sosyal, bir gün kendime", w: { denge: 2 } },
          { t: "Evde kalır, kimseye haber vermem", w: { intro: 2 } },
          { t: "Davet gelirse gider, gelmezse evde kalırım", w: { buka: 2 } }
        ]
      },
      {
        q: "Sohbet bitti, karşındaki susuyor. Sessizlik?",
        a: [
          { t: "Hemen yeni bir konu açarım", w: { disa: 2 } },
          { t: "Rahatım, sessizlik de sohbetin parçası", w: { denge: 2 } },
          { t: "İçimden \"oh be\" derim", w: { intro: 2 } },
          { t: "Karşımdakinin rahat olup olmadığına göre davranırım", w: { buka: 2 } }
        ]
      },
      {
        q: "Yeni bir hobi edineceksin. Hangisi daha çekici?",
        a: [
          { t: "Dans kursu, hemen kaydolurum", w: { disa: 2 } },
          { t: "Bir arkadaşla birlikte başlayacağım bir şey", w: { denge: 2 } },
          { t: "Evde tek başıma yapabileceğim bir şey", w: { intro: 2 } },
          { t: "Önce deneyip ortama bakacağım", w: { buka: 2 } }
        ]
      }
    ],

    "hangi-dizi-karakterisin": [
      {
        q: "Bir sır öğrendin. Ne yaparsın?",
        a: [
          { t: "Dayanamam, birine çıtlatırım", w: { kaos: 2 } },
          { t: "Not alır, doğru zamanda kullanırım", w: { stratejist: 2 } },
          { t: "Sırrı taşıyan kişiye destek olurum", w: { kalp: 2 } },
          { t: "Şakaya bağlar, ortamı yumuşatırım", w: { komik: 2 } },
          { t: "Kimseye söylemem, izlerim", w: { golge: 2 } }
        ]
      },
      {
        q: "Bir partide ilk saat nasıl geçiyor?",
        a: [
          { t: "Herkesle konuşur, ortamı karıştırırım", w: { kaos: 2 } },
          { t: "Kim kiminle, ne konuşuluyor; gözlemlerim", w: { stratejist: 1, golge: 1 } },
          { t: "Yalnız görünen biriyle sohbet ederim", w: { kalp: 2 } },
          { t: "Espri yapar, grubu güldürürüm", w: { komik: 2 } },
          { t: "Kenarda durur, çıkış saatini düşünürüm", w: { golge: 2 } }
        ]
      },
      {
        q: "Bir ekip kuruyorsun. Rol dağılımı nasıl olur?",
        a: [
          { t: "Herkesi cesaretlendirir, kaosu başlatırım", w: { kaos: 2 } },
          { t: "Planı yapar, görevleri netleştiririm", w: { stratejist: 2 } },
          { t: "Herkesin iyi olduğu işi yapmasını sağlarım", w: { kalp: 2 } },
          { t: "Morali yüksek tutar, molalarda espri yaparım", w: { komik: 2 } },
          { t: "Perde arkasında bilgi toplarım", w: { golge: 2 } }
        ]
      },
      {
        q: "Hoşlandığın kişi sana açıldı.",
        a: [
          { t: "Ben de açılır, işi büyütürüm", w: { kaos: 2 } },
          { t: "Duygularımı analiz eder, adım adım ilerlerim", w: { stratejist: 2 } },
          { t: "Karşılık verir, ona güven veririm", w: { kalp: 2 } },
          { t: "Şaka yapar, ortamı hafifletirim", w: { komik: 2 } },
          { t: "Şaşırır, bir süre sessiz kalırım", w: { golge: 2 } }
        ]
      },
      {
        q: "Bir haksızlık gördün.",
        a: [
          { t: "Ortalığı ayağa kaldırırım", w: { kaos: 2 } },
          { t: "Kanıt toplar, doğru kişiye ulaştırırım", w: { stratejist: 2 } },
          { t: "Mağdurun yanında dururum", w: { kalp: 2 } },
          { t: "Ortamı yumuşatacak bir şey söylerim", w: { komik: 2 } },
          { t: "Gölgeden izler, gerektiğinde konuşurum", w: { golge: 2 } }
        ]
      },
      {
        q: "Sosyal medyada nasıl bir karakterin olurdu?",
        a: [
          { t: "Sürekli paylaşım, bol etkileşim", w: { kaos: 2 } },
          { t: "Planlı içerik, güçlü bir marka", w: { stratejist: 2 } },
          { t: "Samimi, sıcak, insanlara dokunan paylaşımlar", w: { kalp: 2 } },
          { t: "Komik videolar, saçma capsler", w: { komik: 2 } },
          { t: "Neredeyse hiç paylaşım yok", w: { golge: 2 } }
        ]
      },
      {
        q: "Bir yol ayrımındasın. Karar verirken?",
        a: [
          { t: "İçimden gelen sesi dinler, atlarım", w: { kaos: 2 } },
          { t: "Artıları eksileri yazar, en iyisini seçerim", w: { stratejist: 2 } },
          { t: "Sevdiklerime danışırım", w: { kalp: 2 } },
          { t: "Şansa bırakır, olursa olur derim", w: { komik: 2 } },
          { t: "Uzun süre düşünür, kimseye söylemem", w: { golge: 2 } }
        ]
      },
      {
        q: "Dizinin afişinde sen nerede olurdun?",
        a: [
          { t: "Tam ortada, en dikkat çekici yerde", w: { kaos: 2 } },
          { t: "Merkezde, ciddiyetle kameraya bakarken", w: { stratejist: 2 } },
          { t: "Birinin omzuna dokunurken", w: { kalp: 2 } },
          { t: "Kenarda, komik bir ifadeyle", w: { komik: 2 } },
          { t: "Arka planda, yüzü yarı gölgede", w: { golge: 2 } }
        ]
      },
      {
        q: "Hikâyenin yan karakteri olsan hangisi olurdun?",
        a: [
          { t: "Ortalığı karıştıran ama sevilen arkadaş", w: { kaos: 2 } },
          { t: "Herkesin danıştığı akıllı kişi", w: { stratejist: 2 } },
          { t: "Baş karakterin vicdanı", w: { kalp: 2 } },
          { t: "Her sahnede bir espri yapan kişi", w: { komik: 2 } },
          { t: "İzleyicinin en çok merak ettiği gizemli kişi", w: { golge: 2 } }
        ]
      },
      {
        q: "Son sezonun finali senin için nasıl olmalı?",
        a: [
          { t: "Büyük patlama, herkes şokta", w: { kaos: 2 } },
          { t: "Her şeyin yerine oturduğu akıllıca bir final", w: { stratejist: 2 } },
          { t: "Sevdiklerinle huzurlu bir kapanış", w: { kalp: 2 } },
          { t: "Son sahnede bile güldüren bir final", w: { komik: 2 } },
          { t: "Açık uçlu, gizemli bir veda", w: { golge: 2 } }
        ]
      }
    ],

    "toksik-misin": [
      {
        q: "Bir mesaj attın, saatlerdir cevap yok.",
        a: [
          { t: "Meşguldür, cevap gelince konuşuruz", w: { yesil: 2 } },
          { t: "Bir daha yazar, neden cevap vermediğini sorarım", w: { sari: 2 } },
          { t: "Ben de onu görmezden gelirim", w: { kirmizi: 2 } },
          { t: "Israrla arar, hesap sorarım", w: { boss: 2 } }
        ]
      },
      {
        q: "Arkadaşın randevuya yirmi dakika geç kaldı.",
        a: [
          { t: "Sorun değil, bir şey olmuştur derim", w: { yesil: 2 } },
          { t: "Yüzüne söylerim ama büyütmem", w: { sari: 1, yesil: 1 } },
          { t: "Gün boyu laf sokarım", w: { kirmizi: 2 } },
          { t: "Bir daha beni bekletmeyeceğini bilir", w: { boss: 2 } }
        ]
      },
      {
        q: "Partnerinin telefonunda bir bildirim gördün.",
        a: [
          { t: "Görmezden gelir, gerekiyorsa sorarım", w: { yesil: 2 } },
          { t: "İçim içimi yer, ama belli etmem", w: { sari: 2 } },
          { t: "Hemen telefonu isterim", w: { kirmizi: 1, boss: 1 } },
          { t: "Şifresini bilmek benim hakkım", w: { boss: 2 } }
        ]
      },
      {
        q: "Bir hata yaptın ve karşındaki üzgün.",
        a: [
          { t: "Özür diler, telafi ederim", w: { yesil: 2 } },
          { t: "Özür dilerim ama nedenini de anlatırım", w: { sari: 1, yesil: 1 } },
          { t: "Konuyu kapatmaya çalışırım", w: { kirmizi: 1 } },
          { t: "Beni bu kadar iyi tanımalıydı", w: { boss: 2 } }
        ]
      },
      {
        q: "Eski sevgilin yeni bir ilişkiye başladı.",
        a: [
          { t: "Mutlu olsun, bana da hayırlısı", w: { yesil: 2 } },
          { t: "Bir süre üzülürüm, sonra devam ederim", w: { sari: 1, yesil: 1 } },
          { t: "Sosyal medyada laf sokarım", w: { kirmizi: 2 } },
          { t: "Yeni partnerine ulaşıp gerçekleri anlatırım", w: { boss: 2 } }
        ]
      },
      {
        q: "Bir arkadaşın sana sır verdi, ama sır onunla ilgili değil.",
        a: [
          { t: "Kimseye söylemem", w: { yesil: 2 } },
          { t: "Sadece çok güvendiğim birine çıtlatırım", w: { sari: 2 } },
          { t: "Ortamda ima eder, eğlenirim", w: { kirmizi: 2 } },
          { t: "Bilgiyi kullanır, avantaj sağlarım", w: { boss: 2 } }
        ]
      },
      {
        q: "Tartışma kızıştı. Ne yaparsın?",
        a: [
          { t: "Sakinleşmek için ara verir, sonra konuşurum", w: { yesil: 2 } },
          { t: "Son sözü söylemeden bırakmam", w: { sari: 2 } },
          { t: "Ağır konuşur, kalbini kırarım", w: { kirmizi: 2 } },
          { t: "Konuşmayı bitirir, istediğimi yaparım", w: { boss: 2 } }
        ]
      },
      {
        q: "Bir ilişki bitti. Toparlanma sürecin?",
        a: [
          { t: "Yas tutar, sonra hayatıma devam ederim", w: { yesil: 2 } },
          { t: "Bir süre eski mesajları okurum", w: { sari: 2 } },
          { t: "Eski sevgiliye hesap sorarım", w: { kirmizi: 2 } },
          { t: "Onu geri kazanana kadar pes etmem", w: { boss: 2 } }
        ]
      },
      {
        q: "Bir hediye aldın ama karşındaki pek sevinmedi.",
        a: [
          { t: "Beğenmediyse değiştiririz, önemli değil", w: { yesil: 2 } },
          { t: "Biraz bozulur, belli ederim", w: { sari: 2 } },
          { t: "\"Ne kadar nankörsün\" derim", w: { kirmizi: 2 } },
          { t: "Bir daha ona hiçbir şey almam", w: { boss: 2 } }
        ]
      },
      {
        q: "Kendini en çok hangi cümlede buldun?",
        a: [
          { t: "\"Hatalarımı görür, üzerine giderim.\"", w: { yesil: 2 } },
          { t: "\"Bazen haklı olduğumu kanıtlamak isterim.\"", w: { sari: 2 } },
          { t: "\"Kırıldığımda karşımdakini de kırarım.\"", w: { kirmizi: 2 } },
          { t: "\"Benim dediğim olur, gerisi teferruat.\"", w: { boss: 2 } }
        ]
      }
    ],

    "hangi-meslek-sana-uygun": [
      {
        q: "Sabah işe giderken seni en çok ne motive eder?",
        a: [
          { t: "Çözeceğim somut bir problem", w: { muhendis: 2 } },
          { t: "Üreteceğim güzel bir iş", w: { tasarimci: 2 } },
          { t: "Bilgi paylaşacağım insanlar", w: { ogretmen: 2 } },
          { t: "Yeni bir fırsat yakalama ihtimali", w: { girisimci: 2 } },
          { t: "Öğreneceğim yeni bir şey", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Karmaşık bir problemle karşılaştın.",
        a: [
          { t: "Parçalara ayırır, sistematik çözerim", w: { muhendis: 2 } },
          { t: "Önce kullanıcı deneyimine bakarım", w: { tasarimci: 2 } },
          { t: "Bunu birine anlatır, birlikte düşünürüz", w: { ogretmen: 2 } },
          { t: "Hızlıca bir çözüm üretip test ederim", w: { girisimci: 2 } },
          { t: "Kaynakları tarar, en doğru bilgiyi bulurum", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Bir sunum yapacaksın. Hazırlığın?",
        a: [
          { t: "Net bir yapı, veriler, grafikler", w: { muhendis: 2 } },
          { t: "Görsel olarak etkileyici bir sunum", w: { tasarimci: 2 } },
          { t: "Dinleyicinin seviyesine göre anlatım", w: { ogretmen: 2 } },
          { t: "Kısa, ikna edici, yatırımcı odaklı", w: { girisimci: 2 } },
          { t: "Detaylı kaynakça, sağlam içerik", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Ekipte biri işini yapmıyor.",
        a: [
          { t: "Süreci kontrol eder, nerede tıkandığını bulurum", w: { muhendis: 2 } },
          { t: "İşi yeniden tasarlar, daha anlaşılır hale getiririm", w: { tasarimci: 2 } },
          { t: "Konuşur, neden yapamadığını anlamaya çalışırım", w: { ogretmen: 2 } },
          { t: "Sorumluluğu alır, sonucu ben garanti ederim", w: { girisimci: 2 } },
          { t: "Verilere bakar, gerçek nedeni araştırırım", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Yeni bir şey öğrenirken?",
        a: [
          { t: "Adım adım uygular, pratik yaparım", w: { muhendis: 2 } },
          { t: "Görsel örnekler ve denemelerle öğrenirim", w: { tasarimci: 2 } },
          { t: "Başkasına anlatarak pekiştiririm", w: { ogretmen: 2 } },
          { t: "Hemen küçük bir projede kullanırım", w: { girisimci: 2 } },
          { t: "Kaynakları karşılaştırır, derinlemesine okurum", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Risk alma konusunda?",
        a: [
          { t: "Hesaplı risk alırım, önce test ederim", w: { muhendis: 2 } },
          { t: "Yaratıcı riski severim, yeni bir şey denemek gerek", w: { tasarimci: 2 } },
          { t: "İnsanlar etkilenecekse risk değer", w: { ogretmen: 2 } },
          { t: "Yüksek risk, yüksek getiri; geri adım atmam", w: { girisimci: 2 } },
          { t: "Kanıt yoksa risk almam", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "İdeal çalışma ortamın?",
        a: [
          { t: "Sessiz, düzenli, ekipmanı sağlam", w: { muhendis: 2 } },
          { t: "Renkli, esnek, ilham veren", w: { tasarimci: 2 } },
          { t: "İnsan dolu, sürekli etkileşim", w: { ogretmen: 2 } },
          { t: "Hızlı, rekabetçi, fırsatlarla dolu", w: { girisimci: 2 } },
          { t: "Sakin, odaklanmış, kaynaklara erişimi kolay", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Bir müşteri/kullanıcı memnun değil.",
        a: [
          { t: "Hatayı bulur, kalıcı çözüm üretirim", w: { muhendis: 2 } },
          { t: "Deneyimi yeniden tasarlarım", w: { tasarimci: 2 } },
          { t: "Sabırla dinler, ihtiyacını anlatırım", w: { ogretmen: 2 } },
          { t: "Hızlı bir çözümle güveni geri kazanırım", w: { girisimci: 2 } },
          { t: "Geri bildirimi veriye dönüştürürüm", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Bir başarı kazandın. En çok neye sevinirsin?",
        a: [
          { t: "Sistemin sorunsuz çalışmasına", w: { muhendis: 2 } },
          { t: "İşin güzel görünmesine", w: { tasarimci: 2 } },
          { t: "Birinin öğrenmesine katkı sağladığıma", w: { ogretmen: 2 } },
          { t: "Sonuçların büyümesine", w: { girisimci: 2 } },
          { t: "Yeni bir şey keşfetmiş olmama", w: { arastirmaci: 2 } }
        ]
      },
      {
        q: "Kariyerinde büyük bir değişiklik yapacaksın.",
        a: [
          { t: "Daha uzman olacağım bir alan seçerim", w: { muhendis: 2 } },
          { t: "Yaratıcılığımı konuşturacağım bir alana geçerim", w: { tasarimci: 2 } },
          { t: "İnsanlara dokunacak bir işe yönelirim", w: { ogretmen: 2 } },
          { t: "Kendi işimi kurarım", w: { girisimci: 2 } },
          { t: "Derinleşeceğim bir araştırma alanı bulurum", w: { arastirmaci: 2 } }
        ]
      }
    ],

    "muzik-zevkine-gore-ruh-halin": [
      {
        q: "Yeni bir şarkı keşfettin. Ne yaparsın?",
        a: [
          { t: "Sesini açar, hemen dans ederim", w: { enerji: 2 } },
          { t: "Gözlerimi kapatır, akışına bırakırım", w: { sakin: 2 } },
          { t: "Sözlerini okur, kendimden bir parça bulurum", w: { melankolik: 2 } },
          { t: "Gece playlist'ime eklerim", w: { gece: 2 } },
          { t: "Benzer sanatçıları araştırırım", w: { kaos: 2 } }
        ]
      },
      {
        q: "Konser çıkışı ne yaparsın?",
        a: [
          { t: "Başka bir yere gider, enerjiyi sürdürürüm", w: { enerji: 2 } },
          { t: "Kulaklarım çınlarken sessizce eve dönerim", w: { sakin: 2 } },
          { t: "Dinlediğim şarkıyı tekrar tekrar açarım", w: { melankolik: 2 } },
          { t: "Şehrin gece ışıkları arasında yürürüm", w: { gece: 2 } },
          { t: "Konserden sonra bambaşka bir tür dinlerim", w: { kaos: 2 } }
        ]
      },
      {
        q: "Playlist'ini nasıl oluşturursun?",
        a: [
          { t: "Hep hareketli, tempolu şarkılar", w: { enerji: 2 } },
          { t: "Sakin, akustik, nefes aldıran", w: { sakin: 2 } },
          { t: "Duygusal, anlamlı, biraz hüzünlü", w: { melankolik: 2 } },
          { t: "Gece yolculukları için özel", w: { gece: 2 } },
          { t: "Her türden karışık, sürprizli", w: { kaos: 2 } }
        ]
      },
      {
        q: "Bir film müziği seni en çok nerede yakalar?",
        a: [
          { t: "Aksiyon sahnesinde, tempo yükselirken", w: { enerji: 2 } },
          { t: "Doğa manzarasında, sakin bir anda", w: { sakin: 2 } },
          { t: "Ayrılık sahnesinde, gözyaşı gelirken", w: { melankolik: 2 } },
          { t: "Gece şehirde geçen sahnelerde", w: { gece: 2 } },
          { t: "Hiç beklemediğim bir sahnede", w: { kaos: 2 } }
        ]
      },
      {
        q: "Kalabalık bir ortamda müzik açıldı.",
        a: [
          { t: "İlk dans eden ben olurum", w: { enerji: 2 } },
          { t: "Bir köşede ritme eşlik ederim", w: { sakin: 2 } },
          { t: "Şarkı bana birini hatırlatır, dalarım", w: { melankolik: 2 } },
          { t: "Işıklara ve atmosfere odaklanırım", w: { gece: 2 } },
          { t: "DJ'e gidip şarkı isteği yaparım", w: { kaos: 2 } }
        ]
      },
      {
        q: "Yalnız kaldığın bir akşamda müzik?",
        a: [
          { t: "Enerjimi yükseltecek bir şey", w: { enerji: 2 } },
          { t: "Sessizlik kadar huzurlu bir şey", w: { sakin: 2 } },
          { t: "Beni anlayan hüzünlü bir şarkı", w: { melankolik: 2 } },
          { t: "Gece için özel bir liste", w: { gece: 2 } },
          { t: "Bilmediğim bir tür, keşif modu", w: { kaos: 2 } }
        ]
      },
      {
        q: "Dans etmek senin için?",
        a: [
          { t: "Hayatın en iyi kısmı", w: { enerji: 2 } },
          { t: "Hafif bir salınma yeter", w: { sakin: 2 } },
          { t: "Şarkıya eşlik ederken kendimden geçerim", w: { melankolik: 2 } },
          { t: "Gece ve ışıklar varsa evet", w: { gece: 2 } },
          { t: "Müzik ne isterse onu yaparım", w: { kaos: 2 } }
        ]
      },
      {
        q: "Bir şarkının sözleri seni anlattığında?",
        a: [
          { t: "Yüksek sesle söylerim", w: { enerji: 2 } },
          { t: "Gülümser, içimden dinlerim", w: { sakin: 2 } },
          { t: "Birkaç kez üst üste dinlerim", w: { melankolik: 2 } },
          { t: "Gece yürüyüşüne çıkarım", w: { gece: 2 } },
          { t: "Yeni bir şey keşfetmiş gibi heyecanlanırım", w: { kaos: 2 } }
        ]
      },
      {
        q: "Bir albümü nasıl dinlersin?",
        a: [
          { t: "Baştan sona, yüksek tempoda", w: { enerji: 2 } },
          { t: "Sakin bir akşamda, dikkatle", w: { sakin: 2 } },
          { t: "Duygusal bir günde, tekrar tekrar", w: { melankolik: 2 } },
          { t: "Gece yarısı, kulaklıkla", w: { gece: 2 } },
          { t: "Karışık, atlaya atlaya", w: { kaos: 2 } }
        ]
      },
      {
        q: "Müzik olmasaydı hayat nasıl olurdu?",
        a: [
          { t: "Çok sessiz ve enerjisiz", w: { enerji: 2 } },
          { t: "Daha sakin ama eksik", w: { sakin: 2 } },
          { t: "Duygularımı ifade edemezdim", w: { melankolik: 2 } },
          { t: "Geceler çekilmez olurdu", w: { gece: 2 } },
          { t: "Keşfetmeye devam ederdim", w: { kaos: 2 } }
        ]
      }
    ],

    "hangi-kahve-sensin": [
      {
        q: "Sabah ilk kahveni içmeden konuşabilir misin?",
        a: [
          { t: "Konuşurum ama kısa tutarım", w: { espresso: 2 } },
          { t: "Konuşurum, hatta çok konuşurum", w: { latte: 2 } },
          { t: "Önce bir bardak su, sonra kahve", w: { filtre: 2 } },
          { t: "Kahve soğuk olursa daha iyi", w: { buzlu: 2 } },
          { t: "Önce cezve, sonra dünya", w: { turk: 2 } }
        ]
      },
      {
        q: "Kafede siparişin?",
        a: [
          { t: "Double espresso, ayakta", w: { espresso: 2 } },
          { t: "Bol köpüklü latte", w: { latte: 2 } },
          { t: "Filtre, tek origin", w: { filtre: 2 } },
          { t: "Buzlu latte, ekstra buz", w: { buzlu: 2 } },
          { t: "Türk kahvesi, orta şekerli", w: { turk: 2 } }
        ]
      },
      {
        q: "Bir arkadaşın kahve içmeye çağırdı.",
        a: [
          { t: "On beş dakikam var, hızlıca", w: { espresso: 2 } },
          { t: "Uzun uzun oturur, sohbet ederiz", w: { latte: 2 } },
          { t: "Sessiz bir köşe bulur, kitabımı da getiririm", w: { filtre: 2 } },
          { t: "Trend bir mekân olsun, fotoğraf çekeriz", w: { buzlu: 2 } },
          { t: "Mahalle kahvesi olsun, samimi", w: { turk: 2 } }
        ]
      },
      {
        q: "İş yerinde kahve molası?",
        a: [
          { t: "Kısa, yoğun, geri dön", w: { espresso: 2 } },
          { t: "Ekipçe aşağı iner, sohbet ederiz", w: { latte: 2 } },
          { t: "Kulaklıkla yalnız bir mola", w: { filtre: 2 } },
          { t: "Dışarı çıkar, hava alırım", w: { buzlu: 2 } },
          { t: "Çay demlerim, kahve akşama", w: { turk: 2 } }
        ]
      },
      {
        q: "Kahvenin yanında ne olursa?",
        a: [
          { t: "Hiçbir şey, kahve yeter", w: { espresso: 2 } },
          { t: "Bir dilim kek, paylaşmalık", w: { latte: 2 } },
          { t: "Sade bir bisküvi, kitap", w: { filtre: 2 } },
          { t: "Bir top dondurma, serinlik", w: { buzlu: 2 } },
          { t: "Bir lokum, eski usul", w: { turk: 2 } }
        ]
      },
      {
        q: "Tatilde kahve arıyorsun. Nereye gidersin?",
        a: [
          { t: "En yakın üçüncü dalga kahveci", w: { espresso: 2 } },
          { t: "Deniz manzaralı bir kafe", w: { latte: 2 } },
          { t: "Sokak arası, sakin bir yer", w: { filtre: 2 } },
          { t: "Plajda buzlu bir şey", w: { buzlu: 2 } },
          { t: "Yerel bir kahvehane", w: { turk: 2 } }
        ]
      },
      {
        q: "Birine kahve hediye edeceksin.",
        a: [
          { t: "Kaliteli çekirdek, pratik paket", w: { espresso: 2 } },
          { t: "Sevimli bir kupa ve sıcak bir not", w: { latte: 2 } },
          { t: "Demleme ekipmanı, yeni bir ritüel", w: { filtre: 2 } },
          { t: "Soğuk kahve şişesi, hazır", w: { buzlu: 2 } },
          { t: "Cezve ve fincan takımı", w: { turk: 2 } }
        ]
      },
      {
        q: "Kahvenin fotoğrafını çeker misin?",
        a: [
          { t: "Hayır, içmeden soğuyacak", w: { espresso: 2 } },
          { t: "Arkadaşlarımla birlikte, hatıra", w: { latte: 2 } },
          { t: "Işık güzel, bir kare alırım", w: { filtre: 2 } },
          { t: "Her zaman, estetik önemli", w: { buzlu: 2 } },
          { t: "Fincanın deseni güzelse", w: { turk: 2 } }
        ]
      },
      {
        q: "Akşam kahve içer misin?",
        a: [
          { t: "İçerim, uyku zaten mesai dışı", w: { espresso: 2 } },
          { t: "Arkadaşlarla sohbet varsa", w: { latte: 2 } },
          { t: "Geç saatte içmem", w: { filtre: 2 } },
          { t: "Soğuk içerim, hafif olur", w: { buzlu: 2 } },
          { t: "Akşam çay, kahve sabah", w: { turk: 2 } }
        ]
      },
      {
        q: "Falına baktırır mısın?",
        a: [
          { t: "Gerek yok, hayatım planlı", w: { espresso: 2 } },
          { t: "Arkadaşlarla eğlencesine", w: { latte: 2 } },
          { t: "İlginç olabilir, dinlerim", w: { filtre: 2 } },
          { t: "Sadece eğlence için, inanmam", w: { buzlu: 2 } },
          { t: "Tabii, fincan kapanmadan olmaz", w: { turk: 2 } }
        ]
      }
    ],

    "ne-kadar-iyi-bir-arkadassin": [
      {
        q: "Arkadaşın senden borç istedi.",
        a: [
          { t: "Durumum varsa hemen veririm", w: { yakin: 2 } },
          { t: "Ne için olduğunu sorar, ona göre karar veririm", w: { mesafeli: 1, dinleyen: 1 } },
          { t: "Şakayla karışık \"ödeyecek misin?\" derim", w: { eglence: 2 } },
          { t: "Bütçesini konuşur, birlikte çözüm ararız", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Sana verilen bir sırrı yanlışlıkla ağzından kaçırdın.",
        a: [
          { t: "Hemen söyler, özür dilerim", w: { yakin: 2 } },
          { t: "Bir süre söylemeyi düşünürüm", w: { mesafeli: 2 } },
          { t: "Şakaya çevirip hafifletmeye çalışırım", w: { eglence: 1, yakin: 1 } },
          { t: "Durumu anlatır, telafi yolu ararım", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Çok uzakta yaşayan bir arkadaşın var.",
        a: [
          { t: "Sürekli arar, bağlantıyı koparmam", w: { yakin: 2 } },
          { t: "Ara sıra yazar, iyi dileklerimi iletirim", w: { mesafeli: 2 } },
          { t: "Bir gün sürpriz ziyaret planlarım", w: { eglence: 2 } },
          { t: "Nasıl olduğunu sorar, ihtiyacı varsa dinlerim", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Grup sohbetinde biri dışlanıyor.",
        a: [
          { t: "Özelden yazar, yanında olduğumu söylerim", w: { yakin: 2 } },
          { t: "Karışmam, herkesin dinamiği farklı", w: { mesafeli: 2 } },
          { t: "Konuyu değiştirir, ortamı yumuşatırım", w: { eglence: 2 } },
          { t: "Grupta konuşur, herkesi dahil etmeye çalışırım", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşınla kavga ettin.",
        a: [
          { t: "İlk adımı ben atar, yüz yüze konuşurum", w: { yakin: 2 } },
          { t: "Biraz zaman verir, sonra ararım", w: { mesafeli: 2 } },
          { t: "Bir espriyle buzları eritirim", w: { eglence: 2 } },
          { t: "Onu dinler, kendi payımı kabul ederim", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşın bir konuda yalan söyledi.",
        a: [
          { t: "Yüzleşirim, nedenini anlamak isterim", w: { yakin: 2 } },
          { t: "Mesafe koyar, güvenimi yeniden kazanmasını beklerim", w: { mesafeli: 2 } },
          { t: "Konuyu şakaya bağlar, geçerim", w: { eglence: 2 } },
          { t: "Dinlerim, belki anlatmakta zorlandığı bir şey var", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşın büyük bir başarı kazandı.",
        a: [
          { t: "Onunla gurur duyar, kutlarım", w: { yakin: 2 } },
          { t: "Tebrik eder, kendi yoluma devam ederim", w: { mesafeli: 2 } },
          { t: "Sürpriz kutlama hazırlarım", w: { eglence: 2 } },
          { t: "Başarısının ardındaki emeği sorar, dinlerim", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Arkadaşın hasta ve yalnız.",
        a: [
          { t: "Kapısına gider, ihtiyacını sorarım", w: { yakin: 2 } },
          { t: "Mesaj atar, geçmiş olsun derim", w: { mesafeli: 2 } },
          { t: "Komik videolar gönderip moral veririm", w: { eglence: 2 } },
          { t: "Dinlenmesi için alan verir, düzenli kontrol ederim", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Ortak plan yapılıyor ama senin işin var.",
        a: [
          { t: "İşimi ayarlar, yine de katılırım", w: { yakin: 2 } },
          { t: "Açıkça söyler, bu sefer gelmem", w: { mesafeli: 2 } },
          { t: "Son anda katılır, ortamı renklendiririm", w: { eglence: 2 } },
          { t: "Herkesin uygun olduğu yeni bir zaman bulurum", w: { dinleyen: 2 } }
        ]
      },
      {
        q: "Bir arkadaşın senin için ne söylesin?",
        a: [
          { t: "\"Her zaman yanımda.\"", w: { yakin: 2 } },
          { t: "\"Mesafelidir ama sözüne güvenilir.\"", w: { mesafeli: 2 } },
          { t: "\"Onunla hiç sıkılmam.\"", w: { eglence: 2 } },
          { t: "\"Beni gerçekten dinler.\"", w: { dinleyen: 2 } }
        ]
      }
    ],

    "hangi-sehirde-yasamalisin": [
      {
        q: "İdeal hafta sonu nasıl geçer?",
        a: [
          { t: "Kalabalık sokaklar, meyhane, müzik", w: { istanbul: 2 } },
          { t: "Bisiklet, park, açık hava", w: { berlin: 2 } },
          { t: "Deniz kenarı, yavaş kahvaltı", w: { lizbon: 2 } },
          { t: "Düzenli bir gün, planlı etkinlikler", w: { tokyo: 2 } },
          { t: "Brunch, galeri, yeni insanlar", w: { newyork: 2 } },
          { t: "Plaj, tapas, geç saatlere kadar", w: { barselona: 2 } }
        ]
      },
      {
        q: "Sosyal çevren nasıl olsun?",
        a: [
          { t: "Geniş ama dağınık, her yerden insan", w: { istanbul: 2 } },
          { t: "Az ama istikrarlı, seçici", w: { berlin: 2 } },
          { t: "Sıcak, mahalle eşrafı gibi", w: { lizbon: 2 } },
          { t: "Kibar, saygılı, sınırları net", w: { tokyo: 2 } },
          { t: "Hırslı, bağlantı kuran, hareketli", w: { newyork: 2 } },
          { t: "Rahat, geç saate kadar dışarıda", w: { barselona: 2 } }
        ]
      },
      {
        q: "Doğa senin için ne kadar önemli?",
        a: [
          { t: "Deniz yeter, gerisi kalabalık olsun", w: { istanbul: 2 } },
          { t: "Parklar ve yeşil alanlar olmazsa olmaz", w: { berlin: 2 } },
          { t: "Okyanus ve rüzgar ruhumu besler", w: { lizbon: 2 } },
          { t: "Şehir içinde düzenli yeşil alanlar yeter", w: { tokyo: 2 } },
          { t: "Central Park gibi büyük bir nefes", w: { newyork: 2 } },
          { t: "Deniz ve şehir iç içe olsun", w: { barselona: 2 } }
        ]
      },
      {
        q: "Kariyerinde önceliğin?",
        a: [
          { t: "Fırsat çok olsun, rekabet de", w: { istanbul: 2 } },
          { t: "Dengeli çalışma saatleri ve düzen", w: { berlin: 2 } },
          { t: "Sakin bir hayat, işten çok yaşam", w: { lizbon: 2 } },
          { t: "Uzmanlaşma, istikrar, güvenlik", w: { tokyo: 2 } },
          { t: "Hızlı yükselme, büyük hedefler", w: { newyork: 2 } },
          { t: "Yaratıcı işler, esnek saatler", w: { barselona: 2 } }
        ]
      },
      {
        q: "Yemek kültüründe seni en çok ne çeker?",
        a: [
          { t: "Sokak lezzetleri, uzun sofralar", w: { istanbul: 2 } },
          { t: "Uluslararası mutfak, döner, sokak yemeği", w: { berlin: 2 } },
          { t: "Deniz ürünü, taze ekmek, sade lezzetler", w: { lizbon: 2 } },
          { t: "Ramen, düzen, küçük mekânlar", w: { tokyo: 2 } },
          { t: "Her saat açık, her mutfaktan bir şey", w: { newyork: 2 } },
          { t: "Tapas, paylaşmak, geç saat", w: { barselona: 2 } }
        ]
      },
      {
        q: "Gece hayatın nasıl olsun?",
        a: [
          { t: "Meyhane, canlı müzik, sabaha kadar", w: { istanbul: 2 } },
          { t: "Kulüp, tekno, özgürlük", w: { berlin: 2 } },
          { t: "Fado, şarap, sakin bir akşam", w: { lizbon: 2 } },
          { t: "Neon, karaoke, düzenli eğlence", w: { tokyo: 2 } },
          { t: "Rooftop, kokteyl, networking", w: { newyork: 2 } },
          { t: "Sokakta tapas, geç saat, kalabalık", w: { barselona: 2 } }
        ]
      },
      {
        q: "Kültür sanat senin için?",
        a: [
          { t: "Her gün bir etkinlik, kaos içinde sanat", w: { istanbul: 2 } },
          { t: "Müzeler, alternatif mekânlar, düzen", w: { berlin: 2 } },
          { t: "Eski şehir, fado, nostalji", w: { lizbon: 2 } },
          { t: "Gelenek ve modernlik bir arada", w: { tokyo: 2 } },
          { t: "Broadway, galeri, büyük prodüksiyonlar", w: { newyork: 2 } },
          { t: "Gaudí, sokak sanatı, mimari", w: { barselona: 2 } }
        ]
      },
      {
        q: "Hava durumu tercihin?",
        a: [
          { t: "Dört mevsim bir günde, sürprizli", w: { istanbul: 2 } },
          { t: "Serin, gri, sakin", w: { berlin: 2 } },
          { t: "Güneşli, rüzgarlı, deniz kokulu", w: { lizbon: 2 } },
          { t: "Mevsimli, nemli, düzenli", w: { tokyo: 2 } },
          { t: "Sert kış, sıcak yaz", w: { newyork: 2 } },
          { t: "Neredeyse hep yaz", w: { barselona: 2 } }
        ]
      },
      {
        q: "Şehir içi ulaşımda konforun?",
        a: [
          { t: "Vapur ve yürüyüş, trafiğe razıyım", w: { istanbul: 2 } },
          { t: "Bisiklet yolu, düzenli toplu taşıma", w: { berlin: 2 } },
          { t: "Tramvay, yürüyüş, yokuşlar", w: { lizbon: 2 } },
          { t: "Dakik metro, sessiz vagonlar", w: { tokyo: 2 } },
          { t: "7/24 metro ve taksi", w: { newyork: 2 } },
          { t: "Yürüyüş, sahil, bisiklet", w: { barselona: 2 } }
        ]
      },
      {
        q: "On yıl sonra kendini nerede görüyorsun?",
        a: [
          { t: "İstanbul'da, hâlâ keşfedilecek bir şeylerle", w: { istanbul: 2 } },
          { t: "Berlin'de, düzenli ve özgür bir hayatta", w: { berlin: 2 } },
          { t: "Lizbon'da, deniz kenarında sakin bir evde", w: { lizbon: 2 } },
          { t: "Tokyo'da, işinde uzmanlaşmış bir hayatta", w: { tokyo: 2 } },
          { t: "New York'ta, büyük hedeflerin peşinde", w: { newyork: 2 } },
          { t: "Barselona'da, sanat ve güneşle dolu bir hayatta", w: { barselona: 2 } }
        ]
      }
    ],

    "turkiye-genel-kultur": [
      {
        q: "Türkiye'nin başkenti hangisidir?",
        imageKey: "anitkabir",
        a: [
          { t: "İstanbul" },
          { t: "Ankara", c: true },
          { t: "İzmir" },
          { t: "Bursa" }
        ],
        fact: "Ankara, 13 Ekim 1923'te Türkiye'nin başkenti oldu.",
        wiki: "https://tr.wikipedia.org/wiki/Ankara"
      },
      {
        q: "İstanbul'u fetheden Osmanlı padişahı kimdir?",
        a: [
          { t: "Fatih Sultan Mehmet", c: true },
          { t: "Yavuz Sultan Selim" },
          { t: "Kanuni Sultan Süleyman" },
          { t: "II. Abdülhamid" }
        ],
        fact: "Fatih Sultan Mehmet, 1453'te İstanbul'u fethederek Bizans İmparatorluğu'na son verdi.",
        wiki: "https://tr.wikipedia.org/wiki/II._Mehmed"
      },
      {
        q: "Göbeklitepe hangi ilimizde yer alır?",
        imageKey: "gobeklitepe",
        a: [
          { t: "Şanlıurfa", c: true },
          { t: "Gaziantep" },
          { t: "Mardin" },
          { t: "Diyarbakır" }
        ],
        fact: "Göbeklitepe, dünyanın bilinen en eski tapınak alanlarından biri kabul edilir.",
        wiki: "https://tr.wikipedia.org/wiki/G%C3%B6beklitepe"
      },
      {
        q: "Nemrut Dağı'nın ünlü heykelleri hangi ilimizdedir?",
        imageKey: "nemrut",
        a: [
          { t: "Adıyaman", c: true },
          { t: "Malatya" },
          { t: "Şanlıurfa" },
          { t: "Kahramanmaraş" }
        ],
        fact: "Nemrut Dağı, Kommagene Krallığı'ndan kalan dev heykelleriyle UNESCO Dünya Mirası Listesi'nde.",
        wiki: "https://tr.wikipedia.org/wiki/Nemrut_Da%C4%9F%C4%B1"
      },
      {
        q: "Sümela Manastırı hangi ilimizde bulunur?",
        imageKey: "sumela",
        a: [
          { t: "Trabzon", c: true },
          { t: "Rize" },
          { t: "Gümüşhane" },
          { t: "Artvin" }
        ],
        fact: "Sümela Manastırı, Trabzon'un Maçka ilçesindeki dik bir kayalığa inşa edilmiştir.",
        wiki: "https://tr.wikipedia.org/wiki/S%C3%BCmela_Manast%C4%B1r%C4%B1"
      },
      {
        q: "Aspendos Antik Tiyatrosu hangi ilimizdedir?",
        imageKey: "aspendos",
        a: [
          { t: "Antalya", c: true },
          { t: "Muğla" },
          { t: "Mersin" },
          { t: "Aydın" }
        ],
        fact: "Aspendos, Roma döneminden günümüze en iyi korunmuş antik tiyatrolardan biridir.",
        wiki: "https://tr.wikipedia.org/wiki/Aspendos"
      },
      {
        q: "Truva Antik Kenti hangi ilimizde yer alır?",
        imageKey: "truva",
        a: [
          { t: "Çanakkale", c: true },
          { t: "İzmir" },
          { t: "Balıkesir" },
          { t: "Edirne" }
        ],
        fact: "Truva, Çanakkale'nin Tevfikiye köyü yakınlarında yer alır ve UNESCO listesindedir.",
        wiki: "https://tr.wikipedia.org/wiki/Truva"
      },
      {
        q: "Safranbolu'nun tarihî evleri hangi ilimize bağlıdır?",
        imageKey: "safranbolu",
        a: [
          { t: "Karabük", c: true },
          { t: "Kastamonu" },
          { t: "Bartın" },
          { t: "Zonguldak" }
        ],
        fact: "Safranbolu, geleneksel Osmanlı kent dokusunu koruyan evleriyle UNESCO Dünya Mirası Listesi'nde.",
        wiki: "https://tr.wikipedia.org/wiki/Safranbolu"
      },
      {
        q: "Divriği Ulu Camii ve Darüşşifası hangi ilimizdedir?",
        imageKey: "divrigi",
        a: [
          { t: "Sivas", c: true },
          { t: "Kayseri" },
          { t: "Malatya" },
          { t: "Erzincan" }
        ],
        fact: "Divriği Ulu Camii, taş işçiliğiyle ünlü ve UNESCO Dünya Mirası Listesi'nde yer alan bir yapıdır.",
        wiki: "https://tr.wikipedia.org/wiki/Divri%C4%9Fi_Ulu_Camii_ve_Dar%C3%BC%C5%9F%C5%9Fifas%C4%B1"
      },
      {
        q: "İshak Paşa Sarayı hangi ilimizdedir?",
        imageKey: "ishakpasa",
        a: [
          { t: "Ağrı", c: true },
          { t: "Kars" },
          { t: "Van" },
          { t: "Erzurum" }
        ],
        fact: "İshak Paşa Sarayı, Ağrı'nın Doğubayazıt ilçesinde, tarihî İpek Yolu üzerinde yer alır.",
        wiki: "https://tr.wikipedia.org/wiki/%C4%B0shak_Pa%C5%9Fa_Saray%C4%B1"
      },
      {
        q: "Zeugma Antik Kenti hangi ilimizde bulunur?",
        imageKey: "zeugma",
        a: [
          { t: "Gaziantep", c: true },
          { t: "Şanlıurfa" },
          { t: "Hatay" },
          { t: "Adıyaman" }
        ],
        fact: "Zeugma, Fırat kıyısındaki mozaikleriyle ünlü antik bir kenttir.",
        wiki: "https://tr.wikipedia.org/wiki/Zeugma"
      },
      {
        q: "Balıklıgöl hangi ilimizdedir?",
        imageKey: "balikligol",
        a: [
          { t: "Şanlıurfa", c: true },
          { t: "Gaziantep" },
          { t: "Mardin" },
          { t: "Batman" }
        ],
        fact: "Balıklıgöl, Şanlıurfa'daki Halilürrahman Gölü çevresindeki kutsal sayılan alandır.",
        wiki: "https://tr.wikipedia.org/wiki/Bal%C4%B1kl%C4%B1g%C3%B6l"
      },
      {
        q: "Uzungöl hangi ilimizde yer alır?",
        imageKey: "uzungol",
        a: [
          { t: "Trabzon", c: true },
          { t: "Rize" },
          { t: "Ordu" },
          { t: "Giresun" }
        ],
        fact: "Uzungöl, Trabzon'un Çaykara ilçesinde dağlar arasında yer alan ünlü bir göldür.",
        wiki: "https://tr.wikipedia.org/wiki/Uzung%C3%B6l"
      },
      {
        q: "Hattuşa antik başkenti hangi ilimizdedir?",
        imageKey: "hattusa",
        a: [
          { t: "Çorum", c: true },
          { t: "Yozgat" },
          { t: "Amasya" },
          { t: "Samsun" }
        ],
        fact: "Hattuşa, Hitit İmparatorluğu'nun başkentiydi ve UNESCO Dünya Mirası Listesi'nde yer alıyor.",
        wiki: "https://tr.wikipedia.org/wiki/Hattu%C5%9Fa"
      },
      {
        q: "Sardes Antik Kenti hangi ilimizde bulunur?",
        imageKey: "sardes",
        a: [
          { t: "Manisa", c: true },
          { t: "İzmir" },
          { t: "Aydın" },
          { t: "Balıkesir" }
        ],
        fact: "Sardes, Lidya Krallığı'nın başkentiydi ve tarihin ilk madeni paralarının basıldığı yerlerden biridir.",
        wiki: "https://tr.wikipedia.org/wiki/Sardes"
      },
      {
        q: "Ani Antik Kenti hangi ilimizdedir?",
        imageKey: "ani",
        a: [
          { t: "Kars", c: true },
          { t: "Ardahan" },
          { t: "Erzurum" },
          { t: "Artvin" }
        ],
        fact: "Ani, Kars'ın sınırında, Orta Çağ'dan kalma görkemli kalıntılarıyla UNESCO listesindedir.",
        wiki: "https://tr.wikipedia.org/wiki/Ani"
      },
      {
        q: "Kapadokya bölgesinin merkezindeki il hangisidir?",
        imageKey: "goreme",
        a: [
          { t: "Nevşehir", c: true },
          { t: "Kayseri" },
          { t: "Niğde" },
          { t: "Aksaray" }
        ],
        fact: "Kapadokya, Nevşehir başta olmak üzere Kayseri, Niğde, Aksaray ve Kırşehir'e yayılan bir bölgedir.",
        wiki: "https://tr.wikipedia.org/wiki/Kapadokya"
      },
      {
        q: "Türkiye'nin en büyük adası hangisidir?",
        a: [
          { t: "Gökçeada", c: true },
          { t: "Bozcaada" },
          { t: "Marmara Adası" },
          { t: "Uzunada" }
        ],
        fact: "Gökçeada, Çanakkale'ye bağlı ve Türkiye'nin yüzölçümü bakımından en büyük adasıdır.",
        wiki: "https://tr.wikipedia.org/wiki/G%C3%B6k%C3%A7eada"
      },
      {
        q: "Türkiye'nin en büyük baraj gölü hangisidir?",
        a: [
          { t: "Atatürk Barajı", c: true },
          { t: "Keban Barajı" },
          { t: "Karakaya Barajı" },
          { t: "Ilısu Barajı" }
        ],
        fact: "Atatürk Barajı, Fırat Nehri üzerinde yer alır ve göl hacmi bakımından Türkiye'nin en büyüğüdür.",
        wiki: "https://tr.wikipedia.org/wiki/Atat%C3%BCrk_Baraj%C4%B1"
      },
      {
        q: "Nobel Bilim Ödülü kazanan ilk Türk bilim insanı kimdir?",
        a: [
          { t: "Aziz Sancar", c: true },
          { t: "Cahit Arf" },
          { t: "Orhan Pamuk" },
          { t: "Gazi Yaşargil" }
        ],
        fact: "Aziz Sancar, 2015'te kimya alanında Nobel Ödülü kazandı.",
        wiki: "https://tr.wikipedia.org/wiki/Aziz_Sancar"
      }
    ],

    "mantik-ve-dikkat": [
      {
        q: "3, 6, 12, 24, ... dizisinde sıradaki sayı kaçtır?",
        a: [
          { t: "36" },
          { t: "42" },
          { t: "48", c: true },
          { t: "60" }
        ],
        fact: "Her sayı bir öncekinin iki katı: 24 × 2 = 48."
      },
      {
        q: "Bir baba ve oğlunun yaşları toplamı 60. Baba, oğlundan 30 yaş büyük. Oğul kaç yaşında?",
        a: [
          { t: "10" },
          { t: "12" },
          { t: "15", c: true },
          { t: "20" }
        ],
        fact: "Oğul x, baba x + 30 ise 2x + 30 = 60 ve x = 15."
      },
      {
        q: "Bir çiftlikte 20 hayvan var: tavuklar ve koyunlar. Toplam 56 ayak olduğuna göre kaç koyun vardır?",
        a: [
          { t: "6" },
          { t: "8", c: true },
          { t: "10" },
          { t: "12" }
        ],
        fact: "Koyun x ise 4x + 2(20 − x) = 56 denkleminden x = 8."
      },
      {
        q: "1'den 100'e kadar olan sayılarda 9 rakamı kaç kez geçer?",
        a: [
          { t: "10" },
          { t: "18" },
          { t: "19" },
          { t: "20", c: true }
        ],
        fact: "Birler basamağında 10, onlar basamağında 10 kez olmak üzere toplam 20."
      },
      {
        q: "Bir yarışta ikinci sıradaki koşucuyu geçersen kaçıncı olursun?",
        a: [
          { t: "Birinci" },
          { t: "İkinci", c: true },
          { t: "Üçüncü" },
          { t: "Sonuncu" }
        ],
        fact: "İkinciyi geçtiğinde onun yerine geçersin; birinciyi geçmiş olmazsın."
      },
      {
        q: "Bir saat 3 günde kaç kez 12'yi gösterir?",
        a: [
          { t: "3" },
          { t: "4" },
          { t: "6", c: true },
          { t: "12" }
        ],
        fact: "Günde iki kez (gece ve öğlen), üç günde altı kez."
      },
      {
        q: "5 makine 5 dakikada 5 parça üretiyor. 100 makine 100 parçayı kaç dakikada üretir?",
        a: [
          { t: "5", c: true },
          { t: "20" },
          { t: "100" },
          { t: "500" }
        ],
        fact: "Her makine 5 dakikada bir parça üretir; 100 makine de aynı sürede 100 parça üretir."
      },
      {
        q: "2, 3, 5, 7, 11, ... dizisinde sıradaki sayı kaçtır?",
        a: [
          { t: "12" },
          { t: "13", c: true },
          { t: "14" },
          { t: "15" }
        ],
        fact: "Dizi asal sayılardan oluşuyor; 11'den sonra 13 gelir."
      },
      {
        q: "Hangi aylar 28 gün çeker?",
        a: [
          { t: "Sadece şubat" },
          { t: "Şubat ve nisan" },
          { t: "Tüm aylar", c: true },
          { t: "Hiçbiri" }
        ],
        fact: "Bütün aylar en az 28 gün çeker; kışkırtıcı sorunun cevabı budur."
      },
      {
        q: "Bir tuğla 1 kg ile yarım tuğlanın toplamı kadardır. Bir tuğla kaç kg?",
        a: [
          { t: "1" },
          { t: "1,5" },
          { t: "2", c: true },
          { t: "3" }
        ],
        fact: "Tuğla x ise x = 1 + x/2; buradan x = 2 kg."
      },
      {
        q: "Saat tam 9:00'da akrep ile yelkovan arasındaki açı kaç derecedir?",
        a: [
          { t: "45" },
          { t: "60" },
          { t: "90", c: true },
          { t: "120" }
        ],
        fact: "Saat başlarında her saat aralığı 30 derecedir; 9 ile 12 arası 90 derece."
      },
      {
        q: "120 metre uzunluğundaki bir tren, 60 metrelik tüneli 20 saniyede geçiyor. Trenin hızı kaç m/s?",
        a: [
          { t: "6" },
          { t: "9", c: true },
          { t: "12" },
          { t: "15" }
        ],
        fact: "Trenin kat ettiği toplam yol 120 + 60 = 180 metre; 180 / 20 = 9 m/s."
      },
      {
        q: "Bir kutuda 4 kırmızı, 5 mavi top var. Kesinlikle 2 aynı renk top olması için en az kaç top çekmelisin?",
        a: [
          { t: "2" },
          { t: "3", c: true },
          { t: "4" },
          { t: "5" }
        ],
        fact: "İlk iki top farklı renk olabilir; üçüncü top mutlaka ikisinden birini tekrar eder."
      },
      {
        q: "1, 4, 9, 16, ... dizisinde sıradaki sayı kaçtır?",
        a: [
          { t: "20" },
          { t: "24" },
          { t: "25", c: true },
          { t: "36" }
        ],
        fact: "Dizi kare sayılardan oluşuyor: 5² = 25."
      },
      {
        q: "Bir kalem ile defterin toplam fiyatı 110 TL. Defter, kalemden 100 TL pahalı. Kalem kaç TL?",
        a: [
          { t: "5", c: true },
          { t: "10" },
          { t: "15" },
          { t: "20" }
        ],
        fact: "Kalem x ise defter x + 100; 2x + 100 = 110 ve x = 5 TL."
      }
    ],

    "turk-dizi-film-testi": [
      {
        q: "Yeşilçam, Türk sinemasının hangi şehirdeki merkezine verilen addır?",
        imageKey: "yesilcam",
        a: [
          { t: "İstanbul", c: true },
          { t: "Ankara" },
          { t: "İzmir" },
          { t: "Bursa" }
        ],
        fact: "Yeşilçam adı, Beyoğlu'ndaki Yeşilçam Sokağı'nda yoğunlaşan film şirketlerinden gelir.",
        wiki: "https://tr.wikipedia.org/wiki/Ye%C5%9Fil%C3%A7am"
      },
      {
        q: "Hababam Sınıfı filmlerinin unutulmaz yönetmeni kimdir?",
        a: [
          { t: "Ertem Eğilmez", c: true },
          { t: "Atıf Yılmaz" },
          { t: "Metin Erksan" },
          { t: "Yılmaz Güney" }
        ],
        fact: "Ertem Eğilmez, Hababam Sınıfı serisinin ilk filmlerini yönetti.",
        wiki: "https://tr.wikipedia.org/wiki/Ertem_E%C4%9Filmez"
      },
      {
        q: "Hababam Sınıfı'nda Kel Mahmut karakterini kim canlandırdı?",
        a: [
          { t: "Münir Özkul", c: true },
          { t: "Şener Şen" },
          { t: "Halit Akçatepe" },
          { t: "Tarık Akan" }
        ],
        fact: "Münir Özkul'un Kel Mahmut yorumu, Türk sinemasının en sevilen öğretmen karakterlerinden biri oldu.",
        wiki: "https://tr.wikipedia.org/wiki/M%C3%BCnir_%C3%96zkul"
      },
      {
        q: "Hababam Sınıfı'ndaki Güdük Necmi'yi kim oynadı?",
        imageKey: "halit-akcatepe",
        a: [
          { t: "Halit Akçatepe", c: true },
          { t: "Kemal Sunal" },
          { t: "Şener Şen" },
          { t: "Ahmet Arıman" }
        ],
        fact: "Halit Akçatepe, Güdük Necmi karakteriyle serinin en akılda kalan isimlerinden biri oldu.",
        wiki: "https://tr.wikipedia.org/wiki/Halit_Ak%C3%A7atepe"
      },
      {
        q: "Şener Şen'in oyuncu babası kimdir?",
        imageKey: "sener-sen",
        a: [
          { t: "Ali Şen", c: true },
          { t: "Münir Özkul" },
          { t: "Sait Faik Abasıyanık" },
          { t: "Hulusi Kentmen" }
        ],
        fact: "Şener Şen, oyuncu Ali Şen'in oğludur.",
        wiki: "https://tr.wikipedia.org/wiki/%C5%9Eener_%C5%9Een"
      },
      {
        q: "Türkan Şoray'ın Türk sinemasındaki lakabı nedir?",
        imageKey: "turkan-soray",
        a: [
          { t: "Sultan", c: true },
          { t: "Yıldız" },
          { t: "Kraliçe" },
          { t: "Melek" }
        ],
        fact: "Türkan Şoray, sinemadaki unvanıyla \"Yeşilçam'ın Sultanı\" olarak anılır.",
        wiki: "https://tr.wikipedia.org/wiki/T%C3%BCrkan_%C5%9Eoray"
      },
      {
        q: "Cüneyt Arkın'ın gerçek adı nedir?",
        a: [
          { t: "Fahrettin Cüreklibatır", c: true },
          { t: "Cüneyt Gökçer" },
          { t: "Fikret Hakan" },
          { t: "Kadir İnanır" }
        ],
        fact: "Cüneyt Arkın, aslen Fahrettin Cüreklibatır adıyla dünyaya geldi.",
        wiki: "https://tr.wikipedia.org/wiki/C%C3%BCneyt_Ark%C4%B1n"
      },
      {
        q: "Yılmaz Güney'in Altın Palmiye kazanan filmi hangisidir?",
        imageKey: "yilmaz-guney",
        a: [
          { t: "Yol", c: true },
          { t: "Umut" },
          { t: "Sürü" },
          { t: "Eşkıya" }
        ],
        fact: "Yol, 1982 Cannes Film Festivali'nde Altın Palmiye kazandı.",
        wiki: "https://tr.wikipedia.org/wiki/Yol_(film)"
      },
      {
        q: "Susuz Yaz filmi hangi yıl Altın Ayı ödülünü kazandı?",
        a: [
          { t: "1954" },
          { t: "1964", c: true },
          { t: "1974" },
          { t: "1982" }
        ],
        fact: "Metin Erksan'ın Susuz Yaz filmi, 1964 Berlin Film Festivali'nde Altın Ayı kazandı.",
        wiki: "https://tr.wikipedia.org/wiki/Susuz_Yaz"
      },
      {
        q: "Selvi Boylum Al Yazmalım filminde başrolü paylaşan ikili kimdir?",
        imageKey: "turkan-soray",
        a: [
          { t: "Türkan Şoray ve Kadir İnanır", c: true },
          { t: "Hülya Koçyiğit ve Tarık Akan" },
          { t: "Fatma Girik ve Cüneyt Arkın" },
          { t: "Banu Alkan ve Kemal Sunal" }
        ],
        fact: "Türkan Şoray ve Kadir İnanır, Cengiz Aytmatov'un eserinden uyarlanan filmde başroldeydi.",
        wiki: "https://tr.wikipedia.org/wiki/Selvi_Boylum_Al_Yazmal%C4%B1m"
      },
      {
        q: "Vizontele filminin yönetmeni kimdir?",
        a: [
          { t: "Yılmaz Erdoğan", c: true },
          { t: "Cem Yılmaz" },
          { t: "Şahan Gökbakar" },
          { t: "Ata Demirer" }
        ],
        fact: "Vizontele, Yılmaz Erdoğan'ın yönettiği ve başrolünde yer aldığı bir dönem komedisidir.",
        wiki: "https://tr.wikipedia.org/wiki/Vizontele"
      },
      {
        q: "G.O.R.A. filminin yönetmeni kimdir?",
        imageKey: "cem-yilmaz",
        a: [
          { t: "Ömer Faruk Sorak", c: true },
          { t: "Cem Yılmaz" },
          { t: "Yılmaz Erdoğan" },
          { t: "Tolgahan Sayışman" }
        ],
        fact: "G.O.R.A.'nın yönetmeni Ömer Faruk Sorak, başrolü ve senaryosu ise Cem Yılmaz'a ait.",
        wiki: "https://tr.wikipedia.org/wiki/G.O.R.A."
      },
      {
        q: "Recep İvedik karakterini sinemada kim canlandırıyor?",
        imageKey: "sahan-gokbakar",
        a: [
          { t: "Şahan Gökbakar", c: true },
          { t: "Ata Demirer" },
          { t: "Cem Yılmaz" },
          { t: "Yılmaz Erdoğan" }
        ],
        fact: "Şahan Gökbakar, Recep İvedik karakterini yaratan ve filmlerde oynayan isimdir.",
        wiki: "https://tr.wikipedia.org/wiki/Recep_%C4%B0vedik"
      },
      {
        q: "Bir Zamanlar Çukurova dizisinde Züleyha'yı kim canlandırdı?",
        a: [
          { t: "Hilal Altınbilek", c: true },
          { t: "Pınar Deniz" },
          { t: "Meryem Uzerli" },
          { t: "Bergüzar Korel" }
        ],
        fact: "Hilal Altınbilek, dizinin baş karakteri Züleyha'ya hayat verdi.",
        wiki: "https://tr.wikipedia.org/wiki/Bir_Zamanlar_%C3%87ukurova"
      },
      {
        q: "Yargı dizisinde Ceylin karakterini kim oynuyor?",
        a: [
          { t: "Pınar Deniz", c: true },
          { t: "Bergüzar Korel" },
          { t: "Hilal Altınbilek" },
          { t: "Meryem Uzerli" }
        ],
        fact: "Pınar Deniz, Yargı dizisinde avukat Ceylin karakterini canlandırıyor.",
        wiki: "https://tr.wikipedia.org/wiki/Yarg%C4%B1_(dizi)"
      },
      {
        q: "Kurtlar Vadisi'nde Memati Baş karakterini kim oynadı?",
        a: [
          { t: "Gürkan Uygun", c: true },
          { t: "Kenan İmirzalıoğlu" },
          { t: "Cansel Elçin" },
          { t: "Barış Falay" }
        ],
        fact: "Gürkan Uygun, Memati Baş karakteriyle dizinin en tanınan isimlerinden biri oldu.",
        wiki: "https://tr.wikipedia.org/wiki/Kurtlar_Vadisi"
      },
      {
        q: "Muhteşem Yüzyıl dizisinde Hürrem Sultan'ı kim canlandırdı?",
        a: [
          { t: "Meryem Uzerli", c: true },
          { t: "Bergüzar Korel" },
          { t: "Pınar Deniz" },
          { t: "Hilal Altınbilek" }
        ],
        fact: "Meryem Uzerli, Muhteşem Yüzyıl'da Hürrem Sultan rolüyle geniş kitlelerce tanındı.",
        wiki: "https://tr.wikipedia.org/wiki/Muhte%C5%9Fem_Y%C3%BCzy%C4%B1l"
      },
      {
        q: "Avrupa Yakası dizisinin senaristlerinden biri olan isim kimdir?",
        imageKey: "gulse-birsel",
        a: [
          { t: "Gülse Birsel", c: true },
          { t: "Binnur Kaya" },
          { t: "Hasibe Eren" },
          { t: "Ata Demirer" }
        ],
        fact: "Gülse Birsel, Avrupa Yakası'nın yaratıcısı ve senaristlerinden biriydi.",
        wiki: "https://tr.wikipedia.org/wiki/Avrupa_Yakas%C4%B1"
      },
      {
        q: "Altın Portakal Film Festivali hangi şehirde düzenlenir?",
        a: [
          { t: "Antalya", c: true },
          { t: "Adana" },
          { t: "İzmir" },
          { t: "İstanbul" }
        ],
        fact: "Antalya Altın Portakal Film Festivali, Türkiye'nin en köklü film festivallerinden biridir.",
        wiki: "https://tr.wikipedia.org/wiki/Antalya_Alt%C4%B1n_Portakal_Film_Festivali"
      },
      {
        q: "Altın Koza Film Festivali hangi şehirde yapılır?",
        a: [
          { t: "Adana", c: true },
          { t: "Antalya" },
          { t: "Bursa" },
          { t: "Ankara" }
        ],
        fact: "Adana Film Festivali kapsamında verilen Altın Koza, şehrin sinema geleneğinin simgesidir.",
        wiki: "https://tr.wikipedia.org/wiki/Adana_Alt%C4%B1n_Koza_Film_Festivali"
      },
      {
        q: "Türk sinemasının ilk filmi kabul edilen yapım hangisidir?",
        imageKey: "turk-sinemasi",
        a: [
          { t: "Ayastefanos'taki Rus Abidesinin Yıkılışı", c: true },
          { t: "İstanbul Sokaklarında" },
          { t: "Susuz Yaz" },
          { t: "Umut" }
        ],
        fact: "Fuat Uzkınay'ın 1914 tarihli belgeseli, Türk sinemasının ilk filmi kabul edilir.",
        wiki: "https://tr.wikipedia.org/wiki/Ayastefanos%27taki_Rus_Abidesinin_Y%C4%B1k%C4%B1l%C4%B1%C5%9F%C4%B1"
      },
      {
        q: "Türk sinemasının ilk sesli filmi hangisidir?",
        imageKey: "turk-sinemasi",
        a: [
          { t: "İstanbul Sokaklarında", c: true },
          { t: "Aysel Bataklı Damın Kızı" },
          { t: "Bir Millet Uyanıyor" },
          { t: "Bataklı Damın Kızı" }
        ],
        fact: "1931 yapımı İstanbul Sokaklarında, Türk sinemasının ilk sesli filmi olarak kabul edilir.",
        wiki: "https://tr.wikipedia.org/wiki/%C4%B0stanbul_Sokaklar%C4%B1nda"
      }
    ],

    "dunya-mutfagi": [
      {
        q: "Ramen hangi ülkenin mutfağına ait bir çorba türüdür?",
        imageKey: "ramen",
        a: [
          { t: "Japonya", c: true },
          { t: "Çin" },
          { t: "Kore" },
          { t: "Vietnam" }
        ],
        fact: "Ramen, Japonya'da buğday eriştesi, et suyu ve çeşitli malzemelerle hazırlanan bir çorba.",
        wiki: "https://tr.wikipedia.org/wiki/Ramen"
      },
      {
        q: "Pho çorbası hangi ülkenin simgesidir?",
        imageKey: "pho",
        a: [
          { t: "Vietnam", c: true },
          { t: "Tayland" },
          { t: "Çin" },
          { t: "Kamboçya" }
        ],
        fact: "Pho, Vietnam'ın pirinç eriştesi, et suyu ve taze otlarla yapılan ünlü çorbasıdır.",
        wiki: "https://tr.wikipedia.org/wiki/Vietnam_mutfa%C4%9F%C4%B1"
      },
      {
        q: "Falafel hangi bölgenin mutfağında öne çıkar?",
        imageKey: "falafel",
        a: [
          { t: "Orta Doğu", c: true },
          { t: "Kuzey Avrupa" },
          { t: "Güneydoğu Asya" },
          { t: "Karayipler" }
        ],
        fact: "Falafel, nohut veya bakla ile yapılan, Orta Doğu'da yaygın bir köfte türüdür.",
        wiki: "https://tr.wikipedia.org/wiki/Falafel"
      },
      {
        q: "Risotto hangi ülkenin pirinç yemeğidir?",
        imageKey: "risotto",
        a: [
          { t: "İtalya", c: true },
          { t: "İspanya" },
          { t: "Fransa" },
          { t: "Yunanistan" }
        ],
        fact: "Risotto, İtalya'da Arborio gibi pirinçlerle, et suyu eklenerek yapılan kremsi bir yemektir.",
        wiki: "https://tr.wikipedia.org/wiki/Risotto"
      },
      {
        q: "Tapas hangi ülkenin küçük tabak kültürüdür?",
        imageKey: "tapas",
        a: [
          { t: "İspanya", c: true },
          { t: "Portekiz" },
          { t: "Meksika" },
          { t: "İtalya" }
        ],
        fact: "Tapas, İspanya'da içki yanında servis edilen küçük porsiyonluk yemeklere verilen addır.",
        wiki: "https://tr.wikipedia.org/wiki/Tapas"
      },
      {
        q: "Borş çorbası hangi ülkenin mutfağıyla özdeşleşir?",
        imageKey: "bors",
        a: [
          { t: "Ukrayna", c: true },
          { t: "İtalya" },
          { t: "Fransa" },
          { t: "Yunanistan" }
        ],
        fact: "Borş, genellikle pancar kullanılarak yapılan ve Ukrayna mutfağının simgesi sayılan bir çorbadır.",
        wiki: "https://tr.wikipedia.org/wiki/Bor%C5%9F_%C3%A7orbas%C4%B1"
      },
      {
        q: "Kuskus hangi Kuzey Afrika ülkesinin ulusal yemeklerinden biridir?",
        imageKey: "kuskus",
        a: [
          { t: "Fas", c: true },
          { t: "Mısır" },
          { t: "Kenya" },
          { t: "Güney Afrika" }
        ],
        fact: "Kuskus, Fas başta olmak üzere Kuzey Afrika'da buharda pişirilen irmikle yapılan bir yemektir.",
        wiki: "https://tr.wikipedia.org/wiki/Kuskus"
      },
      {
        q: "Poutine hangi ülkenin patates yemeğidir?",
        imageKey: "poutine",
        a: [
          { t: "Kanada", c: true },
          { t: "ABD" },
          { t: "İrlanda" },
          { t: "Belçika" }
        ],
        fact: "Poutine, Kanada'da patates kızartması, gravy sos ve peynir mayasıyla yapılan bir sokak lezzetidir.",
        wiki: "https://tr.wikipedia.org/wiki/Poutine"
      },
      {
        q: "Bibimbap hangi ülkenin karışık pilav yemeğidir?",
        imageKey: "bibimbap",
        a: [
          { t: "Güney Kore", c: true },
          { t: "Japonya" },
          { t: "Çin" },
          { t: "Tayland" }
        ],
        fact: "Bibimbap, pirinç üzerine sebze, et ve yumurta eklenerek karıştırılan bir Kore yemeğidir.",
        wiki: "https://tr.wikipedia.org/wiki/Bibimbap"
      },
      {
        q: "Currywurst hangi ülkenin sokak lezzetidir?",
        imageKey: "currywurst",
        a: [
          { t: "Almanya", c: true },
          { t: "Avusturya" },
          { t: "Hollanda" },
          { t: "Danimarka" }
        ],
        fact: "Currywurst, özellikle Berlin'de yaygın olan, curry soslu sosis ve patates kızartmasıdır.",
        wiki: "https://tr.wikipedia.org/wiki/Currywurst"
      },
      {
        q: "Fish and chips hangi ülkenin en tanınan yemeklerinden biridir?",
        imageKey: "fish-and-chips",
        a: [
          { t: "Birleşik Krallık", c: true },
          { t: "Norveç" },
          { t: "İzlanda" },
          { t: "Kanada" }
        ],
        fact: "Fish and chips, pane balık ve patates kızartmasıyla yapılan bir Birleşik Krallık klasiğidir.",
        wiki: "https://tr.wikipedia.org/wiki/Fish_and_chips"
      },
      {
        q: "Arepa hangi ülkenin mısır ekmeğiyle ünlü sokak lezzetidir?",
        imageKey: "arepa",
        a: [
          { t: "Venezuela", c: true },
          { t: "Meksika" },
          { t: "Peru" },
          { t: "Şili" }
        ],
        fact: "Arepa, mısır unuyla yapılan ve Venezuela ile Kolombiya'da yaygın olan bir yiyecektir.",
        wiki: "https://tr.wikipedia.org/wiki/Arepa"
      },
      {
        q: "Pekin ördeği hangi ülkenin mutfağına aittir?",
        imageKey: "pekin-ordegi",
        a: [
          { t: "Çin", c: true },
          { t: "Japonya" },
          { t: "Kore" },
          { t: "Tayland" }
        ],
        fact: "Pekin ördeği, Çin'in başkenti Pekin'e özgü, çıtır derili ünlü bir ördek yemeğidir.",
        wiki: "https://tr.wikipedia.org/wiki/Pekin_%C3%B6rde%C4%9Fi"
      },
      {
        q: "Döner kebap hangi ülkenin mutfağıyla özdeşleşmiştir?",
        imageKey: "doner",
        a: [
          { t: "Türkiye", c: true },
          { t: "Yunanistan" },
          { t: "Lübnan" },
          { t: "İran" }
        ],
        fact: "Döner, dikey bir şişte pişirilen etin ince ince kesilmesiyle hazırlanan bir Türk yemeğidir.",
        wiki: "https://tr.wikipedia.org/wiki/D%C3%B6ner"
      },
      {
        q: "Lahmacun hangi ülkenin mutfağına ait bir hamur yemeğidir?",
        imageKey: "lahmacun",
        a: [
          { t: "Türkiye", c: true },
          { t: "İtalya" },
          { t: "Meksika" },
          { t: "Hindistan" }
        ],
        fact: "Lahmacun, ince açılmış hamur üzerine kıyma, sebze ve baharat karışımı sürülerek pişirilir.",
        wiki: "https://tr.wikipedia.org/wiki/Lahmacun"
      },
      {
        q: "Mantı, Türkiye'de özellikle hangi iliyle ünlüdür?",
        imageKey: "manti",
        a: [
          { t: "Kayseri", c: true },
          { t: "Gaziantep" },
          { t: "Trabzon" },
          { t: "İzmir" }
        ],
        fact: "Kayseri mantısı, küçük hamur parçaları ve yoğurtlu sosuyla ün kazanmıştır.",
        wiki: "https://tr.wikipedia.org/wiki/Mant%C4%B1"
      },
      {
        q: "Künefe hangi ilimizin tatlılarıyla özdeşleşmiştir?",
        imageKey: "kunefe",
        a: [
          { t: "Hatay", c: true },
          { t: "Gaziantep" },
          { t: "Şanlıurfa" },
          { t: "Adana" }
        ],
        fact: "Hatay künefesi, tel kadayıf, peynir ve şerbetle hazırlanan ünlü bir tatlıdır.",
        wiki: "https://tr.wikipedia.org/wiki/K%C3%BCnefe"
      },
      {
        q: "İskender kebap hangi ilimizin mutfağıyla anılır?",
        imageKey: "iskender",
        a: [
          { t: "Bursa", c: true },
          { t: "İstanbul" },
          { t: "Ankara" },
          { t: "İzmir" }
        ],
        fact: "İskender kebap, Bursa'da döner eti, pide, domates sosu ve yoğurtla servis edilen bir lezzettir.",
        wiki: "https://tr.wikipedia.org/wiki/%C4%B0skender_kebap"
      },
      {
        q: "Çiğ köfte hangi ilimizin kültüründe önemli bir yere sahiptir?",
        imageKey: "cig-kofte",
        a: [
          { t: "Şanlıurfa", c: true },
          { t: "İzmir" },
          { t: "Trabzon" },
          { t: "Bursa" }
        ],
        fact: "Çiğ köfte, özellikle Şanlıurfa ve Adıyaman'da yaygın olan, bulgurla yapılan bir lezzettir.",
        wiki: "https://tr.wikipedia.org/wiki/%C3%87i%C4%9F_k%C3%B6fte"
      },
      {
        q: "Menemen hangi öğünle özdeşleşen bir Türk yemeğidir?",
        imageKey: "menemen",
        a: [
          { t: "Kahvaltı", c: true },
          { t: "Akşam yemeği" },
          { t: "Tatlı" },
          { t: "Ara öğün" }
        ],
        fact: "Menemen, yumurta, domates ve biberle yapılan, özellikle kahvaltıda sevilen bir yemektir.",
        wiki: "https://tr.wikipedia.org/wiki/Menemen"
      }
    ]
  }
};

if (typeof window !== "undefined") window.EXTRA_TESTS = EXTRA_TESTS;
