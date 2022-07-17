import { useSelector } from "react-redux"
import NewGameArea from "./AppStyle"
import StartButton from "../StartButton/StartButton"
import ControlButtons from "../ControlButtons/ControlButtons"
import { GameBoard } from "../GameBoard/GameBoard"
import { NewGameButton } from "../NewGameButton/NewGameButton"
// import { Button } from "../StartButton/StyleStartButton"
function App() {
  const gameState = useSelector(function (state) {
    return state.gameState
  })
  const gameArray = gameState.gameMatrix
  const styleObject = {
    width: gameArray.length * 80 + 100 + "px",
  }
  const isGameInProcess = gameState.gameOver === false && gameArray.length > 0
  return (
    // <div>
    //   <Button onClick={() => <StartAndSelect key={gameBoardNumber} />}>
    //     New Board
    //   </Button>
    // </div>
    <div>
      <StartButton />
      <NewGameArea style={styleObject}>
        {isGameInProcess && <GameBoard />}
        {gameState.gameOver && gameArray.length > 0 && <NewGameButton />}
        {isGameInProcess ? <ControlButtons /> : null}
      </NewGameArea>
    </div>
  )
}

export default App
