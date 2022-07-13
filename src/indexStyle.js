import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
      // width: 30%;
  height: 50%;
  margin: 0 auto;
  background-image: url(img/78812fd262025d24e53452a1307bbb6d.png);
  display: block;
  text-align: center;
  }`
export default GlobalStyle

export const Select = styled.select`
  background: transparent;
  width: 150px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  margin: 50px;
  width: 120px;
  height: 34px;
  border: 1px solid #111;
  border-radius: 3px;
  overflow: hidden;
`
export const Box = styled.div`
  display: flex;
  background-color: #50949190;
  width: 80px;
  height: 80px;
  margin: 3px;
`

export const NewGameArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 25px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`
export const BtnEvent = styled.div`
  width: 350px;
  margin: 20px auto;
  text-align: center;
`

export const App = styled.div`
  text-align: center;
`

export const Body = styled.body`
  width: 30%;
  height: 50%;
  margin: 50px auto;
  /* background-color: #dfffef; */
  background-image: url(img/78812fd262025d24e53452a1307bbb6d.png);
  /* text-align: center; */
  display: block;
  text-align: center;
`

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  background: teal;
  color: white;
  border-radius: 25px;
  margin: 0 20px;
  cursor: pointer;
  margin: 45px;
`

export const directionButtons = styled.button`
  width: ${(props) =>
    props.direction === "up" || props.direction === "down" ? "200px" : "120px"};
  margin: ${(props) =>
    props.direction === "up" || props.direction === "down"
      ? "7px auto"
      : " 0 20px"};

  border-radius: 25px;
  cursor: pointer;
  background: teal;
  color: white;
  padding: 10px;
`

export const Message = styled.div`
  height: 500px;
  width: 500px;
  color: rgb(4, 137, 144);
  font-size: 60px;
`

export const MessageImg = styled.img`
  height: 350px;
  width: 350px;
  display: block;
  margin: 0 auto;
`
