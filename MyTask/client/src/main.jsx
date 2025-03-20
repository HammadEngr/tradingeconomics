import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import "./styles/colors.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ToggleThemeContext.jsx";
import { MarketWatchProvider } from "./contexts/MarketWatchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MarketWatchProvider>
          <App />
        </MarketWatchProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
