import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./components/30/ContextProvider";
import Class30 from "./components/30";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Class30 />
    </ContextProvider>
  </React.StrictMode>
);
