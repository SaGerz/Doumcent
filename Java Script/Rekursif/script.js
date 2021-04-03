function catatAngka(n) {
	// ini adalah base case untuk meberhentikan reskursif 
	if (n === 0) {
		return;
	}

	console.log(n);
	catatAngka(n-1);
}

catatAngka(10);

// Contoh Penggunaan pada faktorial 
alert('Tes Angka faktorial');
var a1 = parseInt(prompt('Masukan Angka'));

function faktorial(a1){
	if (a1 === 0) return 1;
	return a1 * faktorial(a1-1);
}
alert(faktorial(a1));	


