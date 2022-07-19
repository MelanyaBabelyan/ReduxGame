import findCordinateCharacter from "../FindCordinate/FindCordinateCharacter/Index"
import moveWolves from "./MoveWolves/Index"
import globalObject from "../Globals/Index"
import getDirectionCoord from "../FindCordinate/GetDirectionCoord/Index"
import rabbitGoTo from "./MoveRabbit/Index"

const eventKeysFunctions = (gameState, eventKey) => {
  const rabbitIndex = findCordinateCharacter(
    gameState.gameMatrix,
    globalObject.RABBIT
  )[0]
  const [x, y] = rabbitIndex
  const [newX, newY] = getDirectionCoord(
    gameState.gameMatrix,
    rabbitIndex,
    eventKey
  )
  rabbitGoTo(gameState, rabbitIndex, newX, newY)
  if (gameState.gameOver === true) {
    return gameState
  }

  moveWolves(gameState, rabbitIndex)
  if (gameState.gameOver) {
    return gameState
  }

  return gameState
}

export default eventKeysFunctions
