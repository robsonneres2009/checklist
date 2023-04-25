import { ReactElement } from "react";
import { ButtonFloatContainer } from "./index.styled";

interface Props {
  children: ReactElement;
  onClick: () => void;
}

export function ButtonFloat({ children, onClick }: Props) {
  return (
    <ButtonFloatContainer onClick={onClick}>{children}</ButtonFloatContainer>
  );
}
