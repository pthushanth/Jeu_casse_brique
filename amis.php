
<?php

include'connexionBdd.php'; 
	
function amis()
{
	include "connexionBdd.php";
	
	$requete='SELECT id_joueurs FROM joueurs WHERE pseudo="'.$_COOKIE['login'].'"'; 
	$reponse = mysqli_query($bdd,$requete);
	$donnees = mysqli_fetch_assoc($reponse);
	$idJoueurLogin= $donnees['id_joueurs'];

	echo'Rechercher un ami: <form method="get" action="index.php">
						   <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo">
						   <input type="submit" value="rechercher" name="rechercher">
						   </form>';
						   
	
	
/**********************************      LISTE DES AMIS    ******************************************/	
		
		$requete='SELECT joueurs.pseudo,score.score,amis.id_joueursAmi FROM amis LEFT JOIN joueurs ON joueurs.id_joueurs=amis.id_joueursAmi LEFT JOIN score ON score.id_joueurs=amis.id_joueursAmi WHERE amis.id_joueurs="'.$idJoueurLogin.'"';
		$reponse = mysqli_query($bdd,$requete); 
		
		if (mysqli_num_rows($reponse) > 0)  	//mysqli_num_rows () permet de compter le nombre de ligne contenues dans $reponse
		{
			echo "<table class='amis'><tr><th>Amis</th> <th>Score</th>";
			// donnees de chaque ligne
			 while($ligne = mysqli_fetch_assoc($reponse)) 
			 {
				echo '<tr><td>'.$ligne["pseudo"].'</td> <td>'.$ligne["score"].'</td> <td> <form action="amis.php" method="get"><input type="image" name="supprimer" value="'.$ligne["id_joueursAmi"].'" src="images/supprimer.png" /> </form></tr>';	
			 }
			 echo"</table>";
		} 
		else 
		{
			echo "0 resultat";
		}	
}

/****************************      RECHERCHER UN AMI      *********************************/	
	if(isset($_GET['rechercher']) && isset($_GET['pseudo']))
	{	
		$pseudo=$_GET['pseudo'];
		$requete='SELECT joueurs.id_joueurs,joueurs.pseudo,score.score FROM joueurs LEFT JOIN score ON joueurs.id_joueurs=score.id_joueurs WHERE joueurs.pseudo="'.$pseudo.'";'; 
		$reponse = mysqli_query($bdd,$requete); 	
		
		if (mysqli_num_rows($reponse)> 0)  
		{		
			$donnees = mysqli_fetch_assoc($reponse);
			$pseudo= $donnees['pseudo'];
			$score= $donnees['score'];
			$idJoueur= $donnees['id_joueurs'];
			echo'<div id="amis"><table> <tr> <th>Pseudo</th> <th>Score</th> <th>Ajouter</th> </tr>
				 <tr> <td>'.$pseudo.'</td> <td>'.$score.'</td> <td> <form action="amis.php" method="get"><input type="image" name="ajouter" value="'.$idJoueur.'" src="images/ajouter.png"/> </form></td> </tr>
			</table></div>';
		} 
	}
	
	
/****************************      AJOUTER UN AMI           *********************************/	
	if(isset($_GET['ajouter']))
	{	$idAmi=$_GET['ajouter'];
		$requete='SELECT id_joueurs FROM joueurs WHERE pseudo="'.$_COOKIE['login'].'"'; 
		$reponse = mysqli_query($bdd,$requete);
		$donnees = mysqli_fetch_assoc($reponse);
		$idJoueurLogin= $donnees['id_joueurs'];

		$requete2='SELECT * FROM amis WHERE id_joueursAmi="'.$idAmi.'" AND id_joueurs="'.$idJoueurLogin.'"'; 
		$reponse2 = mysqli_query($bdd,$requete2);
		if (mysqli_num_rows($reponse2) > 0)  
		{
			echo "ERREUR: le joueur est déjà dans la liste des amis ";
		}
		else
		{
			if(mysqli_query($bdd,$requete2))
			{ 
				$requete3='INSERT INTO amis(id_joueurs,id_joueursAmi,id_jeu) VALUES("'.$idJoueurLogin.'","'.$idAmi.'","1")';
				if (mysqli_query($bdd, $requete3)) 
				{
					header("Location:index.php?amis");
				} 
				else 
				{
					echo "Error: " . $requete . "<br>" . mysqli_error($bdd);
				}
			}
		}
	}
/****************************      SUPPRIMER UN AMI *********************************/	
	if(isset($_GET['supprimer']))
	{	
		$idAmi=$_GET['supprimer'];
		$requete2='DELETE FROM amis WHERE id_joueursAmi="'.$idAmi.'"';
		if (mysqli_query($bdd, $requete2)) 
		{
			header("Location:index.php?amis");
		} 
		else 
		{
			echo "Error: " . $requete2 . "<br>" . mysqli_error($bdd);
		}
	}	


/********************************    HIGH SCORE   ***********************************/

function highscore()
{
	include "connexionBdd.php";
	
	if(isset($_GET['highscore']))
	{
		$requete='SELECT joueurs.pseudo,score.score FROM score LEFT JOIN joueurs ON score.id_joueurs=joueurs.id_joueurs  ORDER BY score.score DESC LIMIT 5' ;
		$reponse=mysqli_query($bdd,$requete);
		
		if (mysqli_num_rows($reponse) > 0)
			{	$num=0;
				echo "<h3>HIGH SCORE : </h3></br>";
				echo '<table id="highscore" ><tr><th> N° </th> <th>Pseudo</th> <th>Score</th>';
				while($ligne = mysqli_fetch_assoc($reponse)) 
				{	$num=$num+1;
					echo '<tr><td>'.$num.'</td><td>'.$ligne["pseudo"].'</td> <td>'.$ligne["score"].'</tr>';
				}
				echo"</table>";
			} 
			else 
			{
				echo "0 resultat";
			}	
	}
}


/********************************************              NOMBRE DE CONNECTES       **************************************/
function nbConnectes()
{
	include "connexionBdd.php";
	$requete='SELECT COUNT(*) AS nbConnectes FROM connectes' ;
	$reponse=mysqli_query($bdd,$requete);
	$ligne = mysqli_fetch_assoc($reponse);
	echo "<div id='nbConnectes'> Nombre de connectés : ".$ligne['nbConnectes']."</div>";
}

?>


<?php
	


//SELECT  amis.id_amis,score.score FROM amis LEFT JOIN score ON score.id_joueurs=amis.id_amis WHERE amis.id_joueurs="2";

//SELECT  amis.id_joueursAmi,score.score,joueurs.pseudo FROM amis LEFT JOIN joueurs ON joueurs.id_joueurs=amis.id_joueursAmi LEFT JOIN score ON score.id_joueurs=amis.id_joueursAmi WHERE amis.id_joueurs="2";

//SELECT joueurs.pseudo,score.score FROM amis LEFT JOIN joueurs ON joueurs.id_joueurs=amis.id_joueursAmi LEFT JOIN score ON score.id_joueurs=amis.id_joueursAmi WHERE amis.id_joueurs="2";
?>
				
 