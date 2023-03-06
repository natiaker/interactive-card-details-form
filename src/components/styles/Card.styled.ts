import styled from "styled-components";

export const StyledCard = styled.section`
  min-height: 240px;
  display: flex;
  background-image: url("/assets/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  img {
    width: 100%;
    max-width: 286px;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 375px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CardBack = styled.img`
  position: absolute;
  top: 32px;
  right: 16px;
`;

export const CardFront = styled.img`
  position: absolute;
  top: 126px;
  left: 16px;
`;
