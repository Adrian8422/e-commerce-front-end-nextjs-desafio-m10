import { ItemProduct } from "components/item-detail";
import { Layout } from "components/layout";
import { useGetValuePreviousPage, useSetPreviousPage } from "lib/atoms";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ContainerPage } from "./styled";

export default function PageItemDetail() {
  const router = useRouter();
  const itemId = router.query.itemId;
  // const [page, setPage] = useSetPreviousPage();
  useSetPreviousPage("/item/" + itemId);

  // useEffect(() => {
  //   useSetPreviousPage("/item/" + itemId);
  // }, [itemId]);

  return (
    <Layout>
      <ContainerPage>
        <ItemProduct itemId={itemId} />
      </ContainerPage>
    </Layout>
  );
}
