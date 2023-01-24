import { useSearchProdQuery } from "lib/hooks";
import { useRouter } from "next/router";
import { Card } from "ui/card";

import { ContainerCards, ContainerPage, SeeMore } from "./styled";

export function CompProd({ query, offset, limit }: any) {
  const data = useSearchProdQuery(query, offset, limit);
  const router = useRouter();
  const quantityProducts = data?.results.length;

  const handleNextPage = () => {
    const currentOffset: any = router.query.offset;

    const newOffset = parseInt(currentOffset) + 10;
    router.push(
      "/search?q=" + query + "&offset=" + newOffset + "&limit=" + limit
    );
  };
  const handleItem = (e: any) => {
    const idItem = e.target.id;
    router.push("/item/" + idItem);
  };

  return (
    <ContainerPage>
      <ContainerCards>
        {data?.results.map((prod: any) => (
          <Card
            id={prod.objectID}
            event={handleItem}
            key={prod.objectID}
            image={prod.images.find((img: any) => img.width > 160)}
            title={prod.title}
            price={prod.price}
          />
        ))}
        {quantityProducts < 10 ? null : (
          <SeeMore onClick={handleNextPage}>ver más</SeeMore>
        )}
      </ContainerCards>
    </ContainerPage>
  );
}
