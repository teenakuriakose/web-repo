import { createTheme } from "@mui/material";
import { ColorsType } from "../types";

export const getTheme = (colors: ColorsType) => {
  return (createTheme as any)({
    palette: {
      error: {
        main: colors?.ERROR,
      },
      primary: {
        main: colors?.MAIN,
      },
    },
  });
};
