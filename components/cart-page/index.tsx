import { useGetCurrentCart, useGetDataProfile } from "lib/hooks";
import { ItemCart } from "components/item-cart";
import {
  deleteAllProductsCart,
  payMerchantOrderFromCart,
  updateCheckoutShippingData,
} from "lib/api";
import {
  ContainerPage,
  ContainerItems,
  ClearAll,
  ContainerButton,
} from "./styled";
import { ButtonGeneral } from "ui/button";
import { FormUpdate } from "components/checkout/styled";
import { SubTitle, Tiny } from "ui/texts";
import { TextField } from "ui/textfield";
import { useState } from "react";
import { useRouter } from "next/router";

export function CartComp() {
  const router = useRouter();
  const shippingData = useGetDataProfile();
  const productsInCart = useGetCurrentCart();
  const [goCheckout, setGoCheckout] = useState(false);

  const enableOrDisable = {
    display: productsInCart?.[0] ? "flex" : "none",
    justifyContent: "end",
  };

  const styleFormCheckout = {
    display: goCheckout == false ? "none" : "flex",
    background: "linear-gradient(332deg,#265f5e 29.35%,#1b232ed2 78.73%)",
    justifyContent: "center",
  };
  const styleItemsCart = {
    display: goCheckout == true ? "none" : "flex",
  };

  const styleButton = {
    display:
      goCheckout == true
        ? "none"
        : "flex" && productsInCart?.[0]
        ? "flex"
        : "none",
  };
  const handleDeleteCart = async () => {
    // productsInCart?.map((prod: any) => {
    //   console.log("productos,busco url", prod);
    // });
    await deleteAllProductsCart();
  };
  const handleGoCheckout = () => {
    setGoCheckout(true);
  };

  const handlePay = async (e: any) => {
    e.preventDefault();
    const address = e.target.address.value;
    const cellphone = e.target.cellphone.value;
    const name = shippingData?.name;

    console.log({ address, cellphone });
    await updateCheckoutShippingData({ name, cellphone, address });

    const data = await payMerchantOrderFromCart();
    const urlGetaway = data.url;

    router.push(urlGetaway);
    // productsInCart?.map((prod: any) => console.log(prod.data.images.url));
  };

  return (
    <ContainerPage>
      <ContainerItems style={styleItemsCart}>
        <ClearAll style={enableOrDisable} onClick={handleDeleteCart}>
          Eliminar todos
        </ClearAll>
        {productsInCart?.[0] ? (
          productsInCart?.map((prod: any) => (
            <ItemCart
              id={prod.data.productId}
              key={prod.id}
              title={prod.data.title}
              price={prod.data.price}
              description={prod.data.description}
              quantity={prod.data.quantity}
              url={prod.data.images.url}
            />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "200px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            No hay productos en el carro
          </div>
        )}
      </ContainerItems>
      <ContainerButton style={styleButton}>
        <ButtonGeneral style={styleButton} onClick={handleGoCheckout}>
          Continuar
        </ButtonGeneral>
      </ContainerButton>
      <div style={styleFormCheckout}>
        <FormUpdate event={handlePay}>
          <SubTitle>Confirma datos de envio</SubTitle>

          <Tiny>{shippingData?.name}</Tiny>
          <TextField
            type="text"
            label="Ingrése su teléfono"
            name={"cellphone"}
            defaultValue={shippingData?.cellphone}
          />
          <TextField
            type="text"
            label="Ingrése su dirección"
            name={"address"}
            defaultValue={shippingData?.address}
          />
          <ButtonGeneral>Confirmar</ButtonGeneral>
        </FormUpdate>
      </div>
    </ContainerPage>
  );
}
