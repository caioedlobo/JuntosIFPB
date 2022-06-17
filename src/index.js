import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import {OutsourcedProvider } from "./components/providers/outsourced";
import { AuthProvider } from "./components/providers/auth";

ReactDOM.render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <AuthProvider>
    <OutsourcedProvider>
      <App />
      </OutsourcedProvider>
      </AuthProvider>
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
