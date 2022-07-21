import { Button } from "./Style"

export const Up = ({ boardNumber, dispatch }) => {
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

export const Down = ({ boardNumber, dispatch }) => {
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
