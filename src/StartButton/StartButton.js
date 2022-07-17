import createMatrixWithAllCharacters from "../CreateMatrix/createMatrix"
import { Button } from "./StyleStartButton"
import { useDispatch } from "react-redux"
import OptionsDropDown from "../OptionsDropDown/OptionsDropDown"
import { useState } from "react"
import globalObject from "../Global/globals"

const StartButton = () => {
  const dispatch = useDispatch()
  const [boardSize, SetboardSize] = useState(globalObject.optionsArray[0])
  const changeBoardSize = (event) => SetboardSize(parseInt(event.target.value))
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "newGame",
            payload: {
              gameMatrix: createMatrixWithAllCharacters(boardSize),
              gameOver: false,
              gameResult: "",
            },
          })
        }
      >
        Start
      </Button>
      <OptionsDropDown onChange={(event) => changeBoardSize(event)} />
    </div>
  )
}

export const StartAndSelect = () => {
  const dispatch = useDispatch()
  const [boardSize, SetboardSize] = useState(globalObject.optionsArray[0])
  const changeBoardSize = (event) => SetboardSize(parseInt(event.target.value))
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "newGame",
            payload: {
              gameMatrix: createMatrixWithAllCharacters(boardSize),
              gameOver: false,
              gameResult: "",
            },
          })
        }
      >
        Start
      </Button>
      <OptionsDropDown onChange={(event) => changeBoardSize(event)} />
    </div>
  )
}

export const newBoard = ({ onClick }) => {
  return (
    <div>
      <Button onClick={onClick}>NewBoard</Button>
    </div>
  )
}

export default StartButton
