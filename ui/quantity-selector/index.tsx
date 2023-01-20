import { ContainerQuantity, ButtonOperatorQuantity } from "./styled";

export function SelectorQuantity({ eventMore, eventLess, quantity, id }: any) {
  return (
    <ContainerQuantity>
      <ButtonOperatorQuantity id={id} onClick={eventLess}>
        -
      </ButtonOperatorQuantity>
      <div>{quantity}</div>
      <ButtonOperatorQuantity id={id} onClick={eventMore}>
        +
      </ButtonOperatorQuantity>
    </ContainerQuantity>
  );
}
