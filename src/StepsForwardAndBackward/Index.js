import { useDispatch, useSelector } from "react-redux"
import { Button, Img } from "./Style"

const StepsForwardAndBackward = ({ boardNumber }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log(boardNumber)
  return (
    <div>
      Back Step
      <Button
        onClick={() =>
          dispatch({
            type: "BackStep",
            boardNumber: boardNumber,
          })
        }
      >
        <Img src="img/left-arrow.png" />
      </Button>

      
      <Button>
        <Img src="img/right-arrow.png" />
      </Button>
      Next Step
    </div>
  )
}
export default StepsForwardAndBackward
