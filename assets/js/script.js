var userFormEl = document.querySelector(".card-body")
var cityInputEl = document.querySelector("#city")
var cityContainerEl = document.querySelector("#city-container");
var emptyArray = []

var getCityWeather = function(city) {

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=de863e99a7b087a76baf123be83add0a"


    fetch(apiUrl).then(function(response) {
        response.json().then(function(response) {
            weatherToday = response.main
            document.querySelector("#weather-icon").setAttribute('src', "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png") 
            document.querySelector("#feels-like").textContent = "Temperature: " + response.main.feels_like + "°F"
            document.querySelector("#humidity").textContent = "Humidity: " + response.main.humidity + "%"
            document.querySelector("#wind-speed").textContent = "Wind Speed: " + response.wind.speed
            displayWeather(weatherToday, city)
            