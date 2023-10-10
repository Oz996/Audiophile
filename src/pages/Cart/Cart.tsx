import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import useCartStore from "../../zustand/cartStore";
import CartCard from "../../components/CartCard/CartCard";
import React, { ChangeEvent, useState } from "react";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";

interface Error {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  eNumber: string;
  ePin: string;
}

const initState: Error = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  eNumber: "",
  ePin: "",
};

const Cart = () => {
  const [emoney, setEmoney] = useState(true);
  const [formData, setFormData] = useState(initState);
  const [errors, setErrors] = useState<Error>({});
  const [emailError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);
  console.log(success);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = parseInt(cartTotal * 0.2);
  const grandtotal = cartTotal + shipping;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.id]: e.target.value,
      };
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emptyFields = Object.entries(formData)
      .filter((item) => item[1].trim() === "")
      .map((item) => item[0]);

    const newErrors = {};
    emptyFields.forEach((field) => {
      newErrors[field] = "This field is required";
    });
    if (emptyFields.length > 0) {
      setErrors(newErrors);
    } else {
      setSuccess(true);
    }
  };
  return (
    <section className="cart-section">
      {success && (
        <CheckoutModal setSuccess={setSuccess} grandtotal={grandtotal} />
      )}
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
            <form id="Form" onSubmit={handleSubmit} noValidate>
              <div className="form-section">
                <label htmlFor="name" className={errors.name && "label-error"}>
                  <div>
                    <span>Name</span> <span>{errors.name}</span>
                  </div>
                  <input
                    className={errors.name && "input-error"}
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </label>
                <label
                  htmlFor="email"
                  className={errors.email && "label-error"}
                >
                  <div>
                    <span>Email Address</span>
                    <span>{errors.email || emailError}</span>
                  </div>
                  <input
                    className={errors.email && "input-error"}
                    type="email"
                    id="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </label>
                <label
                  htmlFor="phone"
                  className={errors.phone && "label-error"}
                >
                  <div>
                    <span>Phone Number</span> <span>{errors.phone}</span>
                  </div>
                  <input
                    className={errors.phone && "input-error"}
                    type="text"
                    id="phone"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </label>
              </div>
              <h2 className="form-header">Shipping info</h2>
              <div className="form-section">
                <label
                  htmlFor="address"
                  className={errors.address && "label-error"}
                >
                  <div>
                    <span>Address</span> <span>{errors.address}</span>
                  </div>
                  <input
                    className={errors.address && "input-error"}
                    type="text"
                    id="address"
                    onChange={handleChange}
                    value={formData.address}
                  />
                </label>
                <label htmlFor="zip" className={errors.zip && "label-error"}>
                  <div>
                    <span>ZIP Code</span> <span>{errors.zip}</span>
                  </div>
                  <input
                    className={errors.zip && "input-error"}
                    type="text"
                    id="zip"
                    onChange={handleChange}
                    value={formData.zip}
                  />
                </label>
                <label htmlFor="city" className={errors.city && "label-error"}>
                  <div>
                    <span>City</span> <span>{errors.city}</span>
                  </div>
                  <input
                    className={errors.city && "input-error"}
                    type="text"
                    id="city"
                    onChange={handleChange}
                    value={formData.city}
                  />
                </label>
                <label
                  htmlFor="country"
                  className={errors.country && "label-error"}
                >
                  <div>
                    <span>Country</span> <span>{errors.country}</span>
                  </div>
                  <input
                    className={errors.country && "input-error"}
                    type="text"
                    id="country"
                    onChange={handleChange}
                    value={formData.country}
                  />
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
                      <label
                        htmlFor="eNumber"
                        className={errors.eNumber && "label-error"}
                      >
                        <div>
                          <span>e-Money Number</span>{" "}
                          <span>{errors.eNumber}</span>
                        </div>
                        <input
                          className={errors.eNumber && "input-error"}
                          type="text"
                          id="eNumber"
                          onChange={handleChange}
                          value={formData.eNumber}
                        />
                      </label>
                      <label
                        htmlFor="ePin"
                        className={errors.ePin && "label-error"}
                      >
                        <div>
                          <span>e-Money PIN</span> <span>{errors.ePin}</span>
                        </div>
                        <input
                          className={errors.ePin && "input-error"}
                          type="text"
                          id="ePin"
                          onChange={handleChange}
                          value={formData.ePin}
                        />
                      </label>
                    </>
                  ) : (
                    <div className="cash">
                      <img src="/assets/cash.svg" alt="" />
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
            <button form="Form">Continue & pay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
