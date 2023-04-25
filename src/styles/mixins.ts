import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

export const mobile = (style: FlattenSimpleInterpolation | any) => css`
  @media (max-width: 767px) {
    ${style}
  }
`;
