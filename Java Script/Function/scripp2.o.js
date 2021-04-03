function tambah() {
	
	var hasil = 0;

	for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	}

	return hasil;
}

var coba = tambah(1,2,3);
console.log(coba);



function volkubus(a,b){

	hasil =  a * a * a + b * b * b;
	return hasil;
}

var Ma = parseInt(prompt('Masukan Angka 1'));
var Mb = parseInt(prompt('Masukan Angka 2'));

var coba = volkubus(Ma, Mb);
alert(coba); 



