import { useDispatch, useSelector } from "react-redux"
import ACTIONS from "../Redux/Actions"
import { Button } from "./Style"

const NewBoardButton = () => {
  const state = useSelector((state) => state.present)
  const boardNumber = state.boardNumber
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: ACTIONS.addNewBoard,
            payload: boardNumber,
          })
        }}
      >
        New Board
      </Button>
    </div>
  )
}
export default NewBoardButton
