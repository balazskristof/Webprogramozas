<?php
session_start();
if (!isset($_SESSION['username']))
{
    header('Location: index.php');
}

$hibak = [];
$siker = false;
if (isset($_POST['submit']))
{
    if (!isset($_POST['recipient']) || empty(trim($_POST['recipient'])))
    {
        $hibak['recipient'] = 'A címzett megadása kötelező!';
    }
    else
    {
        $cimzett = trim($_POST['recipient']);
    }

    if (!isset($_POST['subject']) || empty(trim($_POST['subject'])))
    {
        $targy = 'Névtelen levél';
    }
    else
    {
        $targy = trim($_POST['subject']);
    }

    $szoveg = str_replace('\r\n', '<br>', trim($_POST['text']));

    if (empty($hibak))
    {
        $json = json_decode(file_get_contents('felhasznalok.json'), true);
        foreach ($json as $id => $adat)
        {
            if ($id == $cimzett)
            {
                $siker = true;
                array_unshift($json[$id]['emails'], [
                    "subject" => $targy,
                    "sender" => $_SESSION['username'],
                    "text" => $szoveg,
                    "date" => "2022-05-02 18:52"
                ]);
                file_put_contents('felhasznalok.json', json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
                break;
            }
        }
        if (!$siker)
        {
            $hibak['form'] = 'A megadott cím nem létezik!';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regisztráció</title>
</head>
<body>
    <form method="post">
        <?php if (isset($hibak['form'])): ?>
            <span style="color:red"><?= $hibak['form'] ?></span><br>
        <?php elseif (empty($hibak) && $siker): ?>
            <span style="color:green">Az üzenet sikeresen el lett küldve. <a href="index.php">Vissza a főoldalra</a></span><br>
        <?php endif ?>
        <input type="text" name="recipient" placeholder="Címzett">
        <?php if (isset($hibak['recipient'])): ?>
            <span style="color:red"><?= $hibak['recipient'] ?></span>
        <?php endif ?><br>
        <input type="text" name="subject" placeholder="Tárgy"><br>
        <textarea name="text"></textarea>
        <input type="submit" name="submit" value="Küldés">
    </form>
</body>
</html>