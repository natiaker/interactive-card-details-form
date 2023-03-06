import { StyledCard, Wrapper, CardBack, CardFront } from "./styles/Card.styled";

export default function Card() {
  return (
    <StyledCard>
      <Wrapper>
        <CardBack
          src='/assets/bg-card-back.png'
          alt='card-back'
        />
        <CardFront
          src='/assets/bg-card-front.png'
          alt='card-front'
        />
      </Wrapper>
    </StyledCard>
  );
}
