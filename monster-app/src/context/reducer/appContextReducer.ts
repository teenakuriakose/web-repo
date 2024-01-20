import * as Actions from "../actions/appContextActions";

export const initialState: any = {
  country: "AE",
  lang: "en",
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SELECT_COUNTRY:
      return { ...state, country: action.payload };
    case Actions.SELECT_LANGUAGE:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
