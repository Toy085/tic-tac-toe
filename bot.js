function botMove(gameState)
{
    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === "") {
            return i;
        }
    }
    return null;
}