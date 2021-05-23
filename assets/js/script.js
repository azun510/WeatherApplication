var userFormEl = document.querySelector(".card-body")
var cityInputEl = document.querySelector("#city")
var cityContainerEl = document.querySelector("#city-container");
var emptyArray = []

var getCityWeather = function(city) {

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=de863e99a7b087a76baf123be83add0a"


