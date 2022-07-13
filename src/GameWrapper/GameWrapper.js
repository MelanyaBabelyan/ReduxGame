import { useState } from "react"
import createMatrixWithAllCharacters from "../createMatrix/createMatrix"
import globalObject from "./globals"
import eventKeysFunctions from "../Move/events"
import Image from "../GameWrapper/defineImg"
import DisplayOfTheFinalMessage from "../Message/message"
import * as Styled from "./stylesheet "
import { createStore } from "redux"
import { useDispatch } from "react-redux/es/exports"
import { useSelector } from "react-redux"

const GameWrapper = () => {
  const dispatch = useDispatch()
  const [boardSize, SetboardSize] = useState(globalObject.optionsArray[0])
  const changeBoardSize = (event) => SetboardSize(parseInt(event.target.value))
  const gameState = useSelector(function (state) {
    return state.gameState
  })
  const gameArray = gameState.gameMatrix
  const styleObject = {
    width: gameArray.length * 80 + 100 + "px",
  }
  const isGameInProcess = gameState.gameOver === false && gameArray.length > 0

  const onMove = (direction) => {
    if (gameState.gameOver === true) {
      return
    }
    dispatch({
      type: "change",
      payload: {
        gameState: eventKeysFunctions(gameState, direction),
      },
    })
  }
  return (
    <div>
      {gameArray}
      <Styled.Button
        onClick={() =>
          dispatch({
            type: "change",
            payload: {
              gameMatrix: createMatrixWithAllCharacters(boardSize),
            },
          })
        }
      >
        Start
      </Styled.Button>
      <OptionsDropDown onChange={(event) => changeBoardSize(event)} />
      <Styled.NewGameArea style={styleObject}>
        {isGameInProcess && <GameBoard gameArray={gameArray} />}
        {isGameInProcess && <ControlButtons onMove={onMove} />}
        {gameState.gameOver && gameArray.length > 0 && (
          <NewGameButton
            gameResult={gameState.gameResult}
            // onNewGame={newGamState}
          />
        )}
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

const ControlButtons = ({ onMove }) => {
  return (
    <Styled.BtnEvent>
      {globalObject.directionButtons.map((direction) => {
        return (
          <Styled.directionButtons
            direction={direction}
            key={direction}
            onClick={() => onMove(direction)}
          >
            {direction}
          </Styled.directionButtons>
        )
      })}
    </Styled.BtnEvent>
  )
}

const NewGameButton = ({ gameResult, onNewGame }) => {
  return (
    <div>
      <DisplayOfTheFinalMessage result={gameResult} />
      <Styled.Button onClick={onNewGame}>PLAY AGAIN</Styled.Button>
    </div>
  )
}

export default GameWrapper
