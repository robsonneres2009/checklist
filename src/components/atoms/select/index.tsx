import { ErrorMessage } from "../errorMessage";
import { SelectContainer, SelectContent, SelectLabel } from "./index.styled";

interface SelectProps {
  id: string;
  name: string;
  value: string | boolean | undefined;
  label: string;
  handleChange: any;
  errorMsg: string | undefined;
  options: Array<Options>;
  fixedLabel?: boolean;
  primaryColor?: string;
  focusColor?: string;
  errorColor?: string;
}

interface Options {
  name: string;
  id: number | boolean | string;
}

export default function Select({
  id,
  name,
  label,
  handleChange,
  value,
  errorMsg,
  fixedLabel,
  options,
  primaryColor = "#1B3964",
  focusColor = "#F6673E",
  errorColor = "red",
}: SelectProps) {
  return (
    <SelectContainer>
      <SelectLabel
        primaryColor={primaryColor}
        errorColor={errorColor}
        className={`${fixedLabel || value?.length ? "shrink" : ""} ${
          errorMsg ? "inputError" : ""
        }`}
      >
        {label}
      </SelectLabel>
      <SelectContent
        value={value}
        id={id}
        name={name}
        onChange={handleChange}
        errorColor={errorColor}
        focusColor={focusColor}
        primaryColor={primaryColor}
        className={errorMsg ? "inputError" : ""}
      >
        <option></option>
        {options?.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </SelectContent>
      {errorMsg ? (
        <ErrorMessage errorColor={errorColor}>{errorMsg}</ErrorMessage>
      ) : null}
    </SelectContainer>
  );
}
