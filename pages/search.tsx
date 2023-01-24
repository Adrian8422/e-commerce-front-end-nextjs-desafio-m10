import { useRouter } from "next/router";
import { CompProd } from "components/results-page";
import { useSearchProdQuery } from "lib/hooks";
import { Layout } from "components/layout";
import { useSetPreviousPage } from "lib/atoms";

export default function AllProducts() {
  const router = useRouter();
  const { q } = router.query;
  const { offset } = router.query;
  const { limit } = router.query;

  useSetPreviousPage(
    "/search?q=" + q + "&offset=" + offset + "&limit=" + limit
  );

  return (
    <Layout>
      <CompProd query={q} offset={offset} limit={limit} />
    </Layout>
  );
}
