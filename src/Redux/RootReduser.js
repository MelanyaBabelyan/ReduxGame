const rootReduser = (state, action) => {
  switch (action.type) {
    case "change":
    case "newGame":
      return {
        ...state,
        gameBoardNumber: action.payload.gameMatrix,
        gameState: {
          gameMatrix: action.payload.gameMatrix,
          gameOver: action.payload.gameOver,
          gameResult: action.payload.gameResult,
        },
      }
  }
  return state
}

export default rootReduser
