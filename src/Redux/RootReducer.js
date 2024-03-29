import changeGameState from "./ChangeGame"
import newGame from "./newGame"
import changePlace from "./ChangePlace"
import ACTIONS from "./Actions"
import chooseFromPreviousSituations from "./History"

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
      return {
        past: [...past],
        present: [...chooseFromPreviousSituations(state, action)],
        future: [...future],
        history: [...history],
      }
    case ACTIONS.redo:
      return {
        past: [...past, JSON.parse(JSON.stringify(present))],
        present: future[0],
        future: future.slice(1),
        history: [...history],
      }

    case ACTIONS.undo:
      return {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future],
        history: [...history],
      }
      break

    case ACTIONS.changePlaceUp:
      const up = action.payload - 1
      return {
        past: [...past],
        present: [...changePlace(present, action, up)],
        future: [...future],
        history: [
          ...history,
          JSON.parse(JSON.stringify(present[action.payload])),
        ],
      }
      break

    case ACTIONS.changePlaceDown:
      const down = action.payload + 1
      return {
        past: [...past],
        present: [...changePlace(present, action, down)],
        future: [...future],
        history: [...history],
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
        history: [],
      }
      break

    case ACTIONS.startNewGame:
      return {
        past: [present],
        present: [...newGame(present, action)],
        future: [],
        history: [
          JSON.parse(JSON.stringify(present[action.payload.boardNumber])),
        ],
      }
      break

    case ACTIONS.changeGameBoard:
      return {
        past: [...past, JSON.parse(JSON.stringify(present))],
        present: [...changeGameState(present, action)],
        future: [],
        history: [
          ...history,
          JSON.parse(JSON.stringify(present[action.payload.boardNumber])),
        ],
      }
      break

    case ACTIONS.addNewBoard:
      return {
        past: [...past],
        present: [...present, { ...newBoard }],
        future: [...future],
        history: present,
      }
      break

    default:
      return state
  }
}

export default rootReduser
