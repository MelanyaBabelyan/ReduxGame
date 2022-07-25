import ACTIONS from "../Redux/Actions"
import { Button, Img } from "./Style"

export const Up = ({ boardNumber, dispatch }) => {
  return (
    <Button
      onClick={() =>
        dispatch({
          type: ACTIONS.changePlaceUp,
          payload: boardNumber,
        })
      }
    >
      <Img src="img/up-arrow.png" alt="" />
    </Button>
  )
}

export const Down = ({ boardNumber, dispatch }) => {
  return (
    <Button
      onClick={() =>
        dispatch({
          type: ACTIONS.changePlaceDown,
          payload: boardNumber,
        })
      }
    >
      <Img src="img/down-arrow.png" />
    </Button>
  )
}
