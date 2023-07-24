import "./CategoryRow.scss";
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
import arrow from "/assets/arrow.svg";

const CatergoryRow = () => {
  return (
    <div className="grid">
      <Link to="headphones">
        <div>
          <img src={headphones} alt="headphones" />
          <h2>Headphones</h2>
          <div>
            <span>Shop</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </Link>
      <Link to="speakers">
        <div>
          <img src={speakers} alt="speakers" />
          <h2>Speakers</h2>
          <div>
            <span>Shop</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </Link>
      <Link to="earphones">
        <div>
          <img src={earphones} alt="earphones" />
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
