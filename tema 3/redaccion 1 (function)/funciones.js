function ejer1(n1,n2,n3,n4){
	var ln=[n1,n2,n3,n4];
	ln.sort((a, b) => b - a});
	console.log(ln[0]);
}
function lanzamiento(){
	var res=parseInt(Math.floor(Math.random()*6+1));
	return res;
}
function lanzamiento(n){
	var res=0;
	var oco=[0,0,0,0,0,0];
	for(x=0;x<n;x++){
		res=parseInt(Math.floor(Math.random()*6+1));
		oco[res-1]=oco[res-1]+1;
	}
	return oco;
	
	
}
function volumen(r){
	return (4*Math.PI*Math.pow(r,3))/3;
}
function pot(bs,exp){
	if(exp<=0){
		return 1;
	}
	return bs*pot(bs,exp-1);
}
function fact(n){
	if(n<=1){
		return 1;
	}
	return n*fact(n-1);
}

//ejercicio 1
/*
var n1=prompt("primer numero:");
var n2=prompt("segundo numero:");
var n3=prompt("tercer numero:");
var n4=prompt("cuarto numero:");
ejer1(n1,n2,n3,n4);
*/
//ejercicio 2
//document.write(lanzamiento()+"");
//ejercicio 3
/*
//var tir=prompt(numero de tiradas:);
var tir=6000;
var ocu=lanzamiento(tir);
document.write("de "+tir+" tiradas ha salido:</br>");
document.write(ocu[0]+" 1 ;</br>");
document.write(ocu[1]+" 2 ;</br>");
document.write(ocu[2]+" 3 ;</br>");
document.write(ocu[3]+" 4 ;</br>");
document.write(ocu[4]+" 5 ;</br>");
document.write(ocu[5]+" 6 ;</br>");
*/
//ejercicio 4
/* 
var r=prompt("introduzca radio:");
document.write("el volumen de una esfera con un radio de "+r+" metros es "+volumen(r)+" metros al cubo");
*/
//ejercicio 6
//ejercicio 7
//var n=prompt("numero filas:");
var n=10;
document.write('<table>');
for(x=1;x<=n;x++){
	document.write('<tr>');
	document.write('<td>'+x+'</td>');
	document.write('<td>'+fact(x)+'</td>');
	document.write('</tr>');
}
document.write('</table>');