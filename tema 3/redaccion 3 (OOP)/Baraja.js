class Baraja{
	let deck;
	constructor{
		resetDeck();
	}
	function resetDeck(){
		deck=new Array(52);
		cart;
		for(x=0;x<4;x++){
			for(y=0;y<13;y++){
				cart=new Carta(x+1,y+1);
				deck.push(cart);
			}
		}
	}
	function isFree(crt){
		if(deck[pl][nm]==0){
			return true;
		}else{
			return false;
		}
	}
	function setUsed(crt){
		deck[pl][nm]=1;
	}
	function namecard(pos){
		return deck[pos].getName();
	}
}