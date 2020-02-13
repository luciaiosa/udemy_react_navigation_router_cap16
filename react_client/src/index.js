import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App/App";
import reducers from "./reduxStore/reducers";

// add redux store devtools chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

// localhost:3000?debug_session='dsfsgh' start the debug session in REdux; debug session is where Redux saves all data in store, and the info persists between refreshes of the page!!
// QUITARLO CUANDO HAY UN CAMBIO QUE PUEDE DAR ERROR EN EL ESTADO (cambiar de objeto a array)

// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
