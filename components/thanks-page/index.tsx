import { useRouter } from "next/router";
import { ContainerFullPage, ContainerTitles } from "./styled";

export function ThanksPage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 6000);
  return (
    <ContainerFullPage>
      <ContainerTitles>
        <h2>Muchas gracias por realizar esta compra</h2>
        <h3>En 5 segundos te redirigiremos a la home page :D</h3>
      </ContainerTitles>
    </ContainerFullPage>
  );
}
