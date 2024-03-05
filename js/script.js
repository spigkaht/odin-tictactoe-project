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
  // let turns = 0;

  // board array
  let gameBoard = [];

  // win combination to check against
  let appliedCombo = [];

  const playerTurn = (() => {
    const boardSquares = document.querySelectorAll(".square");
    
  })();

  return {};
})();

// IIFE to run output to screen. outputDisplay contains all returned functions
const outputDisplay = (() => {

  return {};
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
