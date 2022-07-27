const previousStep = (present, action, history) => {
  present.splice(action.payload.boardNumber, 1, history[action.payload.action])
  return [...present]
}

export default previousStep
