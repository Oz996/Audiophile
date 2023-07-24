import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";
import logo from "/assets/logo.svg";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink>
            <img src={logo} alt="logo" />
          </NavLink>
          <ul>
            <NavLink>Home</NavLink>
            <NavLink>Headphones</NavLink>
            <NavLink>Speakers</NavLink>
            <NavLink>Earphones</NavLink>
          </ul>
          <AiOutlineShoppingCart size={28} className="cart-icon" />
        </nav>
      </header>
      <Outlet />
    </>
  );
};
