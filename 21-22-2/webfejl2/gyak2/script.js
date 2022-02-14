let elso = document.querySelector('#elso');
let masodik = document.querySelector('#masodik');
let harmadik = document.querySelector('#harmadik');

let elso_ul = elso.querySelector('ul');

console.log(elso.innerHTML, elso.innerText);
/*elso.innerHTML = '<h2>Hello, Világ!</h2>';

elso.querySelector('h2').innerText = 'Üdv, Földlakók 👽';*/
elso.innerText = 'Üdv, Földlakók 👽';

let legok = [
    'Halálcsillag', // </li><li>
    'Köztársasági hadihajó', // </li><li>
    'Roxfort kastély'
];

//masodik.innerHTML = `<ol><li>${legok.join('</li><li>')}</li></ol>`;

let ol = document.createElement('ol');
for (const lego of legok) {
    let li = document.createElement('li');
    li.innerText = lego;
    ol.appendChild(li);
}
document.body.appendChild(ol); // dokumentum végére fűzés
document.body.prepend(ol); // dokumentum elejére fűzés
document.body.insertBefore(ol, masodik); // dokumentumon belül elhelyezés

let legok2 = [
    {
        nev: 'Halálcsillag',
        kod: 75159,
        tema: 'starwars'
    },
    {
        nev: 'Köztársasági hadihajó',
        kod: 75309,
        tema: 'starwars'
    },
    {
        nev: 'Roxfort kastély',
        kod: 71043,
        tema: 'harrypotter'
    },
    {
        nev: '1989 Batmobile',
        kod: 76139,
        tema: 'dc'
    }
];

function temaszin(tema) {
    switch (tema) {
        case 'dc':
            return '#41a6de';
        case 'harrypotter':
            return 'purple';
        case 'starwars':
            return 'rgb(254, 218, 14)';
    }
}


let table = document.createElement('table');
let tr = document.createElement('tr');
for (const cim of ['Név', 'Kód']) {
    let th = document.createElement('th');
    th.innerText = cim;
    th.id = cim;
    tr.appendChild(th);
}
table.appendChild(tr);
for (const lego of legok2) {
    tr = document.createElement('tr');
    
    let td = document.createElement('td');
    td.innerText = lego.nev;
    //td.classList.add('nev');
    td.dataset.szerep = 'nev';
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.innerText = lego.kod;
    td.dataset.szerep = 'kod';
    //td.classList.add('kod');
    tr.appendChild(td);
    
    //tr.style.backgroundColor = temaszin(lego.tema);
    tr.classList.add(lego.tema);

    table.appendChild(tr);
}
harmadik.appendChild(table);





document.querySelectorAll('li[data-meret]').forEach(elem => {
    console.log(elem.dataset);
    elem.style.fontSize = elem.dataset.meret;
});

harmadik.querySelectorAll('tr').forEach(elem => {
    let nev = elem.querySelector('[data-szerep=nev]');
    let kod = elem.querySelector('[data-szerep=kod]');
    if (nev && kod) {
        console.log(nev.innerText, kod.innerText);
    }
});