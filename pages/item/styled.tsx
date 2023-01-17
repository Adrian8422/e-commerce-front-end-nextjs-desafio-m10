import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 750px;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 650px) {
    flex-direction: column;
    height: 500px;
    padding: 25px;
    width: 100%;
  }
`;
