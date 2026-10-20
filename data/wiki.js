/* ============================================================
   TESTHANE — Vikipedi / Wikidata verisi
   Bu dosya otomatik üretildi: tools/build-wiki.mjs
   Kaynak: Vikipedi (CC BY-SA) ve Wikimedia Commons
   Yeniden üretmek için: node tools/build-wiki.mjs
   ============================================================ */

const WIKI = {
 "fetchedAt": "2026-10-20T09:50:39.558Z",
 "source": "Vikipedi / Wikimedia Commons",
 "countries": [
  {
   "name": "Afganistan",
   "capital": "Kabil",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Taliban.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Afganistan"
  },
  {
   "name": "Almanya",
   "capital": "Berlin",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Germany.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Almanya"
  },
  {
   "name": "Amerika Birleşik Devletleri",
   "capital": "Washington",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20United%20States%20%28DDD-F-416E%20specifications%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Amerika_Birle%C5%9Fik_Devletleri"
  },
  {
   "name": "Andorra",
   "capital": "Andorra la Vella",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Andorra.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Andorra"
  },
  {
   "name": "Angola",
   "capital": "Luanda",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Angola.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Angola"
  },
  {
   "name": "Antigua ve Barbuda",
   "capital": "Q36262",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Antigua%20and%20Barbuda.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Antigua_ve_Barbuda"
  },
  {
   "name": "Arjantin",
   "capital": "Buenos Aires",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Argentina.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Arjantin"
  },
  {
   "name": "Arnavutluk",
   "capital": "Tiran",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Albania.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Arnavutluk"
  },
  {
   "name": "Avustralya",
   "capital": "Canberra",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Australia%20%28converted%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Avustralya"
  },
  {
   "name": "Avusturya",
   "capital": "Viyana",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Austria.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Avusturya"
  },
  {
   "name": "Azerbaycan",
   "capital": "Bakü",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Azerbaijan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Azerbaycan"
  },
  {
   "name": "Bahamalar",
   "capital": "Nassau",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Bahamas.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Bahamalar"
  },
  {
   "name": "Bahreyn",
   "capital": "Mename",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Bahrain.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Bahreyn"
  },
  {
   "name": "Bangladeş",
   "capital": "Dakka",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Bangladesh.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Banglade%C5%9F"
  },
  {
   "name": "Barbados",
   "capital": "Bridgetown",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Barbados.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Barbados"
  },
  {
   "name": "Belarus",
   "capital": "Minsk",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Belarus.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Belarus"
  },
  {
   "name": "Belçika",
   "capital": "Brüksel Şehri",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Belgium.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Bel%C3%A7ika"
  },
  {
   "name": "Belize",
   "capital": "Belmopán",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Belize.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Belize"
  },
  {
   "name": "Benin",
   "capital": "Porto-Novo",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Benin.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Benin"
  },
  {
   "name": "Birleşik Arap Emirlikleri",
   "capital": "Abu Dabi",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20United%20Arab%20Emirates.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Birle%C5%9Fik_Arap_Emirlikleri"
  },
  {
   "name": "Birleşik Krallık",
   "capital": "Londra",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20United%20Kingdom%20%283-5%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Birle%C5%9Fik_Krall%C4%B1k"
  },
  {
   "name": "Bolivya",
   "capital": "Sucre",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Bolivia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Bolivya"
  },
  {
   "name": "Bosna Hersek",
   "capital": "Saraybosna",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Bosnia%20and%20Herzegovina.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Bosna-Hersek"
  },
  {
   "name": "Botsvana",
   "capital": "Gaborone",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Botswana.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Botsvana"
  },
  {
   "name": "Brezilya",
   "capital": "Brasília",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Brazil.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Brezilya"
  },
  {
   "name": "Bruney",
   "capital": "Bandar Seri Begavan",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Brunei.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Brunei"
  },
  {
   "name": "Bulgaristan",
   "capital": "Sofya",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Bulgaria.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Bulgaristan"
  },
  {
   "name": "Burkina Faso",
   "capital": "Ouagadougou",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Burkina%20Faso.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Burkina_Faso"
  },
  {
   "name": "Burundi",
   "capital": "Gietaga",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Burundi.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Burundi"
  },
  {
   "name": "Butan",
   "capital": "Thimphu",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Bhutan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Bhutan"
  },
  {
   "name": "Cabo Verde",
   "capital": "Praia",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Cape%20Verde%20%2810-17%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Ye%C5%9Fil_Burun_Adalar%C4%B1"
  },
  {
   "name": "Cezayir",
   "capital": "Cezayir",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Algeria.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Cezayir"
  },
  {
   "name": "Cibuti",
   "capital": "Cibuti",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Djibouti.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Cibuti"
  },
  {
   "name": "Çad",
   "capital": "Encemine",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Chad.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C3%87ad"
  },
  {
   "name": "Çekya",
   "capital": "Prag",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Czech%20Republic.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C3%87ekya"
  },
  {
   "name": "Çin Halk Cumhuriyeti",
   "capital": "Pekin",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20People%27s%20Republic%20of%20China.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C3%87in"
  },
  {
   "name": "Danimarka",
   "capital": "Kopenhag",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Denmark.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Danimarka_Krall%C4%B1%C4%9F%C4%B1"
  },
  {
   "name": "Doğu Timor",
   "capital": "Dili",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20East%20Timor.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Do%C4%9Fu_Timor"
  },
  {
   "name": "Dominik Cumhuriyeti",
   "capital": "Santo Domingo",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Dominican%20Republic.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Dominik_Cumhuriyeti"
  },
  {
   "name": "Dominika",
   "capital": "Roseau",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Dominica.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Dominika"
  },
  {
   "name": "Ekvador",
   "capital": "Quito",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Ecuador.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Ekvador"
  },
  {
   "name": "Ekvator Ginesi",
   "capital": "Ciudad de la Paz",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Equatorial%20Guinea.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Ekvator_Ginesi"
  },
  {
   "name": "El Salvador",
   "capital": "San Salvador",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20El%20Salvador.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/El_Salvador"
  },
  {
   "name": "Endonezya",
   "capital": "Cakarta",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Indonesia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Endonezya"
  },
  {
   "name": "Eritre",
   "capital": "Asmara",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Eritrea.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Eritre"
  },
  {
   "name": "Ermenistan",
   "capital": "Erivan",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Armenia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Ermenistan"
  },
  {
   "name": "Estonya",
   "capital": "Tallinn",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Estonia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Estonya"
  },
  {
   "name": "Esvatini",
   "capital": "Mbabane",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Eswatini.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Esvatini"
  },
  {
   "name": "Etiyopya",
   "capital": "Addis Ababa",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Ethiopia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Etiyopya"
  },
  {
   "name": "Fas",
   "capital": "Rabat",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Morocco.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Fas"
  },
  {
   "name": "Fiji",
   "capital": "Suva",
   "continent": "Ada Okyanusyası",
   "continents": [
    "Ada Okyanusyası"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Fiji.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Fiji"
  },
  {
   "name": "Fildişi Sahili",
   "capital": "Yamoussoukro",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20C%C3%B4te%20d%27Ivoire.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Fildi%C5%9Fi_Sahili"
  },
  {
   "name": "Filipinler",
   "capital": "Manila",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Philippines.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Filipinler"
  },
  {
   "name": "Filistin",
   "capital": "Ramallah",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Palestine.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Filistin"
  },
  {
   "name": "Finlandiya",
   "capital": "Helsinki",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Finland.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Finlandiya"
  },
  {
   "name": "Fransa",
   "capital": "Paris",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20France.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Fransa"
  },
  {
   "name": "Gabon",
   "capital": "Libreville",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Gabon.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Gabon"
  },
  {
   "name": "Gambiya",
   "capital": "Banjul",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20The%20Gambia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Gambiya"
  },
  {
   "name": "Gana",
   "capital": "Akra",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Ghana.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Gana"
  },
  {
   "name": "Gine",
   "capital": "Konakri",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Guinea.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Gine"
  },
  {
   "name": "Gine-Bissau",
   "capital": "Bissau",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Guinea-Bissau.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Gine-Bissau"
  },
  {
   "name": "Grenada",
   "capital": "Saint George's",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Grenada.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Grenada"
  },
  {
   "name": "Guatemala",
   "capital": "Guatemala",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Guatemala.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Guatemala"
  },
  {
   "name": "Guyana",
   "capital": "Georgetown",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Guyana.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Guyana"
  },
  {
   "name": "Güney Afrika",
   "capital": "Pretoria",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20South%20Africa.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/G%C3%BCney_Afrika_Cumhuriyeti"
  },
  {
   "name": "Güney Kore",
   "capital": "Seul",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20South%20Korea.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/G%C3%BCney_Kore"
  },
  {
   "name": "Güney Sudan",
   "capital": "Cuba",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20South%20Sudan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/G%C3%BCney_Sudan"
  },
  {
   "name": "Gürcistan",
   "capital": "Tiflis",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Georgia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/G%C3%BCrcistan"
  },
  {
   "name": "Haiti",
   "capital": "Port-au-Prince",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Haiti.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Haiti"
  },
  {
   "name": "Hırvatistan",
   "capital": "Zagreb",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Croatia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/H%C4%B1rvatistan"
  },
  {
   "name": "Hindistan",
   "capital": "Yeni Delhi",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20India.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Hindistan"
  },
  {
   "name": "Hollanda Krallığı",
   "capital": "Amsterdam",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Netherlands.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Hollanda_Krall%C4%B1%C4%9F%C4%B1"
  },
  {
   "name": "Honduras",
   "capital": "Tegucigalpa",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Honduras%20%281949%E2%80%932022%2C%202026%E2%80%93present%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Honduras"
  },
  {
   "name": "Irak",
   "capital": "Bağdat",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Iraq.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Irak"
  },
  {
   "name": "İran",
   "capital": "Tahran",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Iran.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0ran"
  },
  {
   "name": "İrlanda",
   "capital": "Dublin",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Ireland.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0rlanda"
  },
  {
   "name": "İspanya",
   "capital": "Madrid",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Spain.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0spanya"
  },
  {
   "name": "İsrail",
   "capital": "Kudüs",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Israel.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0srail"
  },
  {
   "name": "İsveç",
   "capital": "Stockholm",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Sweden.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0sve%C3%A7"
  },
  {
   "name": "İsviçre",
   "capital": "Bern",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Switzerland.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0svi%C3%A7re"
  },
  {
   "name": "İtalya",
   "capital": "Roma",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Italy.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0talya"
  },
  {
   "name": "İzlanda",
   "capital": "Reykjavík",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Iceland.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0zlanda"
  },
  {
   "name": "Jamaika",
   "capital": "Kingston",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Jamaica.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Jamaika"
  },
  {
   "name": "Japonya",
   "capital": "Tokyo",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Japan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Japonya"
  },
  {
   "name": "Kamboçya",
   "capital": "Phnom Penh",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Cambodia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kambo%C3%A7ya"
  },
  {
   "name": "Kamerun",
   "capital": "Yaunde",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Cameroon.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kamerun"
  },
  {
   "name": "Kanada",
   "capital": "Ottawa",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Canada%20%28Pantone%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kanada"
  },
  {
   "name": "Kangar Birliği",
   "capital": "Otrar",
   "continent": "Avrasya",
   "continents": [
    "Avrasya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Kangar%20Union.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kangar_Birli%C4%9Fi"
  },
  {
   "name": "Karadağ",
   "capital": "Podgorica",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Montenegro.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Karada%C4%9F"
  },
  {
   "name": "Katar",
   "capital": "Doha",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Qatar.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Katar"
  },
  {
   "name": "Kazakistan",
   "capital": "Astana",
   "continent": "",
   "continents": [
    "Avrupa",
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Kazakhstan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kazakistan"
  },
  {
   "name": "Kenya",
   "capital": "Nairobi",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Kenya.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kenya"
  },
  {
   "name": "Kıbrıs",
   "capital": "Lefkoşa",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Cyprus.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/K%C4%B1br%C4%B1s_Cumhuriyeti"
  },
  {
   "name": "Kırgızistan",
   "capital": "Bişkek",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Kyrgyzstan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/K%C4%B1rg%C4%B1zistan"
  },
  {
   "name": "Kiribati",
   "capital": "Güney Tarava",
   "continent": "",
   "continents": [
    "Ada Okyanusyası",
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Kiribati.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kiribati"
  },
  {
   "name": "Kolombiya",
   "capital": "Bogotá",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Colombia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kolombiya"
  },
  {
   "name": "Komorlar",
   "capital": "Moroni",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Comoros.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Komorlar"
  },
  {
   "name": "Kongo",
   "capital": "Brazzaville",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Republic%20of%20the%20Congo.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kongo_Cumhuriyeti"
  },
  {
   "name": "Kongo Demokratik Cumhuriyeti",
   "capital": "Kinşasa",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Democratic%20Republic%20of%20the%20Congo.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kongo_Demokratik_Cumhuriyeti"
  },
  {
   "name": "Kosova",
   "capital": "Priştine",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Kosovo.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kosova"
  },
  {
   "name": "Kosta Rika",
   "capital": "San José",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Costa%20Rica.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kosta_Rika"
  },
  {
   "name": "Kuveyt",
   "capital": "Kuveyt",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Kuwait.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kuveyt"
  },
  {
   "name": "Kuzey Kore",
   "capital": "Pyongyang",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20North%20Korea.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kuzey_Kore"
  },
  {
   "name": "Kuzey Makedonya",
   "capital": "Üsküp",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20North%20Macedonia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Kuzey_Makedonya"
  },
  {
   "name": "Küba",
   "capital": "Havana",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Cuba.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/K%C3%BCba"
  },
  {
   "name": "Laos",
   "capital": "Vientiane",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Laos.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Laos"
  },
  {
   "name": "Lesotho",
   "capital": "Maseru",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Lesotho.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Lesotho"
  },
  {
   "name": "Letonya",
   "capital": "Riga",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Latvia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Letonya"
  },
  {
   "name": "Liberya",
   "capital": "Monrovia",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Liberia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Liberya"
  },
  {
   "name": "Libya",
   "capital": "Trablus",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Libya.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Libya"
  },
  {
   "name": "Lihtenştayn",
   "capital": "Vaduz",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Liechtenstein.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Lihten%C5%9Ftayn"
  },
  {
   "name": "Litvanya",
   "capital": "Vilnius",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Lithuania.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Litvanya"
  },
  {
   "name": "Lübnan",
   "capital": "Beyrut",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Lebanon.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/L%C3%BCbnan"
  },
  {
   "name": "Lüksemburg",
   "capital": "Lüksemburg",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Luxembourg.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/L%C3%BCksemburg"
  },
  {
   "name": "Macaristan",
   "capital": "Budapeşte",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Hungary.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Macaristan"
  },
  {
   "name": "Madagaskar",
   "capital": "Antananarivo",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Madagascar.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Madagaskar"
  },
  {
   "name": "Malavi",
   "capital": "Lilongwe",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Malawi.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Malavi"
  },
  {
   "name": "Maldivler",
   "capital": "Malé",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Maldives.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Maldivler"
  },
  {
   "name": "Malezya",
   "capital": "Kuala Lumpur",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Malaysia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Malezya"
  },
  {
   "name": "Mali",
   "capital": "Bamako",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Mali.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Mali"
  },
  {
   "name": "Malta",
   "capital": "Valletta",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Malta.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Malta"
  },
  {
   "name": "Marshall Adaları",
   "capital": "Majuro",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Marshall%20Islands.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Marshall_Adalar%C4%B1"
  },
  {
   "name": "Mauritius",
   "capital": "Port Louis",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Mauritius.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Mauritius"
  },
  {
   "name": "Meksika",
   "capital": "Meksiko",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Mexico.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Meksika"
  },
  {
   "name": "Mısır",
   "capital": "Kahire",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Egypt.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/M%C4%B1s%C4%B1r"
  },
  {
   "name": "Mikronezya",
   "capital": "Palikir",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Federated%20States%20of%20Micronesia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Mikronezya_Federal_Devletleri"
  },
  {
   "name": "Moğolistan",
   "capital": "Ulan Batur",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Mongolia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Mo%C4%9Folistan"
  },
  {
   "name": "Moldova",
   "capital": "Kişinev",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Moldova.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Moldova"
  },
  {
   "name": "Monako",
   "capital": "Monako",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Monaco.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Monako"
  },
  {
   "name": "Moritanya",
   "capital": "Nuakşot",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Mauritania.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Moritanya"
  },
  {
   "name": "Mozambik",
   "capital": "Maputo",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Mozambique.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Mozambik"
  },
  {
   "name": "Myanmar",
   "capital": "Naypyidaw",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Myanmar.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Myanmar"
  },
  {
   "name": "Namibya",
   "capital": "Windhoek",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Namibia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Namibya"
  },
  {
   "name": "Nauru",
   "capital": "Yaren",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Nauru.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Nauru"
  },
  {
   "name": "Nepal",
   "capital": "Katmandu",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Nepal.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Nepal"
  },
  {
   "name": "Nijer",
   "capital": "Niamey",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Niger.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Nijer"
  },
  {
   "name": "Nijerya",
   "capital": "Abuja",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Nigeria.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Nijerya"
  },
  {
   "name": "Nikaragua",
   "capital": "Managua",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Nicaragua.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Nikaragua"
  },
  {
   "name": "Norveç",
   "capital": "Oslo",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Norway.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Norve%C3%A7"
  },
  {
   "name": "Orta Afrika Cumhuriyeti",
   "capital": "Bangui",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Central%20African%20Republic.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Orta_Afrika_Cumhuriyeti"
  },
  {
   "name": "Özbekistan",
   "capital": "Taşkent",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Uzbekistan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C3%96zbekistan"
  },
  {
   "name": "Pakistan",
   "capital": "İslamabad",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Pakistan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Pakistan"
  },
  {
   "name": "Palau",
   "capital": "Ngerulmud",
   "continent": "",
   "continents": [
    "Ada Okyanusyası",
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Palau.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Palau"
  },
  {
   "name": "Panama",
   "capital": "Panama",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Panama.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Panama"
  },
  {
   "name": "Papua Yeni Gine",
   "capital": "Port Moresby",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Papua%20New%20Guinea.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Papua_Yeni_Gine"
  },
  {
   "name": "Paraguay",
   "capital": "Asunción",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Paraguay.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Paraguay"
  },
  {
   "name": "Peru",
   "capital": "Lima",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Peru.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Peru"
  },
  {
   "name": "Polonya",
   "capital": "Varşova",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Poland.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Polonya"
  },
  {
   "name": "Polonya-Litvanya Birliği",
   "capital": "Varşova",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "",
   "page": "https://tr.wikipedia.org/wiki/Polonya-Litvanya_Birli%C4%9Fi"
  },
  {
   "name": "Portekiz",
   "capital": "Lizbon",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Portugal%20%28official%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Portekiz"
  },
  {
   "name": "Romanya",
   "capital": "Bükreş",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Romania.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Romanya"
  },
  {
   "name": "Romanya Krallığı",
   "capital": "Bükreş",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Romania.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Romanya_Krall%C4%B1%C4%9F%C4%B1"
  },
  {
   "name": "Ruanda",
   "capital": "Kigali",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Rwanda.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Ruanda"
  },
  {
   "name": "Rus İmparatorluğu",
   "capital": "Sankt-Peterburg",
   "continent": "",
   "continents": [
    "Avrasya",
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Russia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Rus_%C4%B0mparatorlu%C4%9Fu"
  },
  {
   "name": "Rusya",
   "capital": "Moskova",
   "continent": "",
   "continents": [
    "Avrupa",
    "Asya",
    "Avrasya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Russia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Rusya"
  },
  {
   "name": "Saint Kitts ve Nevis",
   "capital": "Basseterre",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Saint%20Kitts%20and%20Nevis.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Saint_Kitts_ve_Nevis"
  },
  {
   "name": "Saint Lucia",
   "capital": "Castries",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Saint%20Lucia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Saint_Lucia"
  },
  {
   "name": "Saint Vincent ve Grenadinler",
   "capital": "Kingstown",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Saint%20Vincent%20and%20the%20Grenadines.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Saint_Vincent_ve_Grenadinler"
  },
  {
   "name": "Samoa",
   "capital": "Apia",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Samoa.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Samoa"
  },
  {
   "name": "San Marino",
   "capital": "San Marino",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20San%20Marino.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/San_Marino"
  },
  {
   "name": "São Tomé ve Príncipe",
   "capital": "São Tomé",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20S%C3%A3o%20Tom%C3%A9%20and%20Pr%C3%ADncipe.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_ve_Pr%C3%ADncipe"
  },
  {
   "name": "Senegal",
   "capital": "Dakar",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Senegal.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Senegal"
  },
  {
   "name": "Seyşeller",
   "capital": "Victoria",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Seychelles.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Sey%C5%9Feller"
  },
  {
   "name": "Sırbistan",
   "capital": "Belgrad",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Serbia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/S%C4%B1rbistan"
  },
  {
   "name": "Sierra Leone",
   "capital": "Freetown",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Sierra%20Leone.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Sierra_Leone"
  },
  {
   "name": "Singapur",
   "capital": "Singapur",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Singapore.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Singapur"
  },
  {
   "name": "Slovakya",
   "capital": "Bratislava",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Slovakia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Slovakya"
  },
  {
   "name": "Slovenya",
   "capital": "Ljubljana",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Slovenia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Slovenya"
  },
  {
   "name": "Solomon Adaları",
   "capital": "Honiara",
   "continent": "",
   "continents": [
    "Ada Okyanusyası",
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Solomon%20Islands.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Solomon_Adalar%C4%B1"
  },
  {
   "name": "Somali",
   "capital": "Mogadişu",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Somalia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Somali"
  },
  {
   "name": "Sri Lanka",
   "capital": "Kolombo",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Sri%20Lanka.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Sri_Lanka"
  },
  {
   "name": "Sudan",
   "capital": "Hartum",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Sudan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Sudan"
  },
  {
   "name": "Surinam",
   "capital": "Paramaribo",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Suriname.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Surinam"
  },
  {
   "name": "Suriye",
   "capital": "Şam",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Syria%20%282025-%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Suriye"
  },
  {
   "name": "Suudi Arabistan",
   "capital": "Riyad",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Saudi%20Arabia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Suudi_Arabistan"
  },
  {
   "name": "Şili",
   "capital": "Santiago",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Chile.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C5%9Eili"
  },
  {
   "name": "Tacikistan",
   "capital": "Duşanbe",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Tajikistan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Tacikistan"
  },
  {
   "name": "Tanzanya",
   "capital": "Dodoma",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Tanzania.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Tanzanya"
  },
  {
   "name": "Tayland",
   "capital": "Bangkok",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Thailand.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Tayland"
  },
  {
   "name": "Tayvan",
   "capital": "Taipei",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Republic%20of%20China.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Tayvan"
  },
  {
   "name": "Togo",
   "capital": "Lomé",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Togo%20%283-2%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Togo"
  },
  {
   "name": "Tonga",
   "capital": "Nuku'alofa",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Tonga.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Tonga"
  },
  {
   "name": "Trinidad ve Tobago",
   "capital": "Port of Spain",
   "continent": "Kuzey Amerika",
   "continents": [
    "Kuzey Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Trinidad%20and%20Tobago.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Trinidad_ve_Tobago"
  },
  {
   "name": "Tunus",
   "capital": "Tunus",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Tunisia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Tunus"
  },
  {
   "name": "Tuvalu",
   "capital": "Funafuti",
   "continent": "",
   "continents": [
    "Ada Okyanusyası",
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Tuvalu.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Tuvalu"
  },
  {
   "name": "Türkiye",
   "capital": "Ankara",
   "continent": "",
   "continents": [
    "Avrupa",
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Turkey.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/T%C3%BCrkiye"
  },
  {
   "name": "Türkmenistan",
   "capital": "Aşkabat",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Turkmenistan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/T%C3%BCrkmenistan"
  },
  {
   "name": "Uganda",
   "capital": "Kampala",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Uganda.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Uganda"
  },
  {
   "name": "Ukrayna",
   "capital": "Kiev",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Ukraine.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Ukrayna"
  },
  {
   "name": "Umman",
   "capital": "Maskat",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Oman.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Umman"
  },
  {
   "name": "Uruguay",
   "capital": "Montevideo",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Uruguay.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Uruguay"
  },
  {
   "name": "Ürdün",
   "capital": "Amman",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Jordan.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/%C3%9Crd%C3%BCn"
  },
  {
   "name": "Vanuatu",
   "capital": "Port Vila",
   "continent": "Ada Okyanusyası",
   "continents": [
    "Ada Okyanusyası"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Vanuatu.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Vanuatu"
  },
  {
   "name": "Vatikan",
   "capital": "Vatikan",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Vatican%20City%20%282023%E2%80%93present%29.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Vatikan"
  },
  {
   "name": "Venezuela",
   "capital": "Caracas",
   "continent": "Güney Amerika",
   "continents": [
    "Güney Amerika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Venezuela.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Venezuela"
  },
  {
   "name": "Vietnam",
   "capital": "Hanoi",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Vietnam.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Vietnam"
  },
  {
   "name": "Yemen",
   "capital": "Sana'a",
   "continent": "Asya",
   "continents": [
    "Asya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Yemen.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Yemen"
  },
  {
   "name": "Yeni Zelanda",
   "capital": "Wellington",
   "continent": "Okyanusya",
   "continents": [
    "Okyanusya"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20New%20Zealand.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Yeni_Zelanda"
  },
  {
   "name": "Yunanistan",
   "capital": "Atina",
   "continent": "Avrupa",
   "continents": [
    "Avrupa"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Greece.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Yunanistan"
  },
  {
   "name": "Zambiya",
   "capital": "Lusaka",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Zambia.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Zambiya"
  },
  {
   "name": "Zimbabve",
   "capital": "Harare",
   "continent": "Afrika",
   "continents": [
    "Afrika"
   ],
   "flag": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Zimbabwe.svg?width=480",
   "page": "https://tr.wikipedia.org/wiki/Zimbabve"
  }
 ],
 "people": [
  {
   "name": "Albert Einstein",
   "desc": "Almanya doğumlu teorik fizikçi",
   "fact": "Albert Einstein (14 Mart 1879 - 18 Nisan 1955), en çok görelilik kuramını geliştirmesiyle tanınan Almanya doğumlu teorik fizikçi ve bilim adamı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Einstein%201921%20by%20F%20Schmutzer%20-%20restoration.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Albert_Einstein",
   "field": "bilim"
  },
  {
   "name": "Marie Curie",
   "desc": "Fransız-Polonyalı fizikçi ve kimyager",
   "fact": "Marie Skłodowska Curie (Lehçe telaffuz: [kʲiˈri]; Fransızca telaffuz: [kyʁi]; doğum Maria Salomea Skłodowska, 7 Kasım 1867 – 4 Temmuz 1934), radyoaktivite alanı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Marie%20Curie%20(1900)%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Marie_Curie",
   "field": "bilim"
  },
  {
   "name": "Isaac Newton",
   "desc": "İngiliz matematikçi ve fizikçi",
   "fact": "Isaac Newton (4 Ocak 1643, Woolsthorpe-by-Colsterworth - 31 Mart 1727, Kensington), İngiliz fizikçi, matematikçi, astronom, mucit, simyacı, teolog ve filozoftur",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/GodfreyKneller-IsaacNewton-1689.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Isaac_Newton",
   "field": "bilim"
  },
  {
   "name": "Charles Darwin",
   "desc": "İngiliz doğa bilimci ve biyolog",
   "fact": "Charles Robert Darwin (12 Şubat 1809 - 19 Nisan 1882), evrimsel biyolojiye yaptığı katkılarla tanınan İngiliz doğa bilimci, jeolog ve biyologdur",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Charles%20Darwin%20portrait.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Charles_Darwin",
   "field": "bilim"
  },
  {
   "name": "Nikola Tesla",
   "desc": "Sırp-Amerikalı mucit",
   "fact": "Nikola Tesla (Sırpça telaffuz: [nǐkola têsla]; Sırpça: Никола Тесла; 10 Temmuz 1856 - 7 Ocak 1943), Sırp-Amerikalı mucit, elektrik mühendisi, makine mühendisi v",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Tesla%20circa%201890.jpeg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Nikola_Tesla",
   "field": "bilim"
  },
  {
   "name": "Ada Lovelace",
   "desc": "İngiliz matematikçi",
   "fact": "Augusta Ada King, Lovelace Kontesi (10 Aralık 1815, Londra - 27 Kasım 1852, Londra), Augusta Ada Byron adıyla doğan ve günümüzde yaygın olarak Ada Lovelace adıy",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ada%20Lovelace.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Ada_Lovelace",
   "field": "bilim"
  },
  {
   "name": "Aziz Sancar",
   "desc": "Türk bilim insanı, 2015 Nobel Kimya Ödülü sahibi",
   "fact": "Aziz Sancar (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Aziz%20Sancar%200060.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Aziz_Sancar",
   "field": "bilim"
  },
  {
   "name": "Cahit Arf",
   "desc": "Türk matematikçi",
   "fact": "Cahit Arf (11 Ekim 1910, Selanik - 26 Aralık 1997, İstanbul), Türk matematikçi, bilim insanı ve eski TÜBİTAK Bilim Kolu başkanıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Mural%2C%20Kadikoey%2C%20Istanbul%20(P1100172).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Cahit_Arf",
   "field": "bilim"
  },
  {
   "name": "Stephen Hawking",
   "desc": "İngiliz fizikçi, kozmolog ve yazar",
   "fact": "Stephen William Hawking (8 Ocak 1942, Oxford - 14 Mart 2018, Cambridge), İngiliz teorik fizikçi, kozmolog ve yazardı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Stephen%20Hawking.StarChild.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Stephen_Hawking",
   "field": "bilim"
  },
  {
   "name": "Galileo Galilei",
   "desc": "İtalyan fizikçi ve astronom",
   "fact": "Galileo Galilei (15 Şubat 1564 – 8 Ocak 1642), İtalyan astronom, fizikçi, mühendis, filozof ve matematikçidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Galileo.arp.300pix.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Galileo_Galilei",
   "field": "bilim"
  },
  {
   "name": "Rosalind Franklin",
   "desc": "İngiliz biofizikçi, kimyager ve X ışını kristal bilimci",
   "fact": "Rosalind Elsie Franklin (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosalind%20Franklin.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Rosalind_Franklin",
   "field": "bilim"
  },
  {
   "name": "Alexander Fleming",
   "desc": "Penisilini bulan İskoç bakteriyolog",
   "fact": "Sir Alexander Fleming (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Synthetic%20Production%20of%20Penicillin%20TR1468.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Alexander_Fleming",
   "field": "bilim"
  },
  {
   "name": "Alan Turing",
   "desc": "İngiliz matematikçi, bilgisayar bilimcisi ve kriptolog",
   "fact": "Alan Mathison Turing (İngilizce okunuşu: Elın Tyuring; d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Alan%20Turing%20(1951)%20(crop).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Alan_Turing",
   "field": "bilim"
  },
  {
   "name": "Gregor Mendel",
   "desc": "Silezyalı bilim insanı ve Augustinus rahibi",
   "fact": "Gregor Johann Mendel OSA 20 Temmuz 1822 – 6 Ocak 1884) Avusturyalı-Çek, biyolog, meteorolog, matematikçi, Agustinyen rahibi ve Brno, Moravya Margravlığı'nda (Br",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gregor%20Mendel%20with%20cross.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Gregor_Mendel",
   "field": "bilim"
  },
  {
   "name": "Niels Bohr",
   "desc": "Danimarkalı fizikçi",
   "fact": "Niels Henrik David Bohr (Danca telaffuz: [ˈne̝ls ˈpoɐ̯ˀ]; d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Niels%20Bohr.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Niels_Bohr",
   "field": "bilim"
  },
  {
   "name": "Michael Faraday",
   "desc": "İngiliz bilim insanı",
   "fact": "Michael Faraday (/ˈfærədeɪ, -di/; 22 Eylül 1791, Newington, Londra - 25 Ağustos 1867, Hampton Court, Londra), elektromanyetizma ve elektrokimyaya katkılarıyla t",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/M%20Faraday%20Th%20Phillips%20oil%201842.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Michael_Faraday",
   "field": "bilim"
  },
  {
   "name": "Louis Pasteur",
   "desc": "Fransız mikrobiyolog ve kimyager",
   "fact": "Louis Pasteur (27 Aralık 1822, Dole, Fransa - 28 Eylül 1895 Saint-Cloud, Fransa), aşılama, mikrobiyal fermantasyon ve kendi adıyla anılan pastörizasyon ilkeleri",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Louis%20Pasteur%20(1822%20-%201895)%2C%20microbiologist%20and%20chemist%20Wellcome%20V0026980.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Louis_Pasteur",
   "field": "bilim"
  },
  {
   "name": "Johannes Kepler",
   "desc": "Alman gökbilimci, matematikçi ve astronom",
   "fact": "Johannes Kepler (Almanca telaffuz: [ˈkʰɛplɐ]; 27 Aralık 1571 – 15 Kasım 1630); Alman gök bilimci, matematikçi ve astronomdur",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/JKepler.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Johannes_Kepler",
   "field": "bilim"
  },
  {
   "name": "Yaşar Kemal",
   "desc": "Türk yazar ve şair",
   "fact": "Kemal Sadık Gökçeli veya bilinen adıyla Yaşar Kemal (6 Ekim 1923, Hemite, Osmaniye – 28 Şubat 2015, İstanbul), Türk roman ve hikâye yazarı, şair ve aktivisttir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Y%C4%B1lmaz%20B%C3%BCy%C3%BCker%C5%9Fen%20wax%20Museum%20(Ya%C5%9Far%20Kemal).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Ya%C5%9Far_Kemal",
   "field": "edebiyat"
  },
  {
   "name": "Orhan Pamuk",
   "desc": "Nobel ödüllü Türk roman yazarı",
   "fact": "Orhan Ferit Pamuk (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Orhan%20Pamuk%202009%20Shankbone.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Orhan_Pamuk",
   "field": "edebiyat"
  },
  {
   "name": "Sabahattin Ali",
   "desc": "Türk gazeteci ve yazar",
   "fact": "Sabahattin Ali (25 Şubat 1907, Eğridere - 2 Nisan 1948, Kırklareli), Türk yazar ve şair",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Sabahattin%20Ali%2C%20date%20and%20location%20unknown.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Sabahattin_Ali",
   "field": "edebiyat"
  },
  {
   "name": "Nâzım Hikmet",
   "desc": "Türk şair ve yazar",
   "fact": "Nâzım Hikmet Ran (15 Ocak 1902, Selanik - 3 Haziran 1963, Moskova), Türk şair ve yazardır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/N%C3%A2z%C4%B1m%20Hikmet%2C%20Berlin%201956%20(1).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/N%C3%A2z%C4%B1m_Hikmet",
   "field": "edebiyat"
  },
  {
   "name": "Ahmet Hamdi Tanpınar",
   "desc": "Türk şair, romancı, deneme yazarı, edebiyat tarihçisi, siyasetçi",
   "fact": "Ahmet Hamdi Tanpınar (23 Haziran 1901, İstanbul - 24 Ocak 1962, İstanbul); Türk şair, romancı, deneme yazarı, edebiyat tarihçisi, siyasetçi ve akademisyendir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ahmet%20hamdi%20tanpinar.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Ahmet_Hamdi_Tanp%C4%B1nar",
   "field": "edebiyat"
  },
  {
   "name": "Halide Edib Adıvar",
   "desc": "Türk öğretmen, siyasetçi ve yazar",
   "fact": "Halide Adıvar (Halide Edib, Osmanlıca: خالده اديب; 1884, İstanbul - 9 Ocak 1964, İstanbul), Türk yazar, siyasetçi, akademisyen ve öğretmendir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Halide%20adivar.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Halide_Edib_Ad%C4%B1var",
   "field": "edebiyat"
  },
  {
   "name": "Reşat Nuri Güntekin",
   "desc": "Türk yazar",
   "fact": "Reşat Nuri Güntekin (25 Kasım 1889, İstanbul - 7 Aralık 1956, Londra), Türk edebiyatı yazarı ve eğitimcidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Re%C5%9Fat%20Nuri%20G%C3%BCntekin%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Re%C5%9Fat_Nuri_G%C3%BCntekin",
   "field": "edebiyat"
  },
  {
   "name": "Oğuz Atay",
   "desc": "Türk yazar",
   "fact": "Oğuz Atay (12 Ekim 1934, İnebolu - 13 Aralık 1977, İstanbul), Türk roman, öykü ve oyun yazarı.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Oguzataybust.png?width=520",
   "page": "https://tr.wikipedia.org/wiki/O%C4%9Fuz_Atay",
   "field": "edebiyat"
  },
  {
   "name": "Franz Kafka",
   "desc": "Bohemyalı roman ve öykü yazarı",
   "fact": "Franz Kafka (3 Temmuz 1883, Prag – 3 Haziran 1924, Klosterneuburg), Almanca konuşan Bohemyalı, roman ve hikâye yazarıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Kafka1906%20cropped.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Franz_Kafka",
   "field": "edebiyat"
  },
  {
   "name": "Fyodor Dostoyevski",
   "desc": "Rus romancı",
   "fact": "Fyodor Mihayloviç Dostoyevski (Rusça: Фёдор Миха́йлович Достое́вский, Çocukluğunu sarhoş bir baba ve hasta bir anne arasında geçiren Dostoyevski, annesinin ölüm",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Vasily%20Perov%20-%20%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20-%20Google%20Art%20Project.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Fyodor_Dostoyevski",
   "field": "edebiyat"
  },
  {
   "name": "Lev Tolstoy",
   "desc": "Rus yazar ve aktivist",
   "fact": "Lev Nikolayeviç Tolstoy (Rusça: Лев Николаевич Толстой; Rusça telaffuz: [ˈlʲef nʲɪkɐˈla(j)ɪvʲɪtɕ tɐlˈstoj]; 9 Eylül 1828 - 20 Kasım 1910), Rus yazar ve askerdir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/L.N.Tolstoy%20Prokudin-Gorsky.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Lev_Tolstoy",
   "field": "edebiyat"
  },
  {
   "name": "Virginia Woolf",
   "desc": "İngiliz yazar",
   "fact": "Virginia Woolf (25 Ocak 1882 – 28 Mart 1941), İngiliz feminist, yazar, romancı ve eleştirmen.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/George%20Charles%20Beresford%20-%20Virginia%20Woolf%20in%201902%20-%20Restoration.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Virginia_Woolf",
   "field": "edebiyat"
  },
  {
   "name": "William Shakespeare",
   "desc": "İngiliz oyun yazarı ve şair",
   "fact": "William Shakespeare (26 Nisan 1564 (vaftiz) – 23 Nisan 1616), İngiliz şair, oyun yazarı ve oyuncudur",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Shakespeare.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/William_Shakespeare",
   "field": "edebiyat"
  },
  {
   "name": "George Orwell",
   "desc": "İngiliz yazar ve gazeteci",
   "fact": "Eric Arthur Blair veya daha bilinen takma adıyla George Orwell (25 Haziran 1903; Motihari - 21 Ocak 1950; Londra) 20",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/George%20Orwell%2C%20c.%201940%20(41928180381).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/George_Orwell",
   "field": "edebiyat"
  },
  {
   "name": "Victor Hugo",
   "desc": "French romancı ve şair",
   "fact": "Victor Marie Hugo (Fransızca telaffuz: [viktɔʁ maʁi yɡo]; 26 Şubat 1802, Besançon - 22 Mayıs 1885, Paris), Romantizm akımına bağlı Fransız şair, romancı ve oyun",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Victor%20Hugo%20by%20%C3%89tienne%20Carjat%201876%20-%20full.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Victor_Hugo",
   "field": "edebiyat"
  },
  {
   "name": "Johann Wolfgang von Goethe",
   "desc": "18. ve 19. yüzyılda yaşamış Alman yazar, siyasetçi, ressam ve doğabilimci",
   "fact": "Johann Wolfgang von Goethe (28 Ağustos 1749, Frankfurt – 22 Mart 1832, Weimar); Alman hezarfen, edebiyatçı, siyasetçi, ressam ve doğa bilimcidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Goethe%20(Stieler%201828).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe",
   "field": "edebiyat"
  },
  {
   "name": "Miguel de Cervantes",
   "desc": "İspanyol yazar",
   "fact": "Miguel de Cervantes Saavedra (29 Eylül 1547 - 22 Nisan 1616), İspanyol romancı, şair ve oyun yazarıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Cervantes%20J%C3%A1uregui.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Miguel_de_Cervantes",
   "field": "edebiyat"
  },
  {
   "name": "Halid Ziya Uşaklıgil",
   "desc": "Türk şair ve yazar",
   "fact": "Halid Ziya Uşaklıgil (1866, İstanbul - 27 Mart 1945, İstanbul), Servet-i Fünûn ve cumhuriyet dönemi Türk romancı ve yazar",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/HalitZiya.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Halid_Ziya_U%C5%9Fakl%C4%B1gil",
   "field": "edebiyat"
  },
  {
   "name": "Vincent van Gogh",
   "desc": "Hollandalı ressam",
   "fact": "Vincent Willem van Gogh (telaffuz: Üst orta sınıf bir aileye doğan Van Gogh çocukken ciddi, sessiz ve saygılıydı ayrıca resim de yapmaktaydı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Self-portrait%20-%20Vincent%20van%20Gogh.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Vincent_van_Gogh",
   "field": "sanat"
  },
  {
   "name": "Pablo Picasso",
   "desc": "İspanyol heykeltıraş ve ressam",
   "fact": "Pablo Picasso (25 Ekim 1881, Málaga, İspanya - 8 Nisan 1973, Mougins, Fransa), Fransa'da yaşamış İspanyol ressam, heykeltıraş, sahne tasarımcısı, şair ve oyun y",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Pablo%20picasso%201.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Pablo_Picasso",
   "field": "sanat"
  },
  {
   "name": "Leonardo da Vinci",
   "desc": "İtalyan Rönesans polimat",
   "fact": "Leonardo di ser Piero da Vinci (",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Francesco%20Melzi%20-%20Portrait%20of%20Leonardo.png?width=520",
   "page": "https://tr.wikipedia.org/wiki/Leonardo_da_Vinci",
   "field": "sanat"
  },
  {
   "name": "Michelangelo",
   "desc": "İtalyan heykeltraş, ressam, mimar ve şair",
   "fact": "Michelangelo di Lodovico Buonarroti Simoni (6 Mart 1475 - 18 Şubat 1564) veya kısaca Michelangelo, Yüksek Rönesans döneminin İtalyan heykeltıraşı, ressamı, mima",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo%20Daniele%20da%20Volterra%20(dettaglio).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Michelangelo",
   "field": "sanat"
  },
  {
   "name": "Frida Kahlo",
   "desc": "Meksikalı ressam",
   "fact": "Magdalena Carmen Frida Kahlo y Calderón (6 Temmuz 1907 - 13 Temmuz 1954), portreleri, otoportreleri ve Meksika'nın doğası ile kültürel unsurlarından esinlenen e",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Frida%20Kahlo%2C%20by%20Guillermo%20Kahlo%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Frida_Kahlo",
   "field": "sanat"
  },
  {
   "name": "Salvador Dalí",
   "desc": "İspanyol sanatçı",
   "fact": "Salvador Domingo Felipe Jacinto Dalí i Domènech veya kısaca Salvador Dalí (11 Mayıs 1904, Figueres - 23 Ocak 1989, Figueres), Katalan sürrealist ressam",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Salvador%20Dal%C3%AD%201939.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Salvador_Dal%C3%AD",
   "field": "sanat"
  },
  {
   "name": "Wolfgang Amadeus Mozart",
   "desc": "Avusturyalı piyanist ve bestekar",
   "fact": "Wolfgang Amadeus Mozart (27 Ocak 1756, Salzburg - 5 Aralık 1791, Viyana) veya vaftiz adıyla Johannes Chrysostomus Wolfgangus Theophilus Mozart, Klasik Batı Müzi",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Wolfgang-amadeus-mozart%201.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
   "field": "sanat"
  },
  {
   "name": "Ludwig van Beethoven",
   "desc": "Alman klasik müzik bestecisi ve piyanist",
   "fact": "Ludwig van Beethoven (vaftiz: 17 Aralık 1770, Bonn - ölüm: 26 Mart 1827, Viyana), Klasik dönemden Romantik döneme geçiş sürecine büyük katkı sağlamış ve gelmiş ",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Beethoven.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Ludwig_van_Beethoven",
   "field": "sanat"
  },
  {
   "name": "Johann Sebastian Bach",
   "desc": "Alman klasik müzik bestecisi",
   "fact": "Johann Sebastian Bach (Almanca telaffuzu: [ˈyoːhan seˈbastian ˈbahh] d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Johann%20Sebastian%20Bach.png?width=520",
   "page": "https://tr.wikipedia.org/wiki/Johann_Sebastian_Bach",
   "field": "sanat"
  },
  {
   "name": "Mimar Sinan",
   "desc": "16. yüzyıl Osmanlı başmimarı ve inşaat mühendisi",
   "fact": "Mimar Sinan (Osmanlıca: معمار سينان; y",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Mimar%20Sinan%20b%C3%BCst%C3%BC%2C%20ODT%C3%9C.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Mimar_Sinan",
   "field": "sanat"
  },
  {
   "name": "Osman Hamdi Bey",
   "desc": "Osmanlı ressam, arkeolog ve müzeci",
   "fact": "Osman Hamdi Bey (30 Aralık 1842, İstanbul - 24 Şubat 1910, İstanbul), Osmanlı arkeolog, müzeci, ressam ve Kadıköy'ün ilk belediye başkanı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Osman%20Hamdi%20Bey.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Osman_Hamdi_Bey",
   "field": "sanat"
  },
  {
   "name": "Claude Monet",
   "desc": "Fransız ressam",
   "fact": "Claude Monet (14 Kasım 1840 - 5 Aralık 1926), Fransız empresyonist ressam",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Monet%201899%20Nadar%20crop.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Claude_Monet",
   "field": "sanat"
  },
  {
   "name": "Rembrandt",
   "desc": "",
   "fact": "Rembrandt Harmenszoon van Rijn (Felemenkçe telaffuz: [ˈrɛmbrɑnt ˈɦɑrmə(n)soːn vɑn ˈrɛin] ( dinle); d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt%20van%20Rijn%20-%20Self-Portrait%20-%20Google%20Art%20Project.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Rembrandt",
   "field": "sanat"
  },
  {
   "name": "Frédéric Chopin",
   "desc": "Polonyalı besteci ve piyanist",
   "fact": "Frédéric François Chopin (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Chopin%2C%20by%20Wodzinska.JPG?width=520",
   "page": "https://tr.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin",
   "field": "sanat"
  },
  {
   "name": "Barış Manço",
   "desc": "Türk müzik sanatçısı",
   "fact": "Mehmet Barış Manço (2 Ocak 1943, İstanbul - 1 Şubat 1999, İstanbul), Türk aranjör, sanatçı, besteci, söz yazarı, televizyon programı yapımcısı ve sunucusu, köşe",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Bar%C4%B1%C5%9F%20Man%C3%A7o%20cropped.JPG?width=520",
   "page": "https://tr.wikipedia.org/wiki/Bar%C4%B1%C5%9F_Man%C3%A7o",
   "field": "sanat"
  },
  {
   "name": "Zeki Müren",
   "desc": "Türk müzik sanatçısı",
   "fact": "Zeki Müren (2 Ocak 1931, Bursa - 24 Eylül 1996, İzmir), Türk şarkıcı, besteci, söz yazarı, oyuncu ve şair",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Zeki%20M%C3%BCren%20cropped.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Zeki_M%C3%BCren",
   "field": "sanat"
  },
  {
   "name": "Neşet Ertaş",
   "desc": "Türk halk ozanı",
   "fact": "Neşet Ertaş (1938; Çiçekdağı, Kırşehir - 25 Eylül 2012; İzmir), Türk halk ozanı, Türkmen/Abdallık kültürünün ve müzik geleneğinin son büyük temsilcisidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ne%C5%9Fet%20Erta%C5%9F%20-%20panoramio.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Ne%C5%9Fet_Erta%C5%9F",
   "field": "sanat"
  },
  {
   "name": "Mustafa Kemal Atatürk",
   "desc": "Türkiye Cumhuriyeti'nin kurucusu ve ilk cumhurbaşkanı",
   "fact": "Mustafa Kemal Atatürk (1881, Selanik - 10 Kasım 1938, İstanbul), Türk mareşal, devlet adamı, yazar, Türk Kurtuluş Savaşı'nın başkomutanı, Türkiye Cumhuriyeti'ni",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Atat%C3%BCrk%20Kemal.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk",
   "field": "tarih"
  },
  {
   "name": "II. Mehmed",
   "desc": "7. Osmanlı padişahıve İstanbul'un Fatihi",
   "fact": "II",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20Mehmet%20II%20(cropped).%20Human%20Physiognomy%20Concerning%20the%20Personal%20Dispositions%20of%20the%20Ottomans%2C%201579%20(TSMK%20H.1563).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/II._Mehmed",
   "field": "tarih"
  },
  {
   "name": "I. Süleyman",
   "desc": "10. Osmanlı padişahı",
   "fact": "I",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/EmperorSuleiman.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/I._S%C3%BCleyman",
   "field": "tarih"
  },
  {
   "name": "Pîrî Reis",
   "desc": "Türk denizcive haritacı",
   "fact": "Pîrî Reis (Osmanlıca: پیری رئیس‎ 1465/70, Gelibolu - 1554, Kahire), Türk denizci ve kartograf",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/P%C3%AEr%C3%AE%20Reis%20b%C3%BCst%C3%BC.JPG?width=520",
   "page": "https://tr.wikipedia.org/wiki/P%C3%AEr%C3%AE_Reis",
   "field": "tarih"
  },
  {
   "name": "Barbaros Hayreddin Paşa",
   "desc": "Osmanlı denizcisi ve kaptan-ı deryâsı",
   "fact": "Hızır Reis veya bilinen adıyla Barbaros Hayreddin Paşa (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Barbarossa%20Hayreddin%20Pasha.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Barbaros_Hayreddin_Pa%C5%9Fa",
   "field": "tarih"
  },
  {
   "name": "Halil İnalcık",
   "desc": "Türk tarih profesörü",
   "fact": "Halil İbrahim İnalcık (7 Eylül 1916, İstanbul - 25 Temmuz 2016, Ankara), Türk tarihçi, yazar ve akademisyendir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Halil%20%C4%B0nalc%C4%B1k%2C%20Ottoman%20documents%20and%20the%20Black%20Sea%20region%20colloquium%2C%20HURI%2C%20March%201981.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Halil_%C4%B0nalc%C4%B1k",
   "field": "tarih"
  },
  {
   "name": "İlber Ortaylı",
   "desc": "Türk tarihçi, akademisyen ve yazar",
   "fact": "İlber Ortaylı (21 Mayıs 1947, Bregenz - 13 Mart 2026, İstanbul), Türk tarihçi, akademisyen ve yazar",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%B0lber%20Ortayl%C4%B1%202023.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0lber_Ortayl%C4%B1",
   "field": "tarih"
  },
  {
   "name": "Richard Feynman",
   "desc": "Amerikalı teorik fizikçi",
   "fact": "Richard Phillips Feynman (11 Mayıs 1918 - 15 Şubat 1988), kuantum mekaniğinin ayrılmaz formülasyonu, kuantum elektrodinamiği teorisi, aşırı soğutulmuş sıvı hely",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/RichardFeynman-PaineMansionWoods1984%20copyrightTamikoThiel%20bw.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Richard_Feynman",
   "field": "bilim"
  },
  {
   "name": "Katherine Johnson",
   "desc": "Amerikalı matematikçi",
   "fact": "Creole Katherine Johnson (doğumda Coleman; 26 Ağustos 1918 - 24 Şubat 2020), Amerikalı astrofizikçi, uzay bilimci ve matematikçidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Katherine%20Johnson%201983.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Katherine_Johnson",
   "field": "bilim"
  },
  {
   "name": "Dmitri Mendeleyev",
   "desc": "Rus kimyager ve mucit",
   "fact": "Dmitri İvanoviç Mendeleyev (Rusça: Дми́трий Ива́нович Менделе́ев; 8 Şubat 1834, Tobolsk - 2 Şubat 1907, St",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/DIMendeleevCab.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Dmitri_Mendeleyev",
   "field": "bilim"
  },
  {
   "name": "Jane Goodall",
   "desc": "",
   "fact": "Jane Goodall (3 Nisan 1934, Londra - 1 Ekim 2025, Los Angeles), İngiliz primatolog, etolog ve antropolog",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Deputy%20Secretary%20Higginbottom%20Poses%20for%20a%20Photo%20With%20Dr.%20Jane%20Goodall%20and%20the%20State%20Department's%20Global%20Health%20Diplomacy%20Director%20Jordan%20in%20Washington%20(22365513310)%20(2)%20(cropped%202).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Jane_Goodall",
   "field": "bilim"
  },
  {
   "name": "İbn Sina",
   "desc": "Fars tıp bilgini ve filozof",
   "fact": "İbn Sînâ (Farsça: ابن سینا) veya Ebu Ali Sînâ (Farsça: ابوعلی سینا) ya da Batılıların söyleyişiyle Avicenna (y",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Avicenna%20Portrait%20on%20Silver%20Vase%20-%20Museum%20at%20BuAli%20Sina%20(Avicenna)%20Mausoleum%20-%20Hamadan%20-%20Western%20Iran%20(7423560860).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0bn_Sina",
   "field": "bilim"
  },
  {
   "name": "Marcel Proust",
   "desc": "Fransız romancı, deneme yazarı ve eleştirmen",
   "fact": "Valentin Louis Georges Eugène Marcel Proust (Fransızca telaffuz: [maʁsɛl pʁust]; 10 Temmuz 1871 - 18 Kasım 1922), Fransız romancı, deneme yazarı ve eleştirmen",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Marcel%20Proust%201895.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Marcel_Proust",
   "field": "edebiyat"
  },
  {
   "name": "Gabriel García Márquez",
   "desc": "Nobel Ödülü sahibi Kolombiyalı yazar",
   "fact": "Gabriel García Márquez veya tam adıyla Gabriel José de la Conciliación García Márquez (6 Mart 1927 - 17 Nisan 2014), tüm Latin Amerika'da Gabo lakabıyla bilinen",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel%20Garc%C3%ADa%20M%C3%A1rquez%2002.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Gabriel_Garc%C3%ADa_M%C3%A1rquez",
   "field": "edebiyat"
  },
  {
   "name": "Agatha Christie",
   "desc": "İngiliz polisiye ve dedektif yazarı",
   "fact": "Tam adı Agatha Mary Clarissa Miller Christie Mallowan olan Agatha Christie (15 Eylül 1890 – 12 Ocak 1976), İngiliz yazar, polisiye edebiyatın en önemli isimleri",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Agatha%20Christie%20in%20Nederland%20(detectiveschrijfster)%2C%20bij%20aankomst%20op%20Schiphol%20me%2C%20Bestanddeelnr%20916-8898%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Agatha_Christie",
   "field": "edebiyat"
  },
  {
   "name": "J. R. R. Tolkien",
   "desc": "İngiliz yazar ve filolog",
   "fact": "John Ronald Reuel Tolkien (3 Ocak 1892, Bloemfontein, Özgür Orange Devleti - 2 Eylül 1973, Bournemouth), İngiliz yazar, şair, filolog ve akademisyendir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/J.%20R.%20R.%20Tolkien%2C%20ca.%201925.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/J._R._R._Tolkien",
   "field": "edebiyat"
  },
  {
   "name": "Mehmet Âkif Ersoy",
   "desc": "Türk öğretmen ve yazar",
   "fact": "Mehmed Ragîf, daha sonra Mehmet Âkif Ersoy (20 Aralık 1873, İstanbul - 27 Aralık 1936, İstanbul); Türk şair, veteriner hekim, öğretmen ve siyasetçidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Mehmet%20akif.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Mehmet_%C3%82kif_Ersoy",
   "field": "edebiyat"
  },
  {
   "name": "Yunus Emre",
   "desc": "Türk şair ve mutasavvıf",
   "fact": "Yunus Emre (Osmanlıca: يونس امره ya da Kul Yunus, Âşık Yunus veya Yunus) (1240?-1320), Anadolu sahasında yetişmiş Türk şair ve mutasavvıf",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Statue%20of%20Yunus%20Emre%2C%20Eski%C5%9Fehir%2005%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Yunus_Emre",
   "field": "edebiyat"
  },
  {
   "name": "Gustav Klimt",
   "desc": "Avusturyalı sembolist ressam ve Viyana Jugendstil temsilcisi",
   "fact": "Gustav Klimt (14 Temmuz 1862 - 6 Şubat 1918), Avusturyalı ressamdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Klimt.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Gustav_Klimt",
   "field": "sanat"
  },
  {
   "name": "Edvard Munch",
   "desc": "Norveçli ressam ve matbaacı",
   "fact": "Edvard Munch, (IPA: [ˈɛdvɑʈ muŋk]), (12 Aralık 1863, Løten, Hedmark, Norveç - 23 Ocak 1944, Oslo, Norveç), özellikle Çığlık başlıklı tablosuyla tanınan Norveçli",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Edvard%20Munch%201933-2.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Edvard_Munch",
   "field": "sanat"
  },
  {
   "name": "Johannes Vermeer",
   "desc": "Hollandalı ressam",
   "fact": "Johannes ya da Jan Vermeer (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Cropped%20version%20of%20Jan%20Vermeer%20van%20Delft%20002.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Johannes_Vermeer",
   "field": "sanat"
  },
  {
   "name": "Andy Warhol",
   "desc": "Amerikalı film yapımcısı ve yönetmeni",
   "fact": "Andy Warhol (6 Ağustos 1928 - 22 Şubat 1987), Amerikalı ressam, film yapımcısı ve yayıncıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Andy%20Warhol%20at%20the%20Jewish%20Museum%20(by%20Bernard%20Gotfryd)%20%E2%80%93%20LOC.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Andy_Warhol",
   "field": "sanat"
  },
  {
   "name": "Freddie Mercury",
   "desc": "Britanyalı şarkıcı, şarkı yazarı ve müzik grubu Queen'in baş vokalisti",
   "fact": "Freddie Mercury (5 Eylül 1946, Zanzibar – 24 Kasım 1991, Londra), Britanyalı şarkıcı, şarkı yazarı ve müzik grubu Queen'in solistidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Freddie%20Mercury%20performing%20in%20New%20Haven%2C%20CT%2C%20November%201977.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Freddie_Mercury",
   "field": "sanat"
  },
  {
   "name": "Sertab Erener",
   "desc": "Türk ses sanatçısı",
   "fact": "Sertab Erener (d",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Sertab%20Erener%20-%2015.%20Radyo%20Bo%C4%9Fazi%C3%A7i%20%C3%96d%C3%BClleri%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Sertab_Erener",
   "field": "sanat"
  },
  {
   "name": "Napolyon Bonapart",
   "desc": "Fransız asker ve imparator",
   "fact": "Napolyon Bonapart (Fransızca: Napoléon Bonaparte; İtalyanca: Napoleone Bonaparte) veya I",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Jacques-Louis%20David%20-%20The%20Emperor%20Napoleon%20in%20His%20Study%20at%20the%20Tuileries%20-%20Google%20Art%20Project.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Napolyon_Bonapart",
   "field": "tarih"
  },
  {
   "name": "Jül Sezar",
   "desc": "Romalı general ve diktatör",
   "fact": "Jül Sezar (Latince: Gaius Iulius Caesar, Latince telaffuz: [ˈɡajjʊs ˈjuːlɪ.ʊs ˈkae̯sar]; MÖ 12 Temmuz 100 - MÖ 15 Mart 44), Romalı asker ve Roma Cumhuriyeti'nin",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Retrato%20de%20Julio%20C%C3%A9sar%20(26724093101)%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/J%C3%BCl_Sezar",
   "field": "tarih"
  },
  {
   "name": "VII. Kleopatra",
   "desc": "Antik Mısır'ın son Helenistik kraliçesi",
   "fact": "VII",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Kleopatra-VII.-Altes-Museum-Berlin1.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/VII._Kleopatra",
   "field": "tarih"
  },
  {
   "name": "İskender",
   "desc": "Askerî komutan ve Makedonya kralı",
   "fact": "Büyük İskender (Antik Yunanca: Grekçe: Ἀλέξανδρος ὁ Μέγας, Aléxandros ho Mégas; Latince: Alexander Magnus; MÖ 20/21 Temmuz 356 – MÖ 10/11 Haziran 323), tam adıy",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Alexander%20the%20Great%20mosaic%20(cropped).jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0skender",
   "field": "tarih"
  },
  {
   "name": "Cengiz Han",
   "desc": "Moğol İmparatorluğu'nun kurucusu ve ilk hükümdarı",
   "fact": "Cengiz Han, (doğum adıyla Temuçin ya da Timuçin, 1162 - Ağustos 1227), Moğol İmparatorluğu'nun kurucusu ve ilk Han'ı olan Moğol komutan ve hükümdardır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg?width=520",
   "page": "https://tr.wikipedia.org/wiki/Cengiz_Han",
   "field": "tarih"
  },
  {
   "name": "Kösem Sultan",
   "desc": "Osmanlı İmparatorluğu'nun Saltanat Naibesi I.Ahmed'in hasekisi , IV.Murad ve Sultan İbrahim'in Valide Sultanı,torunudöneminde makamını koruyan tek sultan",
   "fact": "Mahpeyker Kösem Sultan (Osmanlıca: كوسم سلطان; y",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Claes%20R%C3%A5lamb%20K%C3%B6sem%20Sultan.png?width=520",
   "page": "https://tr.wikipedia.org/wiki/K%C3%B6sem_Sultan",
   "field": "tarih"
  }
 ],
 "places": [
  {
   "name": "Ayasofya",
   "desc": "Bizans döneminde katedral olarak yapılan ve günümüzde cami olarak kullanılan tarihî yapı",
   "fact": "Ayasofya, resmî adıyla Ayasofya-i Kebîr Câmi-i Şerîfi, İstanbul'un Fatih ilçesinde kiliseden çevrilmiş bir camidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20Mars%202013.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Ayasofya",
   "city": "İstanbul",
   "country": "Türkiye"
  },
  {
   "name": "Topkapı Sarayı",
   "desc": "İstanbul'un Fatih ilçesinde tarihi yapı",
   "fact": "Topkapı Sarayı (Osmanlı Türkçesi: طوپقپو سرايى), İstanbul Sarayburnu'nda, Osmanlı İmparatorluğu'nun 600 yıllık tarihinin 400 yılı boyunca, devletin idare merkez",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi%20Palace%20Seen%20From%20Harem.JPG?width=720",
   "page": "https://tr.wikipedia.org/wiki/Topkap%C4%B1_Saray%C4%B1",
   "city": "İstanbul",
   "country": "Türkiye"
  },
  {
   "name": "Galata Kulesi",
   "desc": "İstanbul'un Beyoğlu ilçesinde tarihi kule",
   "fact": "Galata Kulesi ya da müze olarak kullanılmaya başlaması sonrasındaki adıyla Galata Kulesi Müzesi, İstanbul'un Beyoğlu ilçesinde bulunan bir kuledir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul%20asv2020-02%20img48%20Galata%20Tower.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Galata_Kulesi",
   "city": "İstanbul",
   "country": "Türkiye"
  },
  {
   "name": "Sultanahmet Camii",
   "desc": "İstanbul'un Fatih ilçesinde tarihî camii",
   "fact": "Sultanahmet Camii, 1609-1617 yılları arasında Osmanlı Padişahı I",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Exterior%20of%20Sultan%20Ahmed%20I%20Mosque%20in%20Istanbul%2C%20Turkey%20002.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Sultanahmet_Camii",
   "city": "İstanbul",
   "country": "Türkiye"
  },
  {
   "name": "Dolmabahçe Sarayı",
   "desc": "İstanbul'un Beşiktaş ilçesinde tarihi saray",
   "fact": "Dolmabahçe Sarayı, İstanbul, Beşiktaş'ta, Kabataş'tan Beşiktaş'a uzanan Dolmabahçe Caddesi'yle İstanbul Boğazı arasında, 250.000 m²'lik bir alan üzerinde buluna",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio%20de%20Dolmabah%C3%A7e%2C%20Estambul%2C%20Turqu%C3%ADa%2C%202024-09-29%2C%20DD%2024.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Dolmabah%C3%A7e_Saray%C4%B1",
   "city": "İstanbul",
   "country": "Türkiye"
  },
  {
   "name": "Kız Kulesi",
   "desc": "İstanbul'da bulunan tarihî kule",
   "fact": "Kız Kulesi, İstanbul Boğazı'nın Marmara Denizi'ne yakın kısmında, Üsküdar yakınlarında, Salacak açıklarında yer alan küçük adacık üzerinde inşa edilmiş yapıdır.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul%20asv2020-02%20img53%20Maiden's%20Tower.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/K%C4%B1z_Kulesi",
   "city": "İstanbul",
   "country": "Türkiye"
  },
  {
   "name": "Rumeli Hisarı",
   "desc": "İstanbul Boğazı’nın Rumeli yakasında 15. yüzyılda inşa edilmiş Osmanlı kalesi",
   "fact": "Rumeli Hisarı (diğer adlarıyla Yenicehisar, Boğazkesen Hisarı, Yenikale, Başkesen Hisarı, Kara Kale), İstanbul'un Sarıyer ilçesinde, Boğaziçi'nde bulunan ve bul",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Twierdza%20Rumeli%20Istambu%C5%82%20RB1.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Rumeli_Hisar%C4%B1",
   "city": "İstanbul",
   "country": "Türkiye"
  },
  {
   "name": "Kapadokya",
   "desc": "Türkiye'de bulunan turistik bir bölge",
   "fact": "Kapadokya, Türkiye'nin İç Anadolu Bölgesi'nde yer alan tarihî bölgedir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Cappadocia%20edit.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kapadokya",
   "city": "Nevşehir",
   "country": "Türkiye"
  },
  {
   "name": "Pamukkale",
   "desc": "Pamukkale'de doğal ve turistik alan",
   "fact": "Pamukkale, Türkiye'nin güneybatısındaki Denizli ilinde yer alan doğal bir mevkidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Pamukkale%2C%20Denizli%202026%2068.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Pamukkale",
   "city": "Denizli",
   "country": "Türkiye"
  },
  {
   "name": "Efes",
   "desc": "Anadolu'da bir antik kent",
   "fact": "Efes (Hititçe: 𒀀𒉺𒊭 Apaša, Eski Yunanca: Ἔφεσος Ephesos), Anadolu'nun batı kıyısında, bugünkü İzmir ilinin Selçuk ilçesinin üç kilometre güneybatısında yer al",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ephesus%20Celsus%20Library%20Fa%C3%A7ade.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Efes",
   "city": "İzmir",
   "country": "Türkiye"
  },
  {
   "name": "Göbeklitepe",
   "desc": "Türkiye'deki neolitik arkeolojik alan",
   "fact": "Göbeklitepe veya Göbekli Tepe, Türkiye'nin Güneydoğu Anadolu Bölgesi'ndeki Şanlıurfa ilinin 18 km kuzeydoğusunda, Haliliye ilçesine bağlı Örencik köyü yakınları",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6bekli%20Tepe%2C%20Urfa.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/G%C3%B6beklitepe",
   "city": "Şanlıurfa",
   "country": "Türkiye"
  },
  {
   "name": "Nemrut Dağı",
   "desc": "Adıyaman ilindeki Kahta ilçesi yakınlarında Ankar dağları civarında bir dağ",
   "fact": "Nemrut Dağı, Türkiye'nin Adıyaman ilinde yer alan 2.150 metre yüksekliğinde bir kıvrım dağdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Worshipping%20Nemrut.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Nemrut_Da%C4%9F%C4%B1",
   "city": "Adıyaman",
   "country": "Türkiye"
  },
  {
   "name": "Sümela Manastırı",
   "desc": "Trabzon'da bulunan eski Rum Ortodoks manastır ve kilise kompleksi",
   "fact": "Sümela Manastırı (Yunanca: Μονή Παναγίας Σουμελά Moni Panagias Sumela veya Moni Theotokou Soumela), Trabzon'un Maçka ilçesindeki Altındere Vadisi Millî Parkı sı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%BCmela%20Manast%C4%B1r.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/S%C3%BCmela_Manast%C4%B1r%C4%B1",
   "city": "Trabzon",
   "country": "Türkiye"
  },
  {
   "name": "Aspendos",
   "desc": "Antalya-Serik ilçesine bağlı olan Belkıs köyü sınırları içerisinde bulunan antik kent.",
   "fact": "Aspendos veya Belkıs (Pamfilya lehçesi: ΕΣΤϜΕΔΥΣ; Attika lehçesi: Ἄσπενδος), Antalya ili Serik ilçesinde bulunan Belkıs köyünde yer alan antik tiyatrosuyla meşh",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Aspendos%20Amphitheatre.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Aspendos",
   "city": "Antalya",
   "country": "Türkiye"
  },
  {
   "name": "Troya",
   "desc": "Anadolu'nun kuzeybatısında Homeros döneminden kalma antik kent",
   "fact": "Troya veya Truva (Yunanca: Τροία Troia veya Ίλιον İlion, Latince: Troia veya Ilium, Hititçe: 𒌷𒃾𒇻𒊭 Wilusa/Vilusa veya 𒋫𒊒𒄿𒊭 Truwisa/Truvisa), Kaz Dağı (İd",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Troy1.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Troya",
   "city": "Çanakkale",
   "country": "Türkiye"
  },
  {
   "name": "Anıtkabir",
   "desc": "Ankara'da Türkiye Cumhuriyeti'nin kurucusu Atatürk'ün anıt mezarı",
   "fact": "Anıtkabir, Ankara'nın Çankaya ilçesinde yer alan ve Mustafa Kemal Atatürk'ün anıt mezarını içeren komplekstir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara%20asv2021-10%20img04%20An%C4%B1tkabir.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/An%C4%B1tkabir",
   "city": "Ankara",
   "country": "Türkiye"
  },
  {
   "name": "Bergama",
   "desc": "İzmir'in ilçesi",
   "fact": "Bergama, Türkiye'nin İzmir ilinin bir ilçesidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Bergama%2C%20Turkey.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Bergama",
   "city": "İzmir",
   "country": "Türkiye"
  },
  {
   "name": "Safranbolu",
   "desc": "Karabük'ün bir ilçesi",
   "fact": "Safranbolu, Karabük ilinin tarihî ve turistik bir ilçesidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Safranbolu%20traditional%20houses.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Safranbolu",
   "city": "Karabük",
   "country": "Türkiye"
  },
  {
   "name": "Divriği Ulu Camii ve Darüşşifası",
   "desc": "Türkiye'de bulunan UNESCO Dünya Mirası Listesinde yer alan cami",
   "fact": "Divriği Ulu Cami ve Darüşşifası, Sivas'ın Divriği ilçesinde bulunan tarihi cami ve hastanedir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Divrigi%20complex%20DSCF3028.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Divri%C4%9Fi_Ulu_Camii_ve_Dar%C3%BC%C5%9F%C5%9Fifas%C4%B1",
   "city": "Sivas",
   "country": "Türkiye"
  },
  {
   "name": "İshak Paşa Sarayı",
   "desc": "Ağrı'nın Doğubayazıt ilçesinde tarihi yapı",
   "fact": "İshak Paşa Sarayı, Ağrı'nın Doğubayazıt ilçesinde bulunan bir saraydır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/00%203411%20%C4%B0shak%20Pa%C5%9Fa%20Saray%C4%B1%20-%20Turkey.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/%C4%B0shak_Pa%C5%9Fa_Saray%C4%B1",
   "city": "Ağrı",
   "country": "Türkiye"
  },
  {
   "name": "Zeugma",
   "desc": "Türkiye'de bir antik kent",
   "fact": "Zeugma, Gaziantep'in Nizip ilçesine bağlı Belkıs köyünde bulunan antik yerleşim",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Zeugma.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Zeugma",
   "city": "Gaziantep",
   "country": "Türkiye"
  },
  {
   "name": "Hasankeyf",
   "desc": "Batman'ın ilçesi",
   "fact": "Hasankeyf, Batman ilinin ilçesidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Bajar%C3%AA%20Hesk%C3%AEf%C3%AA.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Hasankeyf",
   "city": "Batman",
   "country": "Türkiye"
  },
  {
   "name": "Uzungöl",
   "desc": "Türkiye'de bir göl",
   "fact": "Uzungöl, Türkiye'nin Trabzon ilinde yer alan bir heyelan set gölüdür",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Uzung%C3%B6l%20lake%20and%20town.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Uzung%C3%B6l",
   "city": "Trabzon",
   "country": "Türkiye"
  },
  {
   "name": "Balıklıgöl",
   "desc": "Şanlıurfa'da göl",
   "fact": "Balıklıgöl (Ayn-i Zeliha ve Halil-ür Rahman Gölleri), Şanlıurfa şehir merkezinin güneybatısında yer alan ve İbrahim peygamberin ateşe atıldığına inanılan bu iki",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Bal%C4%B1kl%C4%B1g%C3%B6l%20Urfa2.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Bal%C4%B1kl%C4%B1g%C3%B6l",
   "city": "Şanlıurfa",
   "country": "Türkiye"
  },
  {
   "name": "Alanya Kalesi",
   "desc": "Kale",
   "fact": "Alanya Kalesi, Antalya'nın ilçesi Alanya'nın simgelerinden biri olan kale",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Alanya%20kale.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Alanya_Kalesi",
   "city": "Antalya",
   "country": "Türkiye"
  },
  {
   "name": "Afrodisias",
   "desc": "Aydın'daki antik kent",
   "fact": "Afrodisias veya Afrodisyas (Grekçe: Ἀφροδισιάς, romanize: Aphrodisiás), Tanrıça Afrodit'e adanmış birçok eski çağ kentinin ortak adı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Aphrodisias%20turkey.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Afrodisias",
   "city": "Aydın",
   "country": "Türkiye"
  },
  {
   "name": "Aizanoi",
   "desc": "Çavdarhisar'da antik kent ve ören yeri",
   "fact": "Aizanoi (Grekçe: Αἰζανοί; Aezani), Kütahya şehir merkezine 58 kilometre uzaklıkta, Çavdarhisar ilçesinde bulunan antik kenttir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Aizanoi%20Zeus%20temple%202120.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Aizanoi",
   "city": "Kütahya",
   "country": "Türkiye"
  },
  {
   "name": "Sardis",
   "desc": "Türkiye'de bir antik kent",
   "fact": "Sardis veya Sardes (Lidce: 𐤮𐤱𐤠𐤭; Grekçe: Σάρδεις; Eski Farsça: 𐎿𐎱𐎼𐎭) Manisa'nın Salihli ilçesine bağlı Sart Mahallesi yakınlarında bulunan ve Lidya devl",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Bath-Gymnasium%20complex%20at%20Sardis%2C%20late%202nd%20-%20early%203rd%20century%20AD%2C%20Sardis%2C%20Turkey%20(17098680002).jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Sardis",
   "city": "Manisa",
   "country": "Türkiye"
  },
  {
   "name": "Eyfel Kulesi",
   "desc": "Paris'in simgesi olan demir kule",
   "fact": "Eyfel Kulesi (Fransızca: La tour Eiffel [la tuʀ ɛˈfɛl]), Paris'teki demir kule",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Tour%20Eiffel%20Wikimedia%20Commons.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Eyfel_Kulesi",
   "city": "Paris",
   "country": "Fransa"
  },
  {
   "name": "Kolezyum",
   "desc": "İtalya'da tiyatro",
   "fact": "Kolezyum (İtalyanca: Colosseo; İtalyanca telaffuz: [kolosˈsɛːo]), İtalya'nın başkenti Roma'nın merkezinde, Roma Forumu'nun hemen doğusunda yer alan elips biçiml",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo%202020.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kolezyum",
   "city": "Roma",
   "country": "İtalya"
  },
  {
   "name": "Pisa Kulesi",
   "desc": "İtalya'daki tarihi çan kulesi",
   "fact": "Pisa Kulesi, İtalya'nın Pisa kentinde bulunan ve Pisa Katedrali'nin çan kulesi olarak inşa edilen yapıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Campanile%20D%C3%B4me%20-%20Pise%20(IT52)%20-%202022-08-31%20-%2020.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Pisa_Kulesi",
   "city": "Pisa",
   "country": "İtalya"
  },
  {
   "name": "Machu Picchu",
   "desc": "İnka antik kenti",
   "fact": "Machu Picchu (okunuş: Maçu Piççu veya Maçu Piçu, Keçuva dili: Machu Pikchu), bugüne kadar çok iyi korunarak gelmiş olan bir İnka antik şehridir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/80%20-%20Machu%20Picchu%20-%20Juin%202009%20-%20edit.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Machu_Picchu",
   "city": "Cusco",
   "country": "Peru"
  },
  {
   "name": "Gize Piramitleri",
   "desc": "",
   "fact": "Gize Piramitleri Mısır'ın başkenti Kahire'nin Gize semtinde bulunan 3 görkemli yapı: Keops Piramidi Kefren Piramidi Mikerinos Piramidi Bu üç piramitten yalnızca",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Pyramids%20of%20the%20Giza%20Necropolis.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Gize_Piramitleri",
   "city": "Gize",
   "country": "Mısır"
  },
  {
   "name": "Tac Mahal",
   "desc": "Hindistan'ın Agra kenti'ndeki anıt mezar",
   "fact": "Tac Mahal (Hintçe: ताजमहल, romanize: Taj Mahal), Hindistan'ın Uttar Pradeş eyaletindeki Agra şehrinde, Yamuna Nehri'nin sağ kıyısında yer alan fildişi beyazı me",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%20(Edited).jpeg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Tac_Mahal",
   "city": "Agra",
   "country": "Hindistan"
  },
  {
   "name": "Çin Seddi",
   "desc": "Ayrı Çin krallıklarının inşa ettiği dünyanın en uzun savunma duvarı",
   "fact": "Çin Seddi, Çin'in kuzeybatısı boyunca uzanan, dünyanın en uzun savunma duvarıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Badaling%20China%20Great-Wall-of-China-06.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/%C3%87in_Seddi",
   "city": "Pekin",
   "country": "Çin"
  },
  {
   "name": "Özgürlük Heykeli",
   "desc": "New York Limanı'nda yer alan devasa heykel",
   "fact": "Özgürlük Heykeli (İngilizce: Statue of Liberty) ya da resmî adıyla Dünyayı Aydınlatan Özgürlük, ABD'nin New York şehrindeki Liberty (Özgürlük) adası üzerinde, i",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Statue%20of%20Liberty%20and%20a%20sightseeing%20boat%2C%20Liberty%20Island%2C%20New%20York.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/%C3%96zg%C3%BCrl%C3%BCk_Heykeli",
   "city": "New York",
   "country": "ABD"
  },
  {
   "name": "Big Ben",
   "desc": "Londra'daki saat kulesi",
   "fact": "Big Ben (resmi adıyla Elizabeth Kulesi), Londra'da Westminster Sarayı'nın yanındaki ünlü saat kulesi",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Elizabeth%20Tower%20and%20the%20north%20front%20of%20the%20Palace%20of%20Westminster%2C%20London.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Big_Ben",
   "city": "Londra",
   "country": "Birleşik Krallık"
  },
  {
   "name": "Sagrada Família",
   "desc": "İspanya'nın Barselona şehrinde 1882'den beri inşa halinde olan bazilika",
   "fact": "La Sagrada Familia (Kutsal Aile), İspanya'nın Barselona şehrinde bulunan ve modern mimarinin öncülerinden sayılan Antoni Gaudi'nin 1883 yılında devraldığı fakat",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/SF%20maig%202026.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia",
   "city": "Barselona",
   "country": "İspanya"
  },
  {
   "name": "Petra",
   "desc": "Ürdün'de antik şehir",
   "fact": "Petra (Arapça: ٱلْبَتْراء, romanize: Al-Batrāʾ; Grekçe: Πέτρα) veya sakinleri tarafından bilinen ismiyle Raqmu, Ürdün'ün güneyinde yer alan tarihi ve arkeolojik",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Treasury%2C%20Petra%2C%20Jordan5.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Petra",
   "city": "Petra",
   "country": "Ürdün"
  },
  {
   "name": "Stonehenge",
   "desc": "İngiltere'de bulunan arkeolojik yapı",
   "fact": "Stonehenge, İngiltere'nin Wiltshire kenti Salisbury Düzlüğü'nde bulunan, Amesbury'nin 3 km (2 mil) batısında yer alan tarih öncesi bir anıt",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Stonehenge%20Total.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Stonehenge",
   "city": "Salisbury",
   "country": "Birleşik Krallık"
  },
  {
   "name": "Hattuşa",
   "desc": "Hititler'in Geç Tunç Çağı dönemindeki başkenti",
   "fact": "Hattuşa (Hititçe: 𒌷𒄩𒀜𒌅𒊭) ya da Hattuşaş, Hititler'in Geç Tunç Çağı dönemindeki başkentidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Lion%20Gate%2C%20Hattusa%2013%20(cropped).jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Hattu%C5%9Fa",
   "city": "Çorum",
   "country": "Türkiye"
  },
  {
   "name": "Göreme",
   "desc": "Göreme'de antik kent ve ören yeri",
   "fact": "Göreme, Nevşehir ilinin merkez ilçesine bağlı bir beldedir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6reme%20town%20and%20valley%202015.JPG?width=720",
   "page": "https://tr.wikipedia.org/wiki/G%C3%B6reme",
   "city": "Nevşehir",
   "country": "Türkiye"
  },
  {
   "name": "Ani",
   "desc": "Kars'ın güneydoğusunda il ve ören yeri",
   "fact": "Ani (Ermenice: Անի, Latince: Abnicum), Kars'ın güneydoğusunda, Arpaçay boyunda bulunan ören yeridir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ani%20seen%20from%20Armenia.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Ani",
   "city": "Kars",
   "country": "Türkiye"
  },
  {
   "name": "Perge",
   "desc": "Pamfilya bölgesine başkentlik yapmış antik kent",
   "fact": "Perge (Rumca: Πέργη Pergi), Antalya'nın 18 km doğusunda, Aksu ilçesi sınırları içinde bulunan, bir zamanlar Pamfilya Bölgesine başkentlik yapmış antik bir kentt",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Perge%20city%20overview.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Perge",
   "city": "Antalya",
   "country": "Türkiye"
  },
  {
   "name": "Assos",
   "desc": "Ayvacık'da bir antik kent",
   "fact": "Assos (Grekçe: Άσσος), Çanakkale'nin Ayvacık ilçesinin yaklaşık 17 km güneyindeki Behramkale Köyü'nde yer alan bir antik kent",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Assos.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Assos",
   "city": "Çanakkale",
   "country": "Türkiye"
  },
  {
   "name": "Uçhisar Kalesi",
   "desc": "Nevşehir, Kapadokya'da bulunan bir kale",
   "fact": "Uçhisar Kalesi, Nevşehir ili Uçhisar beldesi sınırlarında bulunmaktadır.Merkez ilçeye 6 km mesafede bulunan yüksek tepelikte sarp kayalıkların doğal oluşumlarla",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Nev%C5%9Fehir%20U%C3%A7%20hisar%20kalesi.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/U%C3%A7hisar_Kalesi",
   "city": "Nevşehir",
   "country": "Türkiye"
  },
  {
   "name": "Yazılıkaya",
   "desc": "Boğazkale'de arkeolojik sit",
   "fact": "Yazılıkaya, Çorum ilinde, Hitit başkenti Hattuşaş (Boğazköy) antik yerleşkesinin 2 km kuzeydoğusunda yer alan, doğal kayalar arasına yapılmış Hitit açık hava ta",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Chamber%20A%2C%20Yazilikaya%2001.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Yaz%C4%B1l%C4%B1kaya",
   "city": "Çorum",
   "country": "Türkiye"
  },
  {
   "name": "Versay Sarayı",
   "desc": "Paris civarındaki Fransız sarayı",
   "fact": "Versay Sarayı ya da Versailles Sarayı, (Fransızca: Le château de Versailles) tarihi bir Fransız şatosudur",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Vue%20a%C3%A9rienne%20du%20domaine%20de%20Versailles%20par%20ToucanWings%20-%20Creative%20Commons%20By%20Sa%203.0%20-%20083.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Versay_Saray%C4%B1",
   "city": "Versay",
   "country": "Fransa"
  },
  {
   "name": "Brandenburg Kapısı",
   "desc": "Almanya'nın Berlin şehrinin ana sembollerinden biri",
   "fact": "Brandenburg Kapısı (Almanca: Brandenburger Tor), Almanya'nın Berlin şehrinde bulunan Brandenburg Kapısı, 18",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Brandenburger%20Tor%20morgens.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Brandenburg_Kap%C4%B1s%C4%B1",
   "city": "Berlin",
   "country": "Almanya"
  },
  {
   "name": "Atina Akropolisi",
   "desc": "Atina'da yüksek bir kayalık üzerindeki birçok antik yapı kalıntılarını içeren eski bir hisar",
   "fact": "Atina Akropolisi (Yunanca: Ακρόπολη Αθηνών), Atina'ya hakim yüksek bir kayalık üzerinde bulunan ve büyük mimari ve tarihi önemi olan birçok antik yapı kalıntıla",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Attica%2006-13%20Athens%2050%20View%20from%20Philopappos%20-%20Acropolis%20Hill.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Atina_Akropolisi",
   "city": "Atina",
   "country": "Yunanistan"
  },
  {
   "name": "Elhamra Sarayı",
   "desc": "İspanya'nın Granada kentindeki saray ve kale kompleksi",
   "fact": "Elhamra Sarayı (İspanyolca telaffuz: [alˈambɾa], Arapça: الْحَمْرَاء, romanize: al-ḥamrāʼ), İspanya'nın Granada şehrinde yer alan bir saray ve kale kompleksidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra%20detail.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Elhamra_Saray%C4%B1",
   "city": "Granada",
   "country": "İspanya"
  },
  {
   "name": "Chichén Itzá",
   "desc": "",
   "fact": "Chichen Itza (ya da okunuşuyla Çiçen İtza), Meksika'nın Yucatán Yarımadası'nda, Valladolid ve Mérida arasında yer alan, Kristof Kolomb öncesi dönemde kurulmuş b",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen%20Itza%203.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Chich%C3%A9n_Itz%C3%A1",
   "city": "Yucatán",
   "country": "Meksika"
  },
  {
   "name": "Angkor Vat",
   "desc": "Kamboçya'daki Angkor anıt kompleksinin tapınağı",
   "fact": "Angkor Vat, Kamboçya'nın Siem Reap şehrinde bulunan, Vaişnavizm ve Theravada Budist tapınak kompleksidir ve dünyanın en büyük dini kompleksidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Angkor%20Wat.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Angkor_Vat",
   "city": "Siem Reap",
   "country": "Kamboçya"
  },
  {
   "name": "Sidney Opera Evi",
   "desc": "Avustralya'da bir gösteri sanatları merkezi",
   "fact": "Sidney Opera Evi (Sydney Opera House), Avustralya'nın en büyük şehri Sidney'in sembolü ve 20",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/00%201375%20Sydney%20Opera%20House%20(Australia).jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Sidney_Opera_Evi",
   "city": "Sidney",
   "country": "Avustralya"
  }
 ],
 "planets": [
  {
   "name": "Merkür",
   "desc": "Güneş sistemi'nde yer alan, Güneş'e en yakın ve sistem içerisindeki en küçük gezegen",
   "fact": "Güneş'e en yakın gezegen.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercury%20in%20color%20-%20Prockter07%20centered.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Merk%C3%BCr"
  },
  {
   "name": "Venüs",
   "desc": "Güneş sisteminde yer alan, Güneş'e en yakın 2., sıcaklık açısından 1. sırada yer alan gezegen",
   "fact": "Güneş Sistemi'nin en sıcak gezegeni.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA23791-Venus-RealAndEnhancedContrastViews-20200608%20(cropped).jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Ven%C3%BCs"
  },
  {
   "name": "Dünya",
   "desc": "Güneş Sistemi'nde Güneş'e en yakın üçüncü gezegen",
   "fact": "Üzerinde yaşam bulunan tek bilinen gezegen.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Blue%20Marble%20(5052124705).jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/D%C3%BCnya"
  },
  {
   "name": "Mars",
   "desc": "Güneş'e en yakın dördüncü gezegen",
   "fact": "Kızıl Gezegen olarak bilinir.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Mars%20-%20August%2030%202021%20-%20Flickr%20-%20Kevin%20M.%20Gill.png?width=720",
   "page": "https://tr.wikipedia.org/wiki/Mars"
  },
  {
   "name": "Jüpiter",
   "desc": "Güneş Sistemi'nde yer alan en büyük gezegen",
   "fact": "Güneş Sistemi'nin en büyük gezegeni.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Jupiter%20OPAL%202024.png?width=720",
   "page": "https://tr.wikipedia.org/wiki/J%C3%BCpiter"
  },
  {
   "name": "Satürn",
   "desc": "Güneş'e en yakın altıncı gezegen",
   "fact": "Halkalarıyla ünlü gaz devi.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Saturn%2C%20Four%20Years%20On%2C%20by%20ISS.tif?width=720",
   "page": "https://tr.wikipedia.org/wiki/Sat%C3%BCrn"
  },
  {
   "name": "Uranüs",
   "desc": "Güneş'e en yakın yedinci gezegen",
   "fact": "Yan yatmış ekseniyle dönen buz devi.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Uranus%20Voyager2%20color%20calibrated.png?width=720",
   "page": "https://tr.wikipedia.org/wiki/Uran%C3%BCs"
  },
  {
   "name": "Neptün",
   "desc": "Uranüs'ten sonra Güneş'e en uzak ve uzaklık sıralamasına göre sekizinci gezegen",
   "fact": "Güneş'e en uzak gezegen.",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Neptune%20Voyager2%20color%20calibrated.png?width=720",
   "page": "https://tr.wikipedia.org/wiki/Nept%C3%BCn"
  }
 ],
 "animals": [
  {
   "name": "Aslan",
   "desc": "Afrika ve Asya'ya özgü büyük bir kedi",
   "fact": "Aslan (Panthera leo), Afrika ve Hindistan'a özgü Panthera cinsinden büyük bir kedidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Lion_waiting_in_Namibia.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Aslan"
  },
  {
   "name": "Kaplan",
   "desc": "Asya'ya özgü büyük kedi",
   "fact": "Kaplan (Panthera tigris), kedigiller (Felidae) familyasından etçil bir memeli hayvan türü ve büyük kediler ailesinin dört üyesinden biridir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Panthera_tigris_corbetti_(Tierpark_Berlin)_832-714-(118).jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kaplan"
  },
  {
   "name": "Fil",
   "desc": "hortumlu bir memeli hayvan",
   "fact": "Fil, hortumlular takımının filgiller (Elephantidae) familyasını oluşturan memeli bir hayvandır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/African_Bush_Elephant.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Fil"
  },
  {
   "name": "Zürafa",
   "desc": "memeli cinsi",
   "fact": "Zürafa (Giraffa), soyu tükenmemiş canlılar arasında karada yaşayan en uzun ve gevişgetirenler arasında da en büyük olan, Afrika'da yaşayan çift toynaklı memelid",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Giraffe_standing.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Z%C3%BCrafa"
  },
  {
   "name": "Dev panda",
   "desc": "memeli hayvan türü",
   "fact": "Dev panda (Ailuropoda Melanoleuca) veya sadece panda, ayıgiller familyasından, beyaz postu üzerinde bölge bölge siyah büyük benekleri olan, iri, nesli tehlikede",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Grosser_Panda.JPG?width=720",
   "page": "https://tr.wikipedia.org/wiki/Dev_panda"
  },
  {
   "name": "Koala",
   "desc": "Avustralya'nın doğu ve güney kıyı eyaletlerinde bulunan, Phascolarctidae familyasının yaşayan tek temsilcisi, otobur ve keseli bir memeli hayvan türü",
   "fact": "Koala (Phascolarctos cinereus), Avustralya'ya özgü otobur ve ağaçta yaşayan bir keseli memeli hayvan türüdür",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Koala_climbing_tree.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Koala"
  },
  {
   "name": "Kanguru",
   "desc": "Macropodidae familyasına ait keseli hayvan",
   "fact": "Kanguru, Avustralya ve Yeni Gine'ye özgü olan, sıçrayıcı, Macropus ve Osphranter cinsine ait keseli memelilerin ortak adı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Macropus_giganteus_-_Brunkerville.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kanguru"
  },
  {
   "name": "Penguen",
   "desc": "uçamayan, dimdik durabilen, perde ayaklı deniz kuşları",
   "fact": "Penguen, Sphenisciformes takımında Spheniscidae familyasında yer alan, uçamayan, yüzebilen, dimdik durabilen, perde ayaklı deniz kuşudur",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Penguins_collage.png?width=720",
   "page": "https://tr.wikipedia.org/wiki/Penguen"
  },
  {
   "name": "Kutup ayısı",
   "desc": "Kuzey kutup dairesinde yaşayan ayı türü",
   "fact": "Kutup ayısı (Ursus maritimus) aynı zamanda beyaz ayı ya da deniz ayısı, ayıgiller (Ursidae) familyasından soğuk kuzey kutup bölgesinin karlı sahillerinde ve buz",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ursus_maritimus_Steve_Amstrup.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kutup_ay%C4%B1s%C4%B1"
  },
  {
   "name": "Kurt",
   "desc": "Avrasya ve Kuzey Amerika'ya özgü memeli",
   "fact": "Kurt (Canis lupus) veya bozkurt, Avrasya ve Kuzey Amerika'ya özgü ve Canis cinsinden iri bir memelidir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Canis_lupus.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kurt"
  },
  {
   "name": "Tilki",
   "desc": "memeli takımı",
   "fact": "Tilki, Canidae (köpekgiller) ailesi içindeki yedi cinste sınıflanmış ve yaklaşık 24 tür canlının ortak adıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Genus_vulpes.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Tilki"
  },
  {
   "name": "Kartal",
   "desc": "büyük etçil kuş",
   "fact": "Kartal, atmacagiller (Accipitridae) familyasına üyedir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Eagles_together.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kartal"
  },
  {
   "name": "Baykuş",
   "desc": "Etobur kuş türü",
   "fact": "Baykuş, baykuşgiller takımında yer alan, etobur beslenen ve gece avlanan yırtıcı kuş türlerinin genel adıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_owls.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Bayku%C5%9F"
  },
  {
   "name": "Mavi balina",
   "desc": "memeli bir hayvan",
   "fact": "Mavibalina ya da gökbalina (Balaenoptera musculus), en büyükleri 35 metreyi bulan boyu ve 150-200 ton ağırlığıyla, yaşayan en büyük hayvandır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Mavi_balina"
  },
  {
   "name": "Köpekbalığı",
   "desc": "kıkırdaklı balıklarsınıfının Elasmobranchii alt sınıfını oluşturan iki üst takımdan biri olan Selachimorpha",
   "fact": "Köpek balığı (Selachimorpha), kıkırdaklı balıklar (Chondrichthyes) sınıfının Elasmobranchii alt sınıfını oluşturan iki üst takımdan biri olan Selachimorpha (diğ",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Carcharhinus_amblyrhynchos_palau.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/K%C3%B6pekbal%C4%B1%C4%9F%C4%B1"
  },
  {
   "name": "Ahtapot",
   "desc": "yumuşak gövdeli, sekiz kollu, Octopoda takımında sınıflandırılan yumuşakçaların genel adı",
   "fact": "Ahtapot; yumuşak gövdeli, sekiz kollu, Octopoda takımında sınıflandırılan yumuşakçaların genel adı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Octopus2.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Ahtapot"
  },
  {
   "name": "Denizanası",
   "desc": "denizlerde yaşayan, omurgasız ve sölenter canlılar",
   "fact": "Denizanası veya medüz, Scyphozoa ve Cubozoa sınıflarında bulunan, serbestçe yüzen ve beyni, kalbi ve testisleri bulunmayan; sölenterler ve omurgasızlara ait ola",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Chrysaora_quinquecirrha.JPG?width=720",
   "page": "https://tr.wikipedia.org/wiki/Denizanas%C4%B1"
  },
  {
   "name": "Timsahlar",
   "desc": "",
   "fact": "Timsahlar (Latince: Crocodilia), sıcak bölgelerde bataklıklar ve su kenarlarında yaşayan vücudu kemiksi pullarla örtülü sürüngenleri içeren bir grup",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/China-Alligator.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Timsahlar"
  },
  {
   "name": "Yılan",
   "desc": "pullular alt takımı",
   "fact": "Yılanlar (Latince: Serpentes), Pullular (Latince: Squamata) takımına ait uzun, ayaksız etçil sürüngenlerdir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Coluber_najadum.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Y%C4%B1lan"
  },
  {
   "name": "Kurbağa",
   "desc": "",
   "fact": "Kuyruksuz kurbağalar (Latince: Anura), Yunancadaki \"yokluk\" ön eki olan ἀ(ν)- an- ile yine Yunancada \"kuyruk\" anlamına gelen οὐρά ourá sözcüklerinden yapay türe",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Bufo_periglenes1.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kurba%C4%9Fa"
  },
  {
   "name": "Kelebek",
   "desc": "pul kanatlılar takımındaki böcek grubu",
   "fact": "Kelebekler, pul kanatlılar takımına bağlı Papilionoidea üst familyasından kanatlı böceklerdir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Fesoj_-_Papilio_machaon_(by).jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kelebek"
  },
  {
   "name": "Arı",
   "desc": "zar kanatlılardan, bal ve bal mumu yapan bir böcek",
   "fact": "Arı, zar kanatlılar takımına ait Apoidea familyasını oluşturan tüm böcek türlerine verilen isimdir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Apis_mellifera_flying.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Ar%C4%B1"
  },
  {
   "name": "Karınca",
   "desc": "Böcek ailesi",
   "fact": "Karınca, karıncalar (Formicidae) familyasını oluşturan, yaban arıları ve arılarla birlikte zar kanatlılar (Hymenoptera) takımında yer alan, sosyal yaşam göstere",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Meat_eater_ant_feeding_on_honey.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Kar%C4%B1nca"
  },
  {
   "name": "Örümcek",
   "desc": "",
   "fact": "Örümcekler (Araneae takımı); sekiz bacağa, genellikle zehir enjekte edebilen dişler taşıyan keliserlere ve ipek salgılayan örü memelerine sahip, hava soluyan ek",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Spiders_Diversity.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/%C3%96r%C3%BCmcek"
  },
  {
   "name": "Tavşan",
   "desc": "kemirici memeli",
   "fact": "Tavşan, Lagomorpha takımı içinde sınıflandırılan tavşangiller (Leporidae) familyasını oluşturan memeli türlerinin ortak adıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Arctic_Hare_1.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Tav%C5%9Fan"
  },
  {
   "name": "Sincap",
   "desc": "",
   "fact": "Sincap, sincapgiller (Latince: Sciuridae) familyasından uzun kuyruk tüyleri ile dikkat çeken kemirici memelilerin ortak adıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Eichhoernchen.JPG?width=720",
   "page": "https://tr.wikipedia.org/wiki/Sincap"
  },
  {
   "name": "Deve",
   "desc": "hörgüçlerinde yağ depolayan, eti, sütü, derisi kullanılan Camelidaememeli hayvan",
   "fact": "Deve, devegiller (Camelidae) familyasının Camelus cinsini oluşturan iki evcil hayvan türünün ortak adı",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Deve"
  },
  {
   "name": "Gergedan",
   "desc": "Gergedangillerfamilyasına ait tek toynaklılar",
   "fact": "Gergedan, Gergedangiller (Rhinocerotidae) familyasından, ağır ve hantal gövdeli, burun kemiğinin üstünde derisine yapışık bir veya iki boynuzu bulunan, kalın de",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/White_rhinos.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Gergedan"
  },
  {
   "name": "Su aygırı",
   "desc": "su hayvanı",
   "fact": "Su aygırı veya Hipopotam (Hippopotamus amphibius), çift toynaklılar (Artiodacyla) takımının su aygırıgiller (Hippopotamidae) familyasından, geviş getirmeyen, ir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Hippopotamus_-_04.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Su_ayg%C4%B1r%C4%B1"
  },
  {
   "name": "Çita",
   "desc": "Dünya üzerinde karada en hızlı koşan hayvan",
   "fact": "Çita (Acinonyx jubatus), kedigiller familyasının bir üyesi olup, diğer memelilerden daha hızlı koşabilmesiyle bilinir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/TheCheethcat.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/%C3%87ita"
  },
  {
   "name": "Pars",
   "desc": "Kedigiller familyasından bir büyük kedi türü",
   "fact": "Pars (Panthera pardus) veya leopar kedigiller (Felidae) familyasından Panthera cinsinin 4 büyük kedi türünden biridir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Panthera_pardus_close_up.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Pars"
  },
  {
   "name": "Şempanze",
   "desc": "Pancinsini oluşturan iki türün daha iri yapılı olanı",
   "fact": "Şempanze (Pan troglodytes), primatlar (Primates) takımının büyük insansı maymunlar (Hominidae) familyasına dahil ''Pan'' (şempanze) cinsini oluşturan iki türün ",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Common_chimpanzee_(Pan_troglodytes_schweinfurthii)_feeding.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/%C5%9Eempanze"
  },
  {
   "name": "Goril",
   "desc": "büyük Afrika maymunlarının cinsi",
   "fact": "Goril (Gorilla), yaşayan en büyük insansı ve primat cinsi",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/N'Tami%2C_Western_Gorilla.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Goril"
  },
  {
   "name": "Flamingo",
   "desc": "Anadolu'da allı turna olarak da bilinen pembe renkli su kuşu",
   "fact": "Flamingo ya da allı turna Phoenicopteridae familyasını oluşturan kuşların ortak adıdır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Flamingos_Laguna_Colorada.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Flamingo"
  },
  {
   "name": "Tavus kuşu",
   "desc": "kuş türü",
   "fact": "Tavus kuşu, sülüngiller (Phasianidae) familyasında Pavo cinsindeki iki tür kuşa verilen isimdir",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Peacock_front02_-_melbourne_zoo.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Tavus_ku%C5%9Fu"
  },
  {
   "name": "Papağan",
   "desc": "kuş takımı",
   "fact": "Papağanlar (Psittaciformes), takımını oluşturan kıvrık gagalı, etli ve kalın dilli, parlak tüylü, sıcak yerlerde yaşayan kuşlardır",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ara_ararauna_Luc_Viatour.jpg?width=720",
   "page": "https://tr.wikipedia.org/wiki/Papa%C4%9Fan"
  },
  {
   "name": "Karga",
   "desc": "Kuş türü",
   "fact": "Karga, kargagiller (Corvidae) familyasından Corvus cinsini oluşturan, orta boylu, güçlü ayakları ve düz iri gagaları olan siyah ve zeki ötücü kuşlar",
   "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Corvus_brachyrhynchos_30212.JPG?width=720",
   "page": "https://tr.wikipedia.org/wiki/Karga"
  }
 ]
};

if (typeof window !== "undefined") window.WIKI = WIKI;
