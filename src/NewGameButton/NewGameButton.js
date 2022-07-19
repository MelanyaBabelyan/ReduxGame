import { Button } from "./StyleNewGameButton"
import DisplayOfTheFinalMessage from "../Message/message"
import createMatrixWithAllCharacters from "../CreateMatrix/createMatrix"
import { useSelector, useDispatch } from "react-redux"

export const NewGameButton = ({ gameState }) => {
  const dispatch = useDispatch()
  const boardNumber = gameState.boardNumber
  const boardSize = gameState.boardSize
  const gameResult = gameState.gameResult
  return (
    <div>
      <DisplayOfTheFinalMessage gameResult={gameResult} />
      <Button
        onClick={() =>
          dispatch({
            type: "newGame",
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
