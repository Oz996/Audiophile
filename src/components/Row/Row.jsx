import { Link } from "react-router-dom";
import "./Row.scss";

const Row = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
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
