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

    if (!isset($_POST['password']) || empty(trim($_POST['password'])) ||
        !isset($_POST['password_confirm']) || empty(trim($_POST['password_confirm'])))
    {
        $hibak['password'] = 'A jelszavak megadása kötelező!';
    }
    else if ($_POST['password'] != $_POST['password_confirm'])
    {
        $hibak['password'] = 'A jelszavak nem egyeznek!';
    }
    else
    {
        $jelszo = trim($_POST['password']);
    }

    if (empty($hibak))
    {
        $json = json_decode(file_get_contents('felhasznalok.json'), true);
        $egyedi = true;
        foreach ($json as $id => $adat)
        {
            if ($id == $felhnev)
            {
                $egyedi = false;
                break;
            }
        }
        if ($egyedi)
        {
            $json[$felhnev] = [
                'password' => $jelszo,
                'emails' => [
                    [
                        "subject" => "Üdvözli a NeptunMail!",
                        "sender" => "noreply",
                        "text" => "<h1>Üdv!</h1><p>Üdvözöljük a felhasználóink között!<p><p>Üdvözlettel,<br>NeptunMail adminisztrátor</p>",
                        "date" => "2022-05-02 18:13"
                    ]
                ]
            ];
            file_put_contents('felhasznalok.json', json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
            $_SESSION['username'] = $felhnev; // munkamenet
            header('Location: index.php'); // átirányítás
        }
        else
        {
            $hibak['form'] = 'A megadott felhasználónév már létezik!';
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
        <?php endif ?>
        <input type="text" name="username" placeholder="Felhasználónév">
        <?php if (isset($hibak['username'])): ?>
            <span style="color:red"><?= $hibak['username'] ?></span>
        <?php endif ?><br>
        <input type="password" name="password" placeholder="Jelszó">
        <?php if (isset($hibak['password'])): ?>
            <span style="color:red"><?= $hibak['password'] ?></span>
        <?php endif ?><br>
        <input type="password" name="password_confirm" placeholder="Jelszó megerősítés"><br>
        <input type="submit" name="submit" value="Küldés">
    </form>
</body>
</html>