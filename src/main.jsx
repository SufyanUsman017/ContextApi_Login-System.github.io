import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DataProvider from "./context/DataProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataProvider>
      <StrictMode>
        <App />
      </StrictMode>
      ,
    </DataProvider>
  </BrowserRouter>
);
