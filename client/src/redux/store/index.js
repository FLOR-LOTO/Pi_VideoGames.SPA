import { createStore, applyMiddleware } from "redux";
import { composeWhithDevTools } from "redux-devtools-extension";
import thunks from "redux-thunk"; //maneja la asincronia

import rootReducer from "../reducer";

export const store = createStore(
  rootReducer,
  composeWhithDevTools(applyMiddleware(thunks))
);
