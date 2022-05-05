<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: index.php');
}

if (isset($_POST['submit'])) {
    $json = json_decode(file_get_contents('mail.json'), true);
    if (!isset($json[$_POST['to']])) {
        $json[$_POST['to']] = [];
    }
    $date = new DateTime();
    $text = str_replace(["\r\n", "\n"], '<br>', $_POST['text']);
    $json[$_POST['to']][] = [
        'topic' => empty(trim($_POST['topic'])) ? 'Nincs tárgy' : $_POST['topic'],
        'sender' => $_SESSION['username'],
        'text' => $text,
        'date' => $date->format('H-i-s y:m:d')
    ];
    file_put_contents('mail.json', json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új üzenet | NeptunM@il</title>
</head>
<body>
    <form method="post">
        <input type="text" name="to" placeholder="Címzett">
        <input type="text" name="topic" placeholder="Tárgy">
        <textarea name="text"></textarea>
        <input type="submit" name="submit" value="Küldés">
    </form>
</body>
</html>