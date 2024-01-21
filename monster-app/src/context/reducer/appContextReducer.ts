import * as Actions from "../actions/appContextActions";

export const initialState: any = {
  country: "AE",
  lang: "en",
  user: {
    authenticated: false,
    username: "",
  },
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SELECT_COUNTRY:
      return { ...state, country: action.payload };
    case Actions.SELECT_LANGUAGE:
      return { ...state, lang: action.payload };
    case Actions.SET_USER_AUTHENTICATION:
      return { ...state, user: action.payload };
    case Actions.CLEAR_USER_AUTHENTICATION:
      return { ...state, user: initialState.user };
    default:
      return state;
  }
}
