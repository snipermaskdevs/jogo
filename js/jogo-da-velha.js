const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            alert(`Jogador ${currentPlayer} venceu!`);
            resetGame();
            return;
        }
    }

    if ([...cells].every(cell => cell.innerText)) {
        alert('Empate!');
        resetGame();
    }
}

function handleClick(event) {
    const cell = event.target;
    if (cell.innerText) return;
    cell.innerText = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    cells.forEach(cell => (cell.innerText = ''));
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
