import styled from "styled-components";

export const ContainerFull = styled.div`
  display: "flex";
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  @media (min-width: 649px) {
    flex-direction: row;
    width: 80%;
    display: flex;
    height: 830px;

    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
    background-color: white;
  }
`;

export const ContainerImage = styled.div`
  width: 265px;
  height: 261px;
  border-bottom: solid 1px #4c48483d;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: "hidden";
`;

export const ContainerTitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  text-align: initial;
  padding: 0px 8px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  padding: 14px;
`;
