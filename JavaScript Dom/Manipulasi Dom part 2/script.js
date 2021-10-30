// Dom manipulation
// Buat element baru
const pBaru = document.createElement('p');
const teksPbaru = document.createTextNode('Paragraf baru');

//Masukan ke dalam element
pBaru.appendChild(teksPbaru);

// ambil tempat
const sectionA = document.getElementById('a');
// Pindahkan ke tempatnya
sectionA.appendChild(pBaru);
// Fungsi appendChild itu untuk simpan ke akhir parent.


//  Studi kasus 2
const liBaru = document.createElement('li');
const isiLibaru = document.createTextNode('Item baru');

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

liBaru.appendChild(isiLibaru);

ul.insertBefore(liBaru, li2);


// Menghapus child dengan removeChild
const link = sectionA.querySelector('a');
sectionA.removeChild(link);



// Menganti child dengan replace child
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];

const h2 = document.createElement('h2');
const isiH2 = document.createTextNode('Judul Baru');

h2.appendChild(isiH2);

sectionB.replaceChild(h2, p4);



// Penanda yang sudah kita modifikasi pada materi ini
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2.style.backgroundColor = 'lightgreen';