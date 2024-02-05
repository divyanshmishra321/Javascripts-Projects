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

  // Call your weather API with the obtained coordinates
  // (This part depends on the specific API you are using)
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
