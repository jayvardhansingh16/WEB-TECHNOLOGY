
function showPage(page) {
    let content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = `
            <h2>Welcome to Soccer League</h2>
            <p>Welcome to the upcoming soccer season!</p>
        `;
    }
    else if (page === "schedule") {
        content.innerHTML = `
            <h2>Match Schedule</h2>
            <p>10 November - Tigers vs Lions - 10 AM</p>
            <p>12 November - Eagles vs Wolves - 2 PM</p>
        `;
    }
    else if (page === "standings") {
        content.innerHTML = `
            <h2>Team Standings</h2>
            <p>1. Tigers - 12 Points</p>
            <p>2. Lions - 9 Points</p>
            <p>3. Eagles - 6 Points</p>
        `;
    }
    else if (page === "rules") {
        content.innerHTML = `
            <h2>Soccer Rules</h2>
            <p>1. Follow the referee's decisions.</p>
            <p>2. Respect other players.</p>
            <p>3. The team scoring the most goals wins.</p>
        `;
    }
}
