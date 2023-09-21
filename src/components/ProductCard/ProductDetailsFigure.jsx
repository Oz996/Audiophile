import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { scrollToTop } from "../../utils/scrolls";

const ProductDetailsFigure = ({ data }) => {
  return (
    <Link to={`/${data?.slug}`} onClick={scrollToTop}>
      <figure className="details-figure">
        <img
          src={data?.image?.desktop}
          alt={data?.name}
          className="details-img"
        />
      </figure>
    </Link>
  );
};

export default ProductDetailsFigure;
