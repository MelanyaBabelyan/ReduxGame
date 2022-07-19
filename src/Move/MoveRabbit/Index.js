import globalObject from "../../Globals/Index"
import gameOver from "../../GameOver/Index"

const rabbitGoTo = (gameState, rabbitIndex, x, y) => {
  const [i, j] = rabbitIndex
  const matrix = gameState.gameMatrix

  if (matrix[x][y] === globalObject.FREE_CELL) {
    matrix[x][y] = globalObject.RABBIT
    matrix[i][j] = globalObject.FREE_CELL
  }

  if (matrix[x][y] === globalObject.HOME) {
    gameOver(gameState, "win")

    return gameState
  }

  if (matrix[x][y] === globalObject.WOLF) {
    gameOver(gameState, "gameOver")
    return gameState
  }
  return gameState
}

export default rabbitGoTo
