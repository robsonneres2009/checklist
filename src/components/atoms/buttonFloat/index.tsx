import { ReactElement } from "react";
import { ButtonFloatContainer } from "./index.styled";
import { ButtonProps } from "../Button";

interface Props {
  children: ReactElement;
  onClick: () => void;
}

export function ButtonFloat({ children, onClick }: Props) {
  return (
    <ButtonFloatContainer onClick={onClick}>{children}</ButtonFloatContainer>
  );
}
