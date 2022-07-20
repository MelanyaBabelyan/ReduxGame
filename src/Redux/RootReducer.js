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
    case "ChangePlaceUP":
      state[action.payload.boardNumber] = {
        ...state[action.payload.boardNumber],
      }
      const empty1 = state[action.payload]
      state[action.payload] = state[action.payload - 1]
      state[action.payload - 1] = empty1
      return [...state]
      break

    case "changePlaceDown":
      const empty2 = state[action.payload]
      state[action.payload] = state[action.payload + 1]
      state[action.payload + 1] = empty2
      return [...state]
      break
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
