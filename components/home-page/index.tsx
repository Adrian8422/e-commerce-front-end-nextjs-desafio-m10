import { Root } from "./styled";
import { ProductsDestacados } from "components/products-destacados";
import { CarrouselHome } from "ui/carrousel-home";
import { MethodsOfPayment } from "ui/methods-of-pay";

export function HomePage({ query }: any) {
  return (
    <Root>
      <div style={{ maxWidth: "1600px" }}>
        <CarrouselHome />
      </div>
      <MethodsOfPayment />
      <h3 style={{ margin: "0", padding: "38px" }}>
        Productos con envíos gratis
      </h3>
      <ProductsDestacados />
    </Root>
  );
}
