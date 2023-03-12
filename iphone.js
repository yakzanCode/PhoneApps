const apps = document.getElementsByClassName("apps");
const bottom = document.getElementById("bottom");
const screen = document.getElementById("Screen");
const wApp = document.getElementById('weather');
let Apps = document.getElementById("Apps");

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
    document.getElementById("Time").textContent = time;
    document.getElementById("Time").innerHTML = time;
    setTimeout(showTime, 1000);
}

function Calendar() {
    var day = new Date().toLocaleDateString('en-us', { weekday: "long" });
    var nm = new Date().toLocaleDateString('en-us', { day: "numeric" });
    document.getElementById("daynm").innerHTML = nm;
    document.getElementById("day").innerHTML = day;
}
showTime();
Calendar();
function hideApps(A) {
    screen.style.backgroundImage = A;
    bottom.style.display = "none";
    Apps.style.display = "none";
}
wApp.addEventListener('click', function () {
    hideApps("url(./assets/bluesky.jpg)");
    openWeatherApp();
});
function openWeatherApp() {
    var g = document.createElement('div');
    g.setAttribute("id", "weatherr");
    var top = document.createElement('div');
    top.setAttribute("id", "top");
    g.appendChild(top);
    top.innerHTML = `<h1 id="city">Berlin</h1> <h2 id="temp">14°</h2> <p id="condition">Mostly Sunny</p>`;
    var mid = document.createElement('div');
    mid.setAttribute("id", "mid");
    mid.innerHTML = `<p id="gust"></p> <hr> `;
    g.appendChild(mid);
    var form = document.createElement('form');
    form.setAttribute("id", "form");
    form.innerHTML = `<img id="srch" src="./assets/search.png"> <input type="text" name="name" id="search" placeholder="Search City">
    <input type="submit" value="submit" style="cursor: pointer;">`
    g.appendChild(form);
    screen.appendChild(g);
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        city = document.getElementById('search').value
        fetch(`http://api.weatherapi.com/v1/current.json?key=18a47436dfd9470c89a91145231001&q=${city}&aqi=no`)
            .then(response => response.json())
            .then(json => {
                document.getElementById('city').innerHTML = json.location.name
                document.getElementById('condition').innerHTML = json.current.condition.text
                document.getElementById('temp').innerHTML = json.current.temp_c
                document.getElementById('gust').innerHTML = 'Wind gusts are to ' + json.current.gust_mph + ' .'
                document.getElementById('search').value = ' '
            })
    }
    )
}