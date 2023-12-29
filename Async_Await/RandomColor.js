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
const startChangingColor = function () {
  if (intervalId == null) {
    intervalId = setInterval(chnageBgcolor, 5000);
  }
  function chnageBgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
