import { StyledThankYou } from "./styles/ThankYou.styled";
import { Button } from "./styles/Form.styled";
import { useGlobalContext } from "../context";

export default function ThankYou() {
  const { handleReset }: any = useGlobalContext();
  return (
    <StyledThankYou>
      <img
        src='/assets/icon-complete.svg'
        alt='complete-icon'
      />
      <h1>Thank You!</h1>
      <p>We’ve added your card details</p>
      <Button onClick={handleReset}>Continue</Button>
    </StyledThankYou>
  );
}
