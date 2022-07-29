const ACTIONS = {
  undo: {
    type: "UNDO",
    title: "Undo",
  },
  redo: {
    type: "REDO",
    title: "Redo",
  },
  changePlaceUp: {
    type: "CHANGE_PLACE_UP",
    undoable: true,
    title: "Change place UP",
  },
  changePlaceDown: {
    type: "CHANGE_PLACE_DOWN",
    undoable: true,
    title: "change place down",
  },
  removeBoard: {
    type: "REMOVE_BOARD",
    title: "Remove Board",
  },
  startNewGame: {
    type: "NEW_GAME_BOARD",
    title: " Creat new game board",
  },
  changeGameBoard: {
    type: "CHANGE_GAME_BOARD",
    title: "Change game Board",
  },
  addNewBoard: {
    type: "ADD_NEW_BOARD",
    title: "AddNewBoard",
  },
  history: {
    type: "HISTORY",
    title: "History",
  },
  playAgain: {
    type: "PLAY_AGAIN",
    title: "Play Again",
  },
}

export default ACTIONS
