<?php
// Adatellenőrzés:
// is_numeric -- a megadott változó számszerű-e (vagy ténylegesen szám, vagy számokból álló szöveg)
// intval -- a megadott változó számbeli értéke (gyakorlatilag konvertálás)
// floatval -- törtre konvertál


var_dump($_POST);
$hiba = "";
$hibak = [];
if (isset($_POST['submit'])) { // ha a "submit" létezik a GET/POST paraméterek közt, kaptam valamit
    if (!isset($_POST['becenev']) ||
        !isset($_POST['kedvencszam']) ||
        empty(trim($_POST['becenev'])) ||
        empty(trim($_POST['kedvencszam']))) {
        $hiba = 'Nem adtál meg becenevet, vagy kedvencszámot!';
    } elseif (!is_numeric($_POST['kedvencszam'])) {
        $hiba = 'A kedvenc szám nem is egy szám!';
    }



    if (!isset($_POST['becenev']) || empty(trim($_POST['becenev']))) {
        $hibak['becenev'] = 'Nem adtál meg becenevet!';
    }

    if (!isset($_POST['kedvencszam']) || empty(trim($_POST['kedvencszam']))) {
        $hibak['kedvencszam'] = 'Nem adtál meg kedvenc számot!';
    } elseif (!is_numeric($_POST['kedvencszam'])) {
        $hibak['kedvencszam'] = 'A kedvenc szám nem is egy szám!';
    } elseif (intval($_POST['kedvencszam']) != floatval($_POST['kedvencszam'])) {
        $hibak['kedvencszam'] = 'A kedvenc számod nem egész szám!';
    }

    if (!isset($_POST['palacsinta'])) {
        $hibak['palacsinta'] = 'Olyan nincs, hogy nem eszel palacsintát :O';
    }
}
?>
<form method="post" novalidate>
    <?php if (!empty($hiba)): ?>
        <p style="color: red"><?= $hiba ?></p>
    <?php endif ?>
    Beceneved:<br><input type="text" name="becenev" 
    <?php if (isset($_POST['becenev']))
        echo "value=\"".$_POST['becenev']."\"";
    ?> >

    <?php if (isset($hibak['becenev'])): ?>
        <span style="color: red"><?= $hibak['becenev'] ?></span>
    <?php endif ?><br>
    Kedvenc számod:<br><input type="text" name="kedvencszam" 
    <?php if (isset($_POST['kedvencszam']))
        echo "value=\"".$_POST['kedvencszam']."\"";
    ?> >
    <?php if (isset($hibak['kedvencszam'])): ?>
        <span style="color: red"><?= $hibak['kedvencszam'] ?></span>
    <?php endif ?><br>
    <input type="checkbox" name="palacsinta" <?php if (isset($_POST['palacsinta'])) echo "checked"; ?>>Szeretem a palacsintát.
    <?php if (isset($hibak['palacsinta'])): ?>
        <span style="color: red"><?= $hibak['palacsinta'] ?></span>
    <?php endif ?><br>
    Milyen palacsintákat szeretsz:
    <input type="checkbox" name="palacsintaiz[]" value="Lekváros">Lekváros
    <input type="checkbox" name="palacsintaiz[]" value="Kakaós">Kakaós
    <input type="checkbox" name="palacsintaiz[]" value="Túrós">Túrós<br>
    <input type="submit" name="submit" value="Küldés">
</form>
<?php if (empty($hibak) && empty($hiba) && isset($_POST['submit'])): ?>
<p style="color: green">
A beceneved <?= $_POST['becenev'] ?>, a kedvenc számod a(z) <?= $_POST['kedvencszam'] ?>, a palacsintát <?= isset($_POST['palacsinta']) ? '' : 'nem ' ?>szereted.
<?php if (isset($_POST['palacsinta']) && isset($_POST['palacsintaiz'])): ?>
<ul>
    <?php foreach ($_POST['palacsintaiz'] as $iz): ?>
        <li><?= $iz ?></li>
    <?php endforeach ?>
</ul>
<?php endif ?>
</p>
<?php endif ?>