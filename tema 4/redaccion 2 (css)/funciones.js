function norm(){
	document.body.style.backgroundColor="#0B5FEA";
	document.getElementById("d1").style.backgroundColor="#F9FAB9";
	document.getElementById("enl").style.backgroundColor="#BFF4F7";
	document.getElementById("d2").style.backgroundColor="#D9DA98";
	document.getElementById("enl").style.border="thick solid";
	document.getElementById("d2").style.border="thick solid";
	document.getElementById("hd").style.visibility="visible";
}
function mini(){
	document.body.style.backgroundColor="#FFFFFF";
	document.getElementById("d1").style.backgroundColor="#FFFFFF";
	document.getElementById("enl").style.backgroundColor="#FFFFFF";
	document.getElementById("d2").style.backgroundColor="#FFFFFF";
	document.getElementById("enl").style.borderStyle="none";
	document.getElementById("d2").style.borderStyle="none";
	document.getElementById("hd").style.visibility="hidden";
}
//modo java
/*document.getElementById("nom").addEventListener("click",norm);
document.getElementById("min").addEventListener("click",mini);
*/
//modo CSS
/*
document.getElementById("nom").addEventListener("click",function(){document.head.link.href="CSSnorm.css";});
document.getElementById("min").addEventListener("click",function(){document.head.link.href="CSSmini.css";});
*/