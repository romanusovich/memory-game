function displayLeaderboard() {
    let leaderboard = document.getElementById('leaderboard');
    if (leaderboard) leaderboard.remove();
    leaderboard = renderLeaderboard();
    leaderboard.classList.add('active');
}

function hideLeaderboard() {
    let leaderboard = document.getElementById('leaderboard');
    if (leaderboard) {
        leaderboard.classList.remove('active');
    }
}

function renderLeaderboard() {
    const leaderboardData = getLeaderboardData();

    let leaderboard = document.createElement('div');
    leaderboard.id = 'leaderboard';
    leaderboard.textContent = leaderboardData.length > 0 ? 'Таблица лидеров' : 'Нет данных о лидерах';
    document.body.appendChild(leaderboard);

    if (leaderboardData.length > 0) {
        let list = document.createElement('ol');
        leaderboardData.sort((a, b) => a.steps - b.steps);
        leaderboardData.forEach(entry => {
            let listItem = document.createElement('li');
            listItem.textContent = `${entry.steps} - ${entry.date}`;
            list.appendChild(listItem);
        });
        leaderboard.appendChild(list);
    }

    let leaderboardCloseButton = document.createElement('button');
    leaderboardCloseButton.textContent = 'Закрыть';
    leaderboardCloseButton.addEventListener('click', hideLeaderboard);
    leaderboard.appendChild(leaderboardCloseButton);

    return leaderboard;
}

function getLeaderboardData() {
    return JSON.parse(localStorage.getItem('leaderboard')) || [];
}

function saveToLeaderboard(steps) {
    const leaderboardData = getLeaderboardData();
    if (leaderboardData.length >= 10) {
        leaderboardData.sort((a, b) => a.steps - b.steps);
        leaderboardData.pop();
    }
    leaderboardData.push({ steps, date: new Date().toLocaleString() });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
}