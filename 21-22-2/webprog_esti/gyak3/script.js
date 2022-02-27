let szamlalo = document.querySelector('#szamlalo');
function szamlalas() {
    console.log('klikk.');
    szamlalo.innerText = Number(szamlalo.innerText) + 1;
}
let gomb = document.querySelector('#gomb');
gomb.addEventListener('click', szamlalas);
function szamlalasOff() {
    gomb.removeEventListener('click', szamlalas);
}

let ul = document.querySelector('ul');
delegal(ul, 'li', 'click', function (event) {
    console.log(event);
    console.log(this);
    if (event.altKey) {
        this.style.backgroundColor = 'red';
    } else {
        this.style.backgroundColor = 'green';
    }
});

/*window.addEventListener('keydown', (event) => {
    console.log(event);
});*/

let canvaslink = document.querySelector('#canvas');
canvaslink.addEventListener('click', (event) => {
    event.preventDefault();
});