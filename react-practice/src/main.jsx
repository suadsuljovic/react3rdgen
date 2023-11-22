import React from "react";
import ReactDOM from "react-dom/client";

import Class29 from "./components/29";
import SimpleContextProvider from "./components/29/SampleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SimpleContextProvider>
      <Class29 />
    </SimpleContextProvider>
  </React.StrictMode>
);
