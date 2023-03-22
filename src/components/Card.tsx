import { StyledCard, Wrapper, CardBack, CardFront } from "./styles/Card.styled";

export default function Card() {
  return (
    <StyledCard>
      <Wrapper>
        <CardBack>
          <p className='cvc'>cvc</p>
        </CardBack>
        <CardFront>
          <img
            src='./assets/card-logo.svg'
            alt='card-logo'
          />
          <p className='card-number'>0000 0000 0000 0000</p>
          <div>
            <p>Jane Applessed</p>
            <p>MM/YY</p>
          </div>
        </CardFront>
      </Wrapper>
    </StyledCard>
  );
}
