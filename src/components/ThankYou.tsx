import { StyledThankYou } from "./styles/ThankYou.styled";
import { Button } from "./styles/Form.styled";

export default function ThankYou() {
  return (
    <StyledThankYou>
      <img
        src='/assets/icon-complete.svg'
        alt='complete-icon'
      />
      <h1>Thank You!</h1>
      <p>We’ve added your card details</p>
      <Button>Continue</Button>
    </StyledThankYou>
  );
}
