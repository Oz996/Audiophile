import { NavLink } from "react-router-dom";
import "./Footer.scss";
import logo from "/assets/logo.svg";
import { ImFacebook2, ImTwitter } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { scrollToTop } from "../../utils/scrolls";

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="footer-text">
          <img src={logo} alt="logo" />
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="copyright">Copyright 2023. All Rights Reserved</p>
        </div>
        <div className="rectangle" />
        <div className="footer-links">
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
          <div className="footer-icons">
            <ImFacebook2 size={26} className="footer-icon" />
            <ImTwitter size={26} className="footer-icon" />
            <FiInstagram size={26} className="footer-icon" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
