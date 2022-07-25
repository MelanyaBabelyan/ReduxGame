import changeGameState from "./ChangeGame"
import newGame from "./newGame"
import changePlace from "./ChangePlace"

const newBoard = {
  gameMatrix: [],
  gameOver: false,
  gameResult: "",
  boardSize: 5,
  boardNumber: "",
}

const initialState = {
  past: [],
  present: [],
  future: [],
}

export const rootReduser = (state = initialState, action) => {
  const { past, present, future } = state

  switch (action.type) {
    case "redo":
      return {
        past: [...past, JSON.parse(JSON.stringify(present))],
        present: future[0],
        future: future.slice(1),
      }

    case "undo":
      return {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future],
      }
      break

    case "ChangePlaceUP":
      const up = action.payload - 1
      return {
        past: [...past],
        present: [...changePlace(present, action, up)],
        future: [...future],
      }
      break

    case "changePlaceDown":
      const down = action.payload + 1
      return {
        past: [...past],
        present: [...changePlace(present, action, down)],
        future: [...future],
      }
      break

    case "removeBoard":
      const boardNumber = action.payload
      return {
        past: [],
        present: [
          ...present.filter(
            (gameState) => gameState.boardNumber !== boardNumber
          ),
        ],
        future: [],
      }
      break

    case "newGameBoard":
      return {
        past: [present],
        present: [...newGame(present, action)],
        future: [],
      }
      break

    case "changeGameBoard":
      console.log(past, "past")
      console.log(present, "present")
      console.log(future, "future")
      return {
        past: [...past, JSON.parse(JSON.stringify(present))],
        present: [...changeGameState(present, action)],
        future: [],
      }
      break

    case "AddNewBoard":
      console.log(past, "past")
      return {
        past: [],
        present: [...present, { ...newBoard }],
        future: [],
      }
      break

    default:
      return state
  }
}

export default rootReduser
