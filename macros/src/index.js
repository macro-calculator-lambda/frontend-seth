import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { Provider } from "react-redux";

import { loadState, saveState } from "./localStorage";

import "./index.css";
import App from "./App";

const persistedState = loadState();
const store = createStore(reducer, persistedState, applyMiddleware(thunk));

// Notify changes to store's state with the subscribe method which will be invoked whenever there is a state change
store.subscribe(() => {
  // pass the object with the todos field only from the state object
  saveState({
    user: store.getState().user
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
