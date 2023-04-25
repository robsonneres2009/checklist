import React, { ReactNode } from "react";
import { FiAlertCircle } from "react-icons/fi";

import { ErrorMessageContainer, ErrorText } from "./styles";

interface ErrorMessageProps {
  errorColor?: string;
  children: ReactNode;
}

/**
 * @param children react child, preferably just the text string
 * @param errorColor string with the color for the error message
 * @returns react component with red error text
 */
export const ErrorMessage = ({
  errorColor = "red",
  children,
}: ErrorMessageProps) => (
  <ErrorMessageContainer errorColor={errorColor}>
    <FiAlertCircle />
    <ErrorText errorColor={errorColor}>{children}</ErrorText>
  </ErrorMessageContainer>
);
