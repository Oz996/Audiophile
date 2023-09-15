import "./CategoryRow.scss";
import { Link } from "react-router-dom";
import arrow from "/assets/arrow.svg";

const CatergoryRow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="grid" onClick={scrollToTop}>
      <Link to="/headphones">
        <div>
          <figure className="headphones"></figure>
          <h2>Headphones</h2>
          <div>
            <span>Shop</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </Link>
      <Link to="/speakers" onClick={scrollToTop}>
        <div>
          <figure className="speakers"></figure>
          <h2>Speakers</h2>
          <div>
            <span>Shop</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </Link>
      <Link to="/earphones" onClick={scrollToTop}>
        <div>
          <figure className="earphones"></figure>
          <h2>Earphones</h2>
          <div className="shop-div">
            <span>Shop</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CatergoryRow;
