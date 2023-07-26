import { useQuery } from "@tanstack/react-query";
import "./Product.scss";
import { getProductBySlug } from "../../api/products";
import ProductFigure from "../../components/ProductCard/ProductFigure";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Row from "../../components/Row/Row";
import CatergoryRow from "../../components/CategoryRow/CatergoryRow";
import Aside from "../../components/Aside/Aside";

const Product = () => {
  const { slug } = useParams();

  const { data } = useQuery(["product", slug], () => getProductBySlug(slug));
  console.log(data);

  return (
    <>
      <div>
        <div className="product-header"></div>
        {!data && <div>Product not found</div>}
        <div className="card-row">
          <ProductFigure data={data} />
          <ProductDetails data={data} />
        </div>
      </div>
      <article className="features-div">
        <div className="features">
          <h1>Features</h1>
          <p>{data?.features}</p>
        </div>
        <div className="product-box">
          <h1>In the box</h1>
          {data?.includes?.map((item, index) => (
            <div className="includes" key={index}>
              <span className="item-quantity">{item.quantity}x</span>
              <span className="item-content">{item.item}</span>
            </div>
          ))}
        </div>
      </article>
      <section className="gallery">
        <img
          src={data?.gallery?.third?.desktop}
          alt="gallery-image"
          className="gallery-image"
        />
        <img src={data?.gallery?.first?.desktop} alt="gallery-image" />
        <img src={data?.gallery?.second?.desktop} alt="gallery-image" />
      </section>

      <h1 className="row-header">You may also like</h1>
      <Row data={data} />
      <CatergoryRow />
      <Aside />
    </>
  );
};

export default Product;
