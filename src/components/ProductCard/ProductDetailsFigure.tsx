import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { scrollToTop } from "../../utils/scrolls";
import { Product } from "../../../types/types";

const ProductDetailsFigure = ({ data }: { data: Product }) => {
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
