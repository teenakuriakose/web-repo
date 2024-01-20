import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useReducer } from "react";
import App from "../App";
import { getSelectedTheme } from "../theme";
import { COUNTRIES } from "../constants";
import { DispatchContext, StateContext } from "../context/context";
import appContextReducer, {
  initialState,
} from "../context/reducer/appContextReducer";

const Setup = () => {
  const [appContextState, appContextDispatch] = useReducer(
    appContextReducer,
    initialState
  );

  return (
    <DispatchContext.Provider value={appContextDispatch}>
      <StateContext.Provider value={appContextState}>
        <ThemeProvider theme={getSelectedTheme(appContextState.country)}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default Setup;
