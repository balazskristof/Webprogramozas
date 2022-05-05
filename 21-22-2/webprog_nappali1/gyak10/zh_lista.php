<?php
$students = [
    ['name' => 'Student1', 'age' => 20],
    ['name' => 'Student2', 'age' => 10],
    ['name' => 'Student3', 'age' => 30],
    ['name' => 'Student4', 'age' => 20],
    ['name' => 'Student5', 'age' => 10],
    ['name' => 'Student6', 'age' => 42],
    ['name' => 'Student7', 'age' => 24],
    ['name' => 'Student8', 'age' => 33],
    ['name' => 'Student9', 'age' => 14],
    ['name' => 'Student10', 'age' => 15],
];
$age = null;
if (isset($_GET['age']) &&
    !empty(trim($_GET['age'])) &&
    is_numeric($_GET['age'])) {
    $age = intval($_GET['age']);
}
?>
<ul>
<?php foreach ($students as $student): ?>
    <?php if ($age == null || $student['age'] == $age): ?>
        <li><?= $student['name'] ?> (<?= $student['age'] ?>)</li>
    <?php endif ?>
<?php endforeach ?>
</ul>