import changeGameState from "./ChangeGame"
import newGame from "./newGame"
import changePlace from "./ChangePlace"
import ACTIONS from "./Actions"

const newBoard = {
  gameMatrix: [],
  gameOver: false,
  gameResult: "",
  boardSize: 5,
  boardNumber: "",
  actionType: "",
}

const initialState = {
  past: [],
  present: [],
  future: [],
  history: [],
}

export const rootReduser = (state = initialState, action) => {
  const { past, present, future, history } = state

  switch (action.type) {
    case ACTIONS.history:
      console.log(action.payload)
      return {
        past: [...past],
        present: history[action.payload],
        future: [...future],
        history: [...past],
      }
    case ACTIONS.redo:
      return {
        past: [...past, JSON.parse(JSON.stringify(present))],
        present: future[0],
        future: future.slice(1),
        history: [...past],
      }

    case ACTIONS.undo:
      return {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future],
        history: [...past],
      }
      break

    case ACTIONS.changePlaceUp:
      const up = action.payload - 1
      return {
        past: [...past],
        present: [...changePlace(present, action, up)],
        future: [...future],
        history: [...past],
      }
      break

    case ACTIONS.changePlaceDown:
      const down = action.payload + 1
      return {
        past: [...past],
        present: [...changePlace(present, action, down)],
        future: [...future],
        history: [...past],
      }
      break

    case ACTIONS.removeBoard:
      const boardNumber = action.payload
      return {
        past: [],
        present: [
          ...present.filter(
            (gameState) => gameState.boardNumber !== boardNumber
          ),
        ],
        future: [],
        history: [...past],
      }
      break

    case ACTIONS.newGameBoard:
      return {
        past: [present],
        present: [...newGame(present, action)],
        future: [],
        history: [],
      }
      break

    case ACTIONS.changeGameBoard:
      return {
        past: [...past, JSON.parse(JSON.stringify(present))],
        present: [...changeGameState(present, action)],
        future: [],
        history: [...past],
      }
      break

    case ACTIONS.addNewBoard:
      return {
        past: [...past],
        present: [...present, { ...newBoard }],
        future: [...future],
        history: [...past],
      }
      break

    default:
      return state
  }
}

export default rootReduser
