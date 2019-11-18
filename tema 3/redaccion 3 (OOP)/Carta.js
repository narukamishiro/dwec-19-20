class Carta{
	let palo;
	let num;
	constructor(pl,nm){
		this.palo=pl;
		this.num=nm;
	}
	function getName(){
		let mens="ha salido ";
		switch (num+1){
			case 1: mens=mens+"el as de ";break;
			case 11: mens=mens+"el jaque de ";break;
			case 12: mens=mens+"la reina de ";break;
			case 13: mens=mens+"el rey de ";break;
			default: mens=mens+"el "+nm+" de ";break;
		}
		switch(palo+1){
			case 1: mens=mens+"picas";break;
			case 2: mens=mens+"corazones";break;
			case 3: mens=mens+"treboles";break;
			case 4: mens=mens+"diamantes";break;
		}
		return mens;
	}
}