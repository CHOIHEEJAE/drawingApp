const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 그림을 그릴 수 있는 context 변수화

canvas.width = 800;
canvas.height = 800;


ctx.fillRect(50, 50, 100, 100);
ctx.strokeRect(150, 50, 100, 100);