import "./CartCard.scss";

const CartCard = ({ item }) => {
  const name = item?.name?.split(" ")[0]
  return (
    <>
      <img src={item?.image?.desktop} alt="" />
      <div className="cart-list-div">
        <span>{name}</span> <span>$ {item?.price}</span>
      </div>
    </>
  );
};

export default CartCard;
