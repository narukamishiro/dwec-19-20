function check(patt,txt){
	return patt.test(txt);
}function show(event){
	let ptnom="/w+/";
	let ptape="/w+sw+/";
	let ptdni="/d{8}D";
	let ptmv="/d{9-11}";
	let ptml="/w+/@w+/.com";
	let ptus="/[a-z0-9ü]{7}$/";
	let tr=event.target;
	let rs=true;
	switch(tr.id){
		case("nom"): rs=ptnom.test(tr.text);break;
		case("ape"): rs=ptape.test(tr.text);break;
		case("dni"): rs=ptdni.test(tr.text);break;
		case("tlp"): rs=ptmv.test(tr.text);break;
		case("ml"): rs=ptml.test(tr.text);break;
		case("usname"): rs=ptus.test(tr.text);break;
	}
	id(rs){
		tr.backgroundColor="green";
	}else{
		tr.backgroundColor="red";
	}
	
}