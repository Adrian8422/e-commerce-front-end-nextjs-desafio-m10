import { useGetCategories, useSearchProdQuery } from "lib/hooks";
import { useRouter } from "next/router";
import { Card } from "ui/card";
import { CategoriesUi } from "ui/categories";
import { ContainerCards, ContainerPage } from "./styled";

export function CompProd({ query, offset, limit }: any) {
  const categories = useGetCategories();
  const data = useSearchProdQuery(query, offset, limit);
  const router = useRouter();
  const quantityProducts = data?.results.length;

  // console.log("look", quantityProducts);
  // console.log({ categories });
  // console.log(data);

  const handleNextPage = () => {
    console.log("click");
    const currentOffset: any = router.query.offset;
    // console.log("current", parseInt(currentOffset));
    // console.log("luego pasa por aqui");
    const newOffset = parseInt(currentOffset) + 10;
    router.push(
      "/search?q=" + query + "&offset=" + newOffset + "&limit=" + limit
    );
  };
  const handleItem = (e: any) => {
    console.log(e.target.id);
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
          <h2 style={{ cursor: "pointer" }} onClick={handleNextPage}>
            see more
          </h2>
        )}
      </ContainerCards>
    </ContainerPage>
  );
}
