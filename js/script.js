const players = {
  player1: {
    marker: "X",
  },
  player2: {
    marker: "O",
  },
};

const board = () => {
  const gameBoard = [];
  return gameBoard;
};

const updateBoard = (board, player, marker, square) => {
  console.log("board: ", board);
  console.log("player: ", player);
  console.log("marker: ", marker);
  console.log("square: ", square);
};

const playerSwitch = (player) => {
  console.log("player is player1? ", player == "player1");
};

const winConditions = (player) => {};

const game = () => {
  let currPlayer = players.player1;
  console.log("players: ", players, "player1: ", Object.keys(currPlayer));
  // need to work out how to switch between player1 and player2
  // am i using the wrong object/array/constructor type etc? 
  // using object within object means i don't know how to reference object.key
  // (ie players.PLAYER1)
  const gameBoard = board();

  const boardSquares = document.querySelectorAll(".square");
  boardSquares.forEach((el) => {
    el.addEventListener("click", (e) => {
      elClass = e.target.classList;
      elText = e.target.textContent;

      updateBoard(gameBoard, currPlayer, currPlayer.marker, elClass[1]);
      currPlayer = playerSwitch(currPlayer);
      winConditions(players);
    });
  });
};

const gameRestart = (players, marker) => {};

// ---- testing -----
game();
