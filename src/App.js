import { useDispatch } from "react-redux"
import "./App.css"
import createMatrixWithAllCharacters from "./createMatrix/createMatrix"
import { useSelector } from "react-redux"
import { useState } from "react"
import globalObject from "./globals"
import * as Styled from "./indexStyle"
import eventKeysFunctions from "./Move/events"
import Image from "./GameWrapper/defineImg"
import DisplayOfTheFinalMessage from "./Message/message"

function App() {
  const dispatch = useDispatch()
  const gameState = useSelector(function (state) {
    return state.gameState
  })

  const [boardSize, SetboardSize] = useState(globalObject.optionsArray[0])
  const changeBoardSize = (event) => SetboardSize(parseInt(event.target.value))
  const gameArray = gameState.gameMatrix
  const styleObject = {
    width: gameArray.length * 80 + 100 + "px",
  }
  const isGameInProcess = gameState.gameOver === false && gameArray.length > 0
  const gameStatus = useSelector(function (state) {
    return state.gameState.gameResult
  })
  // console.log(gameStatus)
  const NewGameButton = ({ gameResult, onNewGame }) => {
    return (
      <div>
        <DisplayOfTheFinalMessage result={gameResult} />
        <Styled.Button
          onClick={() =>
            dispatch({
              type: "change",
              payload: {
                gameMatrix: createMatrixWithAllCharacters(boardSize),
                gameOver: false,
                gameResult: "",
              },
            })
          }
        >
          PLAY AGAIN
        </Styled.Button>
      </div>
    )
  }
  return (
    <div className="App">
      <Styled.Button
        onClick={() =>
          dispatch({
            type: "change",
            payload: {
              gameMatrix: createMatrixWithAllCharacters(boardSize),
              gameOver: false,
              gameResult: "",
            },
          })
        }
      >
        Start
      </Styled.Button>
      <OptionsDropDown onChange={(event) => changeBoardSize(event)} />
      <Styled.NewGameArea style={styleObject}>
        {isGameInProcess && <GameBoard gameArray={gameArray} />}

        {gameState.gameOver && gameArray.length > 0 && (
          <NewGameButton gameResult={gameState.gameResult} />
        )}
        {isGameInProcess ? (
          <Styled.BtnEvent>
            {globalObject.directionButtons.map((direction) => {
              return (
                <Styled.directionButtons
                  direction={direction}
                  key={direction}
                  onClick={() =>
                    dispatch({
                      type: "change",
                      payload: eventKeysFunctions({ ...gameState }, direction),
                    })
                  }
                >
                  {direction}
                </Styled.directionButtons>
              )
            })}
          </Styled.BtnEvent>
        ) : null}
        {/* {gameStatus === "win" ? "You Win" : "GAMEOVER"} */}
      </Styled.NewGameArea>
    </div>
  )
}

const OptionsDropDown = ({ onChange }) => {
  return (
    <Styled.Select onChange={onChange}>
      {globalObject.optionsArray.map((option) => {
        return (
          <option key={option} value={option}>
            {option}X{option}
          </option>
        )
      })}
    </Styled.Select>
  )
}

const GameBoard = ({ gameArray }) => {
  return gameArray.map((row, x) => {
    return row.map((column, y) => {
      return (
        <Styled.Box key={x.toString() + y.toString()}>
          <Image character={column} />
        </Styled.Box>
      )
    })
  })
}

// const ControlButtons = () => {
//   const dispatch = useDispatch()
//   return (
//     <Styled.BtnEvent>
//       {globalObject.directionButtons.map((direction) => {
//         return (
//           <Styled.directionButtons
//             direction={direction}
//             key={direction}
//             onClick={() =>
//               dispatch({
//                 type: "change",
//                 payload: {
//                   gameMatrix: eventKeysFunctions({ ...gameState }, direction),
//                 },
//               })
//             }
//           >
//             {direction}
//           </Styled.directionButtons>
//         )
//       })}
//     </Styled.BtnEvent>
//   )
// }
export default App
