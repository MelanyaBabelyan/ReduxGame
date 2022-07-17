import { Button } from "./StyleNewGameButton"
import DisplayOfTheFinalMessage from "../Message/message"
import createMatrixWithAllCharacters from "../CreateMatrix/createMatrix"
import { useSelector, useDispatch } from "react-redux"

export const NewGameButton = () => {
  const dispatch = useDispatch()
  const gameState = useSelector(function (state) {
    return state.gameState
  })
  return (
    <div>
      <DisplayOfTheFinalMessage result={gameState.gameResult} />
      <Button
        onClick={() =>
          dispatch({
            type: "change",
            payload: {
              gameMatrix: createMatrixWithAllCharacters(5),
              gameOver: false,
              gameResult: "",
            },
          })
        }
      >
        PLAY AGAIN
      </Button>
    </div>
  )
}
