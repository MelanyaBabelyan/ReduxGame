import { Button, NewGameArea } from "./Style"
import { useDispatch, useSelector } from "react-redux"
import OptionsDropDown from "../OptionsDropDown/Index"
import { useState } from "react"
import globalObject from "../Globals/Index"
import { GameBoard } from "./GameBoard/Index"
import { ButtonPlayAgain } from "../NewGameButton/PlayAgain"
import ControlButtons from "../ControlButtons/Index"
import RemoveButton from "../RemoveButton/Index"
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

  const isGameInProcess = gameState.gameOver === false && gameArray.length > 0
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "newGameBoard",
            payload: {
              boardNumber: boardNumber,
              boardSize: boardSize,
            },
          })
        }
      >
        Start
      </Button>
      <OptionsDropDown onChange={(event) => changeBoardSize(event)} />
      <NewGameArea style={styleObject}>
        {isGameInProcess && <GameBoard gameArray={gameArray} />}
        {isGameInProcess && <RemoveButton boardNumber={boardNumber} />}
        {gameState.gameOver && gameArray.length > 0 && (
          <ButtonPlayAgain gameState={gameState} />
        )}
        {isGameInProcess ? <ControlButtons gameState={gameState} /> : null}
      </NewGameArea>
    </div>
  )
}

export default GameArea
