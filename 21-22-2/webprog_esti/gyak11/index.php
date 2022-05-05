<?php
session_start();
if (isset($_SESSION['username']))
{
    $json = json_decode(file_get_contents('felhasznalok.json'), true);
    $felh = null;
    if (isset($json[$_SESSION['username']]))
    {
        $felh = $json[$_SESSION['username']];
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Főoldal</title>
</head>
<body>
    <h1>NeptunMail</h1>
    <?php if (!isset($_SESSION['username']) || $felh == null): ?>
    <a href="/signin.php">Bejelentkezés</a> <a href="/signup.php">Regisztráció</a>
    <?php else: ?>
    <a href="send.php">Levél írása</a> <a href="/signout.php">Kijelentkezés</a>
    <table>
        <tr>
            <th>Tárgy</th>
            <th>Feladó</th>
            <th>Dátum</th>
        </tr>
        <?php foreach ($felh['emails'] as $email): ?>
        <tr>
            <td><a href="#"><?= $email['subject'] ?></a></td>
            <td><?= $email['sender'] ?></td>
            <td><?= $email['date'] ?></td>
        </tr>
        <?php endforeach ?>
    </table>
    <?php endif ?>
</body>
</html>