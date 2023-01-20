import { useDataOrders, useGetMyOrders } from "lib/hooks";
import { UiItemOrder } from "ui/item-order";
import { ContainerPage, ContainerItems } from "./styled";

export function MyOrdersComp() {
  const myOrders = useDataOrders();

  return (
    <ContainerPage>
      <ContainerItems>
        {myOrders ? (
          myOrders?.map((order: any) => (
            <UiItemOrder
              key={order[0]}
              title={order.title}
              status={order.status}
              aditional_info={order.aditional_info}
              createdAt={order.createdAt}
              url={
                order.status == "pending" ? order.aditional_info.url_order : ""
              }
            />
          ))
        ) : (
          <div>No tienes ninguna órden todavia</div>
        )}
      </ContainerItems>
    </ContainerPage>
  );
}

////QUIZAS CONVIENE MAS REALIZAR EL MAP DE CADA PROP ACA, ASI EN UI NO ITERAMOS ARRAY, SOLO LO HACEMOS ACA Y PASAMOS PROPIEDAD A LA UI :DDDD
