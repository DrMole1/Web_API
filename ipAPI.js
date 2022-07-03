
// On affiche les résultats.
// Affichage sur l'index des informations liées à l'ip
var callBackGetIpInfo = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data.data);

	// Affichage des éléments
	var element = document.getElementById("zone_ipInfo");
	var response_string = "L'ip spécifiée n'existe pas !";

	if(data.continent_name != null)
	{
		response_string = "L'ip spécifiée est de type : <strong>" + data.type + "</strong>. </br>";
		response_string += "Elle provient de <strong>" + data.continent_name + "</strong>, <strong>" + data.country_name + "</strong>, <strong>" + data.region_name + "</strong>, <strong>" + data.city + "</strong>. <br/>";
		response_string += "Elle a pour latitude <strong>" + data.latitude + "</strong> et pour longitude <strong>" + data.longitude + "</strong>.";
	}
	
	element.innerHTML = response_string;
}


// Fonction appelée depuis l'index. 
// Cherche des informations sur l'ip spécifiée.
function getIpInfo() {

	// On prend la valeur de l'utilisateur, ici, l'ip spécifié
	var element = document.getElementById("queryIpInfo");
	var ip = element.value;

	// On appelle la requête
	var url = "http://api.ipstack.com/" + ip + "?access_key=eeaefcb013ae015c35e0058c941440a0&format=1";

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetIpInfo).done(function() {
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
// Affichage sur l'index des informations liées à mon ip
var callBackGetMyIpInfo = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data.data);

	// Affichage des éléments
	var element = document.getElementById("zone_myIpInfo");
	var response_string = "L'ip spécifiée n'existe pas !";

	if(data.continent_name != null)
	{
		response_string = "L'ip <strong>" + data.ip + "</strong> est de type : <strong>" + data.type + "</strong>. </br>";
		response_string += "Elle provient de <strong>" + data.continent_name + "</strong>, <strong>" + data.country_name + "</strong>, <strong>" + data.region_name + "</strong>, <strong>" + data.city + "</strong>. <br/>";
		response_string += "Elle a pour latitude <strong>" + data.latitude + "</strong> et pour longitude <strong>" + data.longitude + "</strong>.";
	}
	
	element.innerHTML = response_string;
}


// Fonction appelée depuis l'index. 
// Cherche des informations sur mon ip.
function getMyIpInfo() {

	// On appelle la requête
	var url = "http://api.ipstack.com/check?access_key=eeaefcb013ae015c35e0058c941440a0&format=1";

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetMyIpInfo).done(function() {
		alert("Success !");
	})
	.fail(function() {
		alert("Error !");
	})
	.always(function() {
		console.log("Finished.");
	})
}
