import {
  payMerchantOrder,
  updateCheckoutShippingData,
  updateDataProfile,
} from "lib/api";
import { useGetValueQuantity } from "lib/atoms";
import { useGetDataProfile } from "lib/hooks";
import { useRouter } from "next/router";
import { ButtonGeneral } from "ui/button";
import { Input, Label, TextField } from "ui/textfield";
import { SubTitle, Tiny } from "ui/texts";
import { FormUpdate } from "./styled";

export function CheckoutComp({ itemId }: any) {
  const shippingData = useGetDataProfile();
  const quantity = useGetValueQuantity();
  const router = useRouter();

  async function handleUpdateData(e: any) {
    e.preventDefault();
    const address = e.target.address.value;
    const cellphone = e.target.cellphone.value;
    const name = shippingData?.name;

    console.log({ address, cellphone });
    await updateCheckoutShippingData({ name, cellphone, address });

    const data = await payMerchantOrder(itemId as string, quantity);
    const urlGetaway = data.url;

    router.push(urlGetaway);
  }

  return (
    <FormUpdate event={handleUpdateData}>
      <SubTitle>Confirma datos de envio</SubTitle>

      <Tiny>{shippingData?.name}</Tiny>
      <TextField
        type="text"
        label="Ingrése su teléfono"
        name={"cellphone"}
        defaultValue={shippingData?.cellphone}
      />
      <TextField
        type="text"
        label="Ingrése su dirección"
        name={"address"}
        defaultValue={shippingData?.address}
      />
      <ButtonGeneral>Confirmar</ButtonGeneral>
    </FormUpdate>
  );
}
