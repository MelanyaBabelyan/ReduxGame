import { useDispatch } from "react-redux"
import { Button } from "./Style"

const ChangePlace = ({ boardNumber }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "ChangePlaceUP",
            payload: boardNumber,
          })
        }
      >
        Up
      </Button>
      <Button
        onClick={() =>
          dispatch({
            type: "changePlaceDown",
            payload: boardNumber,
          })
        }
      >
        Down
      </Button>
    </div>
  )
}

export default ChangePlace
