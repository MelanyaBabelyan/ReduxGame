import createMatrixWithAllCharacters from "../CreateMatrix/Index"

const newGame = (state, action) => {
  const boardNumber = action.payload.boardNumber
  state[boardNumber] = {
    ...state[boardNumber],
    gameMatrix: createMatrixWithAllCharacters(action.payload.boardSize),
    gameOver: false,
    gameResult: "",
    boardSize: (state[boardNumber].boardSize = action.payload.boardSize),
    boardNumber: boardNumber,
    actionType: (state[boardNumber].actionType = action.type.title),
  }

  return state
}

export default newGame
