import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import { Routes } from "./routes";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
