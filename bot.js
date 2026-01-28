const corners = [0, 2, 6, 8];
const edges = [1, 3, 5, 7];

let lastPlayerMove = "";

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function botMove(gameState, botMode)
{
    const cornerTaken = corners.some(index => gameState[index] !== "");
    const edgeTaken = edges.some(index => gameState[index] !== "");

    // Random mode
    if (botMode === 1)
    {
        let wantToPlay = null;
        while (true)
        {
            wantToPlay = Math.floor(Math.random() * 10)
            if (gameState[wantToPlay] != "")
            {
                return wantToPlay;
            }
        }
    }

    if (cornerTaken && gameState[4] === "") {
        return 4;
    }
    /*if (edgeTaken) {
        for (let i = 0; i < edges.length; i++) {
            let edgeIndex = edges[i];
            if (gameState[edgeIndex] === "") {
                return edgeIndex;
            }
        }
    }*/

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === "") {
            return i;
        }
    }
    return null;
}