<?php
$shapes = [
    [
        'type'    => 'rect',
        'params'  => [
            'x' => 0,
            'y' => 0,
            'width' => 50,
            'height' => 50,
            'rx' => 10,
        ]
    ],
    [
        'type'    => 'line',
        'params'  => [
            'x1' => 60,
            'y1' => 100,
            'x2' => 80,
            'y2' => 120,
            'stroke' => 'red',
        ]
    ],
    [
        'type'    => 'line',
        'params'  => [
            'x1' => 80,
            'y1' => 120,
            'x2' => 150,
            'y2' => 50,
            'stroke' => 'red',
        ]
    ],
    [
        'type'    => 'circle',
        'params'  => [
            'cx' => 150,
            'cy' => 100,
            'r' => 20,
        ]
    ],
    [
        'type'    => 'rect',
        'params'  => [
            'x' => 120,
            'y' => 120,
            'width' => 10,
            'height' => 10,
            'fill' => 'red'
        ]
    ],
];
?>
<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
<?php foreach ($shapes as $shape): ?>
<<?= $shape['type'] ?> 
    <?php foreach ($shape['params'] as $attr => $value): ?>
        <?= $attr ?>="<?= $value ?>"
    <?php endforeach ?>
/>
<?php endforeach ?>
</svg>