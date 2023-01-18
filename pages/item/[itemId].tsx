import { ItemProduct } from "components/item-detail-page";
import { Layout } from "components/layout";
import { useGetValuePreviousPage, useSetPreviousPage } from "lib/atoms";
import { useRouter } from "next/router";

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
      <ItemProduct itemId={itemId} />
    </Layout>
  );
}
