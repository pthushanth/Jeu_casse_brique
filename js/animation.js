

	
function principale()
{
	var canvas= document.getElementById('canvasGlobal');
	var context= canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	animerBalle();
	setInterval("animerRaquette()",10);
	terminerNiveau();
	
//	dessinerBrique();
	
	
}

function OnKeyPressed(event)
{
 toucheEspace = event.charCode;

   if(toucheEspace=="32"&& debut==false)
   {	window.onkeydown = OnKeyDown ;
		OnKeyDown(event);
	    jeu=setTimeout("principale()",10);
		debut=true;	
	    pause=false;

   }
     
}
   
 function OnKeyDown(event)
 { 	 touche = event.keyCode;
	
		if(touche=="37" && pause==false && limiteGauche==false )
		{	
				positionXRaquette+=-10;
		}
		
		if(touche=="39" &&pause==false && limiteDroite==false)
		{	
				positionXRaquette+=10;
		}
	
	
   if(touche=="27"&& pause==false && debut==true && fin==false )
   {   	
		clearTimeout(jeu);
		pause=true;
		debut=false;
   }
 
}


/*
   if (move ==true && debut==false)
   {
		balleX=Xraquetee+(Xraquette/2);
   }

*/