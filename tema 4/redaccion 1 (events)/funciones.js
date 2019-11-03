function alertclick(){
	alert("dejame pesao");
}
function gps(){
	var x = window.event.clientX;
    var y = window.event.clientY;
	var inf=document.getElementById("info");
	inf.display="inline";
	inf.innerHTML="posicion:"+x+","+y;
}
function makeEventTable(){
	document.write("<table id='tb' border='1'>");
	for(x=0;x<=500;x++){
		document.write("<tr>");
		for(y=0;y<=500;y++){
			document.write("<td> </td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
	addevent("tb");
}
function addevent(id){
	var trlist=document.getElementById(id).getElementsByTagName("tr");
	trlist.forEach(function(item){
		var tdlist=item.getElementsByTagName("td");
		forEach(function(item){item.addEventListener("mousemove",color)});
	});
}
function color(event){
	var t=event.target;
	
	t.backgroundColor="red";
}
function doClick(event){
	clicked=!clicked;
	offsetX=x-event.target.hspace;
	offsetY=y-event.target.vspace;
	
}
//ejercicio 1
//document.addEventListener("click",alertclick);
//ejercicio 2
//document.addEventListener("mousemove",gps);
//ejercicio 4
//window.onLoad=makeEventTable();
//ejercicio 9,10
var clicked=false;
var offsetX,offsetY,x,y,imagen;
document.getElementById("po").addEventListener("mousemove",move(event));
