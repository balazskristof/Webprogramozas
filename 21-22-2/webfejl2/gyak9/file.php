<pre>
<?php
/*$lorem = file_get_contents("lorem.txt");
echo $lorem;
$lorem2 = "amet sit dolor ipsum lorem";
file_put_contents("lorem2.txt", $lorem2);*/

$json = json_decode(file_get_contents("adat.json"), true);
//var_dump($json);
//echo $json[0]['felvettek_targyak'][0];
//echo $json[0]['nev'];
//echo $json[0]['nev'];
array_push($json, array(
    "nev" =>"I. Japsz Gikab",
    "eletkor" => 44,
    "aktiv_jogviszony" => false,
    "felvettek_targyak" => []
));
$json[] = [
    "nev" =>"I. Japsz Gikab",
    "eletkor" => 44,
    "aktiv_jogviszony" => false,
    "felvettek_targyak" => []
];
var_dump($json);
file_put_contents("adat2.json", json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
?>
</pre>