

function changerCouleur(couleur) {
	if(couleur!=='fondEcran')
	{
	document.body.style.backgroundColor = couleur;
	document.body.style.backgroundImage = "none";
	}
	else { document.body.style.backgroundImage ="url(images/background.jpg)";}
	
}