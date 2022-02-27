let gomb = document.querySelector('#gomb');
let szamlalo = document.querySelector('#szamlalo');

function gombKattintas() {
    console.log('klikk.');
    szamlalo.innerText = Number(szamlalo.innerText) + 1;
}
//gomb.addEventListener('click', gombKattintas);
function gombKikapcs() {
    gomb.removeEventListener('click', gombKattintas);
}
function gombBekapcs() {
    gomb.addEventListener('click', gombKattintas);
}
gombBekapcs();

let topdiv = document.querySelector('#top');
topdiv.addEventListener('click', function (event) {
    console.log(event.target, event.currentTarget, this);
});

let canvas_link = document.querySelector('#canvas');
canvas_link.addEventListener('click', function (event) {
    if (event.altKey) {
        event.preventDefault();
    }
});


console.log(this, this === window);
/*function kivansaglistaPipa() {
    //console.log(this);
    this.classList.toggle('megvan');
}
let kivansaglista = document.querySelector('#kivansaglista');
kivansaglista.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', kivansaglistaPipa);
});*/

delegal(kivansaglista, 'li', 'click', function(event, child) {
    child.classList.toggle('megvan');
});