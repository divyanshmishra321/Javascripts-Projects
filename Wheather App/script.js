const userTab = document.querySelector("#userWeather");
const searchTab = document.querySelector("#searchWeather");
const userContainer = document.querySelector(".weather-container");
const grantAccesscontainer = document.querySelector(
  ".grant-location-container"
);
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

const userInfoContainer = document.querySelector(".user-info-container");
const loadinScreen = document.querySelector(".loading-container");

// Initial variables
let API_key = "99ad1f8f51e9d3cd1b0d7a572318beb9";

let currentTab = userTab;
currentTab.classList.add("current-tab");

userTab.addEventListener("click", () => {
  //pass clicked tab as Paramneter
  switchTab(userTab);
  console.log("userTab clicked");
});
searchTab.addEventListener("click", () => {
  //pass clicked tab as Paramneter
  switchTab(searchTab);
  console.log("searchTab clicked");
});

function switchTab(clickedTab) {
  if (clickedTab != currentTab) {
    // change BG color Current Tab
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");

    // if searchTab visible ni hai to pele use visible krdo or sbko invisible krdo
    if (!searchForm.classList.contains("active")) {
      searchForm.classList.add("active");
      userInfoContainer.classList.remove("active");
      grantAccesscontainer.classList.remove("active");
    } else {
      // main pehle search wale ko invisible krdo or sbko visible
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      //  ab main your weather tab main agaya hu to weather ko display krdo to localstorage mai check krenge saved coordinates
      getfromSessionStorage();
    }
  }
}

function getfromSessionStorage() {
  const localCordinates = sessionStorage.getItem("user-cordinates");
  if (!localCordinates) {
    grantAccesscontainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCordinates);
    fetchWheatherDetails(coordinates);
  }
}

// Function to check if cordinates are already present in session storage
async function fetchWheatherDetails(coordinates) {
  // phele grantaccess Container ko invisible kro and  loader ko visible krdo
  grantAccesscontainer.classList.remove("active");
  loadinScreen.classList.add("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`
    );

    const data = await response.json();
    loadinScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {}
}

// will show all the Data coming from API to Respective Display
function renderWeatherInfo(weatherInfo) {
  const cityName = document.querySelector("#cityName");
  const searchCountry = document.querySelector("#cityName");
  const searchCountryFlag = document.querySelector("#countryFlag");
  const weatherAppDisc = document.querySelector("#weatherAppDisc");
  const weatherIcon = document.querySelector("#wheatherIcon");
  const temprature = document.querySelector("#temprature");
  const windSpeed = document.querySelector("#windSpeed");
  const humidity = document.querySelector("#humidity");
  const cloudiness = document.querySelector("#cloudiness");

  // Fetch values from weatherAPI
  cityName.innerText = weatherInfo?.name;
  searchCountryFlag.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  weatherAppDisc.innerText = weatherInfo?.weather?.[0]?.description;
  weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temprature.innerText = weatherInfo?.main?.temp;
  windSpeed.innerText = weatherInfo?.wind?.speed;
  humidity.innerText = weatherInfo?.main?.humidity;
  cloudiness.innerText = weatherInfo?.clouds?.all;
}

const grantAccessBtn = document.querySelector("#locationBtn");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // show an alert for no Geolocation support available
    alert("No geolocation support available");
    
  }
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };

  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  console.log("usercoordinates");
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = searchInput.ariaValue;
  if (cityName === "") {
    return;
  } else {
    fetchWheatherDetails(cityName);
    console.log("searchdetails");
  }
});
