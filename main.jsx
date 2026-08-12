import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Colour from "./Components/Colour.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Colour />
  </StrictMode>
);