import useSWR from "swr";
import { deleteAllProductsCart, fetchAPI, getSavedToken } from "./api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { verifyExpiresCart } from "./functions";

const BASE_URL_LOCAL_API =
  "https://e-commerce-front-end-nextjs-desafio-m10.vercel.app";

const fetcher = (a: any, b: any) => fetch(a, b).then((res) => res.json());

export function useSearchResults(query: string) {
  const { data } = useSWR(() => "/search?q=" + query, fetchAPI);
  return data;
}

export function useGetDataProfile() {
  const { data } = useSWR("/users/me", fetchAPI, { refreshInterval: 1000 });

  return data;
}

export function useSearchProdQuery(
  query: string,
  offset: string,
  limit: string
) {
  const { data } = useSWR(
    `/products/search?q=${query}&offset=${offset}&limit=${limit}`,
    fetchAPI
  );

  return data;
}

export function useGetItem(itemId: any) {
  console.log("itemid en hook", itemId.itemId);
  const { data } = useSWR("/products/" + itemId.itemId, fetchAPI);
  return data;
}

export function useCurrentUserState() {
  const [stateUser, setUserState] = useState(false);
  const token = getSavedToken();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      setUserState(true);
    } else {
      setUserState(false);
      location.pathname == "/profile" ? router.push("/404") : null;
    }
  }, [token]);
  return stateUser;
}

export function useGetCurrentCart() {
  const { data } = useSWR("/users/cart", fetchAPI, { refreshInterval: 1000 });
  console.log("data del carrito", data);
  if (data?.error == true) {
    return [];
  }

  const gerDataForCheckExpired = data?.map((item: any) =>
    verifyExpiresCart(item.data.expires._seconds * 1000)
  );
  const booleanExpired = gerDataForCheckExpired?.find(
    (prod: any) => prod == true
  );
  if (booleanExpired == true) {
    deleteAllProductsCart();
    console.log("productos vencidos");
    return [];
  }

  return data;
}

export function useGetProductsDestacados() {
  const { data } = useSWR(
    BASE_URL_LOCAL_API + "/api/products/destacados",
    fetcher
  );
  console.log("efsfsfds", data);
  return data;
}
export function useGetCategories() {
  const { data } = useSWR(
    BASE_URL_LOCAL_API + "/api/products/categories",
    fetcher
  );

  return data;
}
export function useGetProductsFromCategorie(categorie: any) {
  const { data } = useSWR(
    BASE_URL_LOCAL_API + "/api/products/categories/" + categorie,
    fetcher
  );

  return data;
}

export function useGetMyOrders() {
  const { data } = useSWR("/users/order/orders", fetchAPI);
  console.log({ data });
  return data;
}

export function useDataOrders() {
  const orders = useGetMyOrders();
  return orders;
}
