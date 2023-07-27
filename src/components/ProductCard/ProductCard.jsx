import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <article className="product-card">
      <div className="new-div">
        {data?.new && <span className="new">New product</span>}
        <h2>{data?.name}</h2>
      </div>
      <p>{data?.description}</p>
      <Link to={`/${data?.slug}`} onClick={scrollToTop}>
        <button className="product-button">See Product</button>
      </Link>
    </article>
  );
};

export default ProductCard;
