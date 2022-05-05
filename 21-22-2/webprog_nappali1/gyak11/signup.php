<?php
session_start();

$hibak = [];
if (isset($_POST['submit'])) {
    if (!isset($_POST['username']) || empty(trim($_POST['username']))) {
        $hibak['username'] = 'A felhasználónév megadása kötelező!';
    }
    if (!isset($_POST['password']) || empty(trim($_POST['password']))) {
        $hibak['password'] = 'A jelszó megadása kötelező!';
    } else if (!isset($_POST['confirm_password']) || empty(trim($_POST['confirm_password']))) {
        $hibak['confirm_password'] = 'A jelszó újbóli megadása kötelező!';
    } else if ($_POST['password'] != $_POST['confirm_password']) {
        $hibak['confirm_password'] = 'A megadott jelszavak nem egyeznek!';
    }

    if (empty($hibak)) {
        $json = json_decode(file_get_contents('users.json'), true);
        $exists = false;
        foreach ($json as $user) {
            if ($user['username'] == $_POST['username']) {
                $exists = true;
                break;
            }
        }
        if ($exists) {
            $hibak['submit'] = 'A megadott felhasználónév már regiszrálva van!';
        } else {
            $json[] = [
                'username' => $_POST['username'],
                'password' => $_POST['password']
            ];
            file_put_contents('users.json', json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
            $_SESSION['username'] = $_POST['username'];
        }
    }
}

if (isset($_SESSION['username'])) {
    header('Location: index.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regisztráció | NeptunM@il</title>
</head>
<body>
    <form method="post">
        <input type="text" name="username" placeholder="Felhasználónév">
        <?= isset($hibak['username']) ? $hibak['username'] : '' ?>
        <input type="password" name="password" placeholder="Jelszó">
        <?= isset($hibak['password']) ? $hibak['password'] : '' ?>
        <input type="password" name="confirm_password" placeholder="Jelszó megerősítése">
        <?= isset($hibak['confirm_password']) ? $hibak['confirm_password'] : '' ?>
        <input type="submit" name="submit" value="Regisztráció">
        <?= isset($hibak['submit']) ? $hibak['submit'] : '' ?>
    </form>
</body>
</html>