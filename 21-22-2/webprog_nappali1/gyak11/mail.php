<?php
$output = [
    'ok' => false
];
if (isset($_GET['id']) && isset($_GET['username'])) {
    $json = json_decode(file_get_contents("mail.json"), true);
    if (isset($json[$_GET['username']]) && isset($json[$_GET['username']][$_GET['id']]))
    {
        $output = [
            'ok' => true,
            'text' => $json[$_GET['username']][$_GET['id']]['text']
        ];
    }
}
echo json_encode($output);
?>