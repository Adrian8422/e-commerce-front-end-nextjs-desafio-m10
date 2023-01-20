import styled from "styled-components";

const CardImage = styled.div`
  display: flex;
  height: 224px;
  width: 224px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-bottom: solid 1px #78707036;
  @media (min-width: 660px) {
    border-right: solid 1px #78707036;
    border-bottom: none;
  }
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
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 4%), 0 1px 3px 0 rgb(0 0 0 / 7%);
  background-color: white;
  width: 231px;
  justify-content: space-evenly;
  height: ;
  text-align: center;
  margin-bottom: 40px;
  @media (min-width: 660px) {
    display: flex;
    flex-direction: row;
    width: 454px;
  }
  &:hover {
    transition: 0.5s ease-out;
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
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
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 4%), 0 1px 3px 0 rgb(0 0 0 / 7%);

  cursor: pointer;
  &:hover {
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;

export const ContainerImage = styled.div`
  border-bottom: solid 1px #4c48483d;
  width: 134px;
  height: 105px;
`;

export const ContainerTitles = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  width: 230px;
  text-align: center;
  margin: o auto;
  height: 114px;

  @media (min-width: 660px) {
    height: 222px;
    padding: 17px;
  }
`;
