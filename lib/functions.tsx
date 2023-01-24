import Swal from "sweetalert2";
import { addProductInCart, changeQuantityOneProduct } from "./api";
import isAfter from "date-fns/isAfter";
export function checkStockProd({ dataItem, quantity }: any) {
  if (dataItem.stock == 0) {
    Swal.fire({
      title: "Producto agotado",
      icon: "error",
      confirmButtonText: "Volver a seleccionar",
    });
    return {
      error: true,
    };
  }
  if (dataItem.stock < parseInt(quantity)) {
    Swal.fire({
      title: "No contamos con esa cantidad de productos",
      icon: "error",
      confirmButtonText: "Volver a seleccionar",
    });
    return {
      error: true,
    };
  }
}

export async function checkPreviousCartForAddProduct({
  currentCart,
  itemId,
  quantity,
}: any) {
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
}

export function verifyExpiresCart(createdAt: any) {
  const now = new Date();
  return isAfter(now, createdAt);
}
