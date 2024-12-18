let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;  // Variável para contar as tentativas

const guessInput = document.getElementById('guess');
const feedback = document.getElementById('feedback');
const checkButton = document.getElementById('check-button');
const resetButton = document.getElementById('reset-button');

checkButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;  // Incrementa o número de tentativas a cada clique

    if (userGuess === secretNumber) {
        feedback.textContent = `Parabéns! Você acertou em ${attempts} tentativas!`;
        feedback.style.color = 'green';
    } else if (userGuess < secretNumber) {
        feedback.textContent = `Tente um número maior! Tentativa nº ${attempts}`;
        feedback.style.color = 'orange';
    } else {
        feedback.textContent = `Tente um número menor! Tentativa nº ${attempts}`;
        feedback.style.color = 'red';
    }
});

resetButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;  // Reseta o contador de tentativas
    feedback.textContent = '';
    guessInput.value = '';
});
