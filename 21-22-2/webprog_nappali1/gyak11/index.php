<?php
session_start();
//$_SESSION['cart'] = [];
$json = json_decode(file_get_contents("mail.json"), true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Főoldal | NeptunM@il</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="logo">NeptunM@il</h1>
    <?php if (isset($_SESSION['username'])): ?>
        Bejelentkezve: <?= $_SESSION['username'] ?> <a href="new.php">Új üzenet</a> <a href="signout.php">Kijelentkezés</a>
        <table>
        <tr>
            <th>Tárgy</th>
            <th>Küldő</th>
            <th>Dátum</th>
        </tr>
        <?php if (isset($json[$_SESSION['username']])):
              foreach ($json[$_SESSION['username']] as $id => $email): ?>
            <tr>
                <td><a href="#" data-username="<?= $_SESSION['username'] ?>" data-id="<?= $id ?>"><?= $email['topic'] ?></a></td>
                <td><?= $email['sender'] ?></td>
                <td><?= $email['date'] ?></td>
            </tr>
        <?php endforeach; endif; ?>
        </table>
        <div id="text"></div>
        <script src="ajax.js"></script>
    <?php else: ?>
    <a href="signin.php">Bejelentkezés</a> <a href="signup.php">Regisztráció</a>
    <?php endif ?>
</body>
</html>