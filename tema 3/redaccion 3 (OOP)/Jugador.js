class Jugador{
	let nombre;
	let mano;
	let puntos;
	constructor(){
		this.nombre="anno";
		this.mano=new array();
		this.puntos=0;
		
	}
	constructor(nm){
		this.nombre=nm;
		this.mano=new array(2);
		this.puntos=0;
	}
	
	function addcarta(nm,pl){
		var cart=new Carta(pl,nm);
		mano.push(cart);
	}
	function point(nm){
		let pt=0;
		switch(nm+1){
			case 1:do{pt=prompt("elige el valor que quieras (1 o 11) (puntos actuales:+"+puntos+"):");}while(pt!=1 & pt!=11);break;
			case 11:
			case 12:
			case 13:pt=10;break;
			default: pt=nm;break;
		}
		puntos=puntos+pt;
	}
	function getPuntos(){
		return puntos;
	}
	function getName(){
		return nombre;
	}
}