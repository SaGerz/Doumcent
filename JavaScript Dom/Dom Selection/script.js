// DOM Selection
// getElementById --> mengembalikan nilai menjadi elemen
const judul =  document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Haloo dunia';

// getElementsByTagName() ->  Mengembalikan nilai HTMLColection
const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor = 'lightblue';
for (let i = 0; i < p.length; i++) {
   p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// getElementsByClassName -> Mengembalikan nilai HTMLColection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Gg gemink ga adik adik??'; 
