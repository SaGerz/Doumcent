var ask = true;
while( ask ){
	
	// Menangkap Pilihan pemain
	var p = prompt('Pilih : Gajah, Orang, Semut');

	// menangkap pilihan comp
	// membangkitkan pilihan random
	var bot = Math.random();

	if ( bot < 0.34 ) {
		bot = 'Gajah';
	} else if ( bot >= 0.34 && bot < 0.67 ) {
		bot = 'Orang';
	} else{
		bot = 'Semut';
	}


	var hasil = '';
	// menentukan Rules
	if( p == bot ){
		hasil = 'Seri';
	} else if ( p == 'Gajah') {
	// 	if ( bot == 'Orang') {
	// 		hasil = 'Menang';
	// 	} else {
	// 		hasil = 'Kalah'; 
	// 	}
	hasil = ( bot == 'Orang' ) ? "Menang!" : "Kalah!";	

	} else if ( p == 'Orang' ) {
		// if ( bot == gajah ) {
		// 	hasil = 'Kalah';
		// } else {
		// 	hasil = 'Kalah!'
		// }
		 hasil = (bot == 'Gajah') ? "Kalah" : "Menang";	
	} else if (p == 'Semut') {
		hasil = (bot == orang) ? "Kalah" : "Menang";
	} else{
		hasil = 'Memasukan Kondisi yang salah';
	}

	// tampilkan Hasil
	alert('Kamu Memilih : ' + p + ' dan komputer memilih : ' + bot + '\nMaka Kamu : ' + hasil);

	ask = confirm('Mau Coba lagi?');

}

alert('Terimakasih sudah mau bermain');



	





