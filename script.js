// 1. Select DOM elements
const cells = document.querySelectorAll('.cell');
const gameButton = document.getElementById('gameButton');
const gameInfo = document.querySelector('.game-Info');

// 2. Game State variables
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = false;

// 3. Winning conditions (indices in the grid)
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// 4. Handle Cell Clicks
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    // Check if cell is already filled or game is inactive
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    updateCell(clickedCell, clickedCellIndex);
    checkResult();
}

function updateCell(cell, index) {
    gameState[index] = currentPlayer;
    cell.innerText = currentPlayer;

    cell.classList.add('inner-text');
    cell.classList.add(currentPlayer.toLowerCase()); // Add 'x' or 'o' class for styling
    
    // Toggle player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    
    // Update the UI to show whose turn it is
    if (gameActive) {
        gameInfo.innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        // Find the winner (the player who just moved)
        const winner = currentPlayer === "X" ? "O" : "X";
        gameInfo.innerText = `Player ${winner} Wins!`;
        gameActive = false;
        return;
    }

    // Check for Draw
    if (!gameState.includes("")) {
        gameInfo.innerText = "It's a Draw!";
        gameActive = false;
    }
}

// 5. Start/Restart Game
function startGame() {
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    gameInfo.innerText = "Player X's turn";
    
    // Clear the visual board
    cells.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove('inner-text', 'x', 'o');
    });
    gameButton.innerText = "Restart Game";
}

// 6. Attach Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
gameButton.addEventListener('click', startGame);