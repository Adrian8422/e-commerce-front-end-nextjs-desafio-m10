import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
`;
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  @media (min-width: 586px) {
    width: 580px;
  }
`;
