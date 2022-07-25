import { BtnEvent, DirectionButtons } from "./Style"
import globalObject from "../Globals/Index"
import { useDispatch } from "react-redux"
import ACTIONS from "../Redux/Actions"

const ControlButtons = ({ boardNumber }) => {
  const dispatch = useDispatch()
  return (
    <BtnEvent>
      {globalObject.directionButtons.map((direction) => {
        return (
          <DirectionButtons
            direction={direction}
            key={direction}
            onClick={() => {
              dispatch({
                type: ACTIONS.changeGameBoard,
                payload: {
                  direction: direction,
                  boardNumber: boardNumber,
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
