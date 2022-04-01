let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.strokeStyle = 'red';
ctx.fillStyle = 'rgba(0,0,0,.25)';

ctx.lineWidth = 5;
ctx.lineCap = 'butt';
ctx.lineJoin = 'bevel'

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(100, 200);
ctx.lineTo(175, 100);
ctx.lineTo(250, 200);
//ctx.lineTo(100, 200);
ctx.closePath();
ctx.stroke();
ctx.strokeStyle = 'red';
ctx.lineTo(100, 300);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.rect(150, 400, 75, 25);
ctx.moveTo(300, 400);
ctx.arc(300, 400, 50, 0.5, Math.PI * 2 - 0.5, false);
ctx.lineTo(300, 400);
ctx.moveTo(500, 600);
ctx.ellipse(500, 600, 90, 50, 1, 0.5, Math.PI * 2 - 0.5);
ctx.lineTo(500, 600);
ctx.stroke();
//ctx.fill();

ctx.font = '48px Comic Sans MS';
ctx.strokeText('Hello, World!', 0, 48);
ctx.fillText('Hello, World!', 0, 48);