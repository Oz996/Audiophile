import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";
import logo from "/assets/logo.svg";

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
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
          <AiOutlineShoppingCart size={28} className="cart-icon" />
        </nav>
      </header>
      <Outlet />
    </>
  );
};
