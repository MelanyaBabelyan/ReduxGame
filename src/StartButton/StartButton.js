import createMatrixWithAllCharacters from "../CreateMatrix/createMatrix"
import { Button } from "./StyleStartButton"
export const StartButton = ({ dispatch, boardSize }) => {
  return (
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
      Start
    </Button>
  )
}

export default StartButton
