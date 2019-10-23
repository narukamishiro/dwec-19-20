class Bot extends Jugador{
	function point(nm){
		let pt=0;
		switch(nm+1){
			case 1:pt=11;break;
			case 11:
			case 12:
			case 13:pt=10;break;
			default: pt=nm;break;
		}
		this.puntos=this.puntos+pt;
	}
}