/* ============================================================
   TESTHANE — el yapımı testlerin Wikimedia görselleri
   Bu dosya otomatik üretildi: tools/build-extras.mjs
   Kaynak: Vikipedi (CC BY-SA) ve Wikimedia Commons
   ============================================================ */

const WIKI_EXTRAS = {
 "icene-donukluk": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Caspar%20David%20Friedrich%20-%20Wanderer%20above%20the%20sea%20of%20fog.jpg?width=900",
  "page": "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
  "desc": "Sis Denizinde Gezgin, Caspar David Friedrich"
 },
 "istanbul": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Historical%20peninsula%20and%20modern%20skyline%20of%20Istanbul.jpg?width=900",
  "page": "https://commons.wikimedia.org/wiki/File:Historical_peninsula_and_modern_skyline_of_Istanbul.jpg",
  "desc": "İstanbul'un tarihî yarımadası ve modern silüeti"
 },
 "televizyon": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Family%20watching%20television%201958.jpg?width=900",
  "page": "https://commons.wikimedia.org/wiki/File:Family_watching_television_1958.jpg",
  "desc": "1958'de televizyon izleyen bir aile"
 },
 "kavsak": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Two%20roads%20diverge%20in%20a%20wood%20-%20geograph.org.uk%20-%20594238.jpg?width=900",
  "page": "https://commons.wikimedia.org/wiki/File:Two_roads_diverge_in_a_wood_-_geograph.org.uk_-_594238.jpg",
  "desc": "Ormanda ikiye ayrılan yol"
 },
 "kapadokya": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Cappadocia%20edit.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Kapadokya",
  "desc": "Türkiye'de bulunan turistik bir bölge"
 },
 "satranc": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Opening%20chess%20position%20from%20black%20side.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Satran%C3%A7",
  "desc": "iki oyuncu ile oynanan, turnuvaları düzenlenen ve birçok farklı türü olan zekâ oyunu"
 },
 "narsisizm": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Narcissus-Caravaggio%20(1594-96)%20edited.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Narsisizm",
  "desc": "kendine aşırı düşkünlük"
 },
 "ofis": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Photograph%20of%20the%20Division%20of%20Classification%20and%20Cataloging%20(36341206050).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Ofis",
  "desc": "insanların ofis işlerini yaptığı oda"
 },
 "konser": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/(Portrait%20of%20Bob%20Cooper%2C%201947%20or%201948)%20(LOC)%20(5020409490).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Konser",
  "desc": "Sanatçıların müzik eserlerini bir topluluk önünde çalması veya söylemesi"
 },
 "turk-kahvesi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Turkish%20coffee%20in%20Istanbul.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/T%C3%BCrk_kahvesi",
  "desc": "Türk usulü kahve"
 },
 "arkadaslik": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/3%20barefoot%20females%20smiling%20and%20sitting%20on%20a%20bench.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Arkada%C5%9Fl%C4%B1k",
  "desc": "birbirlerine karşılıklı sevgi besleyen insanlar arasındaki ilişki"
 },
 "baklava": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Baklava(1).png?width=900",
  "page": "https://tr.wikipedia.org/wiki/Baklava",
  "desc": "şerbetli bir Türk tatlısı"
 },
 "lizbon": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Lisboa837.png?width=900",
  "page": "https://tr.wikipedia.org/wiki/Lizbon",
  "desc": "Portekiz'in başkenti ve en büyük şehri"
 },
 "ronesans": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Sandro%20Botticelli%20046.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/R%C3%B6nesans",
  "desc": "Orta Çağ ve Reformasyon arasındaki tarihi dönem"
 },
 "tatil": {
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Playa_Vi%C3%B1a2.JPG/960px-Playa_Vi%C3%B1a2.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "page": "https://tr.wikipedia.org/wiki/Tatil",
  "desc": "dinlenmek ve eğlenmek için çalışmaya verilen ara"
 },
 "sinema": {
  "img": "https://upload.wikimedia.org/wikipedia/commons/2/23/FilmCrew.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
  "page": "https://tr.wikipedia.org/wiki/Sinema",
  "desc": "filmin beyaz renk perdeye yansıtılması"
 },
 "kurt": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Eurasian%20wolf%202.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Kurt",
  "desc": "Avrasya ve Kuzey Amerika'ya özgü memeli"
 },
 "van-golu": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Lakevanlandsat.jpeg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Van_G%C3%B6l%C3%BC",
  "desc": "Türkiye'nin en büyük gölü"
 },
 "efes": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ephesus%20Celsus%20Library%20Fa%C3%A7ade.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Efes",
  "desc": "Anadolu'da bir antik kent"
 },
 "tbmm": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Building%20of%20the%20Grand%20National%20Assembly%20of%20Turkey.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/T%C3%BCrkiye_B%C3%BCy%C3%BCk_Millet_Meclisi",
  "desc": "Türkiye Cumhuriyeti'nin parlamentosu"
 },
 "agri-dagi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/NEO%20ararat%20big.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/A%C4%9Fr%C4%B1_Da%C4%9F%C4%B1",
  "desc": "Türkiye'nin en yüksek dağı"
 },
 "sultanahmet": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Exterior%20of%20Sultan%20Ahmed%20I%20Mosque%20in%20Istanbul%2C%20Turkey%20002.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Sultanahmet_Camii",
  "desc": "İstanbul'un Fatih ilçesinde tarihî camii"
 },
 "pamukkale": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Pamukkale%2C%20Denizli%202026%2068.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Pamukkale",
  "desc": "Pamukkale'de doğal ve turistik alan"
 },
 "kizilirmak": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Taybi%20Ovasi%20K%C4%B1z%C4%B1l%C4%B1rmak.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/K%C4%B1z%C4%B1l%C4%B1rmak",
  "desc": "Türkiye topraklarından doğup Türkiye topraklarından denize dökülen en uzun akarsu"
 },
 "amasya": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ye%C5%9Fil%C4%B1rmak2.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Amasya",
  "desc": "Amasya ilinin merkezi olan şehir"
 },
 "anitkabir": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara%20asv2021-10%20img04%20An%C4%B1tkabir.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/An%C4%B1tkabir",
  "desc": "Ankara'da Türkiye Cumhuriyeti'nin kurucusu Atatürk'ün anıt mezarı"
 },
 "gobeklitepe": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6bekli%20Tepe%2C%20Urfa.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/G%C3%B6beklitepe",
  "desc": "Türkiye'deki neolitik arkeolojik alan"
 },
 "nemrut": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Worshipping%20Nemrut.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Nemrut_Da%C4%9F%C4%B1",
  "desc": "Adıyaman ilindeki Kahta ilçesi yakınlarında Ankar dağları civarında bir dağ"
 },
 "sumela": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%BCmela%20Manast%C4%B1r.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/S%C3%BCmela_Manast%C4%B1r%C4%B1",
  "desc": "Trabzon'da bulunan eski Rum Ortodoks manastır ve kilise kompleksi"
 },
 "aspendos": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Aspendos%20Amphitheatre.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Aspendos",
  "desc": "Antalya-Serik ilçesine bağlı olan Belkıs köyü sınırları içerisinde bulunan antik kent."
 },
 "truva": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Troy1.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Troya",
  "desc": "Anadolu'nun kuzeybatısında Homeros döneminden kalma antik kent"
 },
 "safranbolu": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Safranbolu%20traditional%20houses.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Safranbolu",
  "desc": "Karabük'ün bir ilçesi"
 },
 "divrigi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Divrigi%20complex%20DSCF3028.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Divri%C4%9Fi_Ulu_Camii_ve_Dar%C3%BC%C5%9F%C5%9Fifas%C4%B1",
  "desc": "Türkiye'de bulunan UNESCO Dünya Mirası Listesinde yer alan cami"
 },
 "ishakpasa": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/00%203411%20%C4%B0shak%20Pa%C5%9Fa%20Saray%C4%B1%20-%20Turkey.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/%C4%B0shak_Pa%C5%9Fa_Saray%C4%B1",
  "desc": "Ağrı'nın Doğubayazıt ilçesinde tarihi yapı"
 },
 "zeugma": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Zeugma.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Zeugma",
  "desc": "Türkiye'de bir antik kent"
 },
 "balikligol": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Bal%C4%B1kl%C4%B1g%C3%B6l%20Urfa2.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Bal%C4%B1kl%C4%B1g%C3%B6l",
  "desc": "Şanlıurfa'da göl"
 },
 "uzungol": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Uzung%C3%B6l%20lake%20and%20town.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Uzung%C3%B6l",
  "desc": "Türkiye'de bir göl"
 },
 "hattusa": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Lion%20Gate%2C%20Hattusa%2013%20(cropped).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Hattu%C5%9Fa",
  "desc": "Hititler'in Geç Tunç Çağı dönemindeki başkenti"
 },
 "sardes": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Bath-Gymnasium%20complex%20at%20Sardis%2C%20late%202nd%20-%20early%203rd%20century%20AD%2C%20Sardis%2C%20Turkey%20(17098680002).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Sardis",
  "desc": "Türkiye'de bir antik kent"
 },
 "bergama": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Bergama%2C%20Turkey.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Bergama",
  "desc": "İzmir'in ilçesi"
 },
 "ani": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ani%20seen%20from%20Armenia.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Ani",
  "desc": "Kars'ın güneydoğusunda il ve ören yeri"
 },
 "perge": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Perge%20city%20overview.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Perge",
  "desc": "Pamfilya bölgesine başkentlik yapmış antik kent"
 },
 "assos": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Assos.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Assos",
  "desc": "Ayvacık'da bir antik kent"
 },
 "mardin": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Mardin%2C%20Mardin%20Merkez-Mardin%2C%20Turkey%20-%20panoramio%20(1).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Mardin",
  "desc": "Mardin ilinin merkezi olan şehir"
 },
 "goreme": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6reme%20town%20and%20valley%202015.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/G%C3%B6reme",
  "desc": "Göreme'de antik kent ve ören yeri"
 },
 "dolmabahce": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio%20de%20Dolmabah%C3%A7e%2C%20Estambul%2C%20Turqu%C3%ADa%2C%202024-09-29%2C%20DD%2024.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Dolmabah%C3%A7e_Saray%C4%B1",
  "desc": "İstanbul'un Beşiktaş ilçesinde tarihi saray"
 },
 "topkapi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi%20Palace%20Seen%20From%20Harem.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/Topkap%C4%B1_Saray%C4%B1",
  "desc": "İstanbul'un Fatih ilçesinde tarihi yapı"
 },
 "kizkulesi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul%20asv2020-02%20img53%20Maiden's%20Tower.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/K%C4%B1z_Kulesi",
  "desc": "İstanbul'da bulunan tarihî kule"
 },
 "galata": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul%20asv2020-02%20img48%20Galata%20Tower.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Galata_Kulesi",
  "desc": "İstanbul'un Beyoğlu ilçesinde tarihi kule"
 },
 "tarik-akan": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Tar%C4%B1k%20Akan.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Tar%C4%B1k_Akan",
  "desc": "Türk sinema sanatçısı"
 },
 "sener-sen": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/%C5%9Eener%20%C5%9Een.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/%C5%9Eener_%C5%9Een",
  "desc": "Türk sinema sanatçısı"
 },
 "halit-ziya": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/HalitZiya.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Halid_Ziya_U%C5%9Fakl%C4%B1gil",
  "desc": "Türk şair ve yazar"
 },
 "cem-yilmaz": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/YilmazCem%20(cropped).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Cem_Y%C4%B1lmaz",
  "desc": "Türk komedyen, oyuncu, senarist, karikatürist, yapımcı ve yönetmen"
 },
 "ali-atay": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Aliatay.png?width=900",
  "page": "https://tr.wikipedia.org/wiki/Ali_Atay",
  "desc": "Türk oyuncu ve yönetmen"
 },
 "kenan-imirzalioglu": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Kenan%20%C4%B0mirzal%C4%B1o%C4%9Flu.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Kenan_%C4%B0mirzal%C4%B1o%C4%9Flu",
  "desc": "Türk oyuncu, sunucu ve manken"
 },
 "binnur-kaya": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Binnur%20Kaya%20on%20Tolgshow.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Binnur_Kaya",
  "desc": "Türk oyuncu"
 },
 "gulse-birsel": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%BClse%20Birsel%202017.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/G%C3%BClse_Birsel",
  "desc": "Türk oyuncu ve senarist"
 },
 "ata-demirer": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ata%20Demirer%2001.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Ata_Demirer",
  "desc": "Türk oyuncu ve komedyen"
 },
 "sahan-gokbakar": {
  "img": "https://upload.wikimedia.org/wikipedia/commons/3/33/Sahantogangokbakar_%283x4%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
  "page": "https://tr.wikipedia.org/wiki/%C5%9Eahan_G%C3%B6kbakar",
  "desc": "Türk komedyen ve oyuncu seslendirme sanatçısı"
 },
 "yesilcam": {
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Turkey_film_clapperboard.svg/960px-Turkey_film_clapperboard.svg.png?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "page": "https://tr.wikipedia.org/wiki/T%C3%BCrk_sinemas%C4%B1",
  "desc": "Türkiye'de sinemaya genel bakış"
 },
 "turk-sinemasi": {
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Turkey_film_clapperboard.svg/960px-Turkey_film_clapperboard.svg.png?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
  "page": "https://tr.wikipedia.org/wiki/T%C3%BCrk_sinemas%C4%B1",
  "desc": "Türkiye'de sinemaya genel bakış"
 },
 "turkan-soray": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Turkan%20Soray%201310395.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/T%C3%BCrkan_%C5%9Eoray",
  "desc": "Türk oyuncu"
 },
 "hulya-kocyigit": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/H%C3%BClya%20Ko%C3%A7yi%C4%9Fit%201964.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/H%C3%BClya_Ko%C3%A7yi%C4%9Fit",
  "desc": "Türk sinema ve dizi sanatçısı"
 },
 "yilmaz-guney": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Y%C4%B1lmaz%20G%C3%BCney.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Y%C4%B1lmaz_G%C3%BCney",
  "desc": "Türk sinema sanatçısı"
 },
 "adile-nasit": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/AdileNasit.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Adile_Na%C5%9Fit",
  "desc": "Türk sinema sanatçısı"
 },
 "halit-akcatepe": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Halit%20Ak%C3%A7atepe.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Halit_Ak%C3%A7atepe",
  "desc": "Türk sinema sanatçısı"
 },
 "zeki-alasya": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Zeki%20ALASYA.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Zeki_Alasya",
  "desc": "Türk tiyatro ve sinema sanatçısı"
 },
 "banu-alkan": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Banu%20Alkan%2C%202020.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Banu_Alkan",
  "desc": "Boşnak asıllı Türk oyuncu"
 },
 "trt": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/TRT%20Merkez%20Binas%C4%B1%20ORAN%20Ankara.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/T%C3%BCrkiye_Radyo_Televizyon_Kurumu",
  "desc": "Türk kamuya açık televizyon şirketi ve radyosu"
 },
 "susuz-yaz": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/H%C3%BClya%20Ko%C3%A7yi%C4%9Fit%20and%20Erol%20Ta%C5%9F%201964.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Susuz_Yaz",
  "desc": "1963 yapımı Türk filmi"
 },
 "gokhan-ozoguz": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6khan%20%C3%96zo%C4%9Fuz.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/G%C3%B6khan_%C3%96zo%C4%9Fuz",
  "desc": "Türk müzisyen"
 },
 "berguzar-korel": {
  "img": "https://upload.wikimedia.org/wikipedia/commons/4/4e/94mq389luGnWLjcMIzWeJsLPGto.webp?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
  "page": "https://tr.wikipedia.org/wiki/Berg%C3%BCzar_Korel",
  "desc": "Türk oyuncu, televizyon sunucusu ve şarkıcı"
 },
 "haluk-bilginer": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Haluk%20Bilginer2022.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Haluk_Bilginer",
  "desc": "Türk oyuncu"
 },
 "paella": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Cooking%20a%20paella.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Paella",
  "desc": ""
 },
 "sushi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Various%20sushi%2C%20beautiful%20October%20night%20at%20midnight.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Su%C5%9Fi",
  "desc": "Japonya kökenli bir balık yemeği"
 },
 "taco": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Tacos%202.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Taco",
  "desc": "Meksika'ya özgü geleneksel bir yemek"
 },
 "croissant": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Croissants%20au%20beurre%20(18953292873).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Kruvasan",
  "desc": "unlu mamül"
 },
 "pizza": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Eq%20it-na%20pizza-margherita%20sep2005%20sml.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Pizza",
  "desc": "İtalyan mutfağında bir mayalı hamur işi, üstüne birçok malzeme konulabilir"
 },
 "kimchi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gimchi.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Kim%C3%A7i",
  "desc": "Fermente edilmiş sebzelerden yapılan geleneksel Kore yemeği"
 },
 "humus": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Sa-whitegreen-chickpea.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Nohut_(t%C3%BCr)",
  "desc": "Baklagiller familyasından bir bitki türü"
 },
 "pad-thai": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Khanom%20Chin%20-%20Thai%20rice%20noodles.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/Tayland_mutfa%C4%9F%C4%B1",
  "desc": ""
 },
 "feijoada": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Feijoada%2001.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Brezilya_mutfa%C4%9F%C4%B1",
  "desc": ""
 },
 "gulas": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/2009-09-gulasch-p%C3%B6rk%C3%B6lt-paprikas-3.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Gula%C5%9F",
  "desc": ""
 },
 "tiramisu": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Classic%20Italian%20Tiramisu-3%20(29989504485).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Tiramisu",
  "desc": "İtalyan tatlısı"
 },
 "ramen": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ramen%2C%20sopa%20de%20fideus.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/R%C4%81men",
  "desc": ""
 },
 "pho": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ph%E1%BB%9F%20b%C3%B2%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Vietnam_mutfa%C4%9F%C4%B1",
  "desc": ""
 },
 "falafel": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Falafel%20beim%20Isarinselfest%20M%C3%BCnchen%202.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Falafel",
  "desc": "Orta Doğu'ya özgü geleneksel yiyecek"
 },
 "musakka": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Mousakas.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Musakka",
  "desc": "Türk mutfağının sebze yemeklerinden"
 },
 "risotto": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Risotto%20Weihnachten%202020%2013.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Risotto",
  "desc": "Et, tavuk veya sebze suyunda pişirilerek krema kıvamına getirilmiş bir tür pirinç pilavı"
 },
 "tapas": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/TapasenBarcelona.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/Tapas",
  "desc": ""
 },
 "bors": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Borscht%20with%20bread.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Bor%C3%A7_%C3%A7orbas%C4%B1",
  "desc": "Ukrayna kökenli et sulu çorba"
 },
 "kuskus": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Moroccan%20cuscus%2C%20from%20Casablanca%2C%20September%202018.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Kuskus",
  "desc": ""
 },
 "poutine": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Poutine.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/Poutine",
  "desc": ""
 },
 "bibimbap": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Korean.food-Bibimbap-02.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Bibimbap",
  "desc": "Kore yemeği"
 },
 "tom-yum": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Khanom%20Chin%20-%20Thai%20rice%20noodles.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/Tayland_mutfa%C4%9F%C4%B1",
  "desc": ""
 },
 "currywurst": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Currywurst-1.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Currywurst",
  "desc": ""
 },
 "fish-and-chips": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20and%20chips.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Fish_and_chips",
  "desc": ""
 },
 "empanada": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Empanadas%20argentinas%20de%20jam%C3%B3n%20y%20queso%20con%20or%C3%A9gano%20y%20tomate%2C%20pinceladas%20con%20huevo%20batido.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Empanada",
  "desc": ""
 },
 "arepa": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Arepitas%20Food%20Macro.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Arepa",
  "desc": ""
 },
 "pekin-ordegi": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Amerikanische%20Pekingenten%202013%2001%2C%20cropped.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Pekin_%C3%B6rde%C4%9Fi",
  "desc": ""
 },
 "doner": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Zwei%20Doener%20Kebab.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/D%C3%B6ner",
  "desc": "Türk mutfağından geleneksel et yemeği"
 },
 "lahmacun": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Lahmacun.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Lahmacun",
  "desc": "Orta Doğu mutfağından bir yemek"
 },
 "manti": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Manty%20(3968046229).jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Mant%C4%B1",
  "desc": "genellikle kıyma ile hazırlanan içli hamur işi yemek"
 },
 "kunefe": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/K%C3%BCnefe.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/K%C3%BCnefe",
  "desc": "bir çeşit tatlı"
 },
 "iskender": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%B0skender%20kebap.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/%C4%B0skender_kebap",
  "desc": "Türk mutfağında yer alan, yoğurt ve domates soslu tırnak pideli döner"
 },
 "cig-kofte": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/%C5%9Eanl%C4%B1urfa%20%C3%87i%C4%9F%20K%C3%B6ftesi.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/%C3%87i%C4%9F_k%C3%B6fte",
  "desc": "Türk mutfağından, ana malzemesi çiğ kıyma ve bulgur olan geleneksel yemek"
 },
 "dolma": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Etli%20biber%20dolma.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Dolma",
  "desc": "doldurulmuş sebze, meyve, deniz ürünleri ve çiçek yemeklerinin genel adı"
 },
 "menemen": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Menemen%2C%20%C4%B0zmir%2C%20Turkey.jpg?width=900",
  "page": "https://tr.wikipedia.org/wiki/Menemen",
  "desc": "İzmir'in ilçesi"
 },
 "simit": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Simit-2x.JPG?width=900",
  "page": "https://tr.wikipedia.org/wiki/Simit",
  "desc": "geleneksel Türk susamlı halka ekmeği"
 },
 "baklava-tatli": {
  "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Baklava(1).png?width=900",
  "page": "https://tr.wikipedia.org/wiki/Baklava",
  "desc": "şerbetli bir Türk tatlısı"
 }
};

if (typeof window !== "undefined") window.WIKI_EXTRAS = WIKI_EXTRAS;
