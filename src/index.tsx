import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import "@fontsource/source-code-pro";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
