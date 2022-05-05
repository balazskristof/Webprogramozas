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

    if (!isset($_POST['password']))
    {
        $hibak['jelszo'] = 'A jelszó megadása kötelező!';
    }

    if (empty($hibak))
    {
        $json = json_decode(file_get_contents('felh.json'), true);
        foreach ($json as $user)
        {
            if ($user['username'] == trim($_POST['username']) && $user['password'] == $_POST['password'])
            {
                $_SESSION['username'] = trim($_POST['username']);
                header('Location: index.php');
            }
        }
        $hibak['form'] = 'A megadott felhasználónév vagy jelszó helytelen!';
    }
}
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regisztráció</title>
</head>
<body>
    <h1>NeptunMail</h1>
    <hr>
    <form method="post">
        <?php if (isset($hibak['form'])): ?>
            <span style="color: red"><?= $hibak['form']; ?><br>
        <?php endif ?>
        <input type="text" name="username" placeholder="Felhasználónév">
        <?php if (isset($hibak['username'])): ?>
            <span style="color: red"><?= $hibak['username']; ?>
        <?php endif ?><br>
        <input type="password" name="password" placeholder="Jelszó">
        <?php if (isset($hibak['password'])): ?>
            <span style="color: red"><?= $hibak['password']; ?>
        <?php endif ?><br>
        <input type="submit" name="submit" value="Küldés">
    </form>
</body>
</html>