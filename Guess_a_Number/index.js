// generate new random number
let randomNumber = parseInt(Math.random() * 100 + 1);

// take all imp references
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p"); //will create P element

let prevGuess = []; // to store previous already guesses
let numGuess = 1; //number of guesses
let playGame = true; //to allow user to play the game

// First Will check if the User is availble to play or not
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess); //now pass the value to validate further
  });
}

function validateGuess(guess) {
  // will validate all the possible error and not suitable values
  if (isNaN(guess)) {
    alert("Please enter a Valid Number");
  } else if (guess < 1) {
    alert("Please enter a Number More than 1");
  } else if (guess > 100) {
    alert("Please enter a number Less than 100");
  } else {
    prevGuess.push(guess); //Will display Previous Guess Values
    if (numGuess === 11) {
      displayGuessed(guess);
      displayMessage(`Game Over!🤦‍♂️  Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuessed(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // will check and compare the entered value with the right number
  if (guess === randomNumber) {
    displayMessage(`Hurray!😍 you Guessed it Right🎯`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooo Low😒`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Tooo High😒`);
  }
}

function displayGuessed(guess) {
  // will diplay the guessed value
  userInput.value = " "; //will clean the guess value
  guessSlot.innerHTML += `${guess},`;
  numGuess++; //will update the number of Attempts
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // display the message to DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // will end the Game
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // will again start new game
  const newGameButton = document.querySelector("#newGame" );
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
