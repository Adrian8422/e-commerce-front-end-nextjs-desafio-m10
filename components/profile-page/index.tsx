import { ProfileComponent } from "components/profile";
import { useSetPreviousPage } from "lib/atoms";
import { useRouter } from "next/router";
import { ContainerPage } from "./styled";

export function ProfilePage() {
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
  );
}
