import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 205px;
  background: linear-gradient(332deg, #269f75f4 29.35%, #123c7cd2 78.73%);
  align-items: center;
  @media (min-width: 484px) {
    flex-direction: column;

    height: 90px;
  }
`;

export const ProfileData = styled.div``;

export const ContainerItems = styled.div`
  display: contents;
  flex-direction: column;
  align-items: center;
  height: 41px;
  width: 100%;
  justify-content: space-evenly;
  @media (min-width: 484px) {
    display: flex;
    flex-direction: row;
    height: 84px;
  }
`;

export const ContainerCategoriesUi = styled.div`
  display: none;
  @media (min-width: 358px) {
    position: absolute;
    top: 21px;
    display: flex;
    height: 800px;
    flex-direction: column;
  }
`;
export const FullMenuCategories = styled.div`
  display: flex;
  flex-direction: column;

  height: 34px;
  @media (min-width: 785px) {
    width: 739px;
  }
`;

export const TagACategories = styled.a`
  width: 103px;
  margin-left: 13px;
  cursor: pointer;
  top: 205px;
  top: 90px;
`;
