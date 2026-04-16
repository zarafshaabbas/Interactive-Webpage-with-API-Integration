function changeBackground() {
    const colors = ['#e6f2ff', '#ffdddd', '#ddffdd', '#fff0b3', '#d1e0e0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function fetchGitHubProfile() {
    fetch('https://api.github.com/users/zarafshaabbas')
        .then(response => {
            if (!response.ok) throw new Error('Network response error');
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('api-content');
            container.innerHTML = `
                <div class="post">
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Bio:</strong> ${data.bio}</p>
                    <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
                    <p><strong>Followers:</strong> ${data.followers}</p>
                    <p><a href="${data.html_url}" target="_blank">View GitHub Profile</a></p>
                </div>
            `;
        })
        .catch(error => {
            document.getElementById('api-content').innerHTML =
                `<p class="error">Could not load GitHub info.</p>`;
            console.error('Error:', error);
        });
}

window.onload = function () {
    fetchGitHubProfile();
};
