import globalObject from "../../Globals/Index"
import findTheStepNearTheRabbit from "../../FindCordinate/FindCordinateCharacter/CordinateNearRabbit"
import findCordinateCharacter from "../../FindCordinate/FindCordinateCharacter/Index"
import gameOver from "../../GameOver/Index"
import distance from "../../FindCordinate/Distance/Index"

const moveWolves = (gameState, rabbitIndex) => {
  const array = gameState.gameMatrix
  const wolfsIndex = findCordinateCharacter(
    gameState.gameMatrix,
    globalObject.WOLF
  )

  const moveWolf = (wolf) => {
    if (gameState.gameOver) {
      gameOver(gameState, "gameOver")
      return
    }
    const steps = findTheStepNearTheRabbit(gameState, wolf)
    if (steps.length > 0) {
      steps.forEach((step) => {
        if (array[step[0]][step[1]] === globalObject.RABBIT) {
          gameOver(gameState, "gameOver")
          return gameState
        }
      })
      const distances = steps.map((step) => distance(rabbitIndex, step))
      const index = distances.indexOf(Math.min(...distances))
      const nearPoint = steps[index]
      if (nearPoint === globalObject.RABBIT) {
        gameOver(gameState, "gameOver")
        return gameState
      }
      array[nearPoint[globalObject.X]][nearPoint[globalObject.Y]] =
        globalObject.WOLF
      array[wolf[globalObject.X]][wolf[globalObject.Y]] = globalObject.FREE_CELL
    }
  }

  wolfsIndex.forEach(moveWolf)
}

export default moveWolves
