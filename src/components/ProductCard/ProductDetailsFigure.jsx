import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductDetailsFigure = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to={`/${data?.slug}`} onClick={scrollToTop}>
      <figure>
        <img src={data?.image?.desktop} alt={data?.name} className="details-img" />
      </figure>
    </Link>
  );
};

export default ProductDetailsFigure;
