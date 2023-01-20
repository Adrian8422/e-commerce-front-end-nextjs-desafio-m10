import { authToken, sendCode } from "lib/api";
import { useState } from "react";
import { TextField } from "ui/textfield";
import { Large, Tiny } from "ui/texts";
import { FormLog, ContainerForms, LabelForm } from "./styled";
import { useRouter } from "next/router";
import { useGetValuePreviousPage } from "lib/atoms";
import { ButtonGeneral } from "ui/button";

export function LoginComp() {
  const router = useRouter();
  const previousPage = useGetValuePreviousPage();
  const [email, setEmail] = useState("");
  const handleEmailForm = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    setEmail(email);
    console.log("data del router", router);
    await sendCode(email);
  };

  const emailFormStyle = {
    display: email ? "none" : "flex",
  };
  const codeFormStyle = {
    display: email ? "flex" : "none",
  };

  const handleCodeForm = async (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;
    console.log(code);
    await authToken(email, code);
    router.push(previousPage || "/");
  };

  return (
    <ContainerForms>
      <FormLog style={emailFormStyle} onSubmit={handleEmailForm}>
        <LabelForm>
          <Large>Iniciar sesión</Large>
          <Tiny>Para comenzar ingrese su email</Tiny>
          <TextField
            styled={emailFormStyle}
            type="email"
            name="email"
            placeholder="Ingrese su Email"
          />
          <ButtonGeneral>enviar</ButtonGeneral>
        </LabelForm>
      </FormLog>
      <FormLog style={codeFormStyle} onSubmit={handleCodeForm}>
        <LabelForm>
          <Large>Iniciar sesión</Large>
          <Tiny>Ingrese código enviado a su email</Tiny>
          <TextField
            styled={codeFormStyle}
            type="text"
            name="code"
            placeholder="Ingrese su código"
          />
          <ButtonGeneral>enviar</ButtonGeneral>
        </LabelForm>
      </FormLog>
    </ContainerForms>
  );
}

// color para fondo cuando aparece ventana de inicio de sesion background: rgb(0 0 0 / 32%)
