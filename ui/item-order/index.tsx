import { ContainerUIOrder, ContainerTitles } from "./styled";

export function UiItemOrder({
  title,
  status,
  aditional_info,
  key,
  createdAt,
  url,
}: any) {
  var date = new Date(createdAt._seconds * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const enableOrDisableURL = {
    display: status == "pending" ? "flex" : "none",
    fontSize: "12px",
    color: "blue",
  };
  console.log({ date });
  return (
    <ContainerUIOrder key={key}>
      <ContainerTitles style={{ display: "flex", flexDirection: "column" }}>
        <h2>{title || title.map((title: any) => title)}</h2>

        <h3>{"Estado: " + status}</h3>
        {/* <a style={enableOrDisableURL}>{"Url orden: " + url}</a> */}

        <a style={enableOrDisableURL} href={url}>
          Link de pago
        </a>
      </ContainerTitles>
      <ContainerTitles
        style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
      >
        <h3>
          {"cantidad:" +
            aditional_info.quantity.map((item: any) => item.quantity)}
        </h3>
        <h3>
          {"Fecha:" +
            day.toString() +
            "/" +
            month.toString() +
            "/" +
            year.toString()}
        </h3>
      </ContainerTitles>
    </ContainerUIOrder>
  );
}

// new Date(createdAt._seconds * 1000);
