const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Tamanho da célula
const grid = 10;
let count = 0;

// Definindo a cobrinha
let snake = [{ x: 50, y: 50 }];
let direction = "right";
let food = { x: 0, y: 0 };

// Função para gerar a comida em uma posição aleatória
function randomFood() {
    food.x = Math.floor(Math.random() * (canvas.width / grid)) * grid;
    food.y = Math.floor(Math.random() * (canvas.height / grid)) * grid;
}

// Função para desenhar a cobrinha
function drawSnake() {
    ctx.fillStyle = "green";
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, grid, grid);
    });
}

// Função para desenhar a comida
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, grid, grid);
}

// Função para mover a cobrinha
function moveSnake() {
    const head = { x: snake[0].x, y: snake[0].y };

    if (direction === "left") head.x -= grid;
    if (direction === "right") head.x += grid;
    if (direction === "up") head.y -= grid;
    if (direction === "down") head.y += grid;

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        randomFood();
    } else {
        snake.pop();
    }
}

// Função para verificar colisões
function checkCollisions() {
    const head = snake[0];

    // Colisão com as bordas
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    // Colisão com o corpo
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Função principal do jogo
function gameLoop() {
    if (checkCollisions()) {
        alert("Game Over");
        snake = [{ x: 50, y: 50 }];
        direction = "right";
        randomFood();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveSnake();
    drawSnake();
    drawFood();
}

// Controle da cobrinha com as teclas
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp" && direction !== "down") direction = "up";
    if (e.key === "ArrowDown" && direction !== "up") direction = "down";
    if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (e.key === "ArrowRight" && direction !== "left") direction = "right";
});

// Função para reiniciar o jogo
document.getElementById("reset-button").addEventListener("click", function () {
    snake = [{ x: 50, y: 50 }];
    direction = "right";
    randomFood();
    gameLoop();
});

randomFood();
setInterval(gameLoop, 1000 / 5); // 5 FPS