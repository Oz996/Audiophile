import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { scrollToTop } from "../../utils/scrolls";

const ProductFigure = ({ data }) => {
  return (
    <Link to={`/${data?.slug}`} onClick={scrollToTop}>
      <figure>
        <img src={data?.image?.desktop} alt={data?.name} />
      </figure>
    </Link>
  );
};

export default ProductFigure;
