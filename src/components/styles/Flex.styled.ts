import styled from "styled-components";

type Props = {
  row: boolean;
};

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;
