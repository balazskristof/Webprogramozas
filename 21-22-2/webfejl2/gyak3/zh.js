let table = document.querySelector('table');

function sorgeneralo(objektum) {
    let tr = document.createElement('tr');
    tr.classList.add('motto_sor');

    let td = document.createElement('td');
    td.innerText = objektum.motto;
    td.dataset.informacio = 'motto';
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = 'bakfitty';
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = objektum.szavazat;
    td.dataset.informacio = 'szavazat';
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = 'bakfitty';
    tr.appendChild(td);

    return tr;
}

for (const adat of adatok) {
    table.appendChild(sorgeneralo(adat));
}

delegal(table, '.motto_sor', 'click', function (event, tr) {
    tr.classList.toggle('kijeloles');
});

let szavazas_gomb = document.querySelector('#szavazas');
szavazas_gomb.addEventListener('click', () => {
    document.querySelectorAll('.kijeloles').forEach(tr => {
        //tr.lastElementChild.innerText = Number(tr.lastElementChild.innerText) + 1;
        let szavazat = tr.querySelector('[data-informacio=szavazat]');
        szavazat.innerText = Number(szavazat.innerText) + 1;
    });
});

let legtobb_gomb = document.querySelector('#legtobb');
legtobb_gomb.addEventListener('click', () => {
    let legelso = document.querySelector('.motto_sor');
    let max_szavazat = Number(legelso.querySelector('[data-informacio=szavazat]').innerText);
    let max_motto = legelso.querySelector('[data-informacio=motto]').innerText;
    document.querySelectorAll('.motto_sor').forEach(tr => {
        let szavazat = Number(tr.querySelector('[data-informacio=szavazat]').innerText);
        if (szavazat > max_szavazat) {
            max_szavazat = szavazat;
            max_motto = tr.querySelector('[data-informacio=motto]').innerText;
        }
    });
    document.querySelector('h1').innerText = `AmonGalactica - ${max_motto}`;
});

let uj_gomb = document.querySelector('#uj');
uj_gomb.addEventListener('click', () => {
    let input = document.querySelector('input');
    let objektum = {
        szavazat: 0,
        motto: input.value
    };
    table.appendChild(sorgeneralo(objektum));
});