// var binatang = [];
// binatang = ['Kucing','Sapi','monyet','Panda','koala','biawak']

// console.log(binatang[4]);


// Memanipulasi Array

// 1. Menambahkan isi Array
// var arr = []
// arr [0] = "Doddy"
// arr [1] = "Dony"
// arr [2] = "Donkey"
// arr [6] = "Tomy"
// console.log(arr);

// 2. Menghapus isi Array
// var arr = ["samuel","genaro","Dony"];
// arr[1] = undefined;
// console.log(arr);

// 3.Menampilkan isi array
//  var arr = ["samuel","genaro","Dony",];

//  for (var i = 0; i < arr.length; i++) {
//  	console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
// }




// Array Method 
// 1.Join  
var arr = ['samuel' , 'genaro' , 'Dony']
// console.log(arr.join(' - '));


// 2.Push ---> Menambahkan Element di akhir 
// arr.push('Donkey', 'Domba')

// 3.Pop ---> Menghapus Element di akhir
// arr.pop();
// console.log(arr.join(' - '));

// 4.unshift ---> Menambahkan Element di awal
// arr.unshift('Domba'); 

// 5.shift ---> Menghapus Element di awal
// arr.shift();
// // arr.shift();
// console.log(arr.join(' - '));


// 6.splice ---> Menyisipkan nilai array ditengah-tengah
// rumus > splice(indexAwal, mauDihaous berapa, element baru1,element baru2.....)
// arr.splice(1, 2, 'Dody','Sany');
// console.log(arr.join(' - '));


// // 7.slice ---> mengiris sebuah array dan menjadi array yg baru
// // rumus > (awal,akhir)
// var arr = ['samuel' , 'genaro' , 'Dony', 'jodi', 'Donkey']
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// 6.forEach ---> dapat melakukan pengulangan seperti for namunn lebih simple
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Samuel', 'Genaro', 'Doni'];
// for(var i = 0; i < angka.length; i++){
// 	console.log(angka[i]);
// }

// angka.forEach(function(e){
// 	console.log(e);
// })	

// nama.forEach(function(e, i){
// 	console.log('Mahasiswa ke : ' + (i+1) + ' adalah ' + e);
// })

// 7.map ---> sama seperti forEach namun mengembalikan Array
// var numbs = [1,2,3,4,5,6,7,8,4];
// var numbs2 = numbs.map(function(e){
// 	return e * 2;
// })
// console.log(numbs2.join(' - '));

// 8.sort ---> mengurutkan angka acak
// var angka = [1,2,5,4,6,8,7,3];
// angka.sort();
// console.log(angka.join(' - '));

// // ini adalah contoh jika didalam array ada angka puluhan
// var angka = [1,20,10,3,4,6,5,8,7,2];
// angka.sort(function(a, b){
// 	return a-b;
// });
// console.log(angka.join(' - '));

// 9.filter ---> mencari banyak nilai namun hasilnya dalam bentuk array
// var angka = [2,5,6,7,8,10,20];
// var angka2 = angka.filter(function(e){
// 	return e % 2 == 0;
// })
// console.log(angka2.join(' - '));

// 10.find ---> mecari 1 nilai dari nilai pertama yg pertama dilihat dan mengembalikan hasil dalam bentuk nilai 
// var angka = [2,5,6,7,8,10,20];
// var angka3 = angka.find(function(x){
// 	return x % 2 == 0;
// })
// console.log(angka3);





function myFunction(a, b) {
   var result;   
   if (a === b) {
   	result = true;
   } else if (a !== b) {
   	result = false;
   }

   return result;
}
console.log(myFunction("10", "10"));







