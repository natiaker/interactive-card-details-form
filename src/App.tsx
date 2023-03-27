import { useState, useReducer } from "react";
import { Container } from "./components/styles/Container.styled";
import Card from "./components/Card";
import Form from "./components/Form";
import GlobalStyles from "./components/styles/GlobalStyles";
import ThankYou from "./components/ThankYou";

export interface cardDetailsType {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

enum CardActionType {
  Set_cardholder = "new_cardholder",
  Set_number = "set_number",
  Set_month = "set_month",
  Set_year = "set_year",
  Set_cvc = "set_cvc",
}

interface CardAction {
  type: CardActionType;
  payload: string;
}

const initialCardDetails = {
  name: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};

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
    default:
      return state;
  }
};

function App() {
  const [isConfirmed, setIsConfirmed] = useState<Boolean>(false);
  const [cardDetails, dispatch] = useReducer(reducer, initialCardDetails);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: CardActionType.Set_cardholder,
      payload: e.target.value,
    });
  }
  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (
      e.target.value.length === 4 ||
      e.target.value.length === 9 ||
      e.target.value.length === 14
    ) {
      e.target.value = e.target.value += " ";
    }
    dispatch({
      type: CardActionType.Set_number,
      payload: e.target.value,
    });
  }
  function handleMonthChange(e: React.ChangeEvent<HTMLInputElement>) {
    const limit = 2;
    dispatch({
      type: CardActionType.Set_month,
      payload: e.target.value.slice(0, limit),
    });
  }
  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    const limit = 2;
    dispatch({
      type: CardActionType.Set_year,
      payload: e.target.value.slice(0, limit),
    });
  }
  function handleCvcChange(e: React.ChangeEvent<HTMLInputElement>) {
    const limit = 3;
    dispatch({
      type: CardActionType.Set_cvc,
      payload: e.target.value.slice(0, limit),
    });
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Card {...cardDetails} />
        {isConfirmed ? (
          <ThankYou setIsConfirmed={setIsConfirmed} />
        ) : (
          <Form
            setIsConfirmed={setIsConfirmed}
            {...cardDetails}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            handleMonthChange={handleMonthChange}
            handleYearChange={handleYearChange}
            handleCvcChange={handleCvcChange}
          />
        )}
      </Container>
    </>
  );
}

export default App;
