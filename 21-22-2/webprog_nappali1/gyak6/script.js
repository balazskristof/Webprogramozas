let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

/*
context.fillStyle = '#ff0000';
context.strokeStyle = 'rgb(0, 255, 0)';

context.fillRect(60, 60, 250, 125);
context.strokeRect(60.5, 190.5, 250, 125);

context.fillStyle = '#00ff00';
context.fillRect(70, 70, 25, 25);
*/

context.lineJoin = 'round';
context.lineWidth = 8;
context.beginPath();
context.moveTo(30, 30);
context.lineTo(65, 65);
context.lineTo(30, 95);
//context.moveTo(60, 125);
//context.lineTo(125, 150);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(100, 100);
//context.arc(300, 300, 50, 0, Math.PI * 2);
context.arcTo(200, 200, 125, 300, 35);
context.stroke();

context.font = '24px Comic Sans MS';
context.fillStyle = 'maroon';
context.strokeStyle = 'aquamarine';
context.lineWidth = 5;
context.fillText('Hello, World!', 300, 400);
context.strokeText('Hello, World!', 300, 430);

context.beginPath();
context.lineJoin = 
context.rect(300, 300, 50, 50);
context.moveTo(300, 150);
context.lineTo(350, 150);
context.moveTo(200, 200);
context.ellipse(200, 200, 50, 100, Math.PI / 4, 0, Math.PI * 2);
context.stroke();
context.fill();