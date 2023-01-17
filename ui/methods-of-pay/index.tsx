import { MercadoPago, Cash, Card } from "ui/icons";
import { ContainerSection, ContainerComp, TitlePay } from "./styled";

export function MethodsOfPayment() {
  return (
    <ContainerComp>
      <ContainerSection>
        <div>
          <MercadoPago />
        </div>
        <div>
          <TitlePay>Mercado pago</TitlePay>
        </div>
      </ContainerSection>
      <ContainerSection>
        <div>
          <Card />
        </div>
        <div>
          <TitlePay>Tarjetas de crédito</TitlePay>
        </div>
      </ContainerSection>
      <ContainerSection>
        <div>
          <Cash />
        </div>
        <div>
          <TitlePay>Efectivo</TitlePay>
        </div>
      </ContainerSection>
    </ContainerComp>
  );
}
