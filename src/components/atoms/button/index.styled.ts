import styled from "styled-components";
import { lighten, darken, readableColor } from "polished";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outlined: boolean;
  textColor: string;
  primaryColor: string;
}

export const ButtonContainer = styled.button`
  padding: 1rem;
  cursor: pointer;
  height: 100%;
  border-radius: 8px;
  border: ${({ outlined, primaryColor }: ButtonProps) =>
    outlined ? `1px solid ${primaryColor}` : "none"};

  background-color: ${({ outlined, primaryColor }: ButtonProps) =>
    outlined ? "transparent" : primaryColor};

  color: ${({ primaryColor, outlined, textColor }: ButtonProps) =>
    outlined ? primaryColor : textColor};

  text-transform: uppercase;
  font-weight: bold;

  &.full {
    width: 100%;
  }

  &.small {
    padding: 0.2rem;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    color: ${({ textColor }: ButtonProps) => textColor};
    background-color: ${({ outlined, primaryColor }: ButtonProps) =>
      outlined ? primaryColor : lighten(0.03, primaryColor)};
  }

  :active:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    background-color: ${({ primaryColor }: ButtonProps) =>
      darken(0.03, primaryColor)};
  }
`;
