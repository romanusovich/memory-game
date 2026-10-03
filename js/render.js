let stepCounter = 0;
let pairsFound = 0;

window.addEventListener('DOMContentLoaded', () => {
    stepCounter = 0;
    pairsFound = 0;
    initHeader();
    initBoard();
    initFooter();
});

function initHeader() {
    let header = document.createElement('header');
    document.body.appendChild(header);
    
    let newGameButton = document.createElement('button');
    newGameButton.textContent = 'Новая игра';
    newGameButton.addEventListener('click', newGame);
    header.appendChild(newGameButton);
    
    let leaderboardDisplayButton = document.createElement('button');
    leaderboardDisplayButton.textContent = 'Таблица лидеров';
    leaderboardDisplayButton.addEventListener('click', displayLeaderboard);
    header.appendChild(leaderboardDisplayButton);
}

function initBoard() {
    let board = document.getElementById('board');
    if (!board) {
        board = document.createElement('div');
        board.id = 'board';
        document.body.appendChild(board);
    }

    clearBoard();
    gameDeck.startGame();
    initCards();
}

function initFooter() {
    let footer = document.createElement('footer');
    document.body.appendChild(footer);

    let stepCounterDisplay = document.createElement('div');
    stepCounterDisplay.id = 'step-counter';
    stepCounterDisplay.textContent = 'Шаги: ' + stepCounter;
    footer.appendChild(stepCounterDisplay);

    let foundPairsDisplay = document.createElement('div');
    foundPairsDisplay.id = 'found-pairs';
    foundPairsDisplay.textContent = 'Найденные пары: ' + pairsFound;
    footer.appendChild(foundPairsDisplay);
}

function initCards() {
    let board = document.getElementById('board');

    for (let i = 0; i < 16; i += 1) {
        let card = document.createElement('div');
        card.className = 'card';
        card.id = 'card-' + i;
        card.dataset.index = i;
        card.addEventListener('click', () => selectCard(card));

        let value = document.createElement('span');
        value.className = 'card-value';
        card.appendChild(value);

        board.appendChild(card);
    }
}

function clearBoard() {
    let board = document.getElementById('board');
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

function resetScore() {
    stepCounter = 0;
    pairsFound = 0;
    let stepCounterDisplay = document.getElementById('step-counter');
    let foundPairsDisplay = document.getElementById('found-pairs');
    if (stepCounterDisplay) stepCounterDisplay.textContent = 'Шаги: ' + stepCounter;
    if (foundPairsDisplay) foundPairsDisplay.textContent = 'Найденные пары: ' + pairsFound;
}

function newGame() {
    resetScore();
    resetCardEvents();
    initBoard();
}