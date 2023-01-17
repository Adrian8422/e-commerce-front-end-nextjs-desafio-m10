import styled from "styled-components";

export const ContainerFull = styled.div`
  display: flex;
  height: 300px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  background-color: #2f2a2a;
  color: whitesmoke;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ContainerRedes = styled.div`
  display: flex;
  flex-direction: column;
  height: 151px;
  justify-content: space-evenly;
  width: 75px;
  text-align: unset;
  align-items: flex-end;
`;
