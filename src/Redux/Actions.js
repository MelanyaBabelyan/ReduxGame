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
  newGameBoard: {
    type: "NEW_GAME_BOARD",
    title: "NewGameBoard",
  },
  changeGameBoard: {
    type: "CHANGE_GAME_BOARD",
    title: "NewGameBoard",
  },
  addNewBoard: {
    type: "ADD_NEW_BOARD",
    title: "AddNewBoard",
  },
  history: {
    type: "HISTORY",
    title: "History"
  },
}

export default ACTIONS
