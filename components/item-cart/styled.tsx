import styled from "styled-components";

export const ContainerFullItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 755px;
  justify-content: space-between;
  padding: 30px;
  border-bottom: solid 1px #0000004a;
  background-color: white;
  align-items: center;
  height: 387px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 4%), 0 1px 3px 0 rgb(0 0 0 / 7%);

  @media (min-width: 484px) {
    flex-direction: row;
    height: 160px;
  }
  &:hover {
    transition: 0.5s ease-out;
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;

export const ContainerTitlesAndImg = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 484px) {
    flex-direction: row;
  }
`;
export const ContainerImg = styled.div``;
export const ContainerTitleAndDescription = styled.div`
  display: flex;
  height: 84px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
