import { StyledCard, Image } from "./styles/Card.styled";

export default function Card() {
  return (
    <StyledCard>
      <Image
        src='/assets/bg-card-back.png'
        alt='card-back'
      />
      <Image
        src='/assets/bg-card-front.png'
        alt='card-front'
      />
    </StyledCard>
  );
}
