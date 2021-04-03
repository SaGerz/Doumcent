alert('Hello Selamat datang di Data operasi');
var nama = prompt('Ingin Masukan nama anda agar terdaftar menjadi user?');
alert('Hallo ' + nama);

var tes = prompt('Masukan angka yang anda Ingin di tes Genap/Ganjil');
if (tes % 2 == 0) {
	alert(tes + ' adalah genap');
} else{
	alert(tes + ' adalah ganjil');
}

alert('Data dapat dilihat!');
// Masuk Operasi data Angkot yang berjalan!

var jmlAngkot = 10
var noAngkot = 1
var angkotBeroperasi = 6
var angkotOperasi = 7

while(noAngkot <= angkotBeroperasi){
	console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
noAngkot++
}

for( angkotOperasi = angkotBeroperasi + 1; angkotOperasi <= jmlAngkot; angkotOperasi++){
	console.log('Angkot No. ' + angkotOperasi + ' tidak beroperasi dengan baik.');
}