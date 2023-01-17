import styled from "styled-components";

export const Button = styled.button`
  background-color: #3483fa;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  border: transparent;
  padding: 6px 25px;
`;
export const ButtonGeneral = styled(Button)`
  &:hover {
    transition: 0.2s;

    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;
export const ButtonAddCart = styled(ButtonGeneral)`
  background-color: rgba(65, 137, 230, 0.15);

  color: #3483fa;
`;
