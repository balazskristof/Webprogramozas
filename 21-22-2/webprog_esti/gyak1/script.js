let szoveg = 'Én egy szöveg vagyok.'; // "..." is használható
let egeszszam = 12;
let tortszam = 1.2;
let logikai = true; // vagy 'false'

console.log(`A szoveg változó értéke: '${szoveg}', típusa: ${typeof szoveg}`); // alt gr + 7
console.log(egeszszam + tortszam, typeof egeszszam, typeof tortszam, logikai);

let null_ertek = null;
let ures; // undefined

const konstans = 42;
//konstans = 24; // ILYET NEM CSINÁLHATUNK!
console.log(konstans);

let foo = 'foo';
let bar = foo;
foo = 'bar';

console.log(egeszszam == 12); // true (== -> érték szerinti összehasonlítás)
console.log(egeszszam == '12'); // true
console.log(egeszszam === 12); // true (=== -> érték és típus szerinti összehasonlítás)
console.log(egeszszam === '12'); // false

for (let i = 0; i < 5; i++) {
    console.log(i);
}

if (null_ertek == null) {
    console.log('A null_ertek még mindig null.');
} else {
    console.log('A null_ertek megváltozott.');
}

while (null_ertek == null) {
    null_ertek = 32;
}

do {
    egeszszam--;
} while (egeszszam > 10);

switch (foo) {
    case 'foo':
        console.log('bar');
        break;
    case 'bar':
        console.log('foo');
        break;
    default:
        console.log('foobar');
        break;
}

let tomb = [12, 1.2, 'szöveg', true, [[[]]], {}];
console.log(tomb);
tomb = [-6, 5, 4, 2, -2, -1, 42, 26, 51, 10, -89, -64, 32, 24];

console.log(tomb[0]);
console.log(tomb.length);

tomb.push(25);
let legutolsoelem = tomb.pop(); // 25
tomb.unshift(52);
let legelsoelem = tomb.shift(); // 52

let kivagott = tomb.splice(7, 1);
console.log(tomb, kivagott);
console.log(tomb.join('😂'));

let objektum = {
    nev: 'Petike',
    neptun: 'B4TM4N',
    kreditindex: 3.99,
    tantargyak: ['Webprogramozás', 'Imperatív programozás', 'Diszkrét matematika'],
    szeretiazeltet: true,
    obj: {
        foo: 'foo',
        bar: 'bar'
    },
    eletkor: function(x) {
        return 22 + x;
    }
};
console.log(objektum);
console.log(objektum.nev, objektum.eletkor(100), objektum.neptun, objektum.tantargyak.join('; '));

function osszeadas(a = 0, b = 0) {
    console.log(a, b);
    return a + b;
}
console.log(osszeadas(3, 5));
console.log(osszeadas(3));
console.log(osszeadas());

tomb = [-6, 5, 4, 2, -2, -1, 42, 26, 51, 10, -89, -64, 32, 24];

function buta_filter(tomb) {
    let szurt = [];
    for (let ertek of tomb) {
        if (ertek < 0) {
            szurt.push(ertek);
        }
    }
    return szurt;
}
console.log(buta_filter(tomb));

function filter(tomb, fuggveny) {
    let szurt = [];
    for (let ertek of tomb) {
        if (fuggveny(ertek)) {
            szurt.push(ertek);
        }
    }
    return szurt;
}
console.log(filter(tomb, function (ertek) { return ertek < 0; }));
console.log(filter(tomb, function (ertek) { return ertek >= 0; }));

console.log(filter(tomb, (ertek) => ertek < 0));

// Tömbfüggvények

console.log(tomb.filter((ertek) => ertek < 0));
let szurt_negativok = tomb.filter((ertek) => ertek < 0);

console.log(tomb.map((ertek) => Math.abs(ertek)));
console.log(tomb.map((ertek) => -1 * ertek));

console.log(tomb.every((ertek) => ertek >= 0));
console.log(tomb.some((ertek) => ertek >= 0));

console.log(tomb.find((ertek) => ertek == 26));
console.log(tomb.findIndex((ertek) => ertek == 26));

function sum_tomb(tomb) {
    let osszeg = 0;
    for (const ertek of tomb) {
        osszeg += ertek;
    }
    return osszeg;
}
console.log(sum_tomb(tomb.map((ertek) => Math.abs(ertek))));

let tomb2 = tomb.map((ertek) => Math.abs(ertek));
console.log(tomb2.reduce((osszeg, ertek) => osszeg + ertek));
console.log(tomb.reduce((max, ertek) => Math.max(max, ertek)));

let tombA = [1, 2, 3];
let tombB = tombA;
tombA[1] = 'kismacska';
tombA = 'kismacska';
console.log(tombA, tombB);