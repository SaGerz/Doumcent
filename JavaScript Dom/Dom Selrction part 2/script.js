// querySelector() -> menghasilkan elemen
const p4 = document.querySelector('section#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// querySeletorAll -> mengembalikan nilai nodelist sperti html colection
const p = document.querySelectorAll('p');

for (let index = 0; index < p.length; index++) {
    p[index].style.backgroundColor = 'pink';
}


// Contoh mempersempit selector 
const sectionB = document.getElementById('b');
const ul = sectionB.querySelector('ul');
const li3 = ul.getElementsByTagName('li')[2];
li3.style.backgroundColor = 'lightblue';


