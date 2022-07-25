import { useDispatch, useSelector } from "react-redux"
import { Undo, Redo } from "./Steps"
const StepsForwardAndBackward = ({ boardNumber }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  if (state.future.length > 0 && state.past.length > 1) {
    return (
      <div>
        <Undo dispatch={dispatch} boardNumber={boardNumber} />
        <Redo dispatch={dispatch} boardNumber={boardNumber} />
      </div>
    )
  }

  if (state.future.length > 0) {
    return (
      <div>
        <Redo dispatch={dispatch} boardNumber={boardNumber} />
      </div>
    )
  }
  if (state.past.length > 1) {
    return (
      <div>
        <Undo dispatch={dispatch} boardNumber={boardNumber} />
      </div>
    )
  }
}
export default StepsForwardAndBackward
