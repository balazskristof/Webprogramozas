let szoveg = 'Ez egy másik szöveg.'; // "..." is használható
let szam = 12;
let tortszam = 1.2;
let logikai = true;

const konstans = 'Ez egy konstans';

console.log(szoveg, szam, tortszam, logikai);
console.log("Ez egy változó nélküli szöveg.", 12, true);

console.log(`A 'szoveg' értéke: '${szoveg}', a szam + tortszam = ${szam + tortszam}, ${logikai}, ${szoveg + szam}`);
console.log('A szam értéke: ' + szam + '.');

console.log(`Műveletek: ${szam + 3}, ${szam - 3}, ${szam / 3}, ${szam * 2}, ${szam % 5}`);

// Értékadási műveletek
//szam += 3; // szam = szam + 3
//szam -= 3; // szam = szam - 3
//szam /= 3; // szam = szam / 3
//szam *= 2; // szam = szam * 2
//szam %= 5; // szam = szam % 5

if (szam > 10) {
    // utasítások...
    console.log('A szám nagyobb, mint 10');
} else {
    console.log('A szám kisebb vagy egyenlő 10-el');
}

let szam2 = 0;
while (szam2 < 5) {
    // utasítások...
    szam2++; // szam2--;
    console.log(szam2);
}

console.log('---');

do {
    szam2--;
    console.log(szam2);
} while(szam2 > 0);

console.log('---');

for (let i = 1; i <= 3; i++) {
    szam2 += i;
}
console.log(szam2);

switch (szam2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log('A szam2 páratlan egyjegyű szám.');
        break;
    default:
        console.log('A szam2 páros vagy nem egyjegyű.');
        break;
}

console.log(szam == 12);
console.log(szam == '12');
console.log(szam === '12');

console.log(`${typeof szam} ${szam}, ${typeof szoveg} ${szoveg}, ${typeof logikai} ${logikai}`);

// Függvények
function osszeadas(a = 0, b = 0) {
    //let osszeg = a + b;
    //return osszeg;
    console.log(a, b);
    return a + b;
}
console.log(osszeadas(szam, 3));
console.log(osszeadas(szam));
console.log(osszeadas());

let tomb = [4, 6, 8, 5, 3, 1, 6];
console.log(tomb[0]); // 4
console.log(tomb);
tomb.push(7); // tömb végére hozzáadás
console.log(tomb);
console.log(tomb.length);
tomb.pop(); // tömb végének levágása
tomb.shift(); // tömb elejének levágása
tomb.unshift(9); // tömb elejére hozzáadás
let kivagott = tomb.splice(1, 5); // tömbből kivágás
console.log(tomb, kivagott);
tomb.push(2);
console.log(tomb.join('----'));

function sum(tomb) {
    let osszeg = 0;
    //for (let i = 0; i < tomb.length; i++) {
    //    osszeg += tomb[i];
    //}
    for (let szam of tomb) {
        osszeg += szam;
    }
    //for (let index in tomb) {
    //    osszeg += tomb[index];
    //}
    return osszeg;
}
console.log(sum(tomb));
console.log(sum([4, 6, 8, 5, 3, 1, 6]));

let tomb2 = [1, 'szoveg', true, [1, 2, 3], tomb];

let objektum = {
    nev: 'Gipsz Jakab',
    neptun: 'B4TM4N',
    targyak: ['Webprogramozás', 'Diszkrét matematika 2.'],
    alobjektum: {
        bla: 'bla',
        foo: 'bar'
    }
};
console.log(objektum, objektum.alobjektum);
console.log(`Név: ${objektum.nev}, Neptun-kód: ${objektum.neptun}, Tantárgyak: ${objektum.targyak.join(', ')}`);

let tomb3 = [4, 6, -2, 7, -5, -4, 9, 8, 5, -1, -6, -3, 3, 1, 6];

function buta_szuro(tomb) {
    let szurt = [];
    for (let szam of tomb) {
        if (szam < 0) {
            szurt.push(szam);
        }
    }
    return szurt;
}
console.log(buta_szuro(tomb3));

function okos_szuro(tomb, feltetel) {
    let szurt = [];
    for (let szam of tomb) {
        if (feltetel(szam)) {
            szurt.push(szam);
        }
    }
    return szurt;
}
console.log(okos_szuro(tomb3, function (szam) { return szam < 0 }));

let osszeadas2 = (a, b) => a + b;

console.log(okos_szuro(tomb3, (szam) => szam < 0));

// Tömbfüggvények
console.log('---');
function negativE(szam) {
    return szam < 0;
}
console.log(tomb3.filter(negativE));

console.log(tomb3.some(negativE));
console.log(tomb3.every(negativE));


console.log(tomb3.filter(negativE).every(negativE));

console.log(tomb3.map((szam) => Math.abs(szam)));

console.log(tomb3.reduce((accumulator, value) => accumulator + value));
console.log(tomb3.reduce((accumulator, value) => accumulator + value, 100));

console.log(tomb3.find((szam) => szam > 10));
console.log(tomb3.findIndex((szam) => szam < 0));

const konstans_tomb = [1, 2, 3];
let nemkonstans_tomb = konstans_tomb;
nemkonstans_tomb = 'ez egyáltalán nem egy tömb, ez teljesen más';
konstans_tomb.push(4);
console.log(konstans_tomb, nemkonstans_tomb);

let teszt1 = 'asd';
let teszt2 = teszt1;
teszt1 = 'wow';
console.log(teszt1, teszt2);