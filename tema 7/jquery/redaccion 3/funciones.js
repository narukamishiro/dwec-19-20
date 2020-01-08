function ejercicio1(){
	
	$("tr:gt(2)").css( "backgroundColor", "blue" );
	$("tr:lt(2)").css( "backgroundColor", "red" );
	
}
function ejercicio2(){
	$("p:contains('eu') ").css( "backgroundColor", "red" );
}
function ejercicio3(){
	$("td:empty").css( "backgroundColor", "yellow" );
}
function ejercicio5(){
	$("div").click(function() {
		$(this,"p" ).css("color","red");
		}); );
}