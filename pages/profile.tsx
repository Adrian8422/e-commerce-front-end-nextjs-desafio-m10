import { Layout } from "components/layout";
import { ProfileComponent } from "components/profile";
import { useCurrentUserState } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetPreviousPage } from "lib/atoms";
import { ContainerPage } from "./checkout/styled";

export default function ProfilePage() {
  const router = useRouter();
  // const [page, setPage] = useSetPreviousPage();
  // useEffect(() => {
  //   setPage("/profile");
  // }, []);
  useSetPreviousPage("/profile");

  const handleMyOrders = (e: any) => {
    e.preventDefault();
    router.push("/my-orders");
  };
  return (
    <Layout>
      <ContainerPage>
        <a
          onClick={handleMyOrders}
          style={{
            color: "aqua",
            borderBottom: "solid 1px aqua",
            width: "100px",
          }}
          href=""
        >
          Mis pedidos
        </a>
        <ProfileComponent />
      </ContainerPage>
    </Layout>
  );
}
