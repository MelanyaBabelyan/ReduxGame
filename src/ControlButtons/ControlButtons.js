import { BtnEvent, DirectionButtons } from "./StyleControlButtons"
import eventKeysFunctions from "../Move/events"
import globalObject from "../Global/globals"
import { useDispatch, useSelector } from "react-redux"

const ControlButtons = ({ gameState }) => {
  const dispatch = useDispatch()

  return (
    <BtnEvent>
      {globalObject.directionButtons.map((direction) => {
        return (
          <DirectionButtons
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
          </DirectionButtons>
        )
      })}
    </BtnEvent>
  )
}

export default ControlButtons
