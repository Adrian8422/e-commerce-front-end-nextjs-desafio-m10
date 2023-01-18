import { CheckoutComp } from "components/checkout-page";
import { Layout } from "components/layout";
import { useRouter } from "next/router";

export default function CheckOutPage() {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <Layout>
      <CheckoutComp itemId={itemId} />
    </Layout>
  );
}
