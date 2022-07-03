
// On affiche les résultats.
// Affichage sur l'index des informations liées à l'utilisateur github
var callBackGetUserGithub = function(data) {

	// Informations affichées dans la console.
	console.log("Données api : ", data.data);

	// Affichage des éléments
	var element = document.getElementById("zone_userGithub");
	var response_string = "";

	response_string = "Le compte <strong>" + data.id + "</strong> de type <strong>" + data.type + "</strong> a été créé le <strong>" + data.created_at + "</strong>. <br/>";
	response_string += "Il possède <strong>" + data.public_repos + "</strong> repositories publiques, dont le dernier a été modifié le <strong>" + data.updated_at + "</strong>. <br/>";
	response_string += "<img src='" + data.avatar_url + "'>";
	
	element.innerHTML = response_string;
}


// Fonction appelée depuis l'index. 
// Cherche des informations sur le pseudo spécifié
function getUserGithub() {

	// On prend la valeur de l'utilisateur, ici, le pseudo
	var element = document.getElementById("queryUserGithub");
	var pseudo = element.value;

	// On appelle la requête
	var url = "https://api.github.com/users/" + pseudo;

	// On appelle le callback + renseignement de l'état de l'url
	$.get(url, callBackGetUserGithub).done(function() {
		alert("Success !");
	})
	.fail(function() {
		alert("Error !");
	})
	.always(function() {
		console.log("Finished.");
	})
}
