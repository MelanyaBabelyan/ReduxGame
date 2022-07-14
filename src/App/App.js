import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import globalObject from "../Global/globals"
import NewGameArea from "./AppStyle"
import StartButton from "../StartButton/StartButton"
import ControlButtons from "../ControlButtons/ControlButtons"
import OptionsDropDown from "../OptionsDropDown/OptionsDropDown"
import { GameBoard } from "../GameBoard/GameBoard"
import { NewGameButton } from "../NewGameButton/NewGameButton"
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
  return (
    <div className="App">
      <StartButton dispatch={dispatch} boardSize={boardSize} />
      <OptionsDropDown onChange={(event) => changeBoardSize(event)} />
      <NewGameArea style={styleObject}>
        {isGameInProcess && <GameBoard gameArray={gameArray} />}
        {gameState.gameOver && gameArray.length > 0 && (
          <NewGameButton
            gameResult={gameState.gameResult}
            dispatch={dispatch}
            boardSize={boardSize}
          />
        )}
        {isGameInProcess ? (
          <ControlButtons dispatch={dispatch} gameState={gameState} />
        ) : null}
      </NewGameArea>
    </div>
  )
}

export default App
