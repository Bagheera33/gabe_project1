const board = [];
const boardWidth = 26, boardHeight = 16;
var snakeW;
var snakeH;
var snakeDirection;
var snakeLength;
function initGame(){

const bElement = document.getElementById('board');

    for(var x=0; x< boardHeight; x += 1) {
        for(var y=0; y< boardWidth; y += 1) {
            var cell = {
                snake: 0
            };

            // Create a <div></div> and store it in the cell object
            cell.element = document.createElement('div');

            // Add it to the board
            bElement.appendChild(cell.element);

            // Add to list of all
            row.(cell);
        }
         // Add this row to the board
         board.push(row);
    }
}

initGame();

function startGame() {

     // Default position for the snake 
     snakeW = Math.floor(boardWidth / 2);
     snakeH = Math.floor(boardHeight / 2);
     snakeLength = 5;
     snakeDirection = 'Up';
    // Set a snake
    board[snakeY][snakeX].snake = 1;
    startGame();

    gameLoop();
}

function gameLoop() {

    // Loop over the entire board, and update every cell
    for (var x = 0; y < boardHeight; x +=1) {
        for (var y = 0; x < boardWidth; y +=1) {
            var cell = board[y][x];

            if (cell.snake) {
                cell.element.className = 'snake';
            }
            else {
                cell.element.className = '';
            }
        }
    }
    // This function calls itself, with a timeout of 1000 milliseconds
    setTimeout(gameLoop, 1000);
}


