/**
 * 
 * @param {Node} szulo Egy querySelectorral kiválasztott elem
 * @param {string} gyerek Egy CSS selector, amivel a szülőn belül keressük a gyerekeket
 * @param {string} mikor A vizsgált esemény neve
 * @param {(esemeny: Event, cel: Node) => void} mit A függvény, amit futtatni szeretnénk
 */
function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezelo(esemeny) {
        const esemenyCelja = esemeny.target;
        const esemenyKezeloje = this;
        const legkozelebbiGyerek = esemenyCelja.closest(gyerek);

        if (esemenyKezeloje.contains(legkozelebbiGyerek)) {
            mit(esemeny, legkozelebbiGyerek);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}