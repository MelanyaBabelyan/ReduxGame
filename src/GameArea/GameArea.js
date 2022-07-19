import { Button, NewGameArea } from "./StyleGameArea"
import { useDispatch, useSelector } from "react-redux"
import OptionsDropDown from "../OptionsDropDown/OptionsDropDown"
import { useState } from "react"
import globalObject from "../Global/globals"
import { GameBoard } from "../GameBoard/GameBoard"
import { NewGameButton } from "../NewGameButton/NewGameButton"
import ControlButtons from "../ControlButtons/ControlButtons"
import DisplayOfTheFinalMessage from "../Message/message"

const getGameState = (state) => state
const GameArea = ({ gameState, boardNumber }) => {
  const currentGameState = useSelector(getGameState)

  const dispatch = useDispatch()
  const [boardSize, SetboardSize] = useState(globalObject.optionsArray[0])
  const changeBoardSize = (event) => SetboardSize(parseInt(event.target.value))
  const gameArray = gameState.gameMatrix
  const styleObject = {
    width: gameArray.length * 80 + 100 + "px",
  }

  // console.log(currentGameState, "get")
  const isGameInProcess = gameState.gameOver === false && gameArray.length > 0
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "newGame",
            payload: {
              boardNumber: boardNumber,
              boardSize: boardSize,
            },
          })
        }
      >
        Start
      </Button>
      {console.log()}

      <OptionsDropDown onChange={(event) => changeBoardSize(event)} />
      <NewGameArea style={styleObject}>
        {isGameInProcess && <GameBoard gameArray={gameArray} />}
        {gameState.gameOver && gameArray.length > 0 && (
          <NewGameButton gameState={gameState} />
        )}
        {isGameInProcess ? <ControlButtons gameState={gameState} /> : null}
      </NewGameArea>
      {/* {gameState.gameOver === true ? (
        <DisplayOfTheFinalMessage gameResult={gameState.gameResult} />
      ) : null} */}
    </div>
  )
}

export default GameArea
