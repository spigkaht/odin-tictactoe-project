# odin-tictactoe-project

Odin Tic Tac Toe Project
Write a tic tac toe game with user interface
Focus on prototypes, prototypal inheritance, factory functions & closures
Will attempt to write the JavaScript with as little of the above as 
possible, just 'make it work' and then improve/optimise

pseudocode
> empty array for game board
> 'buttons' for game board squares
> assign player 1, player 2
> assign markers for player 1, player 2
>> take single square input from user 1
>> populate square with player marker from input
>> check win conditions (require more info)
>> repeat until winner == true
> display winner
> take input for restart game
> clear board
> clear array

board
> set empty array

player
> create new player
> set marker
> set winner

game
> create two new players
> set event listeners for game board squares
> retrieve input for first square choice
> update board with player 1 marker
> switch to player 2
> update board with player 2 marker
> switch to player 1
> repeat.. until winConditions == true
> display player.winner
> restart function

gameRestart(player, marker)
> set display for restart button
> event listener for restart game button
> on click > clear board
> clear player details
> call game function

playerSwitch(player)
> switch player 1 to player 2
return player

updateBoard(player, marker, square)
> populate square with marker
> return player

winConditions(player)
> if win condition met
> return player.winner = true
> else return

UPDATE BOARD
- gameBoard (empty array)
- player (string eg "player1")
- marker (string eg "X")
- squares (nodelist of 9 buttons elements)
- square (string eg "square2")

> find nodelist element which matches square
> work out index of above
> update gameBoard array index [above index]

BORROWED CODE FOR BREAKDOWN

const gameBoard = (() => {
    // Creates players
    const playerFactory = (name, mark, ai, turn) => {
        return { name, mark, ai, turn };
    };

    const player1 = playerFactory('player 1', 'X', false, true);
    const player2 = playerFactory('Player 2', 'O', false, false);

    // Possible win combinations
    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];
    
    let winner = null;
    
    // Turn counter
    let turns = 0;

    // Board array
    let board = [];
    
    // Winner combination array
    let winnerCombo = [];
    
    // Function when making a move
    const playerTurn = (function () {
        const box = document.querySelectorAll('.box');
        box.forEach( box => {
            box.addEventListener('click', e => {
                // X player move if conditions are met
                if (player1.turn == true && gameBoard.winner == null
                    && e.target.textContent == '') {
                    // Adds move to array
                    board[e.target.id] = player1.mark;
                    // Board styling
                    box.textContent = player1.mark;
                    box.style.color = '#EE6C4D';
                    // Sets player turns
                    player1.turn = false;
                    player2.turn = true;
                    
                    console.log(board)
                // O player move if conditions are met   
                } else if (player2.turn == true && gameBoard.winner == null
                    && e.target.textContent == '' && player2.ai == false) {
                    // Adds move to array    
                    board[e.target.id] = player2.mark;
                    // Board styling
                    box.textContent = player2.mark;
                    box.style.color = '#98C1D9';
                    // Sets player turns
                    player1.turn = true;
                    player2.turn = false;
                    
                    console.log(board)
                } else {
                    return;
                };

               /* if(player2.ai == true && player2.turn == true 
                    && gameBoard.winner == null) {
                    aiMove();
                }; */

                winCheck();

                // Fade effect using opacity
                box.style.opacity = '1';  
            });
        });
        return { box }
    })();
    
  /*  aiMove = () => {
        
        rndIndexGen = (min, max) => {
            return Math.floor(Math.random() * (max - min) ) + min;
        };
         
        let rndindex = rndIndexGen(0, 9);

        let aiBox = document.getElementById(rndindex);
        if(aiBox.textContent === "") {  
        aiBox.textContent = player2.mark;
        aiBox.style.color = '#98C1D9';
        board[board.splice(rndindex, 1, player2.mark)];
        player1.turn = true;
        player2.turn = false;
        } else {
            aiMove();
        };
        aiBox.style.opacity = '1';
        console.log(aiBox, rndindex)
        
    }; */
    
    // Checks for a winner
    winCheck = () => {
        turns++;

        // Seperates each player X | O move into 2 diffrent arrays
        let xPlays = board.reduce((a, e, i) => 
        (e === player1.mark) ? a.concat(i) : a, []);
        let oPlays = board.reduce((a, e, i) => 
        (e === player2.mark) ? a.concat(i) : a, []);
        // Loop iterates over each winCombo array 
        for(let [index, combo] of winCombos.entries()) {
            // Check if player moves index is equal to combo array index 
            if (combo.every(elem => xPlays.indexOf(elem) > -1)) {
                
                gameBoard.winner = 'p1';
                gameBoard.winnerCombo = combo;
                
            } else if (combo.every(elem => oPlays.indexOf(elem) > -1)) {
                
                gameBoard.winner = 'p2';
                gameBoard.winnerCombo = combo;

            } else if (gameBoard.winner == null && gameBoard.winner == undefined 
                && turns == 9) {
                gameBoard.winner = 'tie';
                gameBoard.winnerCombo = combo;
            };
        };
        // Display the winner
        console.log(turns, gameBoard.winner, winnerCombo)
        winDisplay();
        return winnerCombo;
    };
    // Resets board and display
    gameReset = () => {
        gameBoard.winner = null;
        gameBoard.winnerCombo = undefined;
        player1.turn = true;
        player2.turn = false;
        player2.ai = false;
        turns = 0;
        board.splice(0, board.length);
        console.log(board, winner, player1.turn, player2.turn)
    };
    console.log(board, winner, player1.turn, player2.turn)

    return { winCheck, gameReset, playerTurn, board, player2, winnerCombo };
})();

// Controls the display
const displayController = (() => {
    const boxCtn = document.querySelector('.box-ctn');
    const box = document.querySelectorAll('.box');
    const winCtn = document.querySelector('.win-display');
    // Display winner function 
    winDisplay = () => {
        // Displays the win combo
        combDisplay = () => {
            for(i = 0; i < gameBoard.winnerCombo.length; i++) {
                document.getElementById(gameBoard.winnerCombo[i]).style.
                  backgroundColor = 'rgba(0, 0, 0, 0.040)';
            };
        };    
        // Displays the winner
        if(gameBoard.winner === 'p1') {
            winCtn.textContent = 'X Wins the round!';
            combDisplay();

        } else if (gameBoard.winner === 'p2') {
            winCtn.textContent = 'O Wins the round!';
            combDisplay();
            
        } else if (gameBoard.winner === 'tie') {
            winCtn.textContent = 'It\'s a tie!';
            
        } else {
            return;
        };

        replayBtn.style.display = 'flex';
        backBtn.style.display = 'flex';
        console.log(gameBoard.winnerCombo)
    };
    // Board render 
    gamePlay = () => {
        winCtn.style.display = 'block';

        header.style.display = 'none';
     
        playBtn.style.display = 'none';

        // playBtnAi.style.display = 'none';
        
        boxCtn.style.display = 'flex';

        backBtn.style.display = 'flex';
    };

  /*  gamePlayAi = () => {
        winCtn.style.display = 'block';

        header.style.display = 'none';

        playBtn.style.display = 'none';

       // playBtnAi.style.display = 'none';

        boxCtn.style.display = 'flex';

        backBtn.style.display = 'flex';

        gameBoard.player2.ai = true;

        console.log(gameBoard.player2.ai)
    }; */

    // Resets board and display
    gameReplay = () => {
        gameBoard.gameReset();

        box.forEach( box => {
            box.textContent = '';
            box.style.opacity = '0';
            box.style.backgroundColor = 'white';
        });

        replayBtn.style.display = 'none';

        winCtn.textContent = '';
    };
    
    // Back to main button 
    mainPage = () => {
        // styling
        boxCtn.style.display = 'none';

        winCtn.style.display = 'none';

        backBtn.style.display = 'none';

      //  playBtnAi.style.display = 'flex';

        playBtn.style.display = 'flex';

        header.style.display = 'flex';
        // Resets board and display  
        gameReplay();
    };

  //  const playBtnAi = document.getElementById('play-btn-ai');
   // playBtnAi.addEventListener('click', gamePlayAi);
    
    // Event listeners 
    const playBtn = document.getElementById('play-btn');
    playBtn.addEventListener('click', gamePlay);

    const replayBtn = document.querySelector('.replay-btn');
    replayBtn.addEventListener('click', gameReplay);

    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', mainPage);

    const header = document.querySelector('header');

    return { winDisplay, gamePlay }
})();

BREAKDOWN OF ABOVE CODE

gameBoard function RUN ONCE (IIFE)
> factory function to create players
> create player 1
> create player 2
> set array for win combinations
> set winner as null
> set turn counter
> set empty array for board
> set empty array for win combination progress

> playerTurn function for each turn
>> retrieve all box class elements
>> loop through each box class element
>>> event listener for clicks on each element



> displayController function RUN ONCE (IIFE)


NOTES
each IIFE is set into variable (and returns each func)
can refer to each global variable between IIFEs
global variables are fine as long as within IIFE
two IIFE functions (gameBoard and displayController)
each function is individual IIFE
put foreach & event listeners inside function
use ID as 0, 1, 2 etc for array position indicator
for board, set both array and textcontent for markers
use playerx.turn and true/false to switch turns
use if/else with conditions to decide whose turn
set array for XXX for each player etc
use loop in winCheck function to check array vs array

??? playerTurn returns box nodelist?