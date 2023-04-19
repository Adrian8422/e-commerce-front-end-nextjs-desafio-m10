import { useGetProductsDestacados } from "lib/hooks";
import { useRouter } from "next/router";
import { CardProductDestacado } from "ui/card";

import { ContainerCards } from "./styled";

export function ProductsDestacados() {
  const router = useRouter();
  const destacados = useGetProductsDestacados();
  const handleSelected = (e: any) => {
    const idProduct = e.target.id;
    router.push("/item/" + idProduct);
  };

  return (
    <ContainerCards>
      {destacados?.map((prod: any) => (
        <CardProductDestacado
          event={handleSelected}
          key={prod.objectID}
          id={prod.objectID}
          title={prod.title}
          price={prod.price}
          image={prod.images[0].thumbnails.small}
        />
      ))}
    </ContainerCards>
  );
}
