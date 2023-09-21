import { Link } from "react-router-dom";
import "./Row.scss";
import { scrollToTop } from "../../utils/scrolls";

const Row = ({ data }) => {
  return (
    <section className="grid-row-3">
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
    </section>
  );
};

export default Row;
