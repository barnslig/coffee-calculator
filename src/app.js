import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import store from "./store";

import App from "./components/App.jsx";

const $container = document.querySelector("#app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $container
);
