const words = [
    'javascript', 'html', 'css', 'coding', 'developer', 'frontend', 'backend', 'nodejs', 'react', 'angular',
    'vue', 'typescript', 'python', 'ruby', 'java', 'csharp', 'sql', 'database', 'api', 'rest', 'graphql',
    'npm', 'yarn', 'webpack', 'babel', 'git', 'github', 'gitlab', 'docker', 'kubernetes', 'cloud', 'aws',
    'azure', 'googlecloud', 'devops', 'microservices', 'serverless', 'lambda', 'containerization', 'framework',
    'architecture', 'designpatterns', 'agile', 'scrum', 'kanban', 'testing', 'unitTesting', 'integrationTesting',
    'ci', 'cd', 'automation', 'eslint', 'prettier', 'sass', 'less', 'scss', 'html5', 'css3', 'typescript',
    'npmPackages', 'mockups', 'ux', 'ui', 'responsive', 'mediaqueries', 'flexbox', 'grid', 'restfulapi', 'json',
    'xml', 'soap', 'jwt', 'oauth', 'graphqlquery', 'mutation', 'subscriptions', 'stateManagement', 'redux',
    'mobx', 'vuex', 'hooks', 'context', 'async', 'await', 'promise', 'callback', 'eventLoop', 'closure',
    'hoisting', 'scope', 'callbackHell', 'functionalProgramming', 'objectOriented', 'immutable', 'pureFunctions',
    'currying', 'composition', 'declarative', 'imperative', 'es6', 'es7', 'es8', 'destructuring', 'spreadOperator',
    'restOperator', 'templateLiteral', 'esModules', 'bundler', 'http', 'https', 'cors', 'webSockets', 'pwa',
    'serviceWorker', 'offline', 'localStorage', 'sessionStorage', 'cookies', 'indexedDB', 'webAssembly', 'wasm',
    'typescriptTypes', 'interfaces', 'classes', 'inheritance', 'polymorphism', 'encapsulation', 'abstraction'
  ];  
let word = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let incorrectGuesses = [];
let attemptsLeft = 6;

function updateWordDisplay() {
    const wordDisplay = document.getElementById("word");
    wordDisplay.innerHTML = word.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
}

function handleGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();

    if (!guess || guessedLetters.includes(guess) || incorrectGuesses.includes(guess)) {
        return;
    }

    if (word.includes(guess)) {
        guessedLetters.push(guess);
    } else {
        incorrectGuesses.push(guess);
        attemptsLeft--;
    }

    document.getElementById("incorrect-guesses").innerText = incorrectGuesses.join(', ');
    document.getElementById("guess").value = '';

    updateWordDisplay();

    if (attemptsLeft === 0) {
        document.getElementById("message").innerText = "Você perdeu! A palavra era: " + word;
    } else if (guessedLetters.length === new Set(word).size) {
        document.getElementById("message").innerText = "Você ganhou!";
    }
}

document.getElementById("submit-guess").addEventListener("click", handleGuess);

updateWordDisplay();
