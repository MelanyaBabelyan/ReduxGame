import { useDispatch } from "react-redux"
import { Button } from "./Style"

const RemoveButton = ({ boardNumber }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "removeBoard",
            payload: boardNumber,
          })
        }
      >
        Remove Board
      </Button>
    </div>
  )
}
export default RemoveButton
