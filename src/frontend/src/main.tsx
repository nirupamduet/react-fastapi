import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ROOT APP COMPONENT
import App from "./app/App";

// THIRD PARTY CSS
import "perfect-scrollbar/css/perfect-scrollbar.css";

// Get the root element with a non-null assertion
const rootElement = document.getElementById("root") as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
