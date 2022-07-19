const changeGameState = (state, action) => {
  state[action.payload.boardNumber] = {
    ...state[action.payload.boardNumber],
    gameOver: action.payload.gameOver,
    gameResult: action.payload.gameResult,
    gameMatrix: action.payload.gameMatrix,
    boardNumber: action.payload.boardNumber,
    boardSize: action.payload.boardSize,
  }
}

export default changeGameState
