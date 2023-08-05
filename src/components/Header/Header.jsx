import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";
import logo from "/assets/logo.svg";
import { useRef, useState } from "react";
import CartPreview from "../CartPreview/CartPreview";

export const Header = () => {
  const [cartModal, setCartModal] = useState(false);
  const cartRef = useRef();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  console.log(cartModal);

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" onClick={scrollToTop}>
            <img src={logo} alt="logo" />
          </NavLink>
          <ul>
            <NavLink to="/" onClick={scrollToTop}>
              Home
            </NavLink>
            <NavLink to="headphones" onClick={scrollToTop}>
              Headphones
            </NavLink>
            <NavLink to="speakers" onClick={scrollToTop}>
              Speakers
            </NavLink>
            <NavLink to="earphones" onClick={scrollToTop}>
              Earphones
            </NavLink>
          </ul>
          <AiOutlineShoppingCart
            size={28}
            className="cart-icon"
            onClick={() => setCartModal((prev) => !prev)}
          />
        </nav>
        {cartModal && (
          <CartPreview
            cartRef={cartRef}
            cartModal={cartModal}
            setCartModal={setCartModal}
          />
        )}
      </header>
      <Outlet />
    </>
  );
};
