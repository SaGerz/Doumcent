// Contoh Function Declaration
function jumlahVolum2kubus(a, b) {
	var volumeA;
	var volumeB;

	volumeA = a * a * a;
	volumeB	= b * b * b;

	total = volumeA + volumeB;
	return total;
}

// console.log(jumlahVolum2kubus(8, 3));
 

// function tes(a) {
// 	var a = 1;
// 	console.log(a);
// }

// tes(1);

// Contoh Function Expression
alert('Hallo Selamat datang!');
var name = prompt('Masukan nama')

var tampilkanNama = function(nama){
	var tampilkanNama;
 	tampilkanNama = nama;
 	
 	return tampilkanNama;
}
alert(tampilkanNama('Hallo ' + name + '!'));