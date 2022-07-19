import { useSelector } from "react-redux"
import GameArea from "../GameArea/GameArea"
import NewBoard from "../GameBoard/NewBoard"
function App() {
  const gameBoards = useSelector((state) => state)
  return (
    <div>
      <NewBoard />
      {gameBoards.map((gameState, i) => (
        <GameArea key={i} gameState={gameState} boardNumber={i} />
      ))}
    </div>
  )
}

export default App
