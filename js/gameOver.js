function displayGameOver(steps) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'game-over-modal');

    const title = document.createElement('h2');
    title.textContent = 'Все пары найдены!';
    modal.appendChild(title);

    const score = document.createElement('p');
    score.textContent = `Количество шагов: ${steps}`;
    modal.appendChild(score);

    const actions = document.createElement('div');
    actions.classList.add('modal-actions');

    const newGameButton = document.createElement('button');
    newGameButton.textContent = 'Новая игра';
    newGameButton.addEventListener('click', () => {
        hideModal();
        newGame();
    });
    actions.appendChild(newGameButton);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.addEventListener('click', hideModal);
    actions.appendChild(closeButton);

    modal.appendChild(actions);
    showModal(modal);
}
