<!doctype html>

<html>
 
 <head>
      <link rel="stylesheet" href="style2.css" type="text/css" />
	  <script type="text/javascript" src="js/changecolor.js"></script>
	  <script type="text/javascript" src="js/horloge.js"></script>
	  <script type="text/javascript" src="js/formulaire.js"></script>
	  <script type="text/javascript" src="js/brique.js"></script>
	  <script type="text/javascript" src="js/balle.js"></script>
	  <script type="text/javascript" src="js/raquette.js"></script>
	  <script type="text/javascript" src="js/global.js"></script>			
	  <script type="text/javascript" src="js/animation.js"></script>			
	  <script type="text/javascript" src="js/score.js"></script>			
         <meta charset="utf-8">
 </head>
 
 <body onload="clock()">
	<header>
	    <p> Bienvenue</p>
	</header>
 
	<nav>
	      <ul>
			<li> <a href="index.php?casseBrique&highscore"> Casse Brique</a> </li>
			<li> <a href="index.html"> Serpent </a> </li>
		<?php	
				if(isset($_COOKIE['login']))
				{
					echo"<li> <a href='index.php?profile'>".$_COOKIE['login']."</a> </li>";
					echo"<li> <a  href='index.php?amis'> Amis</a> </li>";
					echo"<li> <a  href='compte.php'> Déconnexion</a> </li>";
			
				}
				else
				{
					echo"<li> <a onclick="."choixConnexion('inscription');"."> Inscription </a> </li>";
					echo"<li> <a onclick="."choixConnexion('connexion');"."> Connexion</a> </li>";
				
					
				//	<li> <a onclick="choixConnexion('inscription');"> Inscription</a> </li>
				//	<li> <a onclick="choixConnexion('connexion')"> Connexion </a> </li>
				}
		?>
		  </ul>
	</nav>
 
	<aside>
	      <div id="horloge"> </div>
		  <div>
		  <?php
		  
			if(isset($_GET['highscore'])&&isset($_COOKIE['login'])) 
			{ 
				include "amis.php";  
				highscore();
				 nbConnectes();
			}
			else echo'<div id="formulaireConnexion"> </div>';
			
		  ?>
	      </div>
	</aside>
 
	<section>
	
			<?php
			
				if(isset($_GET['casseBrique'])) {echo'<canvas id="canvasGlobal" width="600px" height="400px" border="1px"></canvas>';echo '<script type="text/javascript">initialisation();</script>';}
				if(isset($_GET['profile'])) {include"profile.php"; }
			    if(isset($_GET['amis'])||isset($_GET['rechercher'])) 
				{
					echo'<div id="amis">';
					include"amis.php";
					amis();
					echo'</div>'; 
				}
			?>


	</section>
 
	<footer>

	       <img div="couleur"src="images/rouge.png" onclick="changerCouleur('#EB3030')"> 
	        <img div="couleur"src="images/bleu.png" onclick="changerCouleur('#00A2E8')"> 
	        <img div="couleur"src="images/vert.png" onclick="changerCouleur('#45C966')"> 
			<img div="couleur"src="images/jaune.png" onclick="changerCouleur('#F4EF0B')">
		    <img div="couleur"src="images/bg.jpg" onclick="changerCouleur('fondEcran')">
	
			<div id="afficherScore"> </div>
			<div id="afficherVie"> </div>
			<div id="afficherNiveau"> </div>
			
	</footer>
	
		 	<script>  
				window.onkeypress = OnKeyPressed;
			</script>
			
 </body>



</html>