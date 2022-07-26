import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
