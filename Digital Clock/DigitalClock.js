const clock = document.getElementById("clock");
let interval;

let date = new Date();
let time = date.toLocaleTimeString();
let cDate = date.toLocaleDateString();
DayClock.innerHTML=`${cDate}`
clock.innerHTML = date.toLocaleTimeString();

const Stopbtn = function () {
  clearInterval(interval);
};

const Startbtn = function () {
  interval = setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);
};

document.querySelector("#start").addEventListener("click", Startbtn);
document.querySelector("#stop").addEventListener("click", Stopbtn);
