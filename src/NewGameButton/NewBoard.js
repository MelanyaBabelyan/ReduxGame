import { useDispatch} from "react-redux"
import { Button } from "./Style"
const NewBoardButton = () => {
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
export default NewBoardButton
