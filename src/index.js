import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ActiveProvider } from "./state/NavigationContext";
import { ToasterProvider } from "./state/ToasterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActiveProvider>
      <ToasterProvider>
        <App />
      </ToasterProvider>
    </ActiveProvider>
  </React.StrictMode>
);
