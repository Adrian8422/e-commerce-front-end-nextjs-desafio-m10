import useSWR from "swr";
import { fetchAPI, getSavedToken } from "./api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const fetcher = (a: any, b: any) => fetch(a, b).then((res) => res.json());

const BASE_URL = "tatatatta";

export function useSearchResults(query: string) {
  const { data } = useSWR(() => "/search?q=" + query, fetchAPI);
  return data;
}

///ATOMOS COMO RECOIL LO PUEDO UTILIZAR PERO IGUALMENTE SWR YA TRAE LA CONFIG PARA CACHEAR RESPUESTAS Y DATA ASI QUE SERIA COMO TENER TAMBIEN ATOMOS DENTRO DE SWR-- UTILIZO DIRECTAMENTE EL HOOK Y LISTO
//  EJEMPLO DE HOOK ATOM SIN QUE FETCHEEÉ

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
  return data;
}

////cuando realize el deply tengo que poner la url en la funcion proxima que utiliza endpoint del front

export function useGetProductsDestacados() {
  const { data } = useSWR(
    "http://localhost:3000/api/products/destacados",
    fetcher
  );
  console.log("efsfsfds", data);
  return data;
}
export function useGetCategories() {
  const { data } = useSWR(
    "http://localhost:3000/api/products/categories",
    fetcher
  );

  return data;
}
export function useGetProductsFromCategorie(categorie: any) {
  const { data } = useSWR(
    "http://localhost:3000/api/products/categories/" + categorie,
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
