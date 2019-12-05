 <?php

	
$bdd = mysqli_connect("localhost","root","","cassebrique_pathmaseelan");
// Vérification de la connection 
if (!$bdd)
{
    die("Connection failed: " . mysqli_connect_error());
}

?>