import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";
import logo from "/assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <NavLink>Home</NavLink>
          <NavLink>Headphones</NavLink>
          <NavLink>Speakers</NavLink>
          <NavLink>Earphones</NavLink>
        </ul>
        <AiOutlineShoppingCart size={28} className="cart-icon"/>
      </nav>
    </header>
  );
};