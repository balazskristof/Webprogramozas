<?php
$hibak = [];
if (isset($_POST['name']) || isset($_POST['age'])) {
    //var_dump($_POST);
    $name = $_POST['name'];
    if (empty(trim($name))) {
        $hibak[] = "A név megadása kötelező.";
    }

    $age = $_POST['age'];
    if (empty(trim($age))) {
        $hibak[] = "A kor megadása kötelező.";
    } else if (!is_numeric($age)) {
        $hibak[] = "A kornak számnak kell lennie.";
    }

    if (empty($hibak)) {
        $json = json_decode(file_get_contents("zh_form.json"), true);
        $json[] = [
            'name' => $name,
            'age' => intval($age)
        ];
        file_put_contents("zh_form.json", json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }
}
?>
<ul>
    <?php foreach ($hibak as $hiba): ?>
        <li><?= $hiba ?></li>
    <?php endforeach ?>
</ul>
<h1>Diák mentése</h1>
<form action="" method="post">
Név: <input type="text" name="name" /> <br>
Kor: <input type="text" name="age" /> <br>
<button type="submit">Diák mentése</button>
</form>