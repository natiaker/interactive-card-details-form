import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
