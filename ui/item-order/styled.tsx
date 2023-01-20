import styled from "styled-components";

export const ContainerUIOrder = styled.div`
  display: flex;

  flex-direction: column;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 4%), 0 1px 3px 0 rgb(0 0 0 / 7%);
  margin-bottom: 12px;
  justify-content: space-between;
  padding: 30px;
  width: 260px;
  @media (min-width: 586px) {
    flex-direction: row;
    width: 580px;
  }
  &:hover {
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;
export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
`;
