import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: auto;
  justify-content: space-around;
  @media (min-width: 450px) {
    height: auto;
  }
  @media (min-width: 730px) {
    height: 800px;
  }
  @media (min-width: 930px) {
    height: 900px;
  }
  @media (min-width: 1100px) {
    height: 1200px;
  }
`;
