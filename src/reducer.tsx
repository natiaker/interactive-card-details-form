import { cardDetailsType } from "./context";

export enum CardActionType {
  Set_cardholder = "new_cardholder",
  Set_number = "set_number",
  Set_month = "set_month",
  Set_year = "set_year",
  Set_cvc = "set_cvc",
  Reset = "reset",
}

interface CardAction {
  type: CardActionType;
  payload: string;
}

const reducer = (state: cardDetailsType, action: CardAction) => {
  switch (action.type) {
    case CardActionType.Set_cardholder:
      return {
        ...state,
        name: action.payload,
      };
    case CardActionType.Set_number:
      return {
        ...state,
        number: action.payload,
      };
    case CardActionType.Set_month:
      return {
        ...state,
        month: action.payload,
      };
    case CardActionType.Set_year:
      return {
        ...state,
        year: action.payload,
      };
    case CardActionType.Set_cvc:
      return {
        ...state,
        cvc: action.payload,
      };
    case CardActionType.Reset:
      return {
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: "",
      };
    default:
      return state;
  }
};

export default reducer;
