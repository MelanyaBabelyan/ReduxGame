import { useDispatch } from "react-redux"
import ACTIONS from "../Redux/Actions"
import { Button } from "./Style"
const NewBoardButton = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: ACTIONS.addNewBoard,
          })
        }}
      >
        New Board
      </Button>
    </div>
  )
}
export default NewBoardButton
