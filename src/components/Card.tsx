import { StyledCard, Wrapper, CardBack, CardFront } from "./styles/Card.styled";
import { useGlobalContext } from "../context";

export default function Card() {
  const { name, number, month, year, cvc }: any = useGlobalContext();

  return (
    <StyledCard>
      <Wrapper>
        <CardBack>
          <p className='cvc'>{cvc || "cvc"}</p>
        </CardBack>
        <CardFront>
          <img
            src={process.env.PUBLIC_URL + "/assets/card-logo.svg"}
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
