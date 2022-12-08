const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 그림을 그릴 수 있는 context 변수화

canvas.width = 800;
canvas.height = 800;

// 마우스 이동에 따라 임의의 위치에 선 그리기

const colors = [
    "#18dcff",
    "#7d5fff"
]

function onClick(event) {
    ctx.beginPath();
    let startPoint = Math.floor(Math.random() * canvas.width);
    let endPoint = Math.floor(Math.random() * canvas.height);
    ctx.moveTo(startPoint, endPoint);
    ctx.lineTo(event.offsetX, event.offsetY);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick)