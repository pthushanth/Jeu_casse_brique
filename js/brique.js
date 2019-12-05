var scoreBrick=0;
function dessinerBrique()
{
		if(niveau==1) {
	// boucle pour stocker les cordonnées de brique
	for (i=0;i<nbBriqueTotal;i++)
	{
		scoreBrick=0;
		
		if(i<10) {tableauPositionYBrique[i]=0 ;tableauPositionXBrique[i]=(longueurBrique+espaceBrique)*i ;	}
		if(i<20&&i>9){tableauPositionYBrique[i]=30 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-10]; }
		if(i<30 && i>19){tableauPositionYBrique[i]=60 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-20];}
	
	/* console.log("Y ="+tableauPositionYBrique[i]);
		console.log("X ="+tableauPositionXBrique[i]);console.log("i ="+i);   */
	}
		}
		
		
		if(niveau==2) 
		{
			scoreBrick=30;
		for (i=0;i<nbBriqueTotal;i++)
		{
			if(i<10) {tableauPositionYBrique[i]=0 ;tableauPositionXBrique[i]=(longueurBrique+espaceBrique)*i ;	}
			if(i<20&&i>9){tableauPositionYBrique[i]=20 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-10]; }
			if(i<30 && i>19){tableauPositionYBrique[i]=40 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-20];}
			if(i<40 && i>29){tableauPositionYBrique[i]=60 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-30];}
			if(i<50 && i>39){tableauPositionYBrique[i]=80 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-40];}
			if(i<60 && i>49){tableauPositionYBrique[i]=100 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-50];}
		
	     }
		}
		
		if(niveau==3) 
		{
		scoreBrick=90;
		for (i=0;i<nbBriqueTotal;i++)
		{
			if(i<10) {tableauPositionYBrique[i]=0 ;tableauPositionXBrique[i]=(longueurBrique+espaceBrique)*i ;	}
			if(i<20&&i>9){tableauPositionYBrique[i]=20 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-10]; }
			if(i<30 && i>19){tableauPositionYBrique[i]=40 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-20];}
			if(i<40 && i>29){tableauPositionYBrique[i]=60 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-30];}
			if(i<50 && i>39){tableauPositionYBrique[i]=80 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-40];}
			if(i<60 && i>49){tableauPositionYBrique[i]=100 ;tableauPositionXBrique[i]=tableauPositionXBrique[i-50];}
			
	     }
		}
		
		
	
	// boucle pour créer des briques
	for ( i=0;i<nbBriqueTotal;i++)
	{   var canvas= document.getElementById('canvasGlobal');
		var context= canvas.getContext('2d');
		if(tableauScoreBrique[i]!=0)
		{	context.beginPath();	
			context.rect(tableauPositionXBrique[i],tableauPositionYBrique[i],longueurBrique,largeurBrique); 
			context.fillStyle=couleurBrique;
			context.fill();
			context.stroke();  
		} 
	}
} 

function testerColisionBalleBrique()
{	
	for (i=0; i < nbBriqueTotal; i++)
	{	
		if ((ballePositionY - tailleBalle == tableauPositionYBrique[i]+largeurBrique ||ballePositionY + tailleBalle == tableauPositionYBrique[i]) && ballePositionX >= tableauPositionXBrique[i] && ballePositionX <= tableauPositionXBrique[i]+longueurBrique )
		{
			sens2=-sens2;
		if(tableauScoreBrique[i]==0)
		{
			sens2=-sens2;
		}	
		else
		{	tableauScoreBrique[i]=0;
			score+=1
			
		}
		
		}	
		
		if(ballePositionY+tailleBalle>=tableauPositionYBrique[i] && ballePositionY-tailleBalle<= tableauPositionYBrique[i]+largeurBrique && ballePositionX == tableauPositionXBrique[i])
			{
			sens2=-sens2;
		if(tableauScoreBrique[i]==0)
		{
			sens2=-sens2;
		}	
		else
		{	tableauScoreBrique[i]=0;
			score+=1
			
		}
		
		}
		
		
		if(ballePositionY+tailleBalle>=tableauPositionYBrique[i] && ballePositionY-tailleBalle<= tableauPositionYBrique[i]+largeurBrique && ballePositionX == tableauPositionXBrique[i]+longueurBrique)
			{
			sens2=-sens2;
		if(tableauScoreBrique[i]==0)
		{
			sens2=-sens2;
		}	
		else
		{	tableauScoreBrique[i]=0;
			score+=1
			
		}
		
		}
	}
	
}