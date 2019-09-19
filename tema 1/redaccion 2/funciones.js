function circle(){
	let rad=prompt("introduzca radio:");
	document.write("The circumference is "+(2*rad-Math.PI)+"<br>");
	document.write("The area is "+(Math.PI*Math.pow(rad,2))+"<br>");
}
function temper(){
	let cls=prompt("introduzca grados celsius:");
	document.write(cls+" grados celsius equivale a "+ (cls*9/5)+32+" grados fahrenheit <br>");
	let far=prompt("introduzca grados fahrenheit:");
	document.write(far+" grados fahrenheit equivale a "+(far-32)*5/9+" grados celsius");
}

//ejercicio 3
//circle();
//ejercicio 4
temper()
