import { Large, LargePrice, LargePriceItem } from "ui/texts";
import {
  ContainerCardImage,
  FormProfile,
  ContainerFullCard,
  ContainerCardDestacados,
  ContainerImage,
  ContainerTitles,
  ImageCard,
} from "./styled";

export function Card({ title, price, color, image, event, id }: any) {
  return (
    <ContainerFullCard id={id} onClick={event}>
      <ContainerCardImage id={id}>
        <img
          style={{ objectFit: "contain" }}
          id={id}
          width="100%"
          height="100%"
          src={image?.url}
        />
      </ContainerCardImage>
      <ContainerTitles id={id}>
        <Large id={id}>{title}</Large>
        <LargePrice id={id}>{"$" + price}</LargePrice>
      </ContainerTitles>
    </ContainerFullCard>
  );
}

// AGREGAR UN BUTTON AL FORMULARIO PARA QUE PUEDA EJECUTAR CAMBIOS EN EL PERFIL :D

export function CardProductDestacado({ title, price, event, id, image }: any) {
  return (
    <ContainerCardDestacados id={id} onClick={event}>
      <ContainerImage id={id}>
        <ImageCard id={id} src={image?.url} alt="imagen" />
      </ContainerImage>
      <div id={id}>
        <h4 id={id}>{title}</h4>
        <p id={id}>{"$" + price}</p>
      </div>
    </ContainerCardDestacados>
  );
}
