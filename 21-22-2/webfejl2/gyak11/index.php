<?php
session_start();
if (isset($_SESSION['username']))
{
    $json = json_decode(file_get_contents('felh.json'), true);
    $current_user = null;
    foreach ($json as $user)
    {
        if ($user['username'] == $_SESSION['username'])
        {
            $current_user = $user;
            break;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Főoldal</title>
</head>
<body>
    <h1>NeptunMail</h1>
    <hr>
    <?php if (isset($_SESSION['username']) && $current_user != null): ?>
    <a href="/signout.php">Kijelentkezés</a>
    <table>
        <tr>
            <th>Tárgy</th>
            <th>Feladó</th>
            <th>Dátum</th>
        </tr>
        <tr>
            <td><a href="#">Üdvözli a NeptunMail!</a></td>
            <td>noreply</td>
            <td>2022-05-02 16:49</td>
        </tr>
    </table>
    <?php else: ?>
    <a href="/signin.php">Bejelentkezés</a> <a href="/signup.php">Regisztráció</a>
    <?php endif ?>
</body>
</html>