import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import MainProvider from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
