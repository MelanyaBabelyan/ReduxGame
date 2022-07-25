import { useDispatch } from "react-redux"
import { Button, Img } from "./Style"
import ACTIONS from "../Redux/Actions"
const RemoveButton = ({ gameState }) => {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() =>
        dispatch({
          type: ACTIONS.removeBoard,
          payload: gameState.boardNumber,
        })
      }
    >
      Remove Board
      <Img src="img/delete.png" />
    </Button>
  )
}
export default RemoveButton
