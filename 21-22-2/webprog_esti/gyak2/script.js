let elso = document.querySelector('#elso');
let masodik = document.querySelector('#masodik');
let harmadik = document.querySelector('#harmadik');
console.log(elso);

let divek = document.querySelectorAll('div');
console.log(divek);

//let elso_ul = document.querySelector('#elso > ul');
let elso_ul = elso.querySelector('ul');

let lego_nevek = ['Halálcsillag', 'Köztársasági hadihajó', 'SHIELD Helicarrier', '1989 Batmobile'];
elso.innerHTML = `<h1>Üdv, földlakók! 👽</h1>
<h2>Békével jöttünk.</h2>
<h6>Vagy mégsem? 💥💥</h6>
Legó kívánságlistám: <ol>
    <li>${lego_nevek.join('</li><li>')}</li>
</ol>`;
//elso.innerText = 'Viszlát, földlakók! 🛸';

let emojik = ['😂', '😴', '🤩', '🤯'];

let ul = document.createElement('ul');
for (const emoji of emojik) {
    let li = document.createElement('li');
    li.innerText = emoji;
    /*li.style.fontSize = '66px';
    li.style.backgroundColor = 'silver';*/
    li.classList.add('emoji');
    ul.appendChild(li);
}
//masodik.innerHTML = '';
masodik.appendChild(ul);
//document.body.appendChild(ul.cloneNode(true));

for (const elem of document.querySelectorAll('.emoji')) {
    elem.style.fontSize = elem.dataset.size;
    let emoji = elem.innerText;
    for (let i = 1; i < Number(elem.dataset.repeatTimes); i++) { // konvertálás számmá: Number( [konvertálandó dolog] ) pl. Number('42') => 42
        elem.innerText += emoji;
    }
}