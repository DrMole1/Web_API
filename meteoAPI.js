
// On affiche les résultats.
// Affichage sur l'index des informations : localisation de la ville.
var callBackGetLocation = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data);

	// Affichage des éléments
	var element = document.getElementById("zone_localisation");
	element.innerHTML = "La ville " + data.name + " située en " + data.sys.country + " a pour coordonnées LAT : " + data.coord.lat + " LONG : " + data.coord.lon;
}


// Fonction appelée depuis l'index. 
// Cherche sur l'API la localisation de la ville spécifiée.
function getLocation() {

	// On prend la valeur de l'utilisateur, ici, le nom de la ville
	var element = document.getElementById("queryLoc");
	var country = element.value;

	// On intègre le nom de la ville dans l'url
	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=101fda60639e7539edfdae6d66a415fb";

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetLocation).done(function() {
		alert("Success !");
	})
	.fail(function() {
		alert("Error !");
	})
	.always(function() {
		console.log("Finished.");
	})
}


// On affiche les résultats.
// Affichage sur l'index des informations : meteo de la ville.
var callBackGetMeteo = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data);

	// Affichage des éléments
	var element = document.getElementById("zone_meteo");

	// Calcul de la température : Kelvin -> Celsius
	var actual_temp = (data.main.temp - 273.15).toFixed(2);
	var feels_temps = (data.main.feels_like - 273.15).toFixed(2);

	// Concaténation de la chaine avec les informations
	var meteo_string = "A " + data.name + ", il fait " + actual_temp + " C°. Température ressentie : " + feels_temps + " C°. <br/>";
	meteo_string += "Temps : " + data.weather[0].main + ". Description : " + data.weather[0].description + ". <br/>";
	meteo_string += "Taux d'humidité : " + data.main.humidity + ". Pression : " + data.main.pressure + " hPa. <br/>";
	meteo_string += "Vitesse du vent : " + data.wind.speed + " m/s. Direction du vent : " + data.wind.deg + " degrés.";

	element.innerHTML = meteo_string;
}


// Fonction appelée depuis l'index. 
// Cherche sur l'API la météo de la ville spécifiée.
function getMeteo() {

	// On prend la valeur de l'utilisateur, ici, le nom de la ville
	var element = document.getElementById("queryMeteo");
	var country = element.value;

	// On intègre le nom de la ville dans l'url
	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=101fda60639e7539edfdae6d66a415fb";

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetMeteo).done(function() {
		alert("Success !");
	})
	.fail(function() {
		alert("Error !");
	})
	.always(function() {
		console.log("Finished.");
	})
}