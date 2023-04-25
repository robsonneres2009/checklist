import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./index.styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primaryColor?: string;
  textColor?: string;
  outlined?: boolean;
  full?: boolean;
  small?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button = ({
  primaryColor = "#1B3964",
  textColor = "#fff",
  outlined = false,
  full = false,
  small = false,
  type = "button",
  onClick,
  children,
}: ButtonProps) => (
  <ButtonContainer
    primaryColor={primaryColor}
    textColor={textColor}
    outlined={outlined}
    onClick={onClick}
    type={type}
    className={`${full && "full"} ${small && "small"}`}
  >
    {children}
  </ButtonContainer>
);
