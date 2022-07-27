const chooseFromPreviousSituations = (state, action) => {
  const present = state.present
  const history = state.history
  present.splice(action.payload.boardNumber, 1, history[action.payload.action])
  return [...present]
}

export default chooseFromPreviousSituations
