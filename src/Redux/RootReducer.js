import changeGameState from "./ChangeGame"
import newGame from "./newGame"
const newBoard = {
  gameMatrix: [],
  gameOver: false,
  gameResult: "",
  boardSize: 5,
  boardNumber: "",
}

const initialState = []

export const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case "removeBoard":
      const boardNumber = action.payload
      return [
        ...state.filter((gameState) => gameState.boardNumber !== boardNumber),
      ]
      break

    case "newGameBoard":
      newGame(state, action)
      return [...state]
      break

    case "changeGameBoard":
      return [...changeGameState(state, action)]
      break

    case "AddNewBoard":
      return [...state, { ...newBoard }]
      break
    default:
      return [...state]
  }
}

export default rootReduser
