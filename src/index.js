import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ActiveProvider } from "./state/NavigationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </React.StrictMode>
);
