import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { CardActionType } from "./reducer";

export interface cardDetailsType {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

interface eventType {
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMonthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCvcChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

const initialCardDetails = {
  name: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};
const AppContext = React.createContext<cardDetailsType | eventType>(
  initialCardDetails
);

const AppProvider = ({ children, setIsConfirmed }: any) => {
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
  function handleReset() {
    setIsConfirmed(false);
    dispatch({
      type: CardActionType.Reset,
      payload: "",
    });
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <AppContext.Provider
      value={{
        ...cardDetails,
        handleNameChange,
        handleNumberChange,
        handleMonthChange,
        handleYearChange,
        handleCvcChange,
        handleReset,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
