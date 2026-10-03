function selectCard(card) {
    card.classList.add('selected');

    let selectedCards = document.querySelectorAll('.card.selected');
    if (selectedCards.length === 2) {
        addStep();
        blockBoard();
        selectedCards.forEach(card => card.classList.remove('selected'));
        selectedCards.forEach(card => card.classList.add('flipped'));
        setTimeout(() => {
            selectedCards.forEach(card => card.classList.remove('flipped'));
            unblockBoard();
        }, 1500);
    }
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