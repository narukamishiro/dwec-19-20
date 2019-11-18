function ini(){
	var nm=prompt("introduzca nombre del jugador");
	var deck=new Baraja();
	var plr=new Jugador(nm);
	var bot=new Bot();
	var nmrnd=0;
	var plrnd=0;
	var draw=1;
	for(x=0;x<2;++){
		do{
			nmrnd=Math.floor(Math.random()*4);
			plrnd=Math.floor(Math.random()*13);
		}while(deck.isFree(nmrnd,plrnd)==false);
		plr.addcarta(nmrnd,plrnd);
		plr.point(nmrnd);
		deck.setUsed(nm,pl);
	}
	draw=prompt("usted tiene "+plr.getPuntos+" puntos ¿ quieres sacar otra carta? (1=si,0=n0)");
	while(draw){
		do{
			nmrnd=Math.floor(Math.random()*4);
			plrnd=Math.floor(Math.random()*13);
		}while(deck.isFree(nmrnd,plrnd)==false);
		plr.addcarta(nmrnd,plrnd);
		plr.point(nmrnd);
		deck.setUsed(nm,pl);
		draw=prompt("usted tiene "+plr.getPuntos+" puntos ¿ quieres sacar otra carta? (1=si,0=n0)");
	}
	while(bot.getPuntos<18){
		do{
			nmrnd=Math.floor(Math.random()*4);
			plrnd=Math.floor(Math.random()*13);
		}while(deck.isFree(nmrnd,plrnd)==false);
		bot.addcarta(nmrnd,plrnd);
		bot.point(nmrnd);
		deck.setUsed(nm,pl);
	}
	var puntplr=plr.getPuntos();
	var puntbot=bot.getPuntos();
	if{puntplr<=21 && puntbot<=21}{
		if(puntplr==puntbot){
			alert("empate");
		}else{
			if(puntplr>puntbot){
				if(puntplr=21){
					alert("blackjack de "+plr.getName());
				}
				alert(plr.getName()+",ganastes");
			}else{
				if(puntplr=21){
					alert("blackjack de la banca");
				}
				alert(plr.getName()+",perdistes");
			}
		}
		
		
	}else{
		if(puntplr<=21 && puntbot>21){
			alert("la banca se paso");
		}
		if(puntplr>21 && puntbot<=21){
			alert("la banca gana");
		}
		if(puntplr>21 && puntbot>21){
			alert("empate");
		}
	}
}