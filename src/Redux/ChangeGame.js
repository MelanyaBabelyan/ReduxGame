import eventKeysFunctions from "../Move/Index"
const changeGameState = (state, action) => {
      const gameState = eventKeysFunctions(
        action.payload.gameState,
        action.payload.direction
      )
      state[gameState.boardNumber] = {
        ...state[gameState.boardNumber],
        gameOver: gameState.gameOver,
        gameResult: gameState.gameResult,
        gameMatrix: gameState.gameMatrix,
        boardNumber: gameState.boardNumber,
        boardSize: gameState.boardSize,
      }
}

export default changeGameState
