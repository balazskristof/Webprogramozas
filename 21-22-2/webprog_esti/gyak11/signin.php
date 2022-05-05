<?php
session_start();
if (isset($_SESSION['username']))
{
    header('Location: index.php');
}

$hibak = [];
if (isset($_POST['submit']))
{
    if (!isset($_POST['username']) || empty(trim($_POST['username'])))
    {
        $hibak['username'] = 'A felhasználónév megadása kötelező!';
    }
    else
    {
        $felhnev = trim($_POST['username']);
    }

    if (!isset($_POST['password']) || empty(trim($_POST['password'])))
    {
        $hibak['password'] = 'A jelszavak megadása kötelező!';
    }
    else
    {
        $jelszo = trim($_POST['password']);
    }

    if (empty($hibak))
    {
        $json = json_decode(file_get_contents('felhasznalok.json'), true);
        foreach ($json as $id => $adat)
        {
            if ($id == $felhnev && $adat['password'] == $jelszo)
            {
                $_SESSION['username'] = $felhnev; // munkamenet
                header('Location: index.php'); // átirányítás
            }
        }
        $hibak['form'] = 'A megadott felhasználónév vagy jelszó helytelen!';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bejelentkezés</title>
</head>
<body>
    <form method="post">
        <?php if (isset($hibak['form'])): ?>
            <span style="color:red"><?= $hibak['form'] ?></span><br>
        <?php endif ?>
        <input type="text" name="username" placeholder="Felhasználónév">
        <?php if (isset($hibak['username'])): ?>
            <span style="color:red"><?= $hibak['username'] ?></span>
        <?php endif ?><br>
        <input type="password" name="password" placeholder="Jelszó">
        <?php if (isset($hibak['password'])): ?>
            <span style="color:red"><?= $hibak['password'] ?></span>
        <?php endif ?><br>
        <input type="submit" name="submit" value="Küldés">
    </form>
</body>
</html>