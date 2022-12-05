const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 그림을 그릴 수 있는 context 변수화

canvas.width = 800;
canvas.height = 800;


/*
* 집 모양 그려보기 canvas
*/
ctx.fillRect(100, 100, 50, 200);
ctx.fillRect(400, 100, 50, 200);

ctx.moveTo(150, 300);
ctx.lineTo(450, 300);
ctx.stroke();

ctx.fillRect(250, 200, 50, 100);

ctx.moveTo(150, 100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.moveTo(100, 100);
ctx.lineTo(275, 30);
ctx.lineTo(450, 100);
ctx.fill();

