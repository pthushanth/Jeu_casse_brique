 var finNiveau=true;
 function afficherScore()
 {
	document.getElementById('afficherScore').innerHTML= "Score : "+score; 
 }
 
 function afficherNombreVie()
 {
   document.getElementById('afficherVie').innerHTML= "Vie : "+nombreVie; 
 }
 
 function afficherNiveau()
 {
	document.getElementById('afficherNiveau').innerHTML= "Niveau : "+niveau; 
 }
 
 function terminerNiveau()
 {
	 if(score==nbBriqueTotal+scoreBrick) 
	 {
		if(niveau==1)
		{
			niveau=2;
			nbBriqueTotal=60;
			couleurBrique = "#ffff1a";
			
		}
		
		else if(niveau==2)
		{
			niveau=3;
			nbBriqueTotal=60;
			couleurBrique = "#1aff1a";
		}
		else if(niveau==3)
		{ niveau=1;
		  score=0;
		  nombreVie=3;
		  nbBriqueTotal=30;
		 clearTimeout(jeu);
		 
		 var canvas= document.getElementById('canvasGlobal');
			var context= canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.font = "80px Comic Sans MS";
			context.fillStyle = "green";
			context.textAlign = "center";
			context.fillText("YOU WON!!!", canvas.width/2, canvas.height/2); 
		
			setTimeout("reinitialisation()",3000);
		}	
		 clearTimeout(jeu);
		
		 var canvas= document.getElementById('canvasGlobal');
			var context= canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.font = "80px Comic Sans MS";
			context.fillStyle = "green";
			context.textAlign = "center";
			context.fillText("Niveau "+niveau, canvas.width/2, canvas.height/2); 
			setTimeout("reinitialisation()",3000);
			
		
	 }
 }
 
 	