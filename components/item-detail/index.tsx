import {
  addProductInCart,
  changeQuantityOneProduct,
  payMerchantOrder,
} from "lib/api";
import { useCurrentUserState, useGetCurrentCart, useGetItem } from "lib/hooks";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import {
  ContainerFull,
  ContainerImage,
  Image,
  ContainerTitleDescription,
} from "./styled";
import {
  Large,
  LargeTitleItem,
  Tiny,
  LargePriceItem,
  SubTitleItem,
} from "ui/texts";
import { ButtonAddCart, ButtonGeneral } from "ui/button";
import { useState } from "react";
import { useGetValuePreviousPage, useSetValueQuantity } from "lib/atoms";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ItemProduct(itemId: any) {
  const currentCart = useGetCurrentCart();
  const [quantity, setQuantity] = useState("1");
  const [quantityRecoil, setQuantityRecoil] = useSetValueQuantity();
  const stateUser = useCurrentUserState();
  const dataItem = useGetItem(itemId);
  const router = useRouter();
  const imageItem = dataItem?.images.find((img: any) => img.width > 160);
  const handlePay = async () => {
    if (stateUser == false) {
      Swal.fire({
        title: "debes loguearte para poder comprar",
        icon: "error",
        confirmButtonText: "Loguearme",
      });

      router.push("/signin");
    } else if (stateUser == true) {
      const { itemId } = router.query;
      router.push("/checkout/" + itemId);
    }
  };

  function handleSetQuantity(event: any) {
    console.log("en el componente item no ui", event.target.value);
    const quantitySelected: any = event.target.value;
    setQuantity(quantitySelected || "1");
    setQuantityRecoil(quantitySelected || "1");
  }
  const handleAddCart = async () => {
    const { itemId } = router.query;
    ///// Chequeo si ya agregamos ese producto al carrito, si lo esta solamente modificamos el quantity que elegimos para que no se duplique el item en el carro
    const repeatProduct = currentCart?.find((prod: any) => {
      if (prod.data.productId == itemId) {
        return {
          prodExistente: true,
          cuurentQuantity: prod?.data.quantity,
        };
      }
    });

    if (repeatProduct) {
      await changeQuantityOneProduct(
        itemId as string,
        repeatProduct.data.quantity + parseInt(quantity)
      );
      console.log({ repeatProduct });
    } else if (!repeatProduct) {
      const addProduct = await addProductInCart(itemId as string, quantity);
      if (addProduct.out_of_stock_error === true) {
        Swal.fire({
          title: "Producto agotado",
          icon: "error",
          confirmButtonText: "Volver a seleccionar",
        });
      }
      if (addProduct.low_stock_error == true) {
        Swal.fire({
          title: "No contamos con esa cantidad de productos",
          icon: "error",
          confirmButtonText: "Volver a seleccionar",
        });
      }
      if (addProduct.error == false) {
        Swal.fire({
          title: "Producto agregado al carrido",
          icon: "success",
          confirmButtonText: "Continuar",
        });
      }
    }
  };

  return (
    <ContainerFull style={{ display: "flex" }}>
      <ContainerImage style={{ width: "300px", height: "300px" }}>
        <Image src={imageItem?.url} alt="foto de tv" />
      </ContainerImage>
      <ContainerTitleDescription
        style={{ display: "flex", flexDirection: "column" }}
      >
        <LargeTitleItem>
          {dataItem?.title || <Skeleton count={1} />}
        </LargeTitleItem>

        <LargePriceItem>{"$" + dataItem?.price}</LargePriceItem>
        <Tiny>{"Stock: " + dataItem?.stock}</Tiny>
        <select
          style={{ cursor: "pointer" }}
          name="value"
          onChange={handleSetQuantity}
        >
          <option value="1">1 unidad</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
          <option value="5">5 unidades</option>
        </select>
        <Tiny>{"Categoría: " + dataItem?.categories}</Tiny>

        <SubTitleItem>Caracteristicas y descripcion</SubTitleItem>
        <Tiny style={{ maxWidth: "300px" }}>{dataItem?.description}</Tiny>

        <ButtonGeneral onClick={handlePay}>Pay now</ButtonGeneral>
        <ButtonAddCart onClick={handleAddCart}>add cart</ButtonAddCart>
      </ContainerTitleDescription>
    </ContainerFull>
  );
}
