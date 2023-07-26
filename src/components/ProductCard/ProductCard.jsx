import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ data }) => {
  return (
    <article className="product-card">
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
      <Link to={`/${data?.slug}`}>
        <button className="product-button">See Product</button>
      </Link>
    </article>
  );
};

export default ProductCard;
