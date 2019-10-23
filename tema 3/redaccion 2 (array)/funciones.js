function parImpar(){
	var listn=[];
	var n=0;
	for(x=0;x<100;x++){
		n=parseInt(Math.floor(Math.random()*1000+1));
		listn.push(n);
	}
	ser(listn);
}
function ser(arr){
	var arest=[];
	var apar=[];
	var aimp=[];
	var p;
	for(x=0;x<arr.length;x++){
		p=arr[x];
		if(p%2==0){
			apar.push(p);
		}else{
			aimp.push(p);
		}
	}
}
function all0(arr){
	for(x=0;x<10;x++){
		arr[x]=0;
	}
}
function add1(arr){
	for(x=0;x<10;x++){
		arr[x]=arr[x]+1;
	}
}
//ejercicio 5
//parImpar();
//ejercicio 7

//ejercicio 9