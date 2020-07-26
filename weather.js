//let requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=0aa4f625443df2fc44fe2f92e89a7ef9&units=metric';
//let request = new XMLHttpRequest(); 
//let iconElement = document.querySelector(".weather-icon");
let button2 = document.getElementsByClassName('submitweather');
let inputcity = document.getElementsByClassName('inputcity');
let name = document.querySelector('name');
let temp = document.querySelector('temp')

let tempElement = document.querySelector(".tempfromjson p");
let descElement = document.querySelector(".skyStatus p");
//let weather = {};
let city = "Barrie";
let apiKey = "0aa4f625443df2fc44fe2f92e89a7ef9";
let locationElement = document.querySelector(".location p");
let notificationElement = document.querySelector(".notification");
let weather = {};

/* This complete IF was copied of the weater api documentation 
   I just modify the else with a youtube video*/
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position) { //this method was implemented in order to dont show just city variable
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude) {
    weather.temperature = {
        unit: "celsius"
    }
    //let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;//just show Barrie
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = data.main.temp;
            weather.description = data.weather[0].description;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            draw();
        });
}

function draw() {
    if (weather) {
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`; //with the api metric shows the correct value without convert
        descElement.innerHTML = weather.description;
        locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    }
}