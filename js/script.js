// IIFE to run gameplay. gamePlay contains all returned functions
const gamePlay = (() => {
  // factory function for creating players
  const players = (name, mark, turn) => {
    return { name, mark, turn };
  };

  // create two player objects
  const player1 = players("player1", "X", true);
  const player2 = players("player2", "O", false);

  // win combination list
  const winCombos = [
    [0, 1, 2],
    [0, 3, 5],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8],
  ];

  // no winner set
  let winner = null;

  // turn counter???
  let turns = 0;

  // board array
  let gameBoard = [];

  // win combination to check against
  let appliedCombo = [];

  // run player turns until win conditions met
  const playerTurns = (() => {
    // retrieve board squares, loop through each and set event listener
    const boardSquares = document.querySelectorAll(".square");
    boardSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        // player 1 move based on conditions
        if (
          player1.turn == true &&
          winner == null &&
          e.target.textContent == ""
        ) {
          // add move to array
          gameBoard[e.target.id] = player1.mark;
          // add move to board
          square.textContent = player1.mark;
          // switch player turns
          player1.turn = false;
          player2.turn = true;
          // player 2 move based on conditions
        } else if (
          player2.turn == true &&
          winner == null &&
          e.target.textContent == ""
        ) {
          // add move to array
          gameBoard[e.target.id] = player2.mark;
          // add move to board
          square.textContent = player2.mark;
          // switch player turns
          player1.turn = true;
          player2.turn = false;
          // fallback...
        } else return;

        // check for winner
        winCheck();
      });
    });
  })();

  // check for win conditions
  winCheck = () => {
    turns++;

    // build each player's results array to check against win conditions
    let xPlays = gameBoard.reduce(
      (array, mark, index) =>
        mark === player1.mark ? array.concat(index) : array,
      []
    );
    let oPlays = gameBoard.reduce(
      (array, mark, index) =>
        mark === player2.mark ? array.concat(index) : array,
      []
    );

    // loop over both arrays
    for (let [index, combo] of winCombos.entries()) {
      // compare player results array to win combinations array for winner
      if (combo.every((elem) => xPlays.indexOf(elem) > -1)) {
        gamePlay.winner = "player 1";
        gamePlay.winnerCombo = combo;
      } else if (combo.every((elem) => oPlays.indexOf(elem) > -1)) {
        gamePlay.winner = "player 2";
        gamePlay.winnerCombo = combo;
      } else if (gamePlay.winner == null && turns == 9) {
        gamePlay.winner = "tie";
        gamePlay.winnerCombo = combo;
      }
    }

    // display winner
    winDisplay();
  };

  clearGame = () => {
    // clear board, arrays etc
  };

  return {winCheck, clearGame, gameBoard, player1, player2, appliedCombo};
})();

// IIFE to run output to screen. outputDisplay contains all returned functions
const outputDisplay = (() => {
  const winContainer = document.querySelector("#winContainer");
  // function to display winner
  winDisplay = () => {
    if (gamePlay.winner === "player 1") {
      winContainer.textContent = "X wins this round!";
    } else if (gamePlay.winner === "player 2") {
      winContainer.textContent = "O wins this round!";
    } else if (gamePlay.winner === "tie") {
      winContainer.textContent = "It's a tie!";
    } else return;
  };

  return { winDisplay };
})();

// const updateBoard = (gameBoard, player, squares, square) => {
//   console.log(player.marker);
//   updateSquare = [...squares];
//   updateSquare.forEach((el, index) => {
//     if (el.classList[1] == square) {
//       board[index] = player.marker;
//       const boardSquares = document.querySelectorAll(".square");
//       boardSquares[index].textContent = player.marker;
//     }
//   });
// };

// const playerSwitch = (player) => {
//   // console.log("player is player1? ", player.name == "player1");
// };

// const winConditions = (player) => {};

// const game = () => {
//   console.log("game started");
//   let currPlayer = players.player1;
//   const gameBoard = board();

//   const boardSquares = document.querySelectorAll(".square");

//   console.log(currPlayer);

//   boardSquares.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       elClass = e.target.classList;
//       elText = e.target.textContent;

//       updateBoard(gameBoard, currPlayer, boardSquares, elClass[1]);
//       currPlayer = playerSwitch(currPlayer);
//       winConditions(players);
//     });
//   });
// };

// const gameRestart = (players, marker) => {};

// // ---- testing -----
// game();
