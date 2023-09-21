import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { scrollToTop } from "../../utils/scrolls";

const ProductCard = ({ data }) => {
  return (
    <article className="product-card">
      <div className="new-div">
        <span className="new">New product</span>
        <h2 className="card-title">{data?.name}</h2>
      </div>
      <p className="card-details">{data?.description}</p>
      <Link to={`/${data?.slug}`} onClick={scrollToTop}>
        <button className="product-button">See Product</button>
      </Link>
    </article>
  );
};

export default ProductCard;
