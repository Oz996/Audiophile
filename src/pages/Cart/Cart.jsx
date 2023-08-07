import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import useCartStore from "../../zustand/cartStore";
import CartCard from "../../components/CartCard/CartCard";
import { useState } from "react";
import cash from "/assets/cash.svg";

const initState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
};

const Cart = () => {
  const [emoney, setEmoney] = useState(true);
  const [formData, setFormData] = useState(initState);
  console.log(initState)
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = parseInt(cartTotal * 0.2);
  const grandtotal = cartTotal + shipping;
  return (
    <section className="cart-section">
      <div className="product-header"></div>
      <div className="back-link">
        <span className="back-link" onClick={() => navigate(-1)}>
          Go back
        </span>
      </div>
      <div className="checkout-container">
        <div className="checkout">
          <div className="container">
            <h1>Checkout</h1>
            <h2 className="form-header">Billing details</h2>
            <form>
              <div className="form-section">
                <label htmlFor="name">
                  Name
                  <input type="text" id="name" />
                </label>
                <label htmlFor="name">
                  Email Address
                  <input type="email" id="email" />
                </label>
                <label htmlFor="name">
                  Phone Numbers
                  <input type="text" id="number" />
                </label>
              </div>
              <h2 className="form-header">Shipping info</h2>
              <div className="form-section">
                <label htmlFor="address">
                  Address
                  <input type="text" id="address" />
                </label>
                <label htmlFor="zip">
                  ZIP Code
                  <input type="text" id="zip" />
                </label>
                <label htmlFor="city">
                  City
                  <input type="text" id="city" />
                </label>
                <label htmlFor="country">
                  Country
                  <input type="text" id="country" />
                </label>
              </div>
              <h2 className="form-header">Payment details</h2>
              <div className="form-section">
                <label>Payment Method</label>
                <div className="payment-div">
                  <div className="border">
                    <input
                      type="radio"
                      name="payment "
                      className="radio"
                      checked={emoney}
                      onChange={() => setEmoney(true)}
                    />
                    <span>e-Money</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="payment "
                      className="radio"
                      checked={!emoney}
                      onChange={() => setEmoney(false)}
                    />
                    <span>Cash on Delivery</span>
                  </div>
                </div>
                <div className="payment">
                  {emoney ? (
                    <>
                      <label htmlFor="eNumber">
                        e-Money Number
                        <input type="text" id="eNumber" />
                      </label>
                      <label htmlFor="ePin">
                        e-Money PIN
                        <input type="text" id="ePin" />
                      </label>
                    </>
                  ) : (
                    <div className="cash">
                      <img src={cash} alt="" />
                      <p>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="cart-summary">
          <h1>Summary</h1>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <CartCard item={item} />
                <span className="cart-quantity">x{item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="cart-bottom">
            <div>
              <h2>Total</h2>
              <p>$ {cartTotal}</p>
            </div>
            <div>
              <h2>Shipping</h2>
              <p>$ {shipping}</p>
            </div>
            <div>
              <h2>Vat (included)</h2>
              <p>$ {vat}</p>
            </div>
            <div>
              <h2>Grand total</h2>
              <p>$ {grandtotal}</p>
            </div>
            <button>Continue & pay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
