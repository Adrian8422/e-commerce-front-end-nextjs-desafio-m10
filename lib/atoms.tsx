import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

///// ATOM RECOIL

const previousPage = atom({
  key: "page",
  default: "",
});

// export const useSetPreviousPage = () => useRecoilState(previousPage);

export function useSetPreviousPage(pages: string) {
  const [page, setPage] = useRecoilState(previousPage);
  useEffect(() => {
    setPage(pages);
  }, [pages]);
}
export const useGetValuePreviousPage = () => useRecoilValue(previousPage);

const selectedQuantity = atom({
  key: "quantity",
  default: "1",
});

export const useSetValueQuantity = () => useRecoilState(selectedQuantity);
export const useGetValueQuantity = () => useRecoilValue(selectedQuantity);
