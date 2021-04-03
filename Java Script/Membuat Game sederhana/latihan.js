// var ulang = true; 
// while( ulang ){
// // angka si user/player
// alert('tebak angka dari 1 - 10');
// var p = prompt('Masukan angka tebakan');


// // Angka si comp
// var comp = Math.floor(Math.random() * 10) + 1;


// // Rulees permainan
//  if (p == comp){
// 	alert('Selamat Jawaban anda benar');
// } else if (p < comp) {
// 	alert('maaf angka masih terlalu rendah \nAyo masih ada 2 kesempatan lagi')		
// 	prompt('Masukan angka tebakan');
// } if (p == comp) {
// 	alert('Selamat Jawaban anda benar');
// } else if (p < comp) {
// 	alert('maaf angka masih terlalu rendah \nAyo masih ada 1 kesempatan lagi')		
// 	prompt('Masukan angka tebakan');	
// } if (p == comp) {
// 	alert('Selamat Jawaban anda benar');
// } else if (p < comp) {
// 	alert('maaf angka masih terlalu rendah \nmaaf kesempatan habis');	
// } else if ( p > 10) {
// 	alert('Melebihi kapasitas bree')
// } else if ( p > comp ) {
// 	alert('maaf angka terlalu tinggi \nmaaf kesempatan habis');
// }	 



// ulang = confirm('gas lagi??');
// }

// alert(' Thx for a good gameplay ');

var kesempatan = 2;
var bot = Math.floor(Math.random() * 10 );
alert('Selamat datang di permainan tebak tebakan');

while(kesempatan >= 0 ){
	var user = prompt('Masukan angka dari 1-10')
	if (user == bot && kesempatan >= 0) {
		alert('Selamat Jawaban anda benar : \nangka yang dicari adalah ' + user);
	}else if(user < bot && kesempatan > 0){
		alert('maaf jawabannya masih terlalu rendah \nayo masih ada 2 kesempatan lagi');
	} else if (user > bot && kesempatan > 0) {
		alert('maaf jawabannya masih terlalu tinggi \nayo masih ada 2 kesempatan lagi');
	} else if(user !== bot && kesempatan == 0){
		alert('maaf kesempatan telah habis \njawban yang dicari adalah ' + bot);
	} 
	kesempatan -= 1;
}

alert('Thx me later');


































