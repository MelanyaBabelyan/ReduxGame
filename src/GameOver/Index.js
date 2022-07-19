const gameOver = (gameState, status) => {
  gameState.gameOver = true
  gameState.gameResult = status
}
export default gameOver
