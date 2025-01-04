import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Snowfall from "react-snowfall";
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ position: "relative" }}>
      <Snowfall
        snowflakeCount={100}
        speed={[1, 2]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      />
      <App />
    </div>
  </StrictMode>
);
