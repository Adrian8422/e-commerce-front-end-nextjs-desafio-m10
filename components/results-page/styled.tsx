import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  width: 234px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 484px) {
    display: flex;
    flex-direction: column;
    width: 462px;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 484px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;
