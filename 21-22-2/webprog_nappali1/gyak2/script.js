let elso = document.querySelector('#elso');
let masodik = document.querySelector('#masodik');
let harmadik = document.querySelector('#harmadik');
let emojik = document.querySelectorAll('.emoji');
let emojilista = document.querySelector('#elso ul');

elso.innerHTML = '<h2>Ma 2022. február 17. van</h2>';

//masodik.innerText = '👽 Üdv, Földlakók! Békével jöttünk. 🛸';

let robot2 = harmadik.querySelector('#robot2');
harmadik.appendChild(emojilista.cloneNode(true)); // cloneNode: másolat készítés (hogyha több helyre szeretnénk beszúrni)
harmadik.prepend(emojilista);
harmadik.insertBefore(emojilista, robot2);

const legok = [
    {
        nev: 'Millenium Falcon',
        ar: 270,
        tema: 'starwars'
    },
    {
        nev: 'Halálcsillag',
        ar: 200,
        tema: 'starwars'
    },
    {
        nev: 'Roxfort kastély',
        ar: 225,
        tema: 'harrypotter'
    },
    {
        nev: '1989 Batmobile',
        ar: 100,
        tema: 'dc'
    }
];

let table = document.createElement('table');
for (const lego of legok) {
    let tr = document.createElement('tr');
    tr.classList.add(lego.tema);

    let td = document.createElement('td');
    td.innerText = lego.nev;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = `${lego.ar} ezer Ft`;
    tr.appendChild(td);

    table.appendChild(tr);
}
masodik.appendChild(table);

emojik.forEach(element => {
    element.style.fontSize = `${element.dataset.size}px`;
});