import InstagramIcon from "ui/icons/instagram.svg";
import TwitterIcon from "ui/icons/twitter.svg";
import styled from "styled-components";
import EcommerceIcon from "ui/icons/ecommerce.svg";
import CartIcon from "ui/icons/cart.svg";
import SearchIcon from "ui/icons/search.svg";
import TrashIcon from "ui/icons/trash.svg";
import EmailIcon from "ui/icons/mail.svg";
import MercadoPagoIcon from "ui/icons/mercadopago.svg";
import CashIcon from "ui/icons/cash.svg";
import CardIcon from "ui/icons/credit-card.svg";

export const Twitter = styled(TwitterIcon)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const Instagram = styled(InstagramIcon)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const Ecommerce = styled(EcommerceIcon)`
  width: 45px;
  height: 45px;
  filter: drop-shadow(rgb(0, 0, 0) 4px 2px 2px);
  cursor: pointer;
`;
export const Cart = styled(CartIcon)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export function CartQuantity({ quantity, event }: any) {
  return (
    <div style={{ display: "grid", textAlign: "center" }} onClick={event}>
      <span
        style={{
          marginBottom: "-6px",
          marginRight: "3px",
          backgroundColor: "#bf2929a6",
          borderRadius: "19px",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        {quantity || 0}
      </span>
      <Cart />
    </div>
  );
}

export const Search = styled(SearchIcon)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const Trash = styled(TrashIcon)`
  width: 25px;
  height: 30px;
  cursor: pointer;
`;
export const Email = styled(EmailIcon)`
  width: 25px;
  height: 30px;
  cursor: pointer;
`;
export const MercadoPago = styled(MercadoPagoIcon)`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;
export const Cash = styled(CashIcon)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  fill: #363535cf;
`;
export const Card = styled(CardIcon)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  fill: #363535cf;
`;
