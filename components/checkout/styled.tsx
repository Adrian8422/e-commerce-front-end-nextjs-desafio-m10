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
