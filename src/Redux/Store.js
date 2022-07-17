import { createStore } from "redux"
import initialState from "./InitialState"
import rootReduser from "./RootReduser"

const store = createStore(
  rootReduser,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export default store
