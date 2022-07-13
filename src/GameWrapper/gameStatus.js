const changeGameStatus = (gameState, status) => {
  console.log(status)
  gameState.gameOver = true
  gameState.gameResult = status
}
export default changeGameStatus
