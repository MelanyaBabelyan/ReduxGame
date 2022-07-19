import Image from "../../DefineImg/Index"
import { Box } from "./Style"

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
