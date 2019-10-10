function ejer1(){
	var dt=new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	document.write("<p>current year:"+dt.getFullYear()+"</p>");
	document.write("<p>current month:"+months[dt.getMonth()]+"</p>");
	document.write("<p>current day:"+days[dt.getDay()]+"</p>");
	document.write("<p>current hour:"+dt.getHours()+"</p>");
	document.write("<p>current minutes:"+dt.getMinutes()+"</p>");
	document.write("<p>current seconds:"+dt.getSeconds()+"</p>");
}
function ejer2(){
	var fechahoy=new Date();
	document.write("<p>current Date:"+fechahoy.toUTCString()+"</p>");
	var fecha85=fechahoy;
	fecha85.setHours(fecha85.getHours()+(85*24));
	document.write("<p>Date 2(85 days later):"+fecha85.toUTCString()+"</p>");
	var fecha187=fechahoy;
	fecha187.setHours(fecha187.getHours()-(127*24));
	document.write("<p>Date 3(187 days ealier):"+fecha187.toUTCString()+"</p>");
	fecha85.setYear(fecha85.getFullYear()+2);
	document.write("<p>Date 2 (2 years after):"+fecha85.toUTCString()+"</p>");
	fecha187.setHours(fecha187.getHours()-24);
	document.write("<p>Date 3(24 hour before):"+fecha187.toUTCString()+"</p>");
	var fecharesto=fechahoy;
	fecharesto.setDate(fecha85.getDate()-fecha187.getDate());
	document.write("<p>Date 3(24 hour before):"+fecharesto.toUTCString()+"</p>");
}
function ejer3(){
	var y=0;
	do{
		document.write((60-y)+"");
		y++;
		setTimeout(function(){},1000);
	}while(y<=60);
}
function eje4(){
	var dt=new Date;
	document.write(dt.getHours()+" : "+dt.getMinutes()+" : "+dt.getSeconds());
}
//ejercicio 1
//ejer1();
//ejercicio 2
//ejer2();
//ejercicio 3
//eje3();
//ejercicio 4
setTimeout(ejer4,1000);