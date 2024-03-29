import { Button } from "./Style"
import DisplayOfTheFinalMessage from "../Message/Index"
import { useDispatch } from "react-redux"
import ACTIONS from "../Redux/Actions"

export const ButtonPlayAgain = ({ gameState, boardNumber }) => {
  const dispatch = useDispatch()
  const boardSize = gameState.boardSize
  const gameResult = gameState.gameResult
  return (
    <div>
      <DisplayOfTheFinalMessage gameResult={gameResult} />
      <Button
        onClick={() =>
          dispatch({
            type: ACTIONS.startNewGame,
            payload: {
              boardNumber: boardNumber,
              boardSize: boardSize,
            },
          })
        }
      >
        PLAY AGAIN
      </Button>
    </div>
  )
}
