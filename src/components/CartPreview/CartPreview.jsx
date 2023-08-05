import { useEffect, useRef } from "react";
import useCartStore from "../../zustand/cartStore";
import "./CartPreview.scss";

const CartPreview = ({ setCartModal }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const cartRef = useRef();

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
            <div>Your cart is empty</div>
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
                      <img src={item?.image?.desktop} alt="" />
                      <div className="cart-list-div">
                        <span>{item?.name}</span> <span>$ {item?.price}</span>
                      </div>
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
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
