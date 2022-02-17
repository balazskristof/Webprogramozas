const hosok = [
    {
        nev: 'Ashe',
        cim: 'a fagyos íjász',
        frakcio: 'Freljord'
    },
    {
        nev: 'Irelia',
        cim: 'a pengetáncos',
        frakcio: 'Ionia'
    },
    {
        nev: 'Darius',
        cim: 'Noxus keze',
        frakcio: 'Noxus'
    },
    {
        nev: 'Jinx',
        cim: 'a nagyágyú',
        frakcio: 'Zaun'
    },
    {
        nev: 'Vi',
        cim: 'a piltoveri végrehajtó',
        frakcio: 'Piltover'
    },
    {
        nev: 'Braum',
        cim: 'Freljord szíve',
        frakcio: 'Freljord'
    },
    {
        nev: 'Kennen',
        cim: 'a vihar szíve',
        frakcio: 'Ionia'
    },
    {
        nev: 'Lissandra',
        cim: 'a jégboszorkány',
        frakcio: 'Freljord'
    },
    {
        nev: 'Ekko',
        cim: 'a fiú, aki legyőzte az időt',
        frakcio: 'Zaun'
    }
];

/* Tábla HTML-ben:
<table>
    <tr>
        <td>Ashe</td>
        <td>a fagyos íjász</td>
        <td>Freljord</td>
    </tr>
    .
    .
    .
    <tr>
        <td>Ekko</td>
        <td>a fiú, aki legyőzte az időt</td>
        <td>Zaun</td>
    </tr>
</table>
*/

/* Táblázat generálás lépéseit:
 - table generálás
 - minden egyes elemre a legok tömbben:
   - tr generálás (sor)
     - td generálás (cella) háromszor (név, cím, frakció)
*/