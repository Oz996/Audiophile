import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { scrollToTop } from "../../utils/scrolls";
import { Product } from "../../../types/types";

const ProductFigure = ({ data }: { data: Product }) => {
  return (
    <Link to={`/${data?.slug}`} onClick={scrollToTop}>
      <figure>
        <img src={data?.image?.desktop} alt={data?.name} />
      </figure>
    </Link>
  );
};

export default ProductFigure;
