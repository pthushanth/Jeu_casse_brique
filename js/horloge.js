
 function clock()
 {

	var maDate = new Date ( );
	var h = maDate.getHours();
	var min = maDate.getMinutes(); 
	var s = maDate.getSeconds();
	var d = maDate.getDate();
	var m = maDate.getMonth();

	
	if(m==0) { m="JANVIER"; }
	if(m==1) { m="FEVRIER"; }
	if(m==2) { m="MARS"; }
	if(m==3) { m="AVRIL"; }
	if(m==4) { m="MAI"; }
	if(m==5) { m="JUIN"; }
	if(m==6) { m="JUILLET"; }
	if(m==7) { m="AOUT"; }
	if(m==8) { m="SEPTEMBRE"; }
	if(m==9) { m="OCTOBRE"; }
	if(m==10) { m="NOVEMBRE"; }
	if(m==11) { m="DECEMBRE"; }
	
	if(h<10) {h="0"+h;}
	if(min<10) {min="0"+min;}
	if(s<10) {s="0"+s;}
	document.getElementById('horloge').innerHTML=d+" "+m+" - "+h+":"+min+":"+s; 
	setTimeout(function(){clock();}, 1000);    
   
 }
 