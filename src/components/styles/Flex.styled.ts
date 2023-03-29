import styled from "styled-components";

type Props = {
  row: boolean;
};

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ff5050;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;
