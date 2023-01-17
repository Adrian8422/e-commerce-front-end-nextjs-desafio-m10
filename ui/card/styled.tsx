import styled from "styled-components";

const CardImage = styled.div`
  display: flex;
  height: 224px;
  width: 224px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
`;
export function ContainerCardImage({ children }: any) {
  return <CardImage>{children}</CardImage>;
}

export const FormProfile = styled.form`
  background-color: color;
  display: flex;
  flex-direction: column;
  border: "solid 1px grey";
  border-radius: "4px";
  width: "231px";

  text-align: "center";
  align-items: center;
  height: 287px;
  justify-content: space-evenly;
`;

export const ContainerFullCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);

  width: 231px;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
  @media (min-width: 660px) {
    display: flex;
    flex-direction: row;
    width: 454px;
  }
`;

export const ContainerCardDestacados = styled.div`
  display: flex;
  width: 150px;
  height: 235px;
  border-radius: 4px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4px;
  margin: 15px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
`;

export const ContainerImage = styled.div`
  border-bottom: solid 1px #4c48483d;
  width: 134px;
  height: 105px;
`;
