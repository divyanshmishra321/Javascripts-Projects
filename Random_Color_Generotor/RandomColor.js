

// Function to Generate Random Hexa Code for that Color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  document.querySelector(".codeArea").innerHTML = `${color}`;
  return color;
};

let intervalId;
// Function to start the Color generation
const startChangingColor = function () {
  if (intervalId == null) {
    intervalId = setInterval(chnageBgcolor, 5000);
  }
  // function to change BG color by current Generated color code
  function chnageBgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};


// Function to Stop the Color generation
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};


document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
