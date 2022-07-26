import { Select } from "./Style"
import { useDispatch, useSelector } from "react-redux"
import ACTIONS from "../Redux/Actions"

const previousSituation = (event, dispatch) => {
  dispatch({
    type: ACTIONS.history,
    payload: event.target.value,
  })
}
const History = ({ boardNumber }) => {
  const dispatch = useDispatch()
  const history = useSelector((state) => state.history)
  console.log(history, "history")
  return (
    <Select onChange={(event) => previousSituation(event, dispatch)}>
      {history.map((option, i) => {
        // console.log([option[i]], "option")
        console.log(history[i], "aaaaaaa")

        const histortState = history.find((i) => i === i)
        console.log(
          histortState[boardNumber].gameMatrix,
          "sadkjafuariuagfiuagsiufga"
        )
        return (
          <option key={i} value={i}>
            {histortState[boardNumber].gameMatrix}
          </option>
        )
      })}
    </Select>
  )
}
export default History
