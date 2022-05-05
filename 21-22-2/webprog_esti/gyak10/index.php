<pre>
<?php
$lorem_ipsum = file_get_contents("lorem_ipsum.txt");
//echo $lorem_ipsum;

$json = json_decode(file_get_contents("becenev.json"), true);
//array_push($json, "valami");
//$json["valami_kulcs"] = "valami_ertek";
var_dump($json);

file_put_contents("ki.txt", "random szöveg blablabla");
//file_put_contents("adat2.json", json_encode($json));
?>
</pre>