function tellFortune(){
	let chl=prompt("numero de hijos: ");
	if(chl<0){
		chl=prompt("escriba otro numero: 'no puede ser negativo'");
	};
	let ptnr=prompt("nombre de compañero/a:");
	let plc=prompt("nombre de la ciudad:");
	let jb=prompt("trabajo:");
	
	alert("You will be a "+ jb +" in "+ plc+", and married to "+ ptnr +" with "+ chl + " kids.");
}
function age Calculator(){
	let brtyear=prompt("introduzca año nacimiento");
	let crtyear=Date.getYear;
	let n1=crtyear-brtyear;
	let n2=crtyear-brtyear-1;
	document.write("tiene "+n1+" o "+n2);
}
function calculateSupply(){
	let age=prompt("introduzca edad");
	let amdy=prompt("cantidad por dia");
	let max=100;
	let ryu=(max-age)*365*amdy;
	document.write("You will need "+ ryu +" to last you until the ripe old age of "+max);
}
function calcCircumfrence(r){
	let t=2*r-Math.PI;
	document.write("la circuferencia es:"+t);
}
function calcArea(r){
	document.write("The area is "+(Math.PI*Math.pow(r,2)));
}
function celsiusToFahrenheit(cs){
	document.write(cs+" grados celsius equivale a "+ (cs*9/5)+32+" grados fahrenheit");
}
function fahrenheitToCelsius(fh){
	document.write(fh+" grados fahrenheit equivale a "+(fh-32)*5/9+" grados celsius");
}