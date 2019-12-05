
function dessinerRaquette()
{
	//Dessiner un rectangle
	var canvas= document.getElementById('canvasGlobal');
	var context= canvas.getContext('2d');
	context.beginPath();	// début de dessin
	context.rect(positionXRaquette,positionYRaquette,longueurRaquette,largeurRaquette); //cordonnées
	context.fillStyle=couleurRaquette;
	context.fill();
	context.stroke();   // dessiner
}

function animerRaquette()
 {	  limiteGauche=false;
	  limiteDroite=false;
	var canvas= document.getElementById('canvasGlobal');
	var context= canvas.getContext('2d');
	
	if(positionXRaquette>= terrainLongueur- longueurRaquette)
		{
		 //positionXRaquette= terrainLongueur- longueurRaquette;
		limiteDroite=true;
		
		}
	if(positionXRaquette<=0) 
	{
		//positionXRaquette=0;
		limiteGauche=true;
	
	} 

 }
 
function testerCollisionBalleRaquette ()
  {
		if(ballePositionY >= terrainLargeur - tailleBalle)
		{
			clearTimeout(jeu);
			var vie=true; 
			debut=true;
			pauses=true;
			fin=true;
			nombreVie-=1;
			if(nombreVie<0)
			{
				var canvas= document.getElementById('canvasGlobal');
				var context= canvas.getContext('2d');
				context.clearRect(0, 0, canvas.width, canvas.height);
				context.font = "80px Comic Sans MS";
				context.fillStyle = "red";
				context.textAlign = "center";
				context.fillText("GAME OVER !!!", canvas.width/2, canvas.height/2); 
				vie=false;
				setTimeout("location.reload()",5000);
			/*		alert("GAME OVER");
				location.reload();
				initialisation();
			  */
			}	
			
			if(vie==true)
			{
				var canvas= document.getElementById('canvasGlobal');
				var context= canvas.getContext('2d');
				context.clearRect(0, 0, canvas.width, canvas.height);
				positionXRaquette =250;
				positionYRaquette =370;
				ballePositionX=terrainLongueur/2;
				ballePositionY=positionYRaquette-tailleBalle;
				initialisation();			
				debut=false;
				pause=true;
				fin=false;
				clearTimeout(jeu);
			}
		}
		else {jeu= setTimeout("animerBalle()",5);}
		
	
		//haut
	if((ballePositionX+tailleBalle > positionXRaquette   &&  ballePositionX-tailleBalle < positionXRaquette+longueurRaquette) && ( ballePositionY + tailleBalle >= positionYRaquette ))
	{
		sens2=-sens2;
	}	
		//gauche
	if(ballePositionY+tailleBalle >= positionYRaquette   &&  ballePositionY-tailleBalle <= positionYRaquette+largeurRaquette && ballePositionX+tailleBalle == positionXRaquette )
	{
		sens=-sens; 
	}	
		//droite
		if(ballePositionY+tailleBalle >= positionYRaquette   &&  ballePositionY-tailleBalle <= positionYRaquette+largeurRaquette &&ballePositionX-tailleBalle==positionXRaquette +longueurRaquette )
	{
		sens=-sens; 
	}	

  }