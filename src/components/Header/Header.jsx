import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";
import logo from "/assets/logo.svg";
import { useRef, useState } from "react";
import CartPreview from "../CartPreview/CartPreview";
import Hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import CatergoryRow from "../CategoryRow/CatergoryRow";

export const Header = () => {
  const [cartModal, setCartModal] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const cartRef = useRef();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  console.log(cartModal);

  return (
    <>
      <header>
        <nav>
          <img
            src={Hamburger}
            alt="navbar icon"
            className="hamburger"
            onClick={() => setShowCategories((prev) => !prev)}
          ></img>
          <NavLink to="/" onClick={scrollToTop}>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <ul>
            {!showCategories ? (
              <>
                <NavLink to="/" onClick={scrollToTop} className="nav-link">
                  Home
                </NavLink>
                <NavLink
                  to="headphones"
                  onClick={scrollToTop}
                  className="nav-link"
                >
                  Headphones
                </NavLink>
                <NavLink
                  to="speakers"
                  onClick={scrollToTop}
                  className="nav-link"
                >
                  Speakers
                </NavLink>
                <NavLink
                  to="earphones"
                  onClick={scrollToTop}
                  className="nav-link"
                >
                  Earphones
                </NavLink>
              </>
            ) : (
              <div className="nav-categories">
                <div>
                  <CatergoryRow />
                </div>
              </div>
            )}
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
