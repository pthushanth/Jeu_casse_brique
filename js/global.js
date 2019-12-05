

// Terrain
var terrainLongueur = 600;
var terrainLargeur = 400;

// Dans ce fichier je gère les briques par leurs coordonnées
var largeurBrique = 20;
var longueurBrique = 58;
var nbBriqueTotal = 30;
var espaceBrique = 2;
var couleurBrique = "#1affff";
var tableauPositionXBrique = new Array(80);
var tableauPositionYBrique = new Array(10);
var numeroBriqueTotal;
var numeroBrique;
var tableauScoreBrique= new Array(10);
    tableauScoreBrique.fill(1);

// Raquette
var largeurRaquette = 14;
var longueurRaquette =100;
var positionXRaquette =250;
var positionYRaquette =370;
var couleurRaquette = "blue";
var limiteGauche;
var limiteDroite;

// Balle
var tailleBalle = 7;
var ballePositionX=terrainLongueur/2;
var ballePositionY=positionYRaquette-tailleBalle; 
var couleurBalle ="green";


	//animation.js
	var touche;
	var toucheEspace;
	var debut=false;
	var pause=false;
	var jeu;
	
//balle.js
var sens=1;
var sens2=-1;
var balle;
var fin=false;

var score=0;
var nombreVie=3;
var niveau=1;

function initialisation()
{
	var canvas= document.getElementById('canvasGlobal');
	var context= canvas.getContext('2d');
	dessinerBalle();
	dessinerRaquette();
	dessinerBrique();
	afficherScore();
	afficherNombreVie();
	afficherNiveau();
}

function reinitialisation ()
{
	var canvas= document.getElementById('canvasGlobal');
	var context= canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	positionXRaquette =250;
	positionYRaquette =370;
	ballePositionX=terrainLongueur/2;
	ballePositionY=positionYRaquette-tailleBalle;
	tableauScoreBrique.fill(1);
	debut=false;
	sens=1;
	sens2=-1;
	initialisation();	
}
