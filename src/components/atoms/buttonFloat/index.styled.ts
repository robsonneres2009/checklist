import styled from "styled-components";

export const ButtonFloatContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.secundary};
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
