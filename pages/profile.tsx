import { Layout } from "components/layout";

import { useCurrentUserState } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetPreviousPage } from "lib/atoms";
import { ProfilePage } from "components/profile-page";

export default function ProfilePg() {
  // const router = useRouter();
  // // const [page, setPage] = useSetPreviousPage();
  // // useEffect(() => {
  // //   setPage("/profile");
  // // }, []);
  // useSetPreviousPage("/profile");

  // const handleMyOrders = (e: any) => {
  //   e.preventDefault();
  //   router.push("/my-orders");
  // };
  return (
    <Layout>
      <ProfilePage />
    </Layout>
  );
}
