const BASE_URL = "https://e-commerce-backend-desafio-m9.vercel.app/api";
export async function fetchAPI(input: RequestInfo, options: any | undefined) {
  //   const token = localStorage.getItem("token");
  const url = BASE_URL + input;
  const token = getSavedToken();
  const newOptions: any = options || {};
  newOptions.headers ||= {};
  if (token) {
    newOptions.headers.authorization = `Bearer ${token}`;
  }
  newOptions.headers["content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);
  console.log("response", res);
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw {
      message: "Hubo un error",
      status: res.status,
    };
  }
}

export async function sendCode(email: string) {
  return fetchAPI("/users/auth", {
    method: "POST",
    body: {
      email,
    },
  });
}

export async function authToken(email: string, code: string) {
  console.log();
  const data = await fetchAPI("/users/auth/token", {
    method: "POST",
    body: {
      email,
      code: parseInt(code),
    },
  });
  savedToken(data.token);
  return true;
}

export function savedToken(token: any) {
  return localStorage.setItem("auth_token", token);
}

export function getSavedToken() {
  try {
    return localStorage.getItem("auth_token");
  } catch (error) {
    return false;
  }
}

export async function updateDataProfile({ name, cellphone, address }: any) {
  const data = await fetchAPI("/users/me", {
    method: "PATCH",
    body: {
      name,
      cellphone,
      address,
    },
  });
  console.log("data modificada en api tsx", data);
  return data;
}

export async function payMerchantOrder(id: string, quantity: string) {
  console.log({ id, quantity });

  const data = await fetchAPI("/users/order?productId=" + id, {
    method: "POST",
    body: {
      quantity: parseInt(quantity),
    },
  });
  return data;
}

export async function payMerchantOrderFromCart() {
  const data = await fetchAPI("/users/cart/order", {
    method: "POST",
  });
  console.log("en cart order", { data });
  return data;
}

export async function updateCheckoutShippingData({
  name,
  address,
  cellphone,
}: any) {
  const data = await fetchAPI("/users/me", {
    method: "PATCH",
    body: {
      name,
      cellphone,
      address,
    },
  });
  console.log("data modificada en api tsx", data);
  return data;
}

export async function addProductInCart(idProduct: string, quantity: string) {
  console.log("en api add prod cart", { idProduct, quantity });
  const data = await fetchAPI("/users/cart?id=" + idProduct, {
    method: "POST",
    body: {
      quantity: parseInt(quantity),
    },
  });

  return data;
}

export async function removeIdProductCart(idProduct: string) {
  const data = await fetchAPI("/users/cart/delete?idProd=" + idProduct, {
    method: "DELETE",
  });
  console.log({ data });
}

export async function deleteAllProductsCart() {
  const data = await fetchAPI("/users/cart", {
    method: "DELETE",
  });
  return data;
}

export async function changeQuantityOneProduct(
  idProduct: string,
  quantity: string
) {
  const data = await fetchAPI("/users/cart?id=" + idProduct, {
    method: "PUT",
    body: {
      quantity: parseInt(quantity),
    },
  });
  console.log(data);
  return data;
}
