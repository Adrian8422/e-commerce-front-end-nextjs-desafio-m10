const BASE_URL = "https://e-commerce-backend-desafio-m9.vercel.app/api";
export async function fetchAPI(input: RequestInfo, options: any | undefined) {
  const url = BASE_URL + input;
  const token: any = getSavedToken();
  const newOptions: any = options || {};
  newOptions.headers ||= {};
  if (token) {
    newOptions.headers.authorization = `Bearer ${token.message}`;
  }
  newOptions.headers["content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

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

export function logout() {
  return localStorage.removeItem("auth_token");
}

export function getSavedToken() {
  try {
    if (localStorage.getItem("auth_token")) {
      return {
        message: localStorage.getItem("auth_token"),
        status: true,
      };
    } else {
      return false;
    }
  } catch (e) {
    return e;
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

  return data;
}

export async function payMerchantOrder(id: string, quantity: string) {
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
  return data;
}

export async function addProductInCart(idProduct: string, quantity: string) {
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

  return data;
}
