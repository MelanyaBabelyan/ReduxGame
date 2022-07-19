import newGame from "./newGame"

const newBoard = {
  gameMatrix: [],
  gameOver: false,
  gameResult: "",
  boardSize: 5,
}

const initialState = []

export const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case "newGame":
      newGame(state, action)
      return [...state]
      break
    case "change":
      state[action.boardNumber] = {
        ...state[action.boardNumber],
        gameMatrix: action.gameMatrix,
        boardNumber: action.boardNumber,
      }
      return [...state]
      break

    case "AddNewBoard":
      return [...state, { ...newBoard }]
      break
    default:
      return [...state]
  }
}

export default rootReduser
