const gameDeck = (() => {
    let cardValues = [];

    return {
        startGame() {
            cardValues = [
                '\u{1F311}', '\u{1F311}',
                '\u{1F312}', '\u{1F312}',
                '\u{1F313}', '\u{1F313}',
                '\u{1F314}', '\u{1F314}',
                '\u{1F315}', '\u{1F315}',
                '\u{1F316}', '\u{1F316}',
                '\u{1F317}', '\u{1F317}',
                '\u{1F318}', '\u{1F318}'
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