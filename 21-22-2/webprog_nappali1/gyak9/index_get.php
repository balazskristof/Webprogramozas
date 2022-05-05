<?php
var_dump($_GET);
$hiba = "";
$hibak = [];
if (isset($_GET['submit'])) { // ha a "submit" létezik a GET paraméterek közt, kaptam valamit
    if (!isset($_GET['becenev']) ||
        !isset($_GET['kedvencszam']) ||
        empty(trim($_GET['becenev'])) ||
        empty(trim($_GET['kedvencszam']))) {
        $hiba = 'Nem adtál meg becenevet, vagy kedvencszámot!';
    } elseif (!is_numeric($_GET['kedvencszam'])) {
        $hiba = 'A kedvenc szám nem is egy szám!';
    }



    if (!isset($_GET['becenev']) || empty(trim($_GET['becenev']))) {
        $hibak['becenev'] = 'Nem adtál meg becenevet!';
    }

    if (!isset($_GET['kedvencszam']) || empty(trim($_GET['kedvencszam']))) {
        $hibak['kedvencszam'] = 'Nem adtál meg kedvenc számot!';
    } elseif (!is_numeric($_GET['kedvencszam'])) {
        $hibak['kedvencszam'] = 'A kedvenc szám nem is egy szám!';
    }
}
?>
<form>
    <?php if (!empty($hiba)): ?>
        <p style="color: red"><?= $hiba ?></p>
    <?php endif ?>
    Beceneved:<br><input type="text" name="becenev">
    <?php if (isset($hibak['becenev'])): ?>
        <span style="color: red"><?= $hibak['becenev'] ?></span>
    <?php endif ?><br>
    Kedvenc számod:<br><input type="number" name="kedvencszam">
    <?php if (isset($hibak['kedvencszam'])): ?>
        <span style="color: red"><?= $hibak['kedvencszam'] ?></span>
    <?php endif ?><br>
    <input type="submit" name="submit" value="Küldés">
</form>