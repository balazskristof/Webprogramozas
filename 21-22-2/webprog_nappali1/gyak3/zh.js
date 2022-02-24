// ===============================
// Adatok
const numbers = [5, 2, 15, -3, 6, -8, -2];

const matrix = [
  [1, 0, 3],
  [0, 2, 0],
  [4, 5, 6],
  [0, 0, 0],
];

const searchResults = {
  "Search": [
    {
      "Title": "The Hobbit: An Unexpected Journey",
      "Year": "2012",
      "imdbID": "tt0903624",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Desolation of Smaug",
      "Year": "2013",
      "imdbID": "tt1170358",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Battle of the Five Armies",
      "Year": "2014",
      "imdbID": "tt2310332",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "1977",
      "imdbID": "tt0077687",
      "Type": "movie"
    },
    {
      "Title": "Lego the Hobbit: The Video Game",
      "Year": "2014",
      "imdbID": "tt3584562",
      "Type": "game"
    },
    {
      "Title": "The Hobbit",
      "Year": "1966",
      "imdbID": "tt1686804",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "2003",
      "imdbID": "tt0395578",
      "Type": "game"
    },
    {
      "Title": "A Day in the Life of a Hobbit",
      "Year": "2002",
      "imdbID": "tt0473467",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: An Unexpected Journey - The Company of Thorin",
      "Year": "2013",
      "imdbID": "tt3345514",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Swedolation of Smaug",
      "Year": "2014",
      "imdbID": "tt4171362",
      "Type": "movie"
    }
  ],
  "totalResults": "51",
  "Response": "True"
};

// ===============================
// 1. feladat
// a) numbers tömb négyzetei
console.log(numbers, numbers.map(szam => szam * szam));
// b) numbers legkisebb eleme
//console.log(numbers.reduce((min, szam) => Math.min(min, szam)));
let min = Infinity;
for (const szam of numbers)
{
    min = Math.min(min, szam);
    /*if (szam < min)
    {
        min = szam;
    }*/
}
console.log(min);
// c) matrix csupa 0 indexe
/*function csupanulla(sor)
{
    return sor.every(function (szam)
    {
        return szam == 0;
    });
}*/
//console.log(matrix.findIndex(csupanulla));
console.log(matrix.findIndex(sor => sor.every(szam => szam == 0)));
// d) searchResults 2010 utáni filmjei
console.log(searchResults['Search'].filter(elem => elem.Year > 2010 && elem.Type == 'movie'));

// ===============================
// 2. feladat
let hue = document.querySelector('#hue');
let saturation = document.querySelector('#saturation');
let lightness = document.querySelector('#lightness');
let set = document.querySelector('#set');
let output = document.querySelector('#output');

function setHSL() {
    let hsl = `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
    output.value = hsl;
    document.body.style.backgroundColor = hsl;
}

set.addEventListener('click', setHSL);
hue.addEventListener('input', setHSL);
saturation.addEventListener('input', setHSL);
lightness.addEventListener('input', setHSL);


// ===============================
// 3. feladat
let contacts = document.querySelector('#contacts');
delegal(contacts, 'button', 'click', function (event) {
    console.log(this.dataset.toggle);
    let section = this.parentElement.parentElement;
    //console.log(section);
    let name = section.querySelector('.name');
    console.log(name.innerText);
    let cell = section.querySelector(`.${this.dataset.toggle}`);
    cell.hidden = false;
});