import { useDispatch, useSelector } from "react-redux"
import { Up, Down } from "./Places"

const ChangePlace = ({ boardNumber }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  if (state[boardNumber - 1] && state[boardNumber + 1]) {
    return (
      <div>
        <Up boardNumber={boardNumber} dispatch={dispatch} />
        <Down boardNumber={boardNumber} dispatch={dispatch} />
      </div>
    )
  }
  if (state[boardNumber + 1]) {
    return <Down boardNumber={boardNumber} dispatch={dispatch} />
  }
  if (state[boardNumber - 1]) {
    return <Up boardNumber={boardNumber} dispatch={dispatch} />
  }
}

export default ChangePlace
