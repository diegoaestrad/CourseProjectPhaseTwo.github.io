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
    /*    weather.textContent = "The Temperature in Barrie is: " + weather.main.temp +"c";
        let temp2 = weather.main.temp;
        console.log(temp2);*/
    //showdata.innerHTML =  "The Temperature in Barrie is: " + weather.main.temp +"ºc";
    //divweaher.appendChild(showdata);

}


/*let tempElement = document.querySelector(".temperature-value p");
let locationElement = document.querySelector(".location p");

// App data
let weather = {};
let city = "Barrie";
const key = "0aa4f625443df2fc44fe2f92e89a7ef9";

tempElement.innerHTML = '${weather.temperature.value} º <span>C</span>'; 
location.innerHTML = '${weather.city}, ${weather.country}';

// GET WEATHER FROM API PROVIDER
function getWeather(City){
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${key}&units=metric`;
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp);
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    tempElement.innerHTML = '${weather.temperature.value}°<span>C</span>';
    locationElement.innerHTML = '${weather.city}, ${weather.country}';
}
*/

/*
let requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=0aa4f625443df2fc44fe2f92e89a7ef9&units=metric';
let request = new XMLHttpRequest(); 
request.open('GET', requestURL); 
request.responseType = 'json'; 
request.send();
request.onload = function() {
    let dtat1json = request.response; 
    console.log(dtat1json); 
    populateHeader(dtat1json); 
    topDeals(dtat1json); 
}

function populateHeader(jsonObj) {
    let headerH1 = document.createElement('h1'); 
    headerH1.textContent = jsonObj['main.temp'];
    header.appendChild(headerH1); 
    let headerPara = document.createElement('p'); 
    headerPara.textContent = jsonObj['name']; 
    header.appendChild(headerPara); 
}
*/
/*
//http://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=d336f860175605a296b8b3f08ade9d92&units=metric
let button2 = document.getElementsByClassName ('submitweather');
let inputcity = document.getElementsByClassName ('inputcity');
let name = document.querySelector('name');
let temp = document.querySelector('temp');
//console.log(inputcity.value);
let city = "Barrie";
//let temperature = fetch('http://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=1663f00f277ba592e2eac90f5cd2e532&units=metric');
console.log("http://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=1663f00f277ba592e2eac90f5cd2e532&units=metric");

button2.addEventListener('click',function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputcity+'&appid=d336f860175605a296b8b3f08ade9d92&units=metric')
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(err => alert("Wrong City Name"))
})

function populateHeader(jsonObj) {
    let headerH1 = document.createElement('h1'); 
    headerH1.textContent = jsonObj['companyName'];
    header.appendChild(headerH1); 
    let headerPara = document.createElement('p'); 
    headerPara.textContent = jsonObj['headOffice']; 
    header.appendChild(headerPara); 
}

let weather = document.getElementById("weathera");
let showdata = document.createElement("h4");
let divweaher = document.getElementById("weatherdiv");

function setup(){    
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=1663f00f277ba592e2eac90f5cd2e532&units=metric',gotData);
    console.log("temp in Barrie is: "+loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=1663f00f277ba592e2eac90f5cd2e532&units=metric').main.temp);
}

function gotData(data){
    //print(data);
    weather = data;
    draw;
    console.log("temp in Barrie is: "+weather.main.temp);
    //console.log(data);
}

function draw(){
    if (weather){
        weather.textContent = "The Temperature in Barrie is: " + weather.main.temp +"c";
        let temp2 = weather.main.temp;
        console.log(temp2);
        //showdata.innerHTML =  "The Temperature in Barrie is: " + weather.main.temp +"ºc";
        //divweaher.appendChild(showdata);
        
    }    
}
*/