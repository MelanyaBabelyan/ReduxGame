import { useDispatch, useSelector } from "react-redux"
import { Button } from "./StyleGameBoard"
const NewBoard = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: "AddNewBoard",
          })
        }}
      >
        New Board
      </Button>
    </div>
  )
}
export default NewBoard
