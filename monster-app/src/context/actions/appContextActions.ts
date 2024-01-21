export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const SELECT_LANGUAGE = "SELECT_LANGUAGE";
export const SET_USER_AUTHENTICATION = "SET_USER_AUTHENTICATION";
export const CLEAR_USER_AUTHENTICATION = "CLEAR_USER_AUTHENTICATION";

export const selectCountry = (country: string) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

export const selectLanguage = (lang: string) => ({
  type: SELECT_LANGUAGE,
  payload: lang,
});

export const setUserAuthentication = (user: Object) => ({
  type: SET_USER_AUTHENTICATION,
  payload: user,
});

export const clearUserAuthentication = () => ({
  type: CLEAR_USER_AUTHENTICATION,
});
