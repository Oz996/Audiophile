import { Link } from "react-router-dom";
import "./Row.scss";
import { scrollToTop } from "../../utils/scrolls";
import { Others } from "../../../types/types";

interface prop {
  others: Others[];
}

const Row = ({ data }: { data: prop }) => {
  return (
    <article className="grid-row-3">
      {data?.others?.map((product, index) => (
        <div key={index}>
          <div className="row-div">
            <Link to={`/${product.slug}`} onClick={scrollToTop}>
              <figure>
                <img src={product?.image?.desktop} alt={product?.name} />
              </figure>
            </Link>
            <h2>{product?.name}</h2>
            <Link to={`/${product.slug}`} onClick={scrollToTop}>
              <button>See product</button>
            </Link>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Row;
