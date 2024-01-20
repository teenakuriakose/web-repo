import { createTheme } from "@mui/material";
import { ColorsType } from "../types";

export const getTheme = (colors: ColorsType) => {
  return (createTheme as any)({
    palette: {
      primary: {
        main: colors?.MAIN,
      },
    },
  });
};
