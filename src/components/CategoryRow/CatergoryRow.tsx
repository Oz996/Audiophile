import "./CategoryRow.scss";
import { Link } from "react-router-dom";
import { scrollToTopSmooth } from "../../utils/scrolls";

const CatergoryRow = () => {
  return (
    <article className="grid" onClick={scrollToTopSmooth}>
      <Link to="/headphones">
        <div>
          <figure className="headphones"></figure>
          <h2>Headphones</h2>
          <div>
            <span>Shop</span>
            <img src="/assets/arrow.svg" alt="arrow" />
          </div>
        </div>
      </Link>
      <Link to="/speakers" onClick={scrollToTopSmooth}>
        <div>
          <figure className="speakers"></figure>
          <h2>Speakers</h2>
          <div>
            <span>Shop</span>
            <img src="/assets/arrow.svg" alt="arrow" />
          </div>
        </div>
      </Link>
      <Link to="/earphones" onClick={scrollToTopSmooth}>
        <div>
          <figure className="earphones"></figure>
          <h2>Earphones</h2>
          <div className="shop-div">
            <span>Shop</span>
            <img src="/assets/arrow.svg" alt="arrow" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CatergoryRow;
