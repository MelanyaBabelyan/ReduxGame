import { createStore } from "redux"

const initialState = {
  gameState: {
    gameMatrix: [],
    gameOver: false,
    gameResult: "",
  },
}

const rootReduser = (state, action) => {
  console.log(action, "rqwerwet")
  if (action.type === "change") {
    return {
      ...state,
      gameState: {
        gameMatrix: action.payload.gameMatrix,
        gameOver: action.payload.gameOver,
        gameResult: action.payload.gameResult,
      },
    }
  }
  return state
}

const store = createStore(
  rootReduser,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export default store
