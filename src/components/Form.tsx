import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Form.styled";

export interface Props {
  row: boolean;
}

export default function Form() {
  return (
    <form>
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
        <Flex row={true}>
          <label>
            Exp. Date (MM/YY) <br />
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
    </form>
  );
}
