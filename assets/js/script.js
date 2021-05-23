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
            
            var latitude = response.coord.lat
            var longitude = response.coord.lon
            
            return fetch('http://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + "&units=imperial&appid=de863e99a7b087a76baf123be83add0a")
                .then(function(response) {
                    return response.json()
                })
                .then(function(response) {
                    // uvi and index
                    var uvEl = document.querySelector("#UV")
                    var uvi = response.current.uvi
                    uvEl.textContent = "UV Index: " + uvi

                    if (uvi <2) {
                        uvEl.classList.add("low");
                      } else  if (uvi <5) {
                        uvEl.classList.add("moderate")
                      } else if (uvi <7) {
                        uvEl.classList.add("high")
                      } else if (uvi < 10) {
                        uvEl.classList.add("veryhigh")
                      } else {
                        uvEl.classList.add("extreme")
                      }