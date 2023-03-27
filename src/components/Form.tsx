import { Flex } from "./styles/Flex.styled";
import { StyledForm, Button } from "./styles/Form.styled";
import { useGlobalContext } from "../context";

export default function Form() {
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
    handleSubmit,
  }: any = useGlobalContext();

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
        <label>Card Number:</label>
        <input
          type='text'
          maxLength={19}
          name='card-number'
          placeholder='e.g. 1234 5678 9123 0000'
          value={number}
          onChange={handleNumberChange}
        />
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
