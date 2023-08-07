import { useEffect, useRef } from "react";
import useCartStore from "../../zustand/cartStore";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./CartPreview.scss";
import { useNavigate } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

const CartPreview = ({ setCartModal }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const cartRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target))
        setCartModal(false);
    });
  }, [cartRef, setCartModal]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal">
      <div className="overlay"></div>
      <div ref={cartRef} className="modal-content">
        <div className="modal-inner">
          {cartItems.length == 0 ? (
            <div className="empty">
              <AiOutlineShoppingCart size={22} className="cart-prev-icon" />
              <span>Your cart is empty</span>
            </div>
          ) : (
            <>
              <div className="cart-div">
                <h1>Cart ({cartItems.length})</h1>
                <span onClick={() => clearCart()} className="remove-prev">
                  Remove all
                </span>
              </div>
              <ul>
                {cartItems.map((item) => (
                  <li key={item?.id}>
                    <div className="cart-inner">
                        <CartCard item={item}/>
                      <div className="cart-prev-btns">
                        <button onClick={() => decrementQuantity(item.id)}>
                          -
                        </button>
                        <input
                          type="text"
                          disabled={true}
                          placeholder={item?.quantity}
                        />
                        <button onClick={() => incrementQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-div-bottom">
                <span>Total</span>
                <p>$ {cartTotal}</p>
              </div>
            </>
          )}
          {cartItems.length > 0 && (
            <button
              className="checkout-btn"
              onClick={() => {
                navigate("/cart");
                setCartModal(false);
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
