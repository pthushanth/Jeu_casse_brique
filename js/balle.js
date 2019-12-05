 

 function dessinerBalle()
 {
	  var canvas= document.getElementById('canvasGlobal');
	  var context= canvas.getContext('2d');
	 //Dessiner un cercle
			context.beginPath();
			context.arc(ballePositionX,ballePositionY,tailleBalle,0,2*Math.PI,false);
			context.fillStyle=couleurBalle;    //choisir la couleur
			context.fill();				   // colorier la couleur choisie
			context.stroke();
 }
 
 function animerBalle()
 {			
			var canvas= document.getElementById('canvasGlobal');
			var context= canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);
			if(ballePositionX>=terrainLongueur- tailleBalle) sens=-1;
			if(ballePositionX<=tailleBalle) sens=1;
			ballePositionX+=1*sens;
			
		//	context.clearRect(ballePositionX-tailleBalle-1,ballePositionY-tailleBalle-1,tailleBalle*2+2,tailleBalle*2+2);
			if(ballePositionY>= terrainLargeur - tailleBalle) sens2=-1;
			if(ballePositionY<=tailleBalle) sens2=1;
			ballePositionY+=1*sens2;
			
			initialisation();
			testerCollisionBalleRaquette();
			testerColisionBalleBrique();
			terminerNiveau();
		

 }