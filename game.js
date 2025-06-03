const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let oranges = 0;
let pileSize = 0;
let characterState = 'sitting'; // sitting, cheering, angry

const donateBtn = document.getElementById('donateBtn');
const bgMusic = document.getElementById('bgMusic');

donateBtn.addEventListener('click', () => {
    if (oranges < 100) {
        oranges++;
        pileSize++;
        characterState = 'cheering';
    } else {
        characterState = 'angry';
        setTimeout(() => {
            oranges = 0;
            pileSize = 0;
            characterState = 'sitting';
        }, 2000);
    }
    drawGame();
});

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#deb887"; // Skin tone
    ctx.beginPath();
    ctx.arc(300, 300, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Oranges: " + oranges, 10, 30);

    for (let i = 0; i < pileSize; i++) {
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.arc(100 + (i % 10) * 15, 350 - Math.floor(i / 10) * 15, 7, 0, Math.PI * 2);
        ctx.fill();
    }

    if (characterState === 'cheering') {
        ctx.fillText("Yay!", 280, 260);
    } else if (characterState === 'angry') {
        ctx.fillText("Nothing will stop me!", 200, 260);
    }
}

drawGame();