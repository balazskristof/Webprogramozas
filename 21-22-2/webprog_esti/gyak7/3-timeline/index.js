const animButton = document.querySelector('#animation');
const stopButton = document.querySelector('#stop');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let pixelsPerYear = 5;
let origoYear = 1000;
let dt = 0.2;

function year2px(year) {
    return (year - origoYear) * pixelsPerYear;
}

function rajzolas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'red';
    for (let i = 1000; i <= 1500; i += 50) {
        ctx.beginPath();
        ctx.moveTo(year2px(i), 0);
        ctx.lineTo(year2px(i), canvas.height);
        ctx.stroke();
        ctx.fillText(i, year2px(i), 12);
    }

    ctx.strokeStyle = 'black';
    for (const arpad of arpads) {
        ctx.beginPath();
        ctx.rect(year2px(arpad.from), 50, year2px(arpad.to) - year2px(arpad.from), 50);
        ctx.stroke();
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.fillText(arpad.name, year2px(arpad.from), 62);
        ctx.fillText(`${arpad.from}-${arpad.to}`, year2px(arpad.from), 86);
    }

    ctx.strokeStyle = 'black';
    for (const plantaneget of plantanegets) {
        ctx.beginPath();
        ctx.rect(year2px(plantaneget.from), 120, year2px(plantaneget.to) - year2px(plantaneget.from), 50);
        ctx.stroke();
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.fillText(plantaneget.name, year2px(plantaneget.from), 132);
        ctx.fillText(`${plantaneget.from}-${plantaneget.to}`, year2px(plantaneget.from), 156);
    }
}

rajzolas();

leftButton.addEventListener('click', () => {
    origoYear -= 10;
    rajzolas();
});
rightButton.addEventListener('click', () => {
    origoYear += 10;
    rajzolas();
});

let animOn = false;
function anim() {
    origoYear += 5;
    rajzolas();
    if (animOn && origoYear < 1500) {
        window.requestAnimationFrame(anim);
    } else {
        animOn = false;
        origoYear = 1000;
    }
}

animButton.addEventListener('click', () => {
    window.requestAnimationFrame(anim);
    animOn = true;
});
stopButton.addEventListener('click', () => {
    animOn = false;
});