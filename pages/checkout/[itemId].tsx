import { CheckoutComp } from "components/checkout";
import { Layout } from "components/layout";
import { useRouter } from "next/router";
import { ContainerPage } from "./styled";

export default function CheckOutPage() {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <Layout>
      <ContainerPage>
        <CheckoutComp itemId={itemId} />
      </ContainerPage>
    </Layout>
  );
}
