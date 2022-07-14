import * as Styled from "./stylesheet "
import createMatrixWithAllCharacters from "../createMatrix/createMatrix"
import Image from "./defineImg"
import DisplayOfTheFinalMessage from "../Message/message"
import eventKeysFunctions from "../Move/events"
import globalObject from "../globals"

export const StartNewGame = ({ dispatch, boardSize }) => {
  return (
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
  )
}
export const GameBoard = ({ gameArray }) => {
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

export const NewGameButton = ({ gameResult, dispatch, boardSize }) => {
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

export const ControlButtons = ({ dispatch, gameState }) => {
  return (
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
  )
}

export const OptionsDropDown = ({ onChange }) => {
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
