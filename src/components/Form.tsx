import { Flex } from "./styles/Flex.styled";
import { StyledForm, Button } from "./styles/Form.styled";

export default function Form() {
  return (
    <StyledForm>
      <Flex row={false}>
        <label>Cardholder Name:</label>
        <input
          type='text'
          name='name'
          placeholder='e.g. Jane Appleseed'
        />
        <label>Card Number:</label>
        <input
          type='number'
          name='card-number'
          placeholder='e.g. 1234 5678 9123 0000'
        />
        <Flex row>
          <label>
            Exp. Date (MM/YY) <br />
            <Flex row>
              <input
                type='number'
                name='month'
                placeholder='MM'
              />
              <input
                type='number'
                name='year'
                placeholder='YY'
              />
            </Flex>
          </label>
          <label>
            CVC <br />
            <input
              type='number'
              name='cvc'
              placeholder='e.g. 123'
            />
          </label>
        </Flex>
        <Button type='submit'>Confirm</Button>
      </Flex>
    </StyledForm>
  );
}
