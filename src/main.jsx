import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/styles.scss";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
