const rollButton = document.getElementById('roll-button');
const resetButton = document.getElementById('reset-button');
const dice = document.getElementById('dice');
const diceResult = document.getElementById('dice-result');
const loadingIndicator = document.getElementById('loading-indicator');

// Função para tocar som
const playRollSound = () => {
    const audio = new Audio('../mp3/roll-sound.mp3');
    audio.play();
}

rollButton.addEventListener('click', () => {
    // Exibe o indicador de carregamento
    loadingIndicator.style.display = 'block';
    
    // Toca o som de rolar dado
    playRollSound();

    // Inicia a animação de rolar o dado
    dice.classList.add('rolling');
    
    // Gera o número e exibe após a animação
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.textContent = randomNumber;
        diceResult.textContent = `Resultado: ${randomNumber}`;
        
        // Aplica o estilo de sucesso ou erro no resultado
        if (randomNumber === 6) {
            diceResult.classList.add('success');
            diceResult.classList.remove('error');
        } else {
            diceResult.classList.add('error');
            diceResult.classList.remove('success');
        }

        // Remove a animação de rolar o dado
        dice.classList.remove('rolling');
        
        // Esconde o indicador de carregamento
        loadingIndicator.style.display = 'none';
    }, 1000); // Espera 1 segundo para o efeito de animação
});

resetButton.addEventListener('click', () => {
    // Reseta o dado e resultado
    dice.textContent = '';
    diceResult.textContent = 'Resultado: ';
    diceResult.classList.remove('success', 'error');
});
