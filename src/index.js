// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Importing the App Component
import App from "./App.js";

// Importing the CSS
import "./App.css";

// Rendering the App on the ReactDOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
