import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import App from "../App";

const Setup = () => {
  return (
    <ThemeProvider theme={""}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default Setup