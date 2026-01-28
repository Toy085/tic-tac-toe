const corners = [0, 2, 6, 8]
const edges = [1, 3, 5, 7]

function botMove(gameState)
{
    const cornerTaken = corners.some(index => gameState[index] !== "");
    const edgeTaken = edges.some(index => gameState[index] !== "");

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