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
function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}
function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

var cols = document.querySelectorAll('#po .drag');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
});

//ejercicio 1
//document.addEventListener("click",alertclick);
//ejercicio 2
//document.addEventListener("mousemove",gps);
//ejercicio 4
//window.onLoad=makeEventTable();
//ejercicio 9,10
