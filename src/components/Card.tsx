import { StyledCard, Wrapper, CardBack, CardFront } from "./styles/Card.styled";
import { cardDetailsType } from "../App";

export default function Card({
  name,
  number,
  month,
  year,
  cvc,
}: cardDetailsType) {
  return (
    <StyledCard>
      <Wrapper>
        <CardBack>
          <p className='cvc'>{cvc || "cvc"}</p>
        </CardBack>
        <CardFront>
          <img
            src='./assets/card-logo.svg'
            alt='card-logo'
          />
          <p className='card-number'>{number || "0000 0000 0000 0000"}</p>
          <div>
            <p>{name || "Jane Applessed"}</p>
            <p>
              {month || "MM"}/{year || "YY"}
            </p>
          </div>
        </CardFront>
      </Wrapper>
    </StyledCard>
  );
}
