let selectedCards = [];
let mismatchTimeout;

function selectCard(card) {
    if (card.classList.contains('flipped') || selectedCards.includes(card)) {
        return;
    }

    card.classList.add('flipped');
    gameDeck.revealCard(card);
    selectedCards.push(card);

    if (selectedCards.length === 2) {
        addStep();

        const firstIndex = Number(selectedCards[0].dataset.index);
        const secondIndex = Number(selectedCards[1].dataset.index);
        if (gameDeck.compareCards(firstIndex, secondIndex)) {
            handleMatchedPair();
        } else {
            handleMismatch();
        }
    }
}

function handleMatchedPair() {
    pairsFound += 1;
    const foundPairsDisplay = document.getElementById('found-pairs');
    if (foundPairsDisplay) foundPairsDisplay.textContent = 'Найденные пары: ' + pairsFound;

    selectedCards = [];
    if (pairsFound === gameDeck.getPairCount()) {
        saveToLeaderboard(stepCounter);
        displayGameOver(stepCounter);
    }
}

function handleMismatch() {
    const cardsToTurnBack = selectedCards;
    blockBoard();
    mismatchTimeout = setTimeout(() => {
        cardsToTurnBack.forEach(card => {
            card.classList.remove('flipped');
            card.querySelector('.card-value').textContent = '';
        });
        selectedCards = [];
        unblockBoard();
    }, 1500);
}

function addStep() {
    stepCounter += 1;
    let stepCounterDisplay = document.getElementById('step-counter');
    if (stepCounterDisplay) stepCounterDisplay.textContent = 'Шаги: ' + stepCounter;
}

function blockBoard() {
    const board = document.getElementById('board');
    if (board) board.classList.add('blocked');
}

function unblockBoard() {
    const board = document.getElementById('board');
    if (board) board.classList.remove('blocked');
}

function resetCardEvents() {
    clearTimeout(mismatchTimeout);
    mismatchTimeout = undefined;
    selectedCards = [];
    unblockBoard();
}