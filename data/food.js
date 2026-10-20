/* ============================================================
   TESTHANE — yemek verisi
   Bu dosya otomatik üretildi: tools/build-food.mjs
   Kaynak: Vikipedi (CC BY-SA) ve Wikimedia Commons
   ============================================================ */

const FOOD_DB = {
 dishes: [
 {
  "name": "Pizza",
  "cuisine": "İtalya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/960px-Pizza-3007395.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Pizza",
  "desc": "pizza — İtalyan mutfağında bir mayalı hamur işi, üstüne birçok malzeme konulabilir"
 },
 {
  "name": "Lasagna",
  "cuisine": "İtalya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/960px-Lasagne_-_stonesoup.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Lasagna",
  "desc": "lasagna — Flat pasta and stacked pasta dishes"
 },
 {
  "name": "Spagetti",
  "cuisine": "İtalya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg/960px-Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Bolognese_sauce",
  "desc": "spagetti — Main variety of ragù in Italian cuisine"
 },
 {
  "name": "Risotto",
  "cuisine": "İtalya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg/960px-Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Risotto",
  "desc": "risotto — Northern Italian rice dish"
 },
 {
  "name": "Focaccia",
  "cuisine": "İtalya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Focaccia_genovese.JPG/960px-Focaccia_genovese.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Focaccia",
  "desc": "focaccia — Fırında pişirilen İtalyan ekmeği"
 },
 {
  "name": "Sushi",
  "cuisine": "Japonya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/960px-Sushi_platter.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Su%C5%9Fi",
  "desc": "sushi — Japonya kökenli bir balık yemeği"
 },
 {
  "name": "Ramen",
  "cuisine": "Japonya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Gyoza_no_Ousho_20191210_125203.jpg/960px-Gyoza_no_Ousho_20191210_125203.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/R%C4%81men",
  "desc": ""
 },
 {
  "name": "Sashimi",
  "cuisine": "Japonya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/241109_Shigaraki_ware_Koga_Shiga_pref_Japan01s3.jpg/960px-241109_Shigaraki_ware_Koga_Shiga_pref_Japan01s3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Sashimi",
  "desc": "sashimi — Japanese dish of raw fish"
 },
 {
  "name": "Tempura",
  "cuisine": "Japonya",
  "img": "https://upload.wikimedia.org/wikipedia/commons/8/86/Tempura_02.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://tr.wikipedia.org/wiki/Tempura",
  "desc": "tempura — Japon yemeği"
 },
 {
  "name": "Udon",
  "cuisine": "Japonya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/%E9%B6%8F%E5%A4%A9%E3%81%AE%E3%81%86%E3%81%A9%E3%82%93.jpg/960px-%E9%B6%8F%E5%A4%A9%E3%81%AE%E3%81%86%E3%81%A9%E3%82%93.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Udon",
  "desc": "udon — Thick noodle made from wheat flour"
 },
 {
  "name": "Taco",
  "cuisine": "Meksika",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Tacos_on_a_plate.jpg/960px-Tacos_on_a_plate.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Taco",
  "desc": "taco — Meksika'ya özgü geleneksel bir yemek"
 },
 {
  "name": "Burrito",
  "cuisine": "Meksika",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/960px-Burrito.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Burrito",
  "desc": "burrito — Meksika kültürüne ait dürüm benzeri yiyecek"
 },
 {
  "name": "Guacamole",
  "cuisine": "Meksika",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Avocado-Guacamole-Colombia.jpg/960px-Avocado-Guacamole-Colombia.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Guacamole",
  "desc": ""
 },
 {
  "name": "Enchilada",
  "cuisine": "Meksika",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Enchilada_Rice_Beans.jpg/960px-Enchilada_Rice_Beans.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Enchilada",
  "desc": "enchilada — yemek"
 },
 {
  "name": "Hamburger",
  "cuisine": "ABD",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg/960px-McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Hamburger",
  "desc": ""
 },
 {
  "name": "Hot dog",
  "cuisine": "ABD",
  "img": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Po%27Boy_Preservation_Festival_Hot_Sausage_Sandwich.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://tr.wikipedia.org/wiki/Sosisli_sandvi%C3%A7",
  "desc": "hot dog — sandviç türü"
 },
 {
  "name": "Paella",
  "cuisine": "İspanya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Paella",
  "desc": ""
 },
 {
  "name": "Churros",
  "cuisine": "İspanya",
  "img": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Churros_Madrid.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://tr.wikipedia.org/wiki/Churro",
  "desc": ""
 },
 {
  "name": "Tortilla İspanyol",
  "cuisine": "İspanya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg/960px-Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Spanish_omelette",
  "desc": "tortilla İspanyol — Traditional dish of egg and potato"
 },
 {
  "name": "Croissant",
  "cuisine": "Fransa",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/960px-2018_01_Croissant_IMG_0685.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Kruvasan",
  "desc": "croissant — unlu mamül"
 },
 {
  "name": "Ratatouille",
  "cuisine": "Fransa",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Ratatouille.jpg/960px-Ratatouille.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Ratatuy",
  "desc": ""
 },
 {
  "name": "Baguette",
  "cuisine": "Fransa",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Mallet_bag.JPG/960px-Mallet_bag.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Baget",
  "desc": ""
 },
 {
  "name": "Soğan çorbası",
  "cuisine": "Fransa",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Soupe_%C3%A0_l%27oignon.jpg/960px-Soupe_%C3%A0_l%27oignon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/French_onion_soup",
  "desc": "soğan çorbası — Soup of onions and stock"
 },
 {
  "name": "Döner",
  "cuisine": "Türkiye",
  "img": "https://upload.wikimedia.org/wikipedia/commons/a/ad/D%C3%B6ner_kebab_slicing.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://tr.wikipedia.org/wiki/D%C3%B6ner",
  "desc": "döner — Türk mutfağından geleneksel et yemeği"
 },
 {
  "name": "İskender",
  "cuisine": "Türkiye",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/960px-%C4%B0skender_Kebap.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/%C4%B0skender_kebap",
  "desc": "İskender — Türk mutfağında yer alan, yoğurt ve domates soslu tırnak pideli döner"
 },
 {
  "name": "Menemen",
  "cuisine": "Türkiye",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/My_breakfast_menemen.jpg/960px-My_breakfast_menemen.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Menemen_(yemek)",
  "desc": "menemen — Türk mutfağından yumurta yemeği"
 },
 {
  "name": "Baklava",
  "cuisine": "Türkiye",
  "img": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://tr.wikipedia.org/wiki/Baklava",
  "desc": "baklava — şerbetli bir Türk tatlısı"
 },
 {
  "name": "Mantı",
  "cuisine": "Türkiye",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/960px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Manti_(food)",
  "desc": "mantı — Type of dumpling popular in Central and West Asia"
 },
 {
  "name": "Köfte",
  "cuisine": "Türkiye",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Sultanahmet_K%C3%B6ftesi.jpg/960px-Sultanahmet_K%C3%B6ftesi.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/K%C3%B6fte",
  "desc": "köfte — kıymanın küçük bir top haline getirilmesiyle yapılan yemek"
 },
 {
  "name": "Simit",
  "cuisine": "Türkiye",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Simit%2C_Istanbul%2C_Turkey_%2849579014147%29.jpg/960px-Simit%2C_Istanbul%2C_Turkey_%2849579014147%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Simit",
  "desc": "simit — geleneksel Türk susamlı halka ekmeği"
 },
 {
  "name": "Çiğ köfte",
  "cuisine": "Türkiye",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Turkish_%C3%A7i%C4%9F_k%C3%B6fte.jpg/960px-Turkish_%C3%A7i%C4%9F_k%C3%B6fte.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/%C3%87i%C4%9F_k%C3%B6fte",
  "desc": "çiğ köfte — Türk mutfağından, ana malzemesi çiğ kıyma ve bulgur olan geleneksel yemek"
 },
 {
  "name": "Falafel",
  "cuisine": "Orta Doğu",
  "img": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Falafel.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://tr.wikipedia.org/wiki/Falafel",
  "desc": "falafel — Orta Doğu'ya özgü geleneksel yiyecek"
 },
 {
  "name": "Humus",
  "cuisine": "Orta Doğu",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/960px-Lebanese_style_hummus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Hummus",
  "desc": "humus — Middle Eastern chickpea puree dish"
 },
 {
  "name": "Şiş kebap",
  "cuisine": "Orta Doğu",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Shashlyk.jpg/960px-Shashlyk.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/%C5%9Ei%C5%9F_kebab%C4%B1",
  "desc": "şiş kebap — şişe geçirilerek ızgara edilen et (yemeği)"
 },
 {
  "name": "Pad thai",
  "cuisine": "Tayland",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/960px-Phat_Thai_kung_Chang_Khien_street_stall.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Pad_thai",
  "desc": "pad thai — Stir-fried noodle dish from Thailand"
 },
 {
  "name": "Tom Yum çorbası",
  "cuisine": "Tayland",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Tom_yam_kung_maenam.jpg/960px-Tom_yam_kung_maenam.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Tom_yum",
  "desc": "Tom Yum çorbası — Thai soup"
 },
 {
  "name": "Pho",
  "cuisine": "Vietnam",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Bowl_of_Meatball_pho.jpg/960px-Bowl_of_Meatball_pho.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Pho",
  "desc": "Pho — Vietnamese noodle soup dish"
 },
 {
  "name": "Biryani",
  "cuisine": "Hindistan",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/960px-%22Hyderabadi_Dum_Biryani%22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Biryani",
  "desc": "biryani — Rice-based dish from South Asia"
 },
 {
  "name": "Masala",
  "cuisine": "Hindistan",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Taj_Mahal_-_Lamb_Curry_Madras.jpg/960px-Taj_Mahal_-_Lamb_Curry_Madras.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Curry",
  "desc": "masala — Spiced Asian-inspired sauces and dishes"
 },
 {
  "name": "Pekin ördeği",
  "cuisine": "Çin",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Beyaz_Emne.jpg/960px-Beyaz_Emne.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Pekin_%C3%B6rde%C4%9Fi",
  "desc": ""
 },
 {
  "name": "Dim sum",
  "cuisine": "Çin",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Chinese_DimSum_%289023590541%29.jpg/960px-Chinese_DimSum_%289023590541%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Dim_sum",
  "desc": ""
 },
 {
  "name": "Kimçi",
  "cuisine": "Kore",
  "img": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://en.wikipedia.org/wiki/Kimchi",
  "desc": "Kimçi — Korean side dish of fermented vegetables"
 },
 {
  "name": "Bibimbap",
  "cuisine": "Kore",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/960px-Dolsot-bibimbap.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Bibimbap",
  "desc": "bibimbap — Kore yemeği"
 },
 {
  "name": "Feijoada",
  "cuisine": "Brezilya",
  "img": "https://upload.wikimedia.org/wikipedia/commons/9/90/Feijoada_%C3%A0_transmontada.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled&width=640",
  "page": "https://en.wikipedia.org/wiki/Feijoada",
  "desc": "feijoada — Pork and bean stew found throughout the Lusophony"
 },
 {
  "name": "Empanada",
  "cuisine": "Arjantin",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Docena_de_Empanadas_Caseras_Argentinas.jpg/960px-Docena_de_Empanadas_Caseras_Argentinas.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Empanada",
  "desc": ""
 },
 {
  "name": "Arepa",
  "cuisine": "Venezüella",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Arepas_venezolanas.jpg/960px-Arepas_venezolanas.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Arepa",
  "desc": ""
 },
 {
  "name": "Gyros",
  "cuisine": "Yunanistan",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Pita_giros.JPG/960px-Pita_giros.JPG?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://tr.wikipedia.org/wiki/Gyros",
  "desc": ""
 },
 {
  "name": "Pierogi",
  "cuisine": "Polonya",
  "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Pierogi_z_mas%C5%82em_-_2023.03.31.jpg/960px-Pierogi_z_mas%C5%82em_-_2023.03.31.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail&width=640",
  "page": "https://en.wikipedia.org/wiki/Pierogi",
  "desc": "pierogi — Stuffed Polish dumplings"
 }
]
};
