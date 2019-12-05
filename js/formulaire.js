var clicConnex=0;
var clicInscrip=0;
var nom="";
var prenom="";
var pseudo="";
var mail="";
var mdp1="";
var mdp2="";
  function choixConnexion(choix)
	{ 	
		if(choix=="connexion")
		{	
	
			   clicConnex=   clicConnex+1;
			
			if(   clicConnex==1){
				var connex=	'<form method="get" action="compte.php"> <div>'+
							'Pseudo </br> <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo"></br>'+
							'Mot de passe <input type="password" name="mdp"> <br></br>'+
							'<input type="submit" value="Connexion" name="choix">'+
							'</div> </form>'
				document.getElementById('formulaireConnexion').innerHTML= connex;     //document pour indiquer que le fichier HTML presente
																					//getElementById pour recuperer le contenue html par ID
																				   //innerHTML pour modifier dans html
				   clicConnex=-1;
			}
			
			if(   clicConnex==0)
			{
				document.getElementById('formulaireConnexion').innerHTML= ""; 
			}	
		}	else {  clicConnex=0;}
		
		
		if(choix=="inscription")
		{
			 clicInscrip=  clicInscrip+1;
			
			if(  clicInscrip==1){
				var inscrip='<form method="get" action="compte.php" onSubmit="return valider()" > <div id="inscription" >'+									// + pour faire le concatenation 
							'Nom </br> <input type="text" id="nom" name="nom" ></br>'+
							'Prenom </br> <input type="text" id="prenom" name="prenom"></br>'+
							'Pseudo </br> <input type="text" id="pseudo" name="pseudo"></br>'+
							'E-mail </br> <input type="text" id="mail" name="mail"></br>'+
							'Mot de passe <input type="password" id="mdp1" name="mdp1" value="" onkeyup="verifierMDP()" > </br>'+
							'<em id="lettres">6 lettres,</em> <em id="maj">1 majuscule,</em> <em id="chiffres"> 3 chiffres </em></br>'+
							'Confirmez Mot de passe <input type="password" id="mdp2" name="mdp2" value="" onkeyup="comparerMDP()"> <br></br>'+
							'<input id="submit" type="submit" value="Inscription" name="choix" onclick="verifierChamps()">'+
							'</div> </form>'
				document.getElementById('formulaireConnexion').innerHTML= inscrip;
				  clicInscrip=-1;
			}
			
			if(  clicInscrip==0){
				document.getElementById('formulaireConnexion').innerHTML= "";
			}
			
		} 	else {  clicInscrip=0;}	
			
  } 
  
  
	function lire(identifiant) {
		var champs = document.getElementById(identifiant).value;
		return champs;
	}

	  function comparerMDP() 
	{
	     mdp1 = lire("mdp1");
	     mdp2 = lire("mdp2");
		
		if (mdp1 !== mdp2)
		{
			document.getElementById("mdp2").style.backgroundColor = "red";
		}
		else{
			document.getElementById("mdp2").style.backgroundColor="green";
		}

	}
	
	function verifierMDP()
	{
			mdp1 = lire("mdp1");
		var res ="";										//definit que la var res est vide. si on fait pas ca par defaut elle contient le valeur "undefined" 
		var nbChiffres=0;
		var nbMaj=0;
		var nbMin=0;
		for(i=0; i<mdp1.length; i++)
			{
				res+= mdp1.charAt(i);	
			}
			console.log(res);
			
		for(i=0; i<mdp1.length; i++)
			{
				var mdp=res.charAt(i);
	
				if(mdp>="0" && mdp<="9")   // Pour compter les chiffres
					{
						nbChiffres++ ;
					}
				//Pour compter les majuscules
				nbMaj=res.length - res.replace(/[A-Z]/g, '').length;   // replace(/[A-Z]/g, '') permet de remplacer les lettres A à Z par vide '' càd les lettres majuscules sont supprimées de la chaine de caractères. 
																		// Mtn dans la var nbMaj y a pas des lettres majuscules.
																		// la taille de la mdp avec les lettres majuscules - la taille de la mdp sans les lettres majuscules	
			
				//Pour compter les minuscules
				nbMin=res.length-res.replace(/[a-z]/g,'').length;
			}
			
			if(nbChiffres>=3) {document.getElementById("chiffres").style.color="green";} else {document.getElementById("chiffres").style.color="black";}
			if(nbMaj>=1) {document.getElementById("maj").style.color="green";} else {document.getElementById("maj").style.color="black";}
			if(nbMin+nbMaj>=6) {document.getElementById("lettres").style.color="green";} else {document.getElementById("lettres").style.color="black";}
			if(nbChiffres<3 || nbMaj<1 || nbMin+nbMaj<6) 
				{
					document.getElementById("submit").disabled = true;
				} 
			else{document.getElementById("submit").disabled = false;}
		

	}			
	/*	console.log('Chiffres ='+nbChiffres);   //console.log pour afficher dans le console de la navigateur 
		console.log('Majuscules='+nbMaj);
		console.log('Minuscules='+nbMin);
		console.log('Mot de passe ='+res);				 
		console.log('Nombre de caractères ='+res.length)			 
	
	*/
		
	function valider(){	
		 nom = lire("nom");
		 prenom = lire("prenom");
		 pseudo = lire("pseudo");
		 mail = lire("mail");
	     
		
		var point=mail.indexOf(".") ;     // indexOf permet de récuperer le position de caractère qu'on cherche (ici c'est le ".") dans un chaine de caractère 
		var arobase=mail.indexOf("@") ;
		if(mdp1=="" || mdp1 !==mdp2 || nom=="" || prenom=="" || pseudo=="" || mail=="" || mdp1=="" || mdp2=="" ||arobase<3 || point<=arobase+3 || point+2>=mail.length)
		{ 
		return false;} 
		else{ return true;}
	
  }
  

  
  
  function verifierChamps() {
		nom = lire("nom");
		prenom = lire("prenom");
		pseudo = lire("pseudo");
		mail = lire("mail");
		mdp1=lire("mdp1");
		mdp2=lire("mdp2");
		var point=mail.indexOf(".") ;     
		var arobase=mail.indexOf("@") ;
	  if(nom=="") {document.getElementById("nom").style.backgroundColor="red";} else {document.getElementById("nom").style.backgroundColor="green";}
	  if(prenom=="") {document.getElementById("prenom").style.backgroundColor="red";} else {document.getElementById("prenom").style.backgroundColor="green";}
	  if(pseudo=="") {document.getElementById("pseudo").style.backgroundColor="red";} else {document.getElementById("pseudo").style.backgroundColor="green";}
	  if(arobase<3 || point<=arobase+3 || point+2>=mail.length) {document.getElementById("mail").style.backgroundColor="red";} else {document.getElementById("mail").style.backgroundColor="green";}
	  if(mdp1=="") {document.getElementById("mdp1").style.backgroundColor="red";} else {document.getElementById("mdp1").style.backgroundColor="green";}
	  if(mdp2=="") {document.getElementById("mdp2").style.backgroundColor="red";} else if(mdp1==mdp2) {document.getElementById("mdp2").style.backgroundColor="green";}
  }
	