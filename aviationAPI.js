
// On affiche les résultats.
// Affichage sur l'index des informations : trajets actuels en départ de l'aéroport spécifié.
var callBackGetAviaRealTime = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data.data);

	// On prend la valeur de l'utilisateur, ici, le nom de l'aéroport
	var element = document.getElementById("queryAviaRealTime");
	var airport = element.value;

	// On remplit un tableau temporaire avec les données qui nous intéresse
	var tempArray = new Array();
	var count = 0;
	for (var i = data.data.length - 1; i >= 0; i--) 
	{
		if(data.data[i].departure.airport == airport) 
		{ 
			tempArray.push(data.data[i]);
			count++;
		}
	}

	// Affichage des éléments
	var element = document.getElementById("zone_aviaRealTime");
	var response_string = count + " vol(s) ont(a) été trouvé(s) : <br/>";
	for (var i = tempArray.length - 1; i >= 0; i--) 
	{
		response_string += "Le vol numéro <strong>" + tempArray[i].flight.number + "</strong> jusqu'à l'aéroport <strong>" + tempArray[i].arrival.airport + "</strong> dans la zone <strong>" + tempArray[i].arrival.timezone + "</strong> de la compagnie aérienne <strong>" + tempArray[i].airline.name + "</strong>. <br/>";
	}
	element.innerHTML = response_string;
}


// Fonction appelée depuis l'index. 
// Cherche sur l'API les trajets en départance de l'aéroport spéficié.
function getAviaRealTime() {

	// On appelle la requête
	var url = "http://api.aviationstack.com/v1/flights?access_key=a665724dbc8086dc3881e7433cfe937f";

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetAviaRealTime).done(function() {
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
// Affichage sur l'index des informations : aéroports du pays spécifié.
var callBackGetAirportLoc = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data.data);

	// On prend la valeur de l'utilisateur, ici, le nom du pays
	var element = document.getElementById("queryAirportLoc");
	var country = element.value;

	// On remplit un tableau temporaire avec les données qui nous intéresse
	var tempArray = new Array();
	var count = 0;
	for (var i = data.data.length - 1; i >= 0; i--) 
	{
		if(data.data[i].country_name == country) 
		{ 
			tempArray.push(data.data[i]);
			count++;
		}
	}

	// Affichage des éléments
	var element = document.getElementById("zone_airportLoc");
	var response_string = count + " aéroport(s) ont(a) été trouvé(s) : <br/>";
	for (var i = tempArray.length - 1; i >= 0; i--) 
	{
		response_string += "L'aéroport <strong>" + tempArray[i].airport_name + "</strong> en <strong>" + tempArray[i].timezone + "</strong> de LATITUDE <strong>" + tempArray[i].latitude + "</strong> et de LONGITUDE <strong>" + tempArray[i].longitude + "</strong>. <br/>";
	}
	element.innerHTML = response_string;
}


// Fonction appelée depuis l'index. 
// Cherche sur l'API les aéroports du pays spécifié.
function getAirportLoc() {

	// On appelle la requête
	var url = "http://api.aviationstack.com/v1/airports?access_key=a665724dbc8086dc3881e7433cfe937f";

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetAirportLoc).done(function() {
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
// Affichage sur l'index des informations : compagnies aériennes
var callBackGetAirlines = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data.data);

	// On prend la valeur de l'utilisateur, ici, le nom du pays
	var element = document.getElementById("numberResultsAvia");
	var limit = element.value;

	// On remplit un tableau temporaire avec les données qui nous intéresse
	var tempArray = new Array();
	for (var i = 0; i <= limit; i++) 
	{
		tempArray.push(data.data[i]);
	}

	// Affichage des éléments
	var element = document.getElementById("zone_airlines");
	var response_string = "";
	for (var i = tempArray.length - 1; i > 0; i--) 
	{
		response_string += Math.abs(i - limit) + "/ La compagnie aérienne <strong>" + tempArray[i].airline_name + "</strong> basée en <strong>" + tempArray[i].country_name + "</strong> fondée en  <strong>" + tempArray[i].date_founded + "</strong> avec un nombre d'avions égal à <strong>" + tempArray[i].fleet_size + "</strong>. <br/>";
	}
	element.innerHTML = response_string;
}


// Fonction appelée depuis l'index. 
// Cherche sur l'API les compagnies aériennes.
function getAirlines() {

	// On appelle la requête
	var url = "http://api.aviationstack.com/v1/airlines?access_key=a665724dbc8086dc3881e7433cfe937f";

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetAirlines).done(function() {
		alert("Success !");
	})
	.fail(function() {
		alert("Error !");
	})
	.always(function() {
		console.log("Finished.");
	})
}