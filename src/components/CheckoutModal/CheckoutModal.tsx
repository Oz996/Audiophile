import "./CheckoutModal.scss";
import useCartStore from "../../zustand/cartStore";
import CartCard from "../CartCard/CartCard";
import { useNavigate } from "react-router-dom";

interface props {
  grandtotal: number;
  setSuccess: (value: boolean) => void;
}

const CheckoutModal: React.FC<props> = ({ grandtotal, setSuccess }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div className="checkout-modal">
      <div className="overlay" />
      <div className="checkout-inner">
        <img src="/assets/check.svg" alt="checkmark" />
        <h1>
          Thank you <br /> for your order
        </h1>
        <p>You will receive an email confirmation shortly.</p>
        <div className="checkout-items">
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="">
                <CartCard item={item} />
              </div>
            ))}
          </div>
          <div className="total">
            <h1>Grand total</h1>
            <span>$ {grandtotal}</span>
          </div>
        </div>
        <button
          onClick={() => {
            setSuccess(false);
            navigate("/");
            clearCart();
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
