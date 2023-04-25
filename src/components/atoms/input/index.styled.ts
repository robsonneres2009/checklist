import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  primaryColor: string;
  focusColor: string;
  errorColor: string;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  primaryColor: string;
}

export const InputContainer = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const InputContent = styled.input`
  background: transparent;
  color: ${({ primaryColor }: InputProps) => primaryColor};
  padding: 1rem 1.8rem 1rem 1rem;
  display: block;
  width: -webkit-fill-available;
  border-radius: 0.2rem;
  border: 1px solid;
  border-color: ${({ primaryColor }: InputProps) => primaryColor};

  &:focus {
    outline: none;
    border: 1px solid;
    border-color: ${({ focusColor }: InputProps) => focusColor};
  }

  &:focus ~ label {
    top: -1rem;
    font-size: 0.75rem;
    font-weight: bolder;
    color: ${({ focusColor }: InputProps) => focusColor};
  }

  &.inputError {
    border: 1px solid;
    border-color: ${({ errorColor }: InputProps) => errorColor};

    & ~ label {
      color: ${({ errorColor }: InputProps) => errorColor};
    }
  }
`;

export const InputLabel = styled.label`
  color: ${({ primaryColor }: LabelProps) => primaryColor};
  font-weight: bolder;
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 1.15rem;
  transition: 300ms ease all;

  &.shrink {
    top: -1rem;
    font-size: 0.75rem;
  }
`;
