import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

import { ErrorMessage } from "../errorMessage";

import { InputContainer, InputContent, InputLabel } from "./index.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: any;
  value: string | number;
  primaryColor?: string;
  focusColor?: string;
  errorColor?: string;
  errorMsg?: string;
  handleChange: (event: ChangeEvent<any>) => void;
  handleBlur?: (event: ChangeEvent<any>) => void;
  readonly?: boolean;
  onFocus?: (event: ChangeEvent<any>) => void;
  fixedLabel?: boolean;
  max?: string;
}

/**
 * @param id identifier
 * @param name string to put into input name
 * @param label placeholder
 * @param value state value
 * @param errorMsg string with error message to show using ErrorMessage component
 * @param handleChange handles the input changes
 * @param handleBlur handles onBlur of input
 * @param primaryColor optional string with the primary color for the input
 * @param focusColor optional string with the color when the input is on focus
 * @param errorColor optional string with the color for the error message
 * @param max Optional string with max length for input
 */
export const Input = ({
  id,
  name,
  label,
  value,
  errorMsg,
  handleChange,
  handleBlur,
  primaryColor = "#1B3964",
  focusColor = "#F6673E",
  errorColor = "red",
  readonly,
  onFocus,
  fixedLabel,
  max,
}: InputProps) => (
  <InputContainer>
    <InputContent
      className={errorMsg ? "inputError" : ""}
      onChange={handleChange}
      type="text"
      name={name}
      onBlur={handleBlur}
      value={value}
      id={id}
      primaryColor={primaryColor}
      focusColor={focusColor}
      errorColor={errorColor}
      readOnly={readonly}
      onFocus={onFocus}
      max={max}
    />
    {label ? (
      <InputLabel
        className={fixedLabel || value?.length ? "shrink" : ""}
        primaryColor={primaryColor}
      >
        {label}
      </InputLabel>
    ) : null}
    {errorMsg ? (
      <ErrorMessage errorColor={errorColor}>{errorMsg}</ErrorMessage>
    ) : null}
  </InputContainer>
);
