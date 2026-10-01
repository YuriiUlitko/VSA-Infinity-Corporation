import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

function syncAppVh() {
  const height = window.visualViewport?.height ?? window.innerHeight;
  document.documentElement.style.setProperty("--app-vh", `${height}px`);
}

syncAppVh();
window.addEventListener("resize", syncAppVh);
window.visualViewport?.addEventListener("resize", syncAppVh);
window.visualViewport?.addEventListener("scroll", syncAppVh);

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
