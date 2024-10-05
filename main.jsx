import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowsetrRouter } from "reac-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowsetrRouter>
      <App />
    </BrowsetrRouter>
  </StrictMode>
);
