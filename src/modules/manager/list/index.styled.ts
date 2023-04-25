import { mobile } from "@/styles/mixins";
import styled from "styled-components";

export const HeaderList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 2rem;

  ${mobile`
    display: none;
    margin-top: 0rem;
  `}
`;

export const BodyList = styled.div`
  display: grid;
  gap: 0rem;

  ${mobile`
   gap: 2rem;
  `}
`;

export const Label = styled.span`
  font-weight: bold;
  display: none;

  ${mobile`
    display: contents;
  `}
`;

export const RowList = styled.div`
  width: 100%;
  padding-top: 0.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  ${mobile`
    grid-template-columns: 1fr;
    padding-top: 1.5rem;
    & + & {
      border-top: 2px dotted #000;
    }
  `}
`;

export const ColumnItemList = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.17em;
  gap: 0.2rem;
  margin: 0px;

  ${mobile`
    gap: 0.5rem;
  `}
`;

export const ColumnTitleList = styled.p`
  display: block;
  font-size: 1.17em;
  font-weight: bold;
`;
