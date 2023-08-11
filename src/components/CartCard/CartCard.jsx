import { Link } from "react-router-dom";
import "./CartCard.scss";

const CartCard = ({ item }) => {
  const name = item?.name?.split(" ")[0];
  return (
    <>
      <Link to={`/${item.slug}`}>
        <img src={item?.image?.desktop} alt="" />
      </Link>
      <div className="cart-list-div">
        <Link to={`/${item.slug}`}>
          <span>{name}</span>
        </Link>
        <span>$ {item?.price}</span>
      </div>
    </>
  );
};

export default CartCard;
