import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

import store from "./store";

import App from "./components/App.jsx";

smoothscroll.polyfill();

const $container = document.querySelector("#app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $container
);
