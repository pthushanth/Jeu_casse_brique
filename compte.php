 <?php
 /*
 
function connexion()
{
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
}

*/

if($_GET['choix']=="Connexion")
{
	
	$bdd = mysqli_connect("localhost","root","","cassebrique_pathmaseelan");
	// Vérification de la connection 
	if (!$bdd) 
	{	
		die("Connection failed: " . mysqli_connect_error());
	}
	
	$pseudo=$_GET['pseudo'];
	$mdp=$_GET['mdp'];
	
	
	$requete='SELECT * FROM joueurs WHERE pseudo="'.$pseudo.'"AND mdp="'.$mdp.'"';  //requete SQL
	echo $requete;
	$reponse =  mysqli_query($bdd,$requete); // envoie de la requete puis recuperer et stocker la réponse dans $reponse
	
	if (mysqli_num_rows($reponse) > 0)  	//mysqli_num_rows () permet de compter le nombre de ligne contenues dans $reponse
	{
			$donnees = mysqli_fetch_assoc($reponse);
			setcookie('login',$donnees['pseudo'],time()+3600);
			header("Location:index.php");
	}
	else echo "Connexion : erreur";
	


}

if(empty($_GET['choix'])&& isset($_COOKIE['login']))
{	
	setcookie('login',null,time()-1);     //pour supprimer le cookie
	header("Location:index.php");
}


if($_GET['choix']=="Inscription")
{
	
	$bdd = mysqli_connect("localhost","root","","cassebrique_pathmaseelan");
	if (!$bdd) 
	{	
		die("Connection failed: " . mysqli_connect_error());
	}
	
	$nom=$_GET['nom'];
	$prenom=$_GET['prenom'];
	$pseudo=$_GET['pseudo'];
	$mail=$_GET['mail'];
	$mdp=$_GET['mdp1'];
	$requete='SELECT pseudo FROM joueurs WHERE pseudo="'.$pseudo.'"';
	
	$requete2='INSERT INTO joueurs(nom, prenom, pseudo, email, mdp) VALUES ("'.$nom.'","'.$prenom.'","'.$pseudo.'","'.$mail.'","'.$mdp.'")';  //requete SQL

	$reponse =  mysqli_query($bdd,$requete);
	if (mysqli_num_rows($reponse) > 0)  
	{
		echo "ERREUR: le Pseudo est déjà pris ";
	}
	else{
		if(mysqli_query($bdd,$requete2))
		{ 
			setcookie('login',$pseudo,time()+3600);
			header("Location:index.php");
		}
	}
	
	
}

?>
