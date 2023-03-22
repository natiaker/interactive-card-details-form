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
  p {
    color: white;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    text-align: right;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    min-width: 483px;
    height: fit-content;
    margin-top: 171px;
    flex-direction: column-reverse;
    p {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 2px;
    }
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
  .cvc {
    text-align: right;
    margin-top: 73.4px;
    margin-right: 37px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 37px;
    width: 447px;
    height: 245px;
    margin-left: 10px;
    .cvc {
      margin-top: 111px;
      margin-right: 58px;
    }
  }
  @media screen and (min-width: 1285px) {
    margin-left: 260px;
  }
`;

export const CardFront = styled.div`
  background-image: url("/assets/bg-card-front.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 17.6px 19px;
  width: 286px;
  height: 157px;
  position: absolute;
  top: 126px;
  img {
    width: 54px;
    height: 30px;
  }
  .card-number {
    text-align: left;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 2.2px;
    margin-top: 37px;
    margin-bottom: 5px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    position: static;
    width: 447px;
    height: 245px;
    padding: 28px 32px;
    margin-left: 10px;
    img {
      width: 84px;
      height: 47px;
    }
    .card-number {
      font-size: 28px;
      line-height: 36px;
      letter-spacing: 3.42222px;
      text-align: right;
      margin-top: 64px;
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 1285px) {
    margin-left: 164px;
  }
`;
