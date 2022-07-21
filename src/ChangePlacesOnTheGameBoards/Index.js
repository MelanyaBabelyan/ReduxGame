import { useDispatch, useSelector } from "react-redux"
import { Button } from "./Style"

const ChangePlace = ({ boardNumber }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log(state.length)
  const Up = () => {
    console.log("up")
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
      </div>
    )
  }
  const Down = () => {
    console.log("down")
    return (
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
    )
  }
  if (state[boardNumber - 1] && state[boardNumber + 1]) {
    return (
      <div>
        <Up />
        <Down />
      </div>
    )
  }
  if (state[boardNumber + 1]) {
    console.log("aaaDown")
    return <Down />
  }
  if (state[boardNumber - 1]) {
    console.log("aaaUP")
    return <Up />
  }
}

export default ChangePlace
