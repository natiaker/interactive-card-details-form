import styled from "styled-components";

export const StyledCard = styled.section`
  min-height: 240px;
  display: flex;
  justify-content: center;
  background-image: url("/assets/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    background-image: url("/assets/bg-main-desktop.png");
  }
`;

export const Wrapper = styled.div`
  max-width: 375px;
  display: flex;
  @media screen and (min-width: 768px) {
    min-width: 483px;
    height: fit-content;
    margin-top: 171px;
    flex-direction: column-reverse;
  }
`;

export const CardBack = styled.div`
  margin-top: 32px;
  margin-left: 73px;
  background-image: url("/assets/bg-card-back.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 286px;
  height: 157px;
  @media screen and (min-width: 768px) {
    margin-top: 37px;
    width: 447px;
    height: 245px;
    margin-left: 0;
  }
  @media screen and (min-width: 1068px) {
    margin-left: 260px;
  }
`;

export const CardFront = styled.div`
  background-image: url("/assets/bg-card-front.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 286px;
  height: 157px;
  position: absolute;
  top: 126px;
  @media screen and (min-width: 768px) {
    position: static;
    width: 447px;
    height: 245px;
    margin-left: 0;
  }
  @media screen and (min-width: 1068px) {
    margin-left: 164px;
  }
`;
