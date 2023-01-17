import {
  useCurrentUserState,
  useGetCategories,
  useGetCurrentCart,
  useGetDataProfile,
  useGetProductsFromCategorie,
} from "lib/hooks";
import { useRouter } from "next/router";
import { ButtonGeneral } from "ui/button";
import { Ecommerce } from "ui/icons";
import { Cart, Search, CartQuantity } from "ui/icons";
import { FormSearchQuery } from "ui/textfield";
import { CategoriesUi } from "ui/categories";
import { useState } from "react";

import {
  ContainerItems,
  HeaderComponent,
  ContainerCategoriesUi,
  FullMenuCategories,
  TagACategories,
} from "./styled";

export function Header() {
  // const foundCategorie = useGetProductsFromCategorie();
  const router = useRouter();
  const location = useRouter();
  const categories = useGetCategories();
  // const token = getSavedToken();
  const userData = useGetDataProfile();
  const userState = useCurrentUserState();
  const currentCart = useGetCurrentCart();
  const [actOrDisableCategorie, setActOrDisableCategorie] = useState(false);

  //// cree un hook que realiza esto :DDD
  // const [stateUser, setStateUser] = useState(false);
  // useEffect(() => {
  //   if (token) {
  //     setStateUser(true);
  //   } else {
  //     setStateUser(false);
  //   }
  // }, [token]);
  const goToHome = () => {
    router.push("/");
  };
  const goToSignIn = () => {
    router.push("/signin");
  };
  const handleSearchQuery = async (e: any) => {
    e.preventDefault();
    const query = e.target.search.value;
    router.query.q = query;
    console.log("pasa por aca llevandose la query");
    router.push("/search?q=" + query + "&offset=0" + "&limit=10");
  };

  const handleProfile = () => {
    if (userState) {
      router.push("/profile");
    }
  };

  const handleCart = () => {
    router.push("/cart");
  };
  const handleCategories = (e: any) => {
    if (actOrDisableCategorie == false) {
      setActOrDisableCategorie(true);
    } else if (actOrDisableCategorie == true) {
      setActOrDisableCategorie(false);
    }
  };

  const getCategorie = (e: any) => {
    const queryCategorie = e.target.id;
    setActOrDisableCategorie(false);
    router.push("/search?q=" + queryCategorie + "&offset=0" + "&limit=10");
  };
  const buttonMyAccount = {
    display: userState == false ? "flex" : "none",
  };
  const titleMyAccount = {
    display: userState == false ? "none" : "flex",
  };
  const myAccout = {
    display: !userData?.name ? "flex" : "none",
  };
  const nameAccount = {
    display: userData?.name ? "flex" : "none",
    cursor: "pointer",
  };
  const styleCategories: any = {
    display: actOrDisableCategorie == true ? "flex" : "none",
    position: "absolute",
    top: "90px",
  };

  return (
    <HeaderComponent>
      <ContainerItems>
        <Ecommerce onClick={goToHome} />
        <FormSearchQuery
          event={handleSearchQuery}
          name="search"
          placeholder="Ingresa el nombre de algun producto"
        />

        <ButtonGeneral style={buttonMyAccount} onClick={goToSignIn}>
          Ingresa
        </ButtonGeneral>

        <div style={titleMyAccount} onClick={handleProfile}>
          <div style={myAccout}>Mi cuenta</div>

          <div style={nameAccount}>{userData?.name}</div>
        </div>

        <CartQuantity quantity={currentCart?.length} event={handleCart}>
          Carrito
        </CartQuantity>
      </ContainerItems>
      {location.pathname == "/search" ? (
        <FullMenuCategories>
          <TagACategories onClick={handleCategories}>
            Categorias▾
          </TagACategories>

          <ContainerCategoriesUi style={styleCategories}>
            <CategoriesUi event={getCategorie} categories={categories} />
          </ContainerCategoriesUi>
        </FullMenuCategories>
      ) : null}
    </HeaderComponent>
  );
}

///// VER SI TODOS ESOS CAMBIOS LOS PUEDO HACER CON CSS-- LO QUE APARECE O NO APARECE EL NOMBRE DEL USUARIO O SI DICE MI CUENTA Y DEMAS
