import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import { Routes } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
