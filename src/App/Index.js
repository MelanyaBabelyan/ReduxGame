import { useSelector } from "react-redux"
import GameArea from "../GameArea/Index"
import NewBoardButton from "../NewGameButton/NewBoard"

function App() {
  const gameBoards = useSelector((state) => state.present)
  return (
    <div>
      <NewBoardButton />
      {gameBoards.map((gameState, i) => (
        <GameArea key={i} gameState={gameState} boardNumber={i} />
      ))}
    </div>
  )
}

export default App
