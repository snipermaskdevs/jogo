const cardValues = [
    '🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍊', '🍍', 
    '🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍊', '🍍',
    '🍓', '🍏', '🍍', '🍋', '🍈', '🍉', '🍊', '🍆', 
    '🥥', '🥝', '🥭', '🍒', '🍑', '🍋', '🍊', '🍍'
];
let cards = [];
let flippedCards = [];
let matchedCards = 0;

// Função para embaralhar as cartas
function shuffleCards() {
    for (let i = cardValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]];
    }
}

// Função para criar as cartas
function createCards() {
    const gameBoard = document.getElementById('game-board');
    shuffleCards();

    cardValues.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.innerHTML = '';
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

// Função para virar a carta
function flipCard() {
    if (flippedCards.length >= 2 || this.classList.contains('flipped') || this.classList.contains('match')) return;
    
    this.classList.add('flipped');
    this.innerHTML = this.dataset.value;
    flippedCards.push(this);
    
    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Função para verificar se as cartas viradas formam um par
function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('match');
        card2.classList.add('match');
        matchedCards += 2;
        flippedCards = [];
        
        if (matchedCards === cardValues.length) {
            alert('Você ganhou!');
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.innerHTML = '';
            card2.innerHTML = '';
            flippedCards = [];
        }, 1000);
    }
}

// Função para reiniciar o jogo
document.getElementById('reset-button').addEventListener('click', function () {
    cards.forEach(card => {
        card.classList.remove('flipped', 'match');
        card.innerHTML = '';
    });

    flippedCards = [];
    matchedCards = 0;
    createCards();
});

// Iniciar o jogo
createCards();
