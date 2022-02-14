const legok = [
    {
        nev: 'Köztársasági hadihajó',
        szam: 75309,
        ar: 128000,
        tema: 'starwars'
    },
    {
        nev: 'Roxfort kastély',
        szam: 71043,
        ar: 135000,
        tema: 'harrypotter'
    },
    {
        nev: 'A SHIELD Helicarrier',
        szam: 76042,
        ar: 300000,
        tema: 'marvel'
    },
    {
        nev: 'Halálcsillag',
        szam: 75159,
        ar: 250000,
        tema: 'starwars'
    },
    {
        nev: 'Batmobile 1989',
        szam: 76139,
        ar: 150000,
        tema: 'dc'
    },
    {
        nev: 'Millenium Falcon',
        szam: 75192,
        ar: 280000,
        tema: 'starwars'
    }
];

/* Tábla HTML-ben:
<table>
    <tr>
        <td>Köztársasági hadihajó</td>
        <td>75309</td>
        <td>128000</td>
    </tr>
    .
    .
    .
    <tr>
        <td>Millenium Falcon</td>
        <td>75192</td>
        <td>280000</td>
    </tr>
</table>
*/

/* Táblázat generálás lépéseit:
 - table generálás
 - minden egyes elemre a legok tömbben:
   - tr generálás (sor)
     - td generálás (cella) háromszor (név, szám, ár)
*/