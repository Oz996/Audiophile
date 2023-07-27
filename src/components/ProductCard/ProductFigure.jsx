import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductFigure = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to={`/${data?.slug}`} onClick={scrollToTop}>
      <figure>
        <img src={data?.image?.desktop} alt={data?.name} />
      </figure>
    </Link>
  );
};

export default ProductFigure;
