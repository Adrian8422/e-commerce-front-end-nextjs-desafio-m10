import styled from "styled-components";
export const ContainerComp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
  width: 240px;
  border-radius: 4px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  justify-content: space-between;
  @media (min-width: 484px) {
    flex-direction: row;
    width: 500px;
    height: 90px;
  }
  @media (min-width: 730px) {
    flex-direction: row;
    width: 700px;
    height: 90px;
    justify-content: space-around;
  }
  @media (min-width: 940px) {
    flex-direction: row;
    width: 920px;

    height: 90px;
  } ;
`;
export const ContainerSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 159px;

  @media (min-width: 483px) {
    flex-direction: column;
  }
  @media (min-width: 730px) {
    flex-direction: row;
  }
`;

export const TitlePay = styled.h4`
  display: none;
  margin: 0;
  font-size: 15px;
  @media (min-width: 484px) {
    display: flex;
  }
`;
