import React from 'react'
import styled from 'styled-components'

interface DivProps extends React.HTMLProps<HTMLDivElement> {
  errorColor: string
}

interface SmallProps extends React.HTMLProps<HTMLSpanElement> {
  errorColor: string
}

export const ErrorMessageContainer = styled.div`
  margin-top: 0.25rem;
  display: flex;
  align-items: center;

  color: ${({ errorColor }: DivProps) => errorColor};

  padding: 0 1rem;
`

export const ErrorText = styled.small`
  margin-left: 0.5rem;
  color: ${({ errorColor }: SmallProps) => errorColor};
  font-size: 0.8rem;

  letter-spacing: unset;
`
