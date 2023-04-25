import { mobile } from "@/styles/mixins";
import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  gap: 1rem;

  ${mobile`
    width: 100%;
  `}
`;
