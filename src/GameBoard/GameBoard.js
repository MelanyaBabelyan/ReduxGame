import Image from "../defineImg/defineImg"
import { Box } from "./StyleGameBoard"
export const GameBoard = ({ gameArray }) => {
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
