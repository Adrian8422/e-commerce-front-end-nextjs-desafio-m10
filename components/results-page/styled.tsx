import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  width: 234px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 56px;
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

export const SeeMore = styled.h2`
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: #3483fa;
  }
`;
