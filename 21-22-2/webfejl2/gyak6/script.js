let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
/*
context.beginPath();
context.rect(10, 10, 260, 130);
context.fill();
context.stroke();

context.strokeRect(10, 150, 260, 130);
context.fillRect(10, 150, 260, 130);

context.beginPath();
context.arc(400, 400, 50, 0, Math.PI * 2, true);
context.lineTo(400, 400);
context.fill();

context.beginPath();
context.ellipse(400, 550, 250, 50, 1, 0, Math.PI * 2);
context.stroke();
context.fill();
*/

/*context.lineWidth = 2;
context.font = '48px Comic Sans MS';
context.strokeText('hello, world', 100, 100);
context.fillText('hello, world', 100, 400);

context.fillStyle = 'maroon';
context.strokeStyle = 'blue';

context.beginPath();

context.lineWidth = 25;
context.lineJoin = 'round';
context.lineCap = 'round'

context.moveTo(300, 300);
context.lineTo(350, 150);
context.lineTo(400, 300);
//context.lineTo(300, 300);

//context.closePath();

context.stroke();
context.fill();
*/

// házikó
context.beginPath();
context.fillStyle = 'red';
context.moveTo(0, 100);
context.lineTo(75, 0);
context.lineTo(150, 100);
context.closePath();
context.fill();
context.strokeRect(25, 100, 100, 100);