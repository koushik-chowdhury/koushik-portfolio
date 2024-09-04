// async function getGitHubStreak() {
//     const username = document.getElementById('username').value;
//     const resultDiv = document.getElementById('result');

//     if (!username) {
//         resultDiv.innerHTML = 'Please enter a GitHub username.';
//         return;
//     }

//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         if (!response.ok) {
//             throw new Error('User not found');
//         }
//         const userData = await response.json();

//         const streakResponse = await fetch(`https://github-readme-streak-stats.herokuapp.com/?user=${username}`);
//         const streakData = await streakResponse.text();

//         resultDiv.innerHTML = streakData;
//     } catch (error) {
//         resultDiv.innerHTML = `Error: ${error.message}`;
//     }
// }

// async function getGitHubStreak() {
//     const username = document.getElementById('username').value;
//     const resultDiv = document.getElementById('result');

//     if (!username) {
//         resultDiv.innerHTML = 'Please enter a GitHub username.';
//         return;
//     }

//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         if (!response.ok) {
//             throw new Error('User not found');
//         }
//         const userData = await response.json();

//         const corsProxy = 'https://cors-anywhere.herokuapp.com/';
//         const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}`;
//         const streakResponse = await fetch(corsProxy + streakUrl);
//         const streakData = await streakResponse.text();

//         resultDiv.innerHTML = streakData;
//     } catch (error) {
//         resultDiv.innerHTML = `Error: ${error.message}`;
//     }
// }

async function getGitHubStreak() {
    const username = document.getElementById('username').value;
    const resultDiv = document.getElementById('result');

    if (!username) {
        resultDiv.innerHTML = 'Please enter a GitHub username.';
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const userData = await response.json();

        const corsProxy = 'https://api.allorigins.win/get?url=';
        const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}`;
        const streakResponse = await fetch(`${corsProxy}${encodeURIComponent(streakUrl)}`);
        const streakData = await streakResponse.json();

        // Display the streak image directly from the URL
        const streakImageUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}`;
        resultDiv.innerHTML = `<img src="${streakImageUrl}" alt="GitHub Streak for ${username}">`;
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}
