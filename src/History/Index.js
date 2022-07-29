import { Select, Span } from "./Style"
import { useDispatch, useSelector } from "react-redux"
import ACTIONS from "../Redux/Actions"

const History = ({ boardNumber }) => {
  const dispatch = useDispatch()
  const history = useSelector((state) => state.history)
  const previousSituation = (event, dispatch, boardNumber) => {
    dispatch({
      type: ACTIONS.history,
      payload: {
        action: event.target.value,
        boardNumber: boardNumber,
      },
    })
  }
  return (
    <div>
      <label>History</label>
      <br />
      <Select
        onChange={(event) => previousSituation(event, dispatch, boardNumber)}
      >
        {history.map((option, i) => {
          // const histortState = history.find((i) => i === i)
          return (
            <option key={i} value={i} selected>
              {history[i].actionType}
            </option>
          )
        })}
      </Select>
    </div>
  )
}
export default History
