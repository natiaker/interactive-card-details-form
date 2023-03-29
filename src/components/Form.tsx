import { Flex } from "./styles/Flex.styled";
import { StyledForm, Button } from "./styles/Form.styled";
import { useGlobalContext } from "../context";
import { useState } from "react";

export default function Form({ setIsConfirmed }: any) {
  const {
    name,
    number,
    month,
    year,
    cvc,
    handleNameChange,
    handleNumberChange,
    handleMonthChange,
    handleYearChange,
    handleCvcChange,
  }: any = useGlobalContext();

  const [errorMsg, setErrorMsg] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name) {
      setErrorMsg({ ...errorMsg, name: "Can’t be blank" });
    } else if (!number) {
      setErrorMsg({ ...errorMsg, number: "Can’t be blank" });
    } else if (!number.match("[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}")) {
      setErrorMsg({ ...errorMsg, number: "Wrong format" });
    } else if (!month) {
      setErrorMsg({ ...errorMsg, month: "Can’t be blank" });
    } else if (!year) {
      setErrorMsg({ ...errorMsg, year: "Can’t be blank" });
    } else if (!cvc) {
      setErrorMsg({ ...errorMsg, cvc: "Can’t be blank" });
    } else if (cvc < 100) {
      setErrorMsg({ ...errorMsg, cvc: "Wrong format" });
    } else {
      setIsConfirmed(true);
    }
  };

  return (
    <StyledForm>
      <Flex row={false}>
        <label>Cardholder Name:</label>
        <input
          type='text'
          maxLength={20}
          name='name'
          placeholder='e.g. Jane Appleseed'
          value={name}
          onChange={handleNameChange}
        />
        <span>{errorMsg.name}</span>
        <label>Card Number:</label>
        <input
          type='text'
          maxLength={19}
          name='card-number'
          placeholder='e.g. 1234 5678 9123 0000'
          value={number}
          onChange={handleNumberChange}
        />
        <span>{errorMsg.number}</span>
        <Flex row>
          <label>
            Exp. Date (MM/YY) <br />
            <Flex row>
              <input
                type='number'
                name='month'
                placeholder='MM'
                min={1}
                max={12}
                value={month}
                onChange={handleMonthChange}
              />
              <input
                type='number'
                name='year'
                placeholder='YY'
                min={22}
                value={year}
                onChange={handleYearChange}
              />
            </Flex>
            <Flex row>
              <span>{errorMsg.month}</span>
              <span>{errorMsg.year}</span>
            </Flex>
          </label>
          <label>
            CVC <br />
            <input
              type='number'
              name='cvc'
              placeholder='e.g. 123'
              value={cvc}
              onChange={handleCvcChange}
            />
            <span>{errorMsg.cvc}</span>
          </label>
        </Flex>
        <Button
          type='submit'
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </Flex>
    </StyledForm>
  );
}
