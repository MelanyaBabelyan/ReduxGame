const changePlace = (state, action, direction) => {
  //   if (state[direction]) {
  //     if (direction === action.payload - 1) {
  //       state.splice(direction, 2, state[action.payload], state[direction])
  //     }
  //     if (direction === action.payload + 1) {
  //       state.splice(action.payload, 2, state[direction], state[action.payload])
  //     }
  //   }

  if (state[direction] && direction === action.payload - 1) {
    state.splice(direction, 2, state[action.payload], state[direction])
  } else if (state[direction] && direction === action.payload + 1) {
    state.splice(action.payload, 2, state[direction], state[action.payload])
  }
  return state
}
export default changePlace
