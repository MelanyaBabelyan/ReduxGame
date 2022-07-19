import globalObject from "../Global/globals"
import changeGameStatus from "../GameStatus/gameStatus"

const rabbitGoTo = (gameState, rabbitIndex, x, y) => {
  console.log(gameState)
  const [i, j] = rabbitIndex
  const matrix = gameState.gameMatrix

  if (matrix[x][y] === globalObject.FREE_CELL) {
    matrix[x][y] = globalObject.RABBIT
    matrix[i][j] = globalObject.FREE_CELL
  }

  if (matrix[x][y] === globalObject.HOME) {
    console.log("win`````")
    changeGameStatus(gameState, "win")

    return gameState
  }

  if (matrix[x][y] === globalObject.WOLF) {
    changeGameStatus(gameState, "gameOver")
    return gameState
  }
  return gameState
}

export default rabbitGoTo
