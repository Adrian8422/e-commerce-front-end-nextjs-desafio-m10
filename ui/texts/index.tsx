import styled from "styled-components";

export const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  color: var(--azul);
`;
export const Tiny = styled.p`
  font-size: 14px;
  margin: 0;
  font-family: "Montserrat", sans-serif;
`;
export const SectionTitle = styled(Title)`
  margin-top: 10px;
`;

export const SubTitle = styled(Title).attrs({
  as: "h2",
  props: {},
})`
  font-size: 25px;
  text-align: center;
`;
export const Large = styled.h3`
  margin: 0;

  text-align: center;
  font-size: 18px;
  color: #312f2f;
  font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif;
`;

export const LargePrice = styled(Large)`
  font-size: 20px;
`;

//// ui items DETAIL

export const LargePriceItem = styled(Large)`
  color: #000000ab;
  font-size: 36px;
`;

export const LargeTitleItem = styled(Title)`
  font-size: 22px;
  color: #000000ab;
  font-weight: 400;
`;
export const SubTitleItem = styled(SubTitle)`
  color: #000000ab;
  font-size: 20px;
`;
export const TextFooter = styled.h3`
  color: whitesmoke;
  font-size: 15px;
  cursor: pointer;
`;
