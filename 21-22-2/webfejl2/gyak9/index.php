<?php
// Adatellenőrzés:
// is_numeric -- a megadott változó számszerű-e (vagy ténylegesen szám, vagy számokból álló szöveg)
// intval -- a megadott változó számbeli értéke (gyakorlatilag konvertálás)
// floatval -- törtre konvertál

var_dump($_POST);
$hiba = "";
$hibak = [];
if (isset($_POST['submit'])) { // ha a "submit" létezik a GET/POST paraméterek közt, kaptam valamit
    // egyszeri hibaüzenet
    /*if (!isset($_POST['becenev']) ||
        !isset($_POST['kedvencszam']) ||
        empty(trim($_POST['becenev'])) ||
        empty(trim($_POST['kedvencszam']))) {
        $hiba = 'Nem adtál meg becenevet, vagy kedvencszámot!';
    } elseif (!is_numeric($_POST['kedvencszam'])) {
        $hiba = 'A kedvenc szám nem is egy szám!';
    }*/

    // mezőnkénti hibaüzenetek
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

    if (empty($hibak) && empty($hiba)) {
        if (file_exists("form.json"))
        {
            $json = json_decode(file_get_contents("form.json"), true);
        }
        $json[] = [
            'becenev' => $_POST['becenev'],
            'kedvencszam' => intval($_POST['kedvencszam'])
        ];
        file_put_contents("form.json", json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }
}
?>
<form method="post" novalidate>
    <?php if (!empty($hiba)): ?>
        <p style="color: red"><?= $hiba ?></p>
    <?php endif ?>
    Beceneved:<br><input type="text" name="becenev"
    <?php if (isset($_POST['becenev'])): ?>value="<?= $_POST['becenev']; endif ?>">

    <?php if (isset($hibak['becenev'])): ?>
        <span style="color: red"><?= $hibak['becenev'] ?></span>
    <?php endif ?><br>
    Kedvenc egész számod:<br><input type="number" name="kedvencszam" 
    <?php if (isset($_POST['kedvencszam']))
        echo "value=\"".$_POST['kedvencszam']."\"";
    ?> >
    <?php if (isset($hibak['kedvencszam'])): ?>
        <span style="color: red"><?= $hibak['kedvencszam'] ?></span>
    <?php endif ?><br>
    <input type="checkbox" name="palacsinta"
    <?php if (isset($_POST['palacsinta'])): ?>checked<?php endif ?>>Szeretem a palacsintát.
    <?php if (isset($hibak['palacsinta'])): ?>
        <span style="color: red"><?= $hibak['palacsinta'] ?></span>
    <?php endif ?><br>
    Milyen palacsintákat szeretsz:
    <input type="checkbox" name="palacsintaiz[]" value="lekvaros">Lekváros
    <input type="checkbox" name="palacsintaiz[]" value="kakaos">Kakaós
    <input type="checkbox" name="palacsintaiz[]" value="turos">Túrós<br>
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