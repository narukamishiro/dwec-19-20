function ejer1(){
	document.write("<h1>practica de bucles for</h1>");
	let x=1;
	for(x=1;x<7;x++){
		document.write("<h"+x+">cabecera h"+x+"</h"+x+">");
	}
}
function ejer2(){
	let col=prompt("introduzca numero columnas:");
	let alt=prompt("introduzca alto (pixeles):");
	let anc=prompt("introduzca ancho (pixeles):");
	let x=0;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”white” width= "'+col*anc+'" >');
	document.write('<tr bgcolor=”black” height= ”'+ alt+'” >');
	for(x=0;x<col;x++){
		document.write('<td width=”'+anc+'” bgColor="white"> &nbsp;</td>')
	}
	document.write("</tr>");
	document.write("</table");
}
function ejer3(){
	let col=prompt("introduzca numero columnas:");
	let alt=prompt("introduzca alto (pixeles):");
	let anc=prompt("introduzca ancho (pixeles):");
	let x=0;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”white” width= "'+col*anc+'" >');
	document.write('<tr bgcolor=”black” height= ”'+ alt+'” >');
	for(x=0;x<col;x++){
		if(x%2==0){
			document.write('<td width=”'+anc+'” bgcolor="black"> &nbsp;</td>');
		}else{
			document.write('<td width=”'+anc+'” bgColor="white"> &nbsp;</td>');
		}
	}
	document.write("</tr>");
	document.write("</table");
}
function ejer2V2(){
	let col=prompt("introduzca numero columnas:");
	let alt=prompt("introduzca alto (pixeles):");
	let anc=prompt("introduzca ancho (pixeles):");
	let x=0;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”white” width= "'+col*anc+'" >');
	document.write('<tr bgcolor=”black” height= ”'+ alt+'” >');
	while(x<col){
			document.write('<td width=”'+anc+'” bgColor="white"> &nbsp;</td>');
			x++;
	}
	document.write("</tr>");
	document.write("</table");
}
function ejer3v2(){
	let col=prompt("introduzca numero columnas:");
	let alt=prompt("introduzca alto (pixeles):");
	let anc=prompt("introduzca ancho (pixeles):");
	let x=0;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”white” width= "'+col*anc+'" >');
	document.write('<tr bgcolor=”black” height= ”'+ alt+'” >');
	while(x<col){
		if(x%2==0){
			document.write('<td width=”'+anc+'” bgcolor="black"> &nbsp;</td>');
		}else{
			document.write('<td width=”'+anc+'” bgColor="white"> &nbsp;</td>');
		}
		x++;
	}
	document.write("</tr>");
	document.write("</table");
}
function ejer4(){
	var nadi=prompt("introduzca numero a adivinar(1-100):");
	var n=0;
	var msj="introduzca numero:";
	while(n==0 || nadi!=n){
		
		n=prompt(msj);
		if(n<nadi){
			msj="el numero a adivinar es mayor, prueba de nuevo:";
		}else{
			if(n>nadi){
				msj="el numero a adivinar es menor, prueba de nuevo:";
			}
		}
	}
	alert("has acertado, el numero era "+nadi);
}
function ejer4v2(){
	var nadi=prompt("introduzca numero a adivinar(1-100):");
	var n=0;
	var msj="introduzca numero:";
	do{
		
		n=prompt(msj);
		if(n<nadi){
			msj="el numero a adivinar es mayor, prueba de nuevo:";
		}else{
			if(n>nadi){
				msj="el numero a adivinar es menor, prueba de nuevo:";
			}
		}
	}while(n!=0 || nadi!=n);
	alert("has acertado, el numero era "+nadi);
}
function ejer5(){
	document.write("tablas de multiplicar");
	for (i=0;i<10;i++) {
		document.write("tablas de "+i);
		document.write("---------------");
		for (j=0;j<10;j++) {
			document.write(i + '-' + j +" = "+i*j);
		}
	}
}
function ejer6(){
	let col=prompt("introduzca numero columnas:");
	let fil=prompt("introduzca numero filas:");
	let alt=prompt("introduzca alto (pixeles):");
	let anc=prompt("introduzca ancho (pixeles):");
	let x=0;
	let y=0;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”white” width= "'+col*anc+'" >');
	for(y=0;y<fil;++y){
		document.write('<tr bgcolor=”black” height= ”'+ alt+'” >');
		for(x=0;x<col;x++){
			document.write('<td width=”'+anc+'” bgColor="white"> &nbsp;</td>')
		}
	}
	document.write("</tr>");
	document.write("</table");
}
function ejer6v2(){
	let col=prompt("introduzca numero columnas:");
	let fil=prompt("introduzca numero filas:");
	let alt=prompt("introduzca alto (pixeles):");
	let anc=prompt("introduzca ancho (pixeles):");
	let x=0;
	let y=0;
	let cont=0;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”white” width= "'+col*anc+'" >');
	for(y=0;y<fil;++y){
		document.write('<tr bgcolor=”black” height= ”'+ alt+'” >');
		for(x=0;x<col;x++){
			if(cont%2==0){
				document.write('<td width=”'+anc+'” bgColor="black"> &nbsp;</td>');
			}else{
				document.write('<td width=”'+anc+'” bgColor="white"> &nbsp;</td>');
			}
			cont++;	
		}
	}
	document.write("</tr>");
	document.write("</table");
}

//ejer1();
//ejer2();
//ejer3();
//ejer2V2();
//ejer3v2();
//ejer4();
//ejer4v2();
//ejer5();
//ejer6();
ejer6v2();