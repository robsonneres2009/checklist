import styled from "styled-components";

interface ContainerFeedbackProps {
  isError: boolean;
}

export const ContainerFeedback = styled.div`
  padding: 0.5rem;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ isError }: ContainerFeedbackProps) =>
    isError ? "red" : "green"};
  border-radius: 6px;
  grid-template-columns: 8fr 1fr;
  margin: 1rem;
`;

export const MessageFeedback = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`;

export const Text = styled.h3`
  color: black;
`;

export const Close = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: none;
  background-color: transparent;
  text-align: right;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;
