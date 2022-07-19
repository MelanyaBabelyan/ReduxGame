import { BtnEvent, DirectionButtons } from "./Style"

import globalObject from "../Globals/Index"
import { useDispatch } from "react-redux"

const ControlButtons = ({ gameState }) => {
  const dispatch = useDispatch()
  const boardNumber = gameState.boardNumber
  const boardSize = gameState.boardSize
  return (
    <BtnEvent>
      {globalObject.directionButtons.map((direction) => {
        return (
          <DirectionButtons
            direction={direction}
            key={direction}
            onClick={() => {
              dispatch({
                type: "changeGameBoard",
                payload: {
                  direction: direction,
                  gameState: gameState,
                },
              })
            }}
          >
            {direction}
          </DirectionButtons>
        )
      })}
    </BtnEvent>
  )
}

export default ControlButtons
