let player = document.querySelector("#currentPlayer");
let board = document.querySelector("#board");
let cells = document.querySelectorAll(".cell");
let newGameBtn = document.querySelector("#newGame");
let gameGrid;
let currentPlayer;
let winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8],
];

// function to initialize game
function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  console.log("Initialized Game");
  cells.forEach((cell, index) => {
    cell.innerText = "";
    cells[index].style.pointerEvents = "all";
    board.style.backgroundColor = "#444";
    cells[index].style.backgroundColor="#444";
   
  });
  newGameBtn.classList.add("inactive");
  
  player.innerText = `Current Player-${currentPlayer}`;
}

initGame();

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    handleCellClick(index);
  });
});

function handleCellClick(index) {
  if (gameGrid[index] === "") {
    cells[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    cells[index].style.pointerEvents = "none";
    console.log(`${index} Cell Clicked`);

    // swap Turn
    if (currentPlayer === "X") {
        currentPlayer = "0";
        cells[index].style.backgroundColor = "#fa7d7d";
    } else {
      cells[index].style.backgroundColor = "#7d98fa";
      currentPlayer = "X";
    }
    
    checkGameOver();
  }
}

function checkGameOver() {
    let winner = "";
    winningPositions.forEach((position) => {
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {
            cells.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            winner = gameGrid[position[0]] === "X" ? "X" : "O";
             
           
           
            cells[position[0]].style.backgroundColor="green";
            cells[position[1]].style.backgroundColor="green";
            cells[position[2]].style.backgroundColor="green";

        }
    });


    if (winner !== "") {
        player.textContent = `Winner is - ${winner}`;
        newGameBtn.classList.remove("inactive");
        return;
    }



    // Here is not winner yet Check for tie
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if (box !== "") {
            fillCount++;
        }
    });

    if (fillCount === 9) {
        player.textContent = "Game Tied !";
        newGameBtn.classList.remove("inactive");
    }
}

newGameBtn.addEventListener("click", initGame);
