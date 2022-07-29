import eventKeysFunctions from "../Move/Index"

const changeGameState = (state, action) => {
  const boardNumber = action.payload.boardNumber
  const gameState = eventKeysFunctions(
    state[boardNumber],
    action.payload.direction
  )

  state[boardNumber] = {
    ...state[boardNumber],
    gameOver: (state[boardNumber].gameOver = gameState.gameOver),
    gameResult: (state[boardNumber].gameResult = gameState.gameResult),
    gameMatrix: (state[boardNumber].gameMatrix = gameState.gameMatrix),
    boardNumber: (state[boardNumber].boardNumber = gameState.boardNumber),
    boardSize: (state[boardNumber].boardSize = gameState.boardSize),
    actionType: (state[boardNumber].actionType =
      "Went in the " + gameState.actionType + " direction"),
  }
  return state
}

export default changeGameState
