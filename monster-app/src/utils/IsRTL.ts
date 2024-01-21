import { LANGUAGES } from "../constants";

const rtlList = [LANGUAGES.AR];

export const isRTLLanguage = (language: LANGUAGES) =>
  rtlList.includes(language);
