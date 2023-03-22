import { StyledCard, Wrapper, CardBack, CardFront } from "./styles/Card.styled";

export default function Card() {
  return (
    <StyledCard>
      <Wrapper>
        <CardBack></CardBack>
        <CardFront></CardFront>
      </Wrapper>
    </StyledCard>
  );
}
