let gomb = document.querySelector('#clickme');
gomb.addEventListener('click', function (event) {
    console.log('clickme:', event);
    event.stopPropagation();
});
console.log(this === window);

let topdiv = document.querySelector('#topdiv');
topdiv.addEventListener('click', function (event) {
    console.log('topdiv:', event);
    event.target.style.backgroundColor = event.target.dataset.bg;
    console.log(this);
});

let textinput = document.querySelector('#szovegin');
textinput.addEventListener('input', () => {
    //console.log(event);
    console.log('input:', textinput.value);
});
textinput.addEventListener('change', () => {
    //console.log(event);
    console.log('change:', textinput.value);
});
let checkboxinput = document.querySelector('#pipain');
checkboxinput.addEventListener('change', () => {
    console.log(checkboxinput.checked);
});

let canvaslink = document.querySelector('#canvas');
canvaslink.addEventListener('click', function (event) {
    if (event.shiftKey)
    {
        event.preventDefault();
    }
});

let lotto = document.querySelector('#lotto');
/*lotto.querySelectorAll('td').forEach(td => {
    td.addEventListener('click', () => {
        td.classList.toggle('jeloles');
    });
});*/

delegal(lotto, 'td', 'click', function (event) {
    this.classList.toggle('jeloles');
    console.log(this);
});

// =================================================
// SIDETRACK
let random_objektum = {
    nev: 'Péter',
    eletkor: 24,
    boldogE: true,
    metodus: function () {
        console.log(this);
    }
}
random_objektum.metodus();