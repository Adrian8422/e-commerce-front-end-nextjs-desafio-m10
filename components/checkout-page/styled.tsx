import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  height: 287px;
  justify-content: space-evenly;
  width: 300px;
  flex-direction: column;
`;

export function FormUpdate({ children, event }: any) {
  return <Form onSubmit={event}>{children}</Form>;
}

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 420px;
  background: linear-gradient(332deg, #265f5e 29.35%, #1b232ed2 78.73%);
`;
