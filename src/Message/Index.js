import { Message, MessageImg } from "./Style"

const DisplayOfTheFinalMessage = (props) => {
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
  return null
}

export default DisplayOfTheFinalMessage
