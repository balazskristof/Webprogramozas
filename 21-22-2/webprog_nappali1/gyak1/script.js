console.log('Ez a kód a script.js-ben található');

let szoveg = 'Ez egy szöveg.';
let szam = 42;
let tortszam = 4.2;
let logikai = true;

console.log(szam + tortszam);
console.log(szoveg + szam);
console.log(szoveg + szoveg);

const konstans = 24;

// ez egy blokk
{
    let alma = 'alma';
    var korte = 'körte';
    console.log(tortszam);
}
//console.log(alma);
console.log(korte);

szam += 1; // szam = szam + 1
szam -= 1; // szam = szam - 1
szam *= 2; // ...
szam /= 2;
//szam %= 1;

/*console.log(szam++);
++szam;
console.log(szam--);
--szam;*/

if (szam === '42') {
    console.log('A szám egyenlő "42"-vel.');
} else {
    console.log('A szám nem egyenlő 42-vel.');
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    // for (let j = ...) { }
}

let szam2 = 5;
while (szam2 > 0) {
    szam2--;
}

do {
    szam2++;
} while (szam2 < 9);

switch (szam2) {
    case 0:
        console.log('A szam2 értéke 0');
        break;
    case 1:
        console.log('A szam2 értéke 1');
        break;
    default:
        console.log('Nem kezelt eset.');
        break;
}

switch (szam2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log('A szam2 egy egyjegyű páratlan szám.');
        break;
    case 2:
    case 4:
    case 6:
    case 8:
        console.log('A szam2 egy egyjegyű páros szám.');
        break;
    default:
        console.log('Nem kezelt eset.');
}

let tomb = [36, true, false, 's"z"öveg', "még egy s'z'öveg"];
console.log(`A tömb mérete: ${tomb.length}. Ez egy véletlen szám: ${Math.floor(Math.random() * 6)}`); // alt gr + 7

tomb.push('új elem'); // tömb végére új elem
let utolso = tomb.pop(); // leveszi az utolsó elemet (és visszaadja)
tomb.unshift('újabb elem'); // tömb elejére új elem
tomb.shift(); // leveszi az első elemet (és visszaadja)

//tomb[362] = 'kismacska';
console.log(tomb.length, tomb, tomb[361]);

let primitiv1 = null;
let primitiv2;

console.log(primitiv2 + szam);

tomb.reverse();
console.log(tomb);

let kivagott = tomb.splice(1, 2);
console.log(tomb, kivagott);

let objektum = {
    nev: 'Petike',
    neptun: 'P3TIK3',
    aktivfeleves: true,
    kedvenc_tantargyak: ['Webprogramozás', 'Bevezetés a gépi tanulásba'],
    lakhely: {
        iranyitoszam: 69420,
        telepules: 'Mogyoród',
        valami: {

        }
    }
};
console.log(objektum.nev, `${objektum.lakhely.iranyitoszam} ${objektum.lakhely.telepules}`);

class Hallgato {
    constructor(nev, neptun, aktivE) {
        this.nev = nev;
        this.neptun = neptun;
        this.aktiv = aktivE;
    }
}
let hallgato = new Hallgato('Petike', 'P3T1K3', true);
console.log(objektum, hallgato);

function osszeadas(a = 0, b = 0) {
    //console.log(a, b);
    return a + b;
}
console.log(osszeadas(6, 9), osszeadas(6), osszeadas());

const osszead = (a, b) => a + b;
const fgv1 = () => Math.floor(Math.random() * 101);
const fgv2 = limit => Math.floor(Math.random() * limit + 1);
// function osszead(a, b) { return a + b; }
console.log(osszead(3, 5));

console.log(fgv1(), fgv2(10));

let tomb2 = [765, 342, -1236, 432, -12, 3, 8, 1, -3, 7, -8, 4, 421, 57, -73, -986, 4364, 1231, -5765];
console.log(tomb2.filter((szam) => szam < 0));

console.log(tomb2.some((szam) => szam < 0), tomb2.every((szam) => szam < 0));

console.log(tomb2.map((szam) => Math.abs(szam)));

console.log(tomb2.find((szam) => szam < 0), tomb2.findIndex((szam) => szam < 0));

function max(a, b) {
    return Math.max(a, b);
}

function reduce(tomb, fuggveny, alapertek = null) {
    let osszeg = tomb[0];
    if (alapertek != null) {
        osszeg = alapertek;
    }
    /*if (alapertek != null) {
        i = 0;
    } else {
        i = 1;
    }*/
    for (let i = (alapertek != null ? 0 : 1); i < tomb.length; i++) {
        osszeg = fuggveny(osszeg, tomb[i]);
    }
    return osszeg;
}
console.log(reduce([1, 2, 3], osszeadas, 100));
console.log(reduce([1, 2, 3, -6], max));

console.log([1, 2, 3].reduce(osszeadas, 100));

for (const ertek of [1, 2, 'szöveg', false]) {
    console.log(ertek);
}

for (const index in [1, 2, 'szöveg', false]) {
    console.log(index);
}

[1, 2, 'szöveg', false].forEach(clog);

function clog(ertek, index) {
    console.log(`${index}. - ${ertek} (${typeof ertek})`);
}