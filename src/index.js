import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomThemeProvider from "./CustomThemeProvider";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </StrictMode>
);
