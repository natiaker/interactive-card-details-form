import styled from "styled-components";

export const StyledCard = styled.section`
  min-height: 240px;
  display: flex;
  background-image: url("/assets/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  img {
    max-width: 286px;
    height: auto;
    @media screen and (min-width: 768px) {
      max-width: 400px;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 375px;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    min-width: 483px;
  }
`;

export const CardBack = styled.img`
  position: absolute;
  top: 32px;
  right: 16px;
  @media screen and (min-width: 768px) {
    top: 469px;
    left: 258px;
  }
`;

export const CardFront = styled.img`
  position: absolute;
  top: 126px;
  left: 16px;
  @media screen and (min-width: 768px) {
    top: 187px;
    left: 164px;
  }
`;
