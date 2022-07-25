const changePlace = (state, action, direction) => {
  console.log(action.payload, "aaaaaaaaaaaa")
  if (direction === action.payload - 1) {
    state.splice(direction, 2, state[action.payload], state[direction])
  } else if (direction === action.payload + 1) {
    state.splice(action.payload, 2, state[direction], state[action.payload])
  }
  // console.log(state,"stateeee")
  return [...state]
}
export default changePlace
