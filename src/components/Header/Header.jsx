import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";
import logo from "/assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import CartPreview from "../CartPreview/CartPreview";
import Hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import CatergoryRow from "../CategoryRow/CatergoryRow";
import { scrollToTopSmooth } from "../../utils/scrolls";
import useCartStore from "../../zustand/cartStore";

export const Header = () => {
  const [cartModal, setCartModal] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const cartRef = useRef();
  const hamburgerRef = useRef();
  const location = useLocation();
  console.log(cartModal);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(e.target))
        setShowCategories(false);
    });
  }, [hamburgerRef]);

  useEffect(() => {
    setShowCategories(false);
  }, [location]);

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
          <NavLink to="/" onClick={scrollToTopSmooth}>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <ul ref={hamburgerRef}>
            {!showCategories ? (
              <div className="nav-items">
                <li>
                  <NavLink
                    to="/"
                    onClick={scrollToTopSmooth}
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="headphones"
                    onClick={() => {
                      scrollToTopSmooth();
                      setShowCategories(false);
                    }}
                    className="nav-link"
                  >
                    Headphones
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="speakers"
                    onClick={() => {
                      scrollToTopSmooth();
                      setShowCategories(false);
                    }}
                    className="nav-link"
                  >
                    Speakers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="earphones"
                    onClick={() => {
                      scrollToTopSmooth();
                      setShowCategories(false);
                    }}
                    className="nav-link"
                  >
                    Earphones
                  </NavLink>
                </li>
              </div>
            ) : (
              <div className="nav-categories expand-down">
                <div>
                  <CatergoryRow />
                </div>
              </div>
            )}
          </ul>
          <div className="cart-icon-div">
            <p className="cart-icon-quantity">
              {cartItems.length > 0 && cartItems.length}
            </p>
            <AiOutlineShoppingCart
              size={28}
              className="cart-icon"
              onClick={() => setCartModal((prev) => !prev)}
            />
          </div>
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
