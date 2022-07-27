import { Select } from "./Style"
import { useDispatch, useSelector } from "react-redux"
import ACTIONS from "../Redux/Actions"

const previousSituation = (event, dispatch, boardNumber) => {
  dispatch({
    type: ACTIONS.history,
    payload: {
      action: event.target.value,
      boardNumber: boardNumber,
    },
  })
}
const History = ({ boardNumber }) => {
  const dispatch = useDispatch()
  const history = useSelector((state) => state.history)
  return (
    <Select
      onChange={(event) => previousSituation(event, dispatch, boardNumber)}
    >
      {history.map((option, i) => {
        // const histortState = history.find((i) => i === i)
        return (
          <option key={i} value={i}>
            {history[i].actionType + "  " + i}
          </option>
        )
      })}
    </Select>
  )
}
export default History
