<?php 



?>



<!DOCTYPE html>
<html>
<head>
	<title>TesterAPI</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href=https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css>
	<script src=https://code.jquery.com/jquery-3.3.1.slim.min.js></script>
	<script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js></script>
	<script src=https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="meteoAPI.js"></script>
    <script src="aviationAPI.js"></script>
    <script src="ipAPI.js"></script>
    <script src="githubAPI.js"></script>

</head>
<body>

    <div class="p-3">
        <h1>Open Weather Map</h1>
        <div>OpenWeatherMap est un service en ligne, qui fournit des données météorologiques mondiales via API, y compris des données météorologiques actuelles, des prévisions, des prévisions actuelles et des données météorologiques historiques pour n'importe quel emplacement géographique.</div>
    </div>

    <div class="p-3 bg-info">
        <input id="queryLoc" type="text" value="" placeholder="Ecrire un nom de ville">
	    <input class="bg-dark text-white" type="button" name="callAPI_Localisation" value="LOCALISER" onclick="getLocation()"/>
        <div id="zone_localisation">// Location Placeholder //</div>
    </div>

    <br/>

    <div class="p-3 bg-info">
        <input id="queryMeteo" type="text" value="" placeholder="Ecrire un nom de ville">
        <input class="bg-dark text-white" id="btnMeteo" type="button" name="callAPI_Meteo" value="METEO" onclick="getMeteo()"/>
        <div id="zone_meteo">// Meteo Placeholder //</div>
    </div>

    <div class="p-3">
        <h1>AviationStack</h1>
        <div>L'API aviationstack a été conçue pour fournir des données précises sur les vols mondiaux à la fois en temps réel et pour les vols historiques.</div>
        <div>L'API ne fournit que 100 réponses par requêtes.</div>
    </div>

    <div class="p-3 bg-info">
        <input id="queryAirportLoc" type="text" value="" placeholder="Ecrire le nom d'un pays">
        <input class="bg-dark text-white" type="button" name="callAPI_AirportLoc" value="CHERCHER AEROPORTS" onclick="getAirportLoc()"/>
        <div id="zone_airportLoc">// Airports Placeholder //</div>
    </div>

    <br/>

    <div class="p-3 bg-info">
        <input class="w-25" id="queryAviaRealTime" type="text" value="" placeholder="Ecrire un nom d'aéroport de départ">
        <input class="bg-dark text-white" type="button" name="callAPI_AviaRealTime" value="CHERCHER TRAJETS" onclick="getAviaRealTime()"/>
        <div id="zone_aviaRealTime">// Real Time Travels Placeholder //</div>
    </div>

    <br/>

    <div class="p-3 bg-info">
        <label for="numberResultsAvia">Choisir le nombre de résultats à afficher :</label>
        <select name="numberResultsAvia" id="numberResultsAvia">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>

        <input class="bg-dark text-white" type="button" name="callAPI_airlines" value="CHERCHER COMPAGNIES AERIENNES" onclick="getAirlines()"/>
        <div id="zone_airlines">// Airlines Placeholder //</div>
    </div>

    <div class="p-3">
        <h1>IPStack</h1>
        <div>IpStack est une API professionnelle performante. Très souvent, l'outil est utilisé par les entreprises. Il permet de géolocaliser les visiteurs potentiels et les prospects d'une boutique en ligne ou d'un site vitrine.</div>
        <div>L'API ne fournit que 100 réponses par requêtes.</div>
    </div>

    <div class="p-3 bg-info">
        <input class="w-25" id="queryIpInfo" type="text" value="" placeholder="Ecrire une adresse IP xxx.xxx.xxx.xxx">
        <input class="bg-dark text-white" type="button" name="callAPI_ipInfo" value="INFORMATIONS IP" onclick="getIpInfo()"/>
        <div id="zone_ipInfo">// Ip Info Placeholder //</div>
    </div>

    <br/>

    <div class="p-3 bg-info">
        <input class="bg-dark text-white" type="button" name="callAPI_myIpInfo" value="INFORMATIONS MON IP" onclick="getMyIpInfo()"/>
        <div id="zone_myIpInfo">// My Ip Info Placeholder //</div>
    </div>

    <div class="p-3">
        <h1>Github API</h1>
        <div>L'API de github permet plusieurs opérations et service en lien avec Github, comme par exemple créer des repositories ou alors prendre des informations sur un utilisateur.</div>
    </div>

    <div class="p-3 bg-info">
        <input class="w-25" id="queryUserGithub" type="text" value="" placeholder="Ecrire le pseudo d'un utilisateur Github">
        <input class="bg-dark text-white" type="button" name="callAPI_userGithub" value="CHERCHER INFO" onclick="getUserGithub()"/>
        <div id="zone_userGithub">// User Info Placeholder //</div>
    </div>

	<!-- CARD FOOTER : FOOTER-->
	<!-- Informations générales -->
	<div class="card-fluid pt-4">
  		<div class="card-header bg-secondary text-white">
    		Prob Bastien, bastienprob@gmail.com
  		</div>
  		<div class="card-body bg-dark text-white">
    		<h5 class="card-title">Test de différentes APIs</h5>
    		<p class="card-text">Exercices et tests visant à apprendre l'implémentation de plusieurs APIs sur un site web</p>
  		</div>
	</div>

</body>
</html>