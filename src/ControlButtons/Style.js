import styled from "styled-components"

export const BtnEvent = styled.div`
  width: 350px;
  margin: 20px auto;
  text-align: center;
`
export const DirectionButtons = styled.button`
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
