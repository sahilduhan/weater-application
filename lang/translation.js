// Using https://openweathermap.org/current#multi to get correct apiLang

export function getUserLanguage() {
  if (Object.keys(translations).includes(navigator.language) === true) {
    return navigator.language;
  }

  return null;
}

export const translations = {
  "en-US": {
    apiLang: "en",
    formattingLocale: "en-US",
    airQuality: "Air Quality",
    good: "Good",
    satisfactory: "Satisfactory",
    sensitive: "Sensitive",
    unhealthy: "Unhealthy",
    veryUnhealthy: "Very Unhealthy",
    hazardous: "Hazardous",
    weatherIn: "Weather in",
    humidity: "Humidity",
    windSpeed: "Wind speed",
    sunrise: "Sunrise",
    sunset: "Sunset",
    noWeatherFound: "No weather found.",
    search: "Search",
    pleaseAddLocation: "Please add a location.",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    day: "Day",
    night: "Night",
  },
  "pt-BR": {
    apiLang: "pt_br",
    formattingLocale: "pt-BR",
    airQuality: "Qual. do Ar",
    good: "Bom",
    satisfactory: "Satisfatório",
    sensitive: "Limítrofe",
    unhealthy: "Insalubre",
    veryUnhealthy: "Muito Insalubre",
    hazardous: "Perigoso",
    weatherIn: "Tempo em",
    humidity: "Umidade",
    windSpeed: "Vel. vento",
    sunrise: "Nasc. do Sol",
    sunset: "Pôr do Sol",
    noWeatherFound: "Tempo não encontrado.",
    search: "Pesquisar",
    pleaseAddLocation: "Adicione uma localização.",
    monday: "Segunda-feira",
    tuesday: "Terça-feira",
    wednesday: "Quarta-feira",
    thursday: "Quinta-feira",
    friday: "Sexta-feira",
    saturday: "Sábado",
    sunday: "Domingo",
    day: "Dia",
    night: "Noite",
  },
  "es-MX": {
    apiLang: "es",
    formattingLocale: "es-MX",
    airQuality: "Calidad De Aire",
    good: "Buena",
    satisfactory: "Satisfactoria",
    sensitive: "Sensible",
    unhealthy: "Dañino",
    veryUnhealthy: "Muy Dañino",
    hazardous: "Peligroso",
    weatherIn: "Clima en",
    humidity: "Humedad",
    windSpeed: "Velocidad Del Viento",
    sunrise: "Amanecer",
    sunset: "Anochecer",
    noWeatherFound: "No se encontró ningun clima.",
    search: "Buscar",
    pleaseAddLocation: "Por favor agrega una localización.",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miercoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sabado",
    sunday: "Domingo",
    day: "Día",
    night: "Noche",
  },
  "de-DE": {
    apiLang: "de",
    formattingLocale: "de-DE",
    airQuality: "Luftqualität",
    good: "Gut",
    satisfactory: "Zufriedenstellend",
    sensitive: "Sensitiv",
    unhealthy: "Ungesund",
    veryUnhealthy: "Sehr Ungesund",
    hazardous: "Gefährlich",
    weatherIn: "Wetter in",
    humidity: "Feuchtigkeit",
    windSpeed: "Windgeschwindigkeit",
    sunrise: "Sonnenaufgang",
    sunset: "Sonnenuntergang",
    noWeatherFound: "Keine Wetterdaten gefunden.",
    search: "Suche",
    pleaseAddLocation: "Bitte gib einen Ort an.",
    monday: "Montag",
    tuesday: "Dienstag",
    wednesday: "Mittwoch",
    thursday: "Donnerstag",
    friday: "Freitag",
    saturday: "Samstag",
    sunday: "Sonntag",
    day: "Tag",
    night: "Nacht",
  },
  "fr-FR": {
    apiLang: "fr",
    formattingLocale: "fr-FR",
    airQuality: "Qualité de l'air",
    good: "Bien",
    satisfactory: "Satisfaisant",
    sensitive: "Sensible",
    unhealthy: "Mauvais pour la santé",
    veryUnhealthy: "Très malsain",
    hazardous: "Hasardeux",
    weatherIn: "Météo à",
    humidity: "Humidité",
    windSpeed: "Vitesse du vent",
    sunrise: "Lever du soleil",
    sunset: "Le coucher du soleil",
    noWeatherFound: "Aucune météo trouvée.",
    search: "Chercher",
    pleaseAddLocation: "Veuillez ajouter un emplacement.",
    monday: "Lundi",
    tuesday: "Mardi",
    wednesday: "Mercredi",
    thursday: "Jeudi",
    friday: "Vendredi",
    saturday: "Samedi",
    sunday: "Dimanche",
    day: "Jour",
    night: "Nuit",
  },
  "id-ID": {
    apiLang: "id",
    formattingLocale: "id-ID",
    airQuality: "Kualitas Udara",
    good: "Baik",
    satisfactory: "Memuaskan",
    sensitive: "Sensitif",
    unhealthy: "Tidak Sehat",
    veryUnhealthy: "Sangat Tidak Sehat",
    hazardous: "Berbahaya",
    weatherIn: "Cuaca di",
    humidity: "Kelembaban",
    windSpeed: "Kecepatan Angin",
    sunrise: "Matahari terbit",
    sunset: "Matahari terbenam",
    noWeatherFound: "Data cuaca tidak ditemukan.",
    search: "Pencarian",
    pleaseAddLocation: "Silahkan tambahkan lokasi.",
    monday: "Senin",
    tuesday: "Selasa",
    wednesday: "Rabu",
    thursday: "Kamis",
    friday: "Jumat",
    saturday: "Sabtu",
    sunday: "Minggu",
    day: "Siang",
    night: "Malam",
  },
  "el-GR": {
    apiLang: "el",
    formattingLocale: "el-GR",
    airQuality: "Ποιότητα αέρα",
    good: "Καλός",
    satisfactory: "Ικανοποιητικός",
    sensitive: "Ευαίσθητος",
    unhealthy: "Ανθυγιεινός",
    veryUnhealthy: "Πολύ Ανθυγιεινός",
    hazardous: "Επικίνδυνος",
    weatherIn: "Καιρός στο",
    humidity: "Υγρασία",
    windSpeed: "Ταχύτητα Αέρα",
    sunrise: "Ανατολή ήλιου",
    sunset: "Δυση του ήλιου",
    noWeatherFound: "Δεν βρέθηκε καιρός.",
    search: "Αναζήτηση",
    pleaseAddLocation: "Προσθέστε μια τοποθεσία.",
    monday: "Δευτέρα",
    tuesday: "Τρίτη",
    wednesday: "Τετάρτη",
    thursday: "Πέμπτη",
    friday: "Παρασκευή",
    saturday: "Σάββατο",
    sunday: "Κυριακή",
    day: "Mέρα",
    night: "Νύχτα",
  },
  ja_JP: {
    apiLang: "ja",
    formattingLocale: "ja-JP",
    airQuality: "空気の質",
    good: "良い",
    satisfactory: "満足",
    sensitive: "センシティブ",
    unhealthy: "不健康",
    veryUnhealthy: "非常に不健康",
    hazardous: "危険な",
    weatherIn: "天気",
    humidity: "湿度",
    windSpeed: "風速",
    sunrise: "日の出",
    sunset: "日没",
    noWeatherFound: "天気が見つかりません.",
    search: "探す",
    pleaseAddLocation: "場所を追加してください.",
    monday: "月曜日",
    tuesday: "火曜日",
    wednesday: "水曜日",
    thursday: "木曜日",
    friday: "金曜日",
    saturday: "土曜日",
    sunday: "日曜日",
    day: "日",
    night: "夜",
  },
  sq_AL: {
    apiLang: "sq",
    formattingLocale: "sq_AL",
    airQuality: "Cilësia e ajrit",
    good: "Mirë",
    satisfactory: "E kënaqshme",
    sensitive: "I ndjeshëm",
    unhealthy: "E pashëndetshme",
    veryUnhealthy: "Shumë i pashëndetshëm",
    hazardous: "E rrezikshme",
    weatherIn: "Moti në",
    humidity: "Lagështia",
    windSpeed: "Shpejtesia e eres",
    sunrise: "Lindja e diellit",
    sunset: "Perëndimi i diellit",
    noWeatherFound: "Nuk u gjet mot.",
    search: "Kërko",
    pleaseAddLocation: "Ju lutemi shtoni një vendndodhje.",
    monday: "e hënë",
    tuesday: "e martë",
    wednesday: "e mërkurë",
    thursday: "e enjte",
    friday: "e premte",
    saturday: "e shtunë",
    sunday: "të dielën",
    day: "Dita",
    night: "Natën",
  },
};

// en-US is valid, but "en" only too
// Therefore we add the language without the country code too
// To prevent error for stuff like en-GB, we do it manually
translations["en"] = translations["en-US"];
translations["pt"] = translations["pt-BR"];
translations["de"] = translations["de-DE"];
translations["fr"] = translations["fr-FR"];
translations["id"] = translations["id-ID"];
translations["el"] = translations["el-GR"];
translations["ja"] = translations["ja-JP"];
translations["sq"] = translations["sq_AL"];