import createMatrixWithAllCharacters from "../CreateMatrix/createMatrix"

const newGame = (state, action) => {
  state[action.payload.boardNumber] = {
    ...state[action.payload.boardNumber],
    gameMatrix: createMatrixWithAllCharacters(action.payload.boardSize),
    gameOver: false,
    gameResult: "",
    boardSize: (state[action.payload.boardNumber].boardSize =
      action.payload.boardSize),
    boardNumber: action.payload.boardNumber,
  }
}

export default newGame
