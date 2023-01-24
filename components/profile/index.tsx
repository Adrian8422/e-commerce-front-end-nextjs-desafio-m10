import { updateDataProfile } from "lib/api";
import { useCurrentUserState, useGetDataProfile } from "lib/hooks";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { ButtonGeneral } from "ui/button";
import { FormProfile } from "ui/card/styled";
import { TextField } from "ui/textfield";
import { Large } from "ui/texts";

export function ProfileComponent() {
  const data = useGetDataProfile();
  const name = data?.name;
  const cellphone = data?.cellphone;
  const email = data?.email;
  const address = data?.address;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.address.value;
    const cellphone = e.target.cellphone.value;
    console.log({ name, address, cellphone });

    await updateDataProfile({ name, cellphone, address });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Modificaste tus datos",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <FormProfile onSubmit={handleSubmit}>
      <Large>{"user: " + email}</Large>
      <TextField label="Ingrése su nombre" name="name" defaultValue={name} />
      <TextField
        label="Ingrése su teléfono"
        name="cellphone"
        defaultValue={cellphone}
      />
      <TextField
        label="Ingrése su dirección"
        name="address"
        defaultValue={address}
      />
      <ButtonGeneral>confirmar cambios</ButtonGeneral>
    </FormProfile>
  );
}
