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

  return (
    <ContainerUIOrder key={key}>
      <ContainerTitles style={{ display: "flex", flexDirection: "column" }}>
        <h2>
          {JSON.stringify(title).replace(/[",/]/g, "-") ||
            title.map((title: any) => <div>{title.replace(/,/g, "-")}</div>)}
        </h2>

        <h3>{"Estado: " + status}</h3>

        <a style={enableOrDisableURL} href={url}>
          Link de pago
        </a>
      </ContainerTitles>
      <ContainerTitles
        style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
      >
        <h3>
          {"cantidad:" +
            aditional_info.quantity.map(
              (item: any) => " " + item.quantity + " "
            )}
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
