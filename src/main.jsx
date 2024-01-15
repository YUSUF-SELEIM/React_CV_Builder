import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex w-full h-full gap-5 bg-gray-200">
     <App></App>
    </div>
  </React.StrictMode>
);
