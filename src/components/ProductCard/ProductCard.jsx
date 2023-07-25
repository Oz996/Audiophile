import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ data }) => {
  return (
    <article>
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
      <Link to={`/product/${data?.id}`}>
        <button>See Product</button>
      </Link>
    </article>
  );
};

export default ProductCard;
