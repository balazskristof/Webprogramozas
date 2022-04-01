// ===========
// Az alapok:
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
// Kezdésnek fekete háttér
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

// ===========
// Kapcsoló az időzítős és időalapú megoldás között
const idozitos = false;

// ===========
// Pattogó DVD logó
let dvd = {
    x: 0,
    y: 0,
    dx: 100, // másodpercenként megtett változás az x koordinátában
    dy: 100, // másodpercenként megtett változás az y koordinátában
    frissites: function() { // ez a függvény a pattanást valósítja meg
        if (this.x < 0 || this.x > x_max) {
            this.dx *= -1;
            this.dy = this.dy < 0 ? Math.random() * 100 : Math.random() * -100;
        } else if (this.y < 0 || this.y > y_max) {
            this.dy *= -1;
            this.dx = this.dx <= 0 ? Math.random() * 100 : Math.random() * -100;
        }
        //console.log(this);
    }
};
const x_max = canvas.width  - 128; // A kép ne mehessen tovább a canvas szélesssége mínusz a kép szélességénél
const y_max = canvas.height - 64;  // A kép ne mehessen tovább a canvas magassága mínusz a kép magassánál

function animacioA() {
    dvd.x += dvd.dx;
    dvd.y += dvd.dy;
    dvd.frissites();
    kirajzolas();
}

let elozoIdo;
function animacioB(ido) { // ido: az aktuális idő milliszekundumban
    if (elozoIdo === undefined) { // még nem történt lépés az animációban, beállítjuk a kezdőidőt
        elozoIdo = ido;
    }
    const kulonbseg = (ido - elozoIdo) / 1000; // a különbség másodpercben
    console.log(kulonbseg);
    dvd.x += dvd.dx * kulonbseg;
    dvd.y += dvd.dy * kulonbseg;
    elozoIdo = ido;
    dvd.frissites();
    kirajzolas();
    window.requestAnimationFrame(animacioB);
}

if (idozitos) {
    setInterval(animacioA, 1000);
} else {
    window.requestAnimationFrame(animacioB);
}

function kirajzolas() {
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(document.querySelector('img'), dvd.x, dvd.y);
}