window.addEventListener('load', () => {
    var [githubProjects, innerProjects] = document.getElementsByClassName('crawl');

    const fotCount = 4;
    const projects = [
        {"name": "Ridge1", "url": "#"},
        {"name": "Ridge2", "url": "#"},
        {"name": "Ridge3", "url": "#"}
    ];
    
    for (var i = 0; i < projects.length; i++) {
        let project = projects[i];
        let carry = i % fotCount;
        let gitHubContent =
            `<li class="card" style="--picture:url('./back${carry}.jpg');">
             <a href="${project['url']}" target="_blank">
                 <span class="button"><i class="fab fa-github"></i> GitHub</span>
                 <span class="name">${project['name']}</span>
             </a>
             </li>`;
        
        githubProjects.insertAdjacentHTML('beforeend', gitHubContent);
    }

    const games = [
        {'title': 'Snake', 'img': '../../games/snake/snake.jpeg', 'url': './games/snake.html'},
        {'title': 'PathFinding', 'img': '../../games/finder/finder.jpeg', 'url': './games/finder.html'}
    ];

    for (var i = 0; i < games.length; i++) {
        let game = games[i];
        let InnderContent =
            `<li class="card" style='--picture:url(${game['img']});'>
                <a href="${game['url']}">
                    <span class="button"><i class="fa-solid fa-gamepad"></i> Play</span>
                    <span class="name">${game['title']}</span>
                </a>
            </li>`;
        
        innerProjects.insertAdjacentHTML('beforeend', InnderContent);
    }
})



function moveProjects() {
    var cards = document.getElementsByClassName('card');
    for (let card of cards) {
        var card_on_center = card.getBoundingClientRect().top+(card.clientHeight - window.innerHeight)/2;

        var card_right_shift = Math.cos(Math.PI*card_on_center/window.innerHeight);

        // harmonic function
        var right = -20 + 15 * card_right_shift + "%";

        card.style.right = right;
    }
}

window.addEventListener('scroll', moveProjects);
window.addEventListener('load', moveProjects);