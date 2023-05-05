import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  min-width: 40vw;
  max-width: 80vw;
  padding: 1rem;
  background-color: white;
  margin: 0 auto;
  left: 0px;
  right: 0px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const TitleModal = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

export const GroupButtonModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Shadow = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;
