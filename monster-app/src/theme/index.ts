import * as Countries from "../theme/countries";
import { CountriesType } from "../types";

export const getSelectedTheme = (countryCode: CountriesType) => {
  const countryData =
    (Countries as Record<string, string>)[countryCode.trim().toUpperCase()] ||
    "";
  return countryData;
};
