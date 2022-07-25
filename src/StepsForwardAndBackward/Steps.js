import { Button, Img } from "./Style"
import { useSelector } from "react-redux"
import ACTIONS from "../Redux/Actions"

export const Undo = ({ dispatch }) => {
  const state = useSelector((state) => state)
  const boardNumber = state.boardNumber
  if (state.past.length === 1) {
    return
  }
  return (
    <>
      Back
      <Button
        onClick={() =>
          dispatch({
            type: ACTIONS.undo,
            boardNumber: boardNumber,
          })
        }
      >
        <Img src="img/left-arrow.png" />
      </Button>
    </>
  )
}

export const Redo = ({ dispatch, boardNumber }) => {
  return (
    <>
      <Button
        onClick={() =>
          dispatch({
            type: ACTIONS.redo,
            boardNumber: boardNumber,
          })
        }
      >
        <Img src="img/right-arrow.png" />
      </Button>
      Next
    </>
  )
}
