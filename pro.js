const screen = document.getElementById("Screen");
const wApp = document.getElementById('weather');
let apps = document.getElementById("Apps");
const bottom = document.getElementById("bottom");

function showTime() {
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();

    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;

    var time = hrs + ":" + min;
    document.getElementById("Time").innerHTML = time;
    document.getElementById("Time").textContent = time;
    setTimeout(showTime, 1000);
}

function Calendar() {
    var nm = new Date().toLocaleDateString('en-us', { day: "numeric" });
    document.getElementById("daynm").innerHTML = nm;
    var day = new Date().toLocaleDateString('en-us', { weekday: "long" });
    document.getElementById("day").innerHTML = day;
}
showTime();
Calendar();
function hideApps() {
    screen.style.backgroundImage = "url(blue.sky.jpg)";
    apps.style.display = "none";
    bottom.style.display = "none";
}
function openWeather() {
    var g = document.createElement('div');
    g.setAttribute("id", "weatherr");
    var top = document.createElement('div');
    top.setAttribute("id", "top");
    g.appendChild(top);
    top.innerHTML = `<h1>Cupertino</h1> <h2>24°</h2> <p>Mostly Sunny</p>`;
    var mid = document.createElement('div');
    mid.setAttribute("id", "mid");
    mid.innerHTML = `<p>Sunny conditions will continue all day. Wind gusts are to 7 mph.</p> <hr> `;
    g.appendChild(mid);
    screen.appendChild(g);
}
wApp.addEventListener('click', function () {
    hideApps();
    openWeather();
});
// hideApps();
// openWeather();
// function commingSoon() {

// }

