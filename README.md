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