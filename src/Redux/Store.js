import { createStore } from "redux"

import CreateMatrix from "../createMatrix/createMatrix"
const store = createStore(
  function (state, action) {
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
  },
  {
    gameState: {
      gameMatrix: [],
      gameOver: false,
      gameResult: "",
    },
  }
)

export default store

// import { createStore, combineReducers } from "redux"

// const gameStateReduser = (state = {}, action) => {
//   if (action.type === "changeMatrix") {
//     return {
//       gameState: {
//         gameMatrix: action.payload.gameMatrix,
//       },
//     }
//   }
//   return state
// }
// const GamMassageReduser = (state = {}, action) => {
//   if (action.type === "changeMessage") {
//     return {
//       gameStatus: action.payload.gameStatus,
//     }
//   }
//   return state
// }

// const store = createStore(
//   combineReducers({
//     gameState: gameStateReduser,
//     gameStatus: GamMassageReduser,
//   }),
//   {
//     gameState: {
//       gameMatrix: [],
//     },

//     gameOver: false,
//     gameStatus: "",
//   }
// )

// export default store
