import { Button } from "./StyleNewGameButton"
import DisplayOfTheFinalMessage from "../Message/message"
import createMatrixWithAllCharacters from "../CreateMatrix/createMatrix"
export const NewGameButton = ({ gameResult, dispatch, boardSize }) => {
  return (
    <div>
      <DisplayOfTheFinalMessage result={gameResult} />
      <Button
        onClick={() =>
          dispatch({
            type: "change",
            payload: {
              gameMatrix: createMatrixWithAllCharacters(boardSize),
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
