function ejer1(){
	document.write("numero aleatorio entre 0 y 1 : "+Math.random());
	document.write("numero aleatorio entre 100 y 200 : "+Math.random()*100+100);
	var n1=prompt("primer numero");
	var n2=prompt("segundo numero");
	if(n2<=n1){
		var n2=prompt("tiene que ser mayor que "+n1+":");
	}
	document.write("numero aleatorio entre"+ n1 +" y "+ n2 +" : "+Math.random()*(n2-n1)+n1;
}}
function ejer5(){
	var x=prompt("numero coeficiente 2");
	var y=prompt("numero coeficiente 1");
	var z=prompt("numero coeficiente 0");
	var disc=Math.pow(y,2)-(4*x*z);
	var sl1=(-(y)+Math.sqrt(disc))*(2*x);
	var sl2=(-(y)-Math.sqrt(disc))*(2*x);
	if(disc==0){
		document.write("esta ecuacion de segundo grado tiene solucion  y es "+sl1);
	}else{
		if(disc>0){
			document.write("esta ecuacion de segundo grado tiene dos soluciones  y son "+sl1+" y "+sl2);
		}else{
			document.write("esta ecuacion de segundo grado no tiene soluciones reales");
		}	
	}
}
function ejer7(){
	var x=0;
	document.write("<table>");
	for(x=0;x<15;x++){
		document.write("<tr>");
		document.write("<td>"+x+"</td>");
		document.write("<td>"+Math.sin(x)+"</td>");
		document.write("</tr>");
	}
	document.write("</table>");
}
function ejer8(){
	var rn=Math.floor(Math.random()*3)+1;
	document.write('<img src="'+rn+'.jpg">');
}

