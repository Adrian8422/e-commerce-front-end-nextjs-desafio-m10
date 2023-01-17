import { changeQuantityOneProduct, removeIdProductCart } from "lib/api";
import { useGetCurrentCart } from "lib/hooks";
import Router from "next/router";
import Swal from "sweetalert2";
import { Trash } from "ui/icons";
import { SelectorQuantity } from "ui/quantity-selector";
import { Large, Tiny, LargePrice } from "ui/texts";
import {
  ContainerFullItem,
  ContainerTitlesAndImg,
  ContainerImg,
  ContainerTitleAndDescription,
} from "./styled";

export function ItemCart({
  title,
  description,
  price,
  url,
  quantity,
  id,
}: any) {
  const productsInCart: [] = useGetCurrentCart();

  const eventLess = async (e: any) => {
    const productSelected = e.target.id;
    console.log({ productSelected });
    const matchIdProds: any = productsInCart.find(
      (prod: any) => prod.data.productId == productSelected
    );
    const quantity = matchIdProds.data.quantity;
    const newQuantity = quantity - 1;
    const limitNewQuantity = JSON.stringify(newQuantity == 0 ? 1 : newQuantity);
    // console.log({ newQuantity });

    await changeQuantityOneProduct(productSelected, limitNewQuantity);
  };

  const eventMore = async (e: any) => {
    const productSelected = e.target.id;
    console.log({ productSelected });
    const matchIdProds: any = productsInCart.find(
      (prod: any) => prod.data.productId == productSelected
    );
    const quantity = matchIdProds.data.quantity;
    const newQuantity = JSON.stringify(quantity + 1);
    // console.log({ newQuantity });
    const changeQuantity = await changeQuantityOneProduct(
      productSelected,
      newQuantity
    );
    if (changeQuantity.error == true) {
      Swal.fire({
        title: "Superaste la cantidad de stock que tenemos",
        icon: "error",
        confirmButtonText: "modificar",
      });
    }
  };
  const removeProduct = async (e: any) => {
    const productSelected = e.target.id;
    await removeIdProductCart(productSelected);
  };

  return (
    <ContainerFullItem>
      <ContainerTitlesAndImg>
        <ContainerImg>
          <img src={url} alt="foto" />
        </ContainerImg>
        <ContainerTitleAndDescription>
          <Large>{title}</Large>
          <Tiny>{description}</Tiny>
        </ContainerTitleAndDescription>
      </ContainerTitlesAndImg>
      <SelectorQuantity
        id={id}
        quantity={quantity}
        eventLess={eventLess}
        eventMore={eventMore}
      />
      <div>
        <LargePrice>{"$" + price}</LargePrice>
      </div>
      <Trash onClick={removeProduct} id={id} />
    </ContainerFullItem>
  );
}
