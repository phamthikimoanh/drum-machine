import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
//import { getAllDatas } from "./redux/action/index";

//IMPORT REDUX
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";

//CREATE STORE
const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

//store.dispatch(getAllDatas());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("drum-machine")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
