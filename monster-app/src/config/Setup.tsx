import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import App from "../App";
import { getSelectedTheme } from "../theme";
import { COUNTRIES } from "../constants";

const Setup = () => {
  return (
    <ThemeProvider theme={getSelectedTheme(COUNTRIES.IN)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default Setup;
