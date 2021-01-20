// begin function
function weatherInfo(event) {
    event.preventDefault ();

// var weatherEl = document.querySelector("#dailyweather");
var tempEl = document.querySelector("#Temp");
var humidEl = document.querySelector("#Humidity");
var windSEl = document.querySelector("#WindSpeed");
var uvEl = document.querySelector("#UVIndex");
var dateEl = document.querySelector("#Date");
var nameEl = document.querySelector("#Name");
var searchBtn = document.querySelector("#searchWeather")
var searchEl = document.querySelector("#CitySearch");
var displayName = document.querySelector("#cityinput")
var displayWeather = document.querySelector("#weatherdisplay")

var apiKey = "de863e99a7b087a76baf123be83add0a"
var apiKeyWeather = "https://api.openweathermap.org/data/2.5/weather?q="
var apiKeyForecast = "https://api.openweathermap.org/data/2.5/forecast?q="
var apiKeyUV = "https://api.openweathermap.org/data/2.5/onecall?lat="


// Saves searches 
var searchlog = document.querySelector("#searchHistory");
var previousSearches = JSON.parse(localStorage.getItem("search")) || [];
console.log(previousSearches);

// This checks if empty entry
searchBtn.addEventListener("click",function() {
    var searches = searchEl.value;

    if (searchEl.value === "") {
        alert("Please enter a valid city name");
        return;

    } else {
        searches.push(previousSearches);
        localStorage.setItem("search",JSON.stringify(previousSearches));
        displayHistory();
    }

})

// This function displays the search histories
function displaySearches() {
    searchlog.innerHTML = "";
    for (let i=0; i<previousSearches.length; i++) {
        searchlog.append(//something here);
    }
}

displaySearches();

//Searching for Weather Begins
function cityWeather (cityName) {
    var searching = apiKeyWeather + cityName + "&appid=" + apiKey

    fetch(searching)

    .then(function(response) {  
        return response.json ();
    })
        .then(function(response) {
            var date = moment().format('l');
            console.log(date);

            displayName.innerHTML = response.name + dateEl;

            // Find the weather
            var weatherCondition = response.weather[0].main

            // Display weather condition
            displayWeather.innerHTML = weatherCondition;

            // Display Temperature
            tempEl.innerHTML = "Temperature: "+ response.main.temp + "\u00B0"+"F";

            // Display Humidity
            humidEl.innerHTML = "Humidity: " + response.main.humidity + "%";

            // Display Wind Speed
            windSEl.innerHTML = "Wind Speed: " + response.wind.speed + "MPH";

            // Display UV Index 
            uvEl.innerHTML = 

        }


}



}

weatherInfo();
