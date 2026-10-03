const gameDeck = (() => {
    let cardValues = [];

    return {
        startGame() {
            cardValues = [
                'A', 'A',
                'B', 'B',
                'C', 'C',
                'D', 'D',
                'E', 'E',
                'F', 'F',
                'G', 'G',
                'H', 'H'
            ];

            for (let index = cardValues.length - 1; index > 0; index -= 1) {
                const randomIndex = Math.floor(Math.random() * (index + 1));
                [cardValues[index], cardValues[randomIndex]] = [cardValues[randomIndex], cardValues[index]];
            }
        },

        compareCards(firstIndex, secondIndex) {
            return cardValues[firstIndex] === cardValues[secondIndex];
        },

        getPairCount() {
            return cardValues.length / 2;
        },

        revealCard(card) {
            const index = Number(card.dataset.index);
            card.querySelector('.card-value').textContent = cardValues[index];
        }
    };
})();