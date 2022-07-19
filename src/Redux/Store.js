import { createStore } from "redux"
import rootReduser from "./RootReduser"

const store = createStore(
  rootReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export default store
