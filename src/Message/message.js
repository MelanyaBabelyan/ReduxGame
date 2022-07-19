import { Message, MessageImg } from "./styleMessage"

const DisplayOfTheFinalMessage = (props) => {
  console.log(props)
  console.log(props.gameResult, "proos")
  if (props.gameResult === "win") {
    return (
      <Message>
        Congratulations! You Won!
        <MessageImg src="./img/rabbit__.png" alt="" />
      </Message>
    )
  }
  if (props.gameResult === "gameOver") {
    return (
      <Message>
        Game over
        <MessageImg src="./img/final.jpg" alt="" />
      </Message>
    )
  }
}

export default DisplayOfTheFinalMessage
