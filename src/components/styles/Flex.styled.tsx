import styled from "styled-components";
import { Props } from "../Form";

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;
