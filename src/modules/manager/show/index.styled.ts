import { mobile } from "@/styles/mixins";
import styled from "styled-components";

export const ContentShow = styled.div`
  display: grid;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  ${mobile`
    grid-template-columns: 1fr;
  `}
`;

export const RowShow = styled.div`
  display: grid;
  gap: 0.5rem;

  &.full {
    grid-column: 1/4;
  }
`;
export const TitleShow = styled.h3`
  margin: 0 auto;
  width: 100%;
`;
export const ValueShow = styled.p`
  margin: 0 auto;
  width: 100%;
`;
