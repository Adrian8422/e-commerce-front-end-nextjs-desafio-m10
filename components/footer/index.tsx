import { useGetValuePreviousPage } from "lib/atoms";
import { useCurrentUserState } from "lib/hooks";
import { useRouter } from "next/router";
import { Email, Instagram, Twitter } from "ui/icons";
import { SubTitleItem, TextFooter } from "ui/texts";
import { ContainerFull, ContainerRedes } from "./styled";

export function FooterComponent() {
  const router = useRouter();
  const currentPage = useGetValuePreviousPage();
  const stateUser = useCurrentUserState();
  const handleLogOut = () => {
    localStorage.removeItem("auth_token");
    router.push("/signin");
    alert("te deslogueaste");
  };
  const handleSignIn = () => {
    if (stateUser == true) {
      //   router.push("/");
      alert("ya estas logueado");
    } else {
      router.push("/signin");
    }
  };

  return (
    <ContainerFull>
      <div>
        <TextFooter onClick={handleSignIn}>Ingresar</TextFooter>
        <TextFooter onClick={handleLogOut}>Logout</TextFooter>
        <TextFooter>Trabaja con nosotros</TextFooter>
      </div>
      <ContainerRedes>
        <TextFooter style={{ margin: "0" }}>Redes</TextFooter>
        <Instagram />
        <Twitter />
        <Email />
      </ContainerRedes>
    </ContainerFull>
  );
}
