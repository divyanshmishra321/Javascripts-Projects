const searchInput = document.querySelector("#searchInput");
const grantLocationContainer = document.querySelector(
  ".grant-location-container"
);
const form = document.querySelector(".form-container");
const weatherContainer = document.querySelector(".wheather-container");
const grantAccessBtn = document.querySelector("#locationBtn");

checkAcessLocation();

function checkAcessLocation() {
  if (weatherContainer.classList.contains("inactive")) {
    grantAccessBtn.addEventListener("click", getUserLocation);
  } else {
    grantLocationContainer.classList.remove("inactive");
    weatherContainer.classList.add("inactive");
    form.classList.add("inactive");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(searchInput.value);

  searchedLocationWeather(searchInput.value);
});

// Function to get user's location
function getUserLocation() {
  // Check if the browser supports Geolocation
  if (navigator.geolocation) {
    // Use the Geolocation API to get the current position
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    // Handle the case when Geolocation is not supported
    console.error("Geolocation is not supported by this browser");
  }
}

// Success callback function
function successCallback(position) {
  // Extract latitude and longitude from the position object
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Now you can use the latitude and longitude in your application
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  weatherContainer.classList.remove("inactive");
  form.classList.remove("inactive");
  grantLocationContainer.classList.add("inactive");

  // Call your weather API with the obtained coordinates
  const apiKey = "99ad1f8f51e9d3cd1b0d7a572318beb9";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  // Fetch weather data
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Update the DOM with weather information
      updateWeatherInfo(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Error callback function
function errorCallback(error) {
  // Handle errors when trying to get the user's location
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.error("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.error("The request to get user location timed out.");
      break;
    default:
      console.error("An unknown error occurred.");
      break;
  }
}

function updateWeatherInfo(weatherInfo) {
  let cityName = document.querySelector("#cityName");
  const countryFlag = document.querySelector("#countryFlag");
  const weatherAppDisc = document.querySelector("#weatherAppDisc");
  const weatherIcon = document.querySelector("#wheatherIcon");
  const temprature = document.querySelector("#temprature");
  const windSpeed = document.querySelector("#windSpeed");
  const visibility = document.querySelector("#visibility");
  const humidity = document.querySelector("#humidity");

  if (weatherInfo.name === "National Capital Territory of Delhi") {
    cityName.innerText = "Delhi";
  } 
  else {
    cityName.innerText = weatherInfo.name ;
  }



  countryFlag.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  weatherAppDisc.innerText = weatherInfo.weather[0].description;
  weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temprature.innerText = `${weatherInfo.main.temp} °C`;
  windSpeed.innerText = `${weatherInfo?.wind?.speed}km/hr`;
  visibility.innerText = `${weatherInfo?.visibility / 1000} Km`;
  humidity.innerText = `${weatherInfo?.main?.humidity} %`;
  
  
}

// Function to call API for particular City Name
function searchedLocationWeather(city_name) {
  if (searchInput.value === "") {
    console.error("Location information is unavailable.");
    searchInput.placeholder = `Location Unavailable.`;
    searchInput.classList.add("error");
  } else {
    const apiKey = "99ad1f8f51e9d3cd1b0d7a572318beb9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the DOM with weather information
        updateWeatherInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
}


if(cityName.innerText === "undefined"){
  cityNotFound();
  console.log("hello");
}

function cityNotFound() {
  let errorContainer=document.querySelector(".errorContainer");
  console.error("Location information is unavailable in API");
  weatherContainer.classList.add("inactive");
  grantLocationContainer.classList.add("inactive");
  errorContainer.classList.remove("inactive");
}