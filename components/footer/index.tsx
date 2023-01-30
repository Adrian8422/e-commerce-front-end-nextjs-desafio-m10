import { logout } from "lib/api";
import { useGetValuePreviousPage } from "lib/atoms";
import { useCurrentUserState } from "lib/hooks";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Email, Instagram, Twitter } from "ui/icons";
import { TextFooter } from "ui/texts";
import { ContainerFull, ContainerRedes } from "./styled";

export function FooterComponent() {
  const router = useRouter();

  const stateUser = useCurrentUserState();
  const handleLogOut = () => {
    if (stateUser == false) {
      Swal.fire({
        title: "Ya estas deslogueado",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (stateUser == true) {
      logout();
      router.push("/signin");
      Swal.fire({
        title: "Te deslogueaste",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };
  const handleSignIn = () => {
    if (stateUser == true) {
      Swal.fire({
        title: "Ya estas logueado",
        icon: "success",
        confirmButtonText: "Seguir navegando",
      });
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
