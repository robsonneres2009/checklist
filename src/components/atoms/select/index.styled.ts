import styled from "styled-components";

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  primaryColor: string;
  focusColor: string;
  errorColor: string;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  primaryColor: string;
  errorColor: string;
}

export const SelectContainer = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const SelectContent = styled.select`
  background: white;
  color: ${({ primaryColor }: SelectProps) => primaryColor};
  padding: 1rem 1.8rem 1rem 1rem;
  display: block;
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid;
  border-color: ${({ primaryColor }: SelectProps) => primaryColor};

  &:focus {
    outline: none;
    border: 1px solid;
    border-color: ${({ focusColor }: SelectProps) => focusColor};
  }

  &:focus ~ label {
    top: -1rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ focusColor }: SelectProps) => focusColor};
  }

  &.inputError {
    border: 1px solid;
    border-color: ${({ errorColor }: SelectProps) => errorColor};

    & ~ label {
      color: ${({ errorColor }: SelectProps) => errorColor};
    }
  }
`;

export const SelectLabel = styled.label`
  color: ${({ primaryColor }: LabelProps) => primaryColor};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 1.15rem;
  transition: 300ms ease all;

  &.shrink {
    font-weight: bold;
    top: -1rem;
    font-size: 0.75rem;
  }

  &.inputError {
    color: ${({ errorColor }: LabelProps) => errorColor};
  }
`;
