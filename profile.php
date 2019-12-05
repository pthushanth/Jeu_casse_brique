<?php

$nom;
$prenom;
$pseudo;
$email;
$mdp;


	try
	{
		// On se connecte à MySQL
		$bdd = new PDO('mysql:host=localhost;dbname=cassebrique_pathmaseelan', 'root', '');
		//echo "connection BdD : OK </br>";
	}
	catch(Exception $e)
	{
		// En cas d'erreur, on affiche un message et on arrête tout
			die('Erreur : '.$e->getMessage());
	}
	
	$requete='SELECT * FROM joueurs WHERE pseudo="'.$_COOKIE['login'].'"'; 
	$reponse = $bdd->query($requete); 
	
	while($donnees = $reponse->fetch())
	{	
	/*	echo "NOM : ".$donnees['nom']."</br>";
		echo "PRENOM : ".$donnees['prenom']."</br>";
		echo "PSEUDO : ".$donnees['pseudo']."</br>";
		echo "EMAIL : ".$donnees['email']."</br>";
	*/	
	
		$nom=$donnees['nom'];
		$prenom=$donnees['prenom'];
		$pseudo=$donnees['pseudo'];
		$email=$donnees['email'];
		$mdp=$donnees['mdp'];
		
	}

	echo '</br><form method="get" action="profile.php" > 								
		<table id="profile"><tr><th>Nom</th> <td><input type="text" id="nom" name="nom" value='.$nom.'><td></tr>
				<tr><th>Prenom</th> <td> <input type="text" id="prenom" name="prenom"  value='.$prenom.'><td></tr>
				<tr><th>Pseudo</th> <td> <input type="text" id="pseudo" name="pseudo"  value='.$pseudo.'><td></tr>
				<tr><th>E-mail</th> <td> <input type="text" id="mail" name="mail" 	 value='.$email.'><td></tr>
				<tr><th colspan="2"><button id="submit" type="submit" value="MajInfo" name="choix" onclick="verifierChamps()">Mettre A Jour</button></th></tr>
		  </form> </br>
			<form method="get" action="profile.php">							
		<tr></tr><tr><th>An
		cien MDP</th><td> <input type="password" id="mdp1" name="mdp1"><td></tr>
		<tr><th>Nouveau MDP</th><td> <input type="password" id="mdp2" name="mdp2"><td></tr>
		<tr><th>Nouveau MDP </th><td> <input type="password" id="mdp3" name="mdp3"><td></tr>
		<tr><th colspan="2"><button id="submit" type="submit" value="MajMdp" name="choix">Mettre A Jour</button></th></tr></table>
		 </form>';
		 

	if(isset($_GET['choix'])&& $_GET['choix']=='MajInfo')
	{

		$nom2=$_GET['nom'];	
		$prenom2=$_GET['prenom'];
		$pseudo2=$_GET['pseudo'];
		$email2=$_GET['mail'];
		
		if($nom2!=$nom || $prenom2!=$prenom || $pseudo2!=$pseudo || $email2!=$email)
		{
			$requete='UPDATE joueurs SET nom="'.$nom2.'", prenom="'.$prenom2.'", pseudo="'.$pseudo2.'", email="'.$email2.'" WHERE pseudo="'.$_COOKIE['login'].'"';
			$reponse = $bdd->query($requete); 
			$bdd->exec($requete);
			setcookie('login',null,time()-1);
			setcookie('login',$pseudo2,time()+3600);
			header("Location:index.php?profile");
		}
	}
	
	if(isset($_GET['choix'])&& $_GET['choix']=='MajMdp')
	{	//echo '<script>alert("Choix : MDP");</script>';
		$mdpA=$_GET['mdp1'];	
		$mdpN=$_GET['mdp2'];
		$mdpN2=$_GET['mdp3'];
		$requete='UPDATE joueurs SET mdp="'.$mdpN.'" WHERE pseudo="'.$_COOKIE['login'].'"';
		if($mdpA==$mdp && $mdpA!=$mdpN && $mdpN==$mdpN2)
		{
			$reponse = $bdd->query($requete); 
			$bdd->exec($requete);
			header("Location:index.php?profile");
		}
		else {echo '<script>alert("Erreur: Ancien MDP invalide ou les 2 Nouveau MDP ne sont pas identiques");</script>';}
	}
	
?>

