import Image from "../defineImg/defineImg"
import { Box } from "./StyleGameBoard"
import { useSelector } from "react-redux"

export const GameBoard = () => {
  const gameArray = useSelector(function (state) {
    return state.gameState.gameMatrix
  })
  return gameArray.map((row, x) => {
    return row.map((column, y) => {
      return (
        <Box key={x.toString() + y.toString()}>
          <Image character={column} />
        </Box>
      )
    })
  })
}
