import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useReducer } from "react";
import App from "../App";
import { getSelectedTheme } from "../theme";
import { COUNTRIES } from "../constants";
import { DispatchContext, StateContext } from "../context/context";
import appContextReducer, {
  initialState,
} from "../context/reducer/appContextReducer";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { isRTLLanguage } from "../utils/IsRTL";

const cacheLtr = createCache({
  key: "muiltr",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const Setup = () => {
  const [appContextState, appContextDispatch] = useReducer(
    appContextReducer,
    initialState
  );

  return (
    <DispatchContext.Provider value={appContextDispatch}>
      <StateContext.Provider value={appContextState}>
        <CacheProvider
          value={isRTLLanguage(appContextState.lang) ? cacheRtl : cacheLtr}
        >
          <ThemeProvider theme={getSelectedTheme(appContextState.country)}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </CacheProvider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default Setup;
