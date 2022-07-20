import { useDispatch } from "react-redux"
import { Button } from "./Style"

const RemoveButton = ({ gameState }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "removeBoard",
            payload: gameState.boardNumber,
          })
        }
      >
        Remove Board
      </Button>
    </div>
  )
}
export default RemoveButton
