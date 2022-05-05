<?php
session_start();

$hibak = [];
if (isset($_POST['submit'])) {
    if (!isset($_POST['username']) || empty(trim($_POST['username']))) {
        $hibak['username'] = 'A felhasználónév megadása kötelező!';
    }
    if (!isset($_POST['password']) || empty(trim($_POST['password']))) {
        $hibak['password'] = 'A jelszó megadása kötelező!';
    }

    if (empty($hibak)) {
        $json = json_decode(file_get_contents('users.json'), true);
        $valid = false;
        foreach ($json as $user) {
            if ($user['username'] == $_POST['username'] && $user['password'] == $_POST['password']) {
                $valid = true;
                break;
            }
        }
        if ($valid) {
            $_SESSION['username'] = $_POST['username'];
        } else {
            $hibak['submit'] = 'A megadott felhasználónév vagy jelszó hibás!';
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
    <title>Bejelentkezés | NeptunM@il</title>
</head>
<body>
    <form method="post">
        <input type="text" name="username" placeholder="Felhasználónév">
        <?= isset($hibak['username']) ? $hibak['username'] : '' ?>
        <input type="password" name="password" placeholder="Jelszó">
        <?= isset($hibak['password']) ? $hibak['password'] : '' ?>
        <input type="submit" name="submit" value="Bejelentkezés">
        <?= isset($hibak['submit']) ? $hibak['submit'] : '' ?>
    </form>
</body>
</html>