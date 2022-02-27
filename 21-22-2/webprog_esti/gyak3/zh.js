const adatok = [
    {
        motto: 'Zűrnélkül az űrben!',
        szavazat: 3
    },
    {
        motto: 'Öt parsec alatt a Naprendszer körül! (szerk.: a parsec nem sebességet jelöl!!! - G.L.)',
        szavazat: 1
    },
    {
        motto: 'Legendásan gyorsak vagyunk!',
        szavazat: 12
    },
    {
        motto: 'Dantuinig meg sem állunk!',
        szavazat: 0
    }
];

let table = document.querySelector('table');
for (const adat of adatok) {
    let tr = document.createElement('tr');
    tr.dataset.motto = adat.motto;
    tr.dataset.szavazat = adat.szavazat;
    tr.classList.add('motto_sor');

    let td = document.createElement('td');
    td.innerText = adat.motto;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = adat.szavazat;
    td.classList.add('szavazat');
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = 'bakfitty';
    tr.appendChild(td);

    table.appendChild(tr);
}

delegal(table, '.motto_sor', 'click', function () {
    this.classList.toggle('kijeloles');
});

let szavazas = document.querySelector('#szavazas');
szavazas.addEventListener('click', () => {
    table.querySelectorAll('.kijeloles').forEach(tr => {
        tr.dataset.szavazat = Number(tr.dataset.szavazat) + 1;
        let td = tr.querySelector('.szavazat');
        td.innerText = tr.dataset.szavazat;
    });
});

let legtobb = document.querySelector('#legtobb');
legtobb.addEventListener('click', () => {
    let elso = table.querySelector('.motto_sor');
    /*let [x, y, z, ...tobbi] = [4, 6, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(x, y, z, tobbi);*/
    let [max_motto, max_szavazat] = [elso.dataset.motto, Number(elso.dataset.szavazat)];
    table.querySelectorAll('.motto_sor').forEach(tr => {
        let szavazat = Number(tr.dataset.szavazat);
        if (szavazat > max_szavazat) {
            max_szavazat = szavazat;
            max_motto = tr.dataset.motto;
        }
    });
    document.querySelector('h1').innerText = `AmonGalactica - ${max_motto}`;
});

let uj = document.querySelector('#uj');
uj.addEventListener('click', () => {
    let input = document.querySelector('input');
    
    let tr = document.createElement('tr');
    tr.dataset.motto = input.value;
    tr.dataset.szavazat = 0;
    tr.classList.add('motto_sor');

    let td = document.createElement('td');
    td.innerText = input.value;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = 0;
    td.classList.add('szavazat');
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = 'bakfitty';
    tr.appendChild(td);

    table.appendChild(tr);
});