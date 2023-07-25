import { useQuery } from "@tanstack/react-query";
import "./Product.scss";
import { getProduct } from "../../api/products";
import ProductFigure from "../../components/ProductCard/ProductFigure";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const { data } = useQuery(["product", id], () => getProduct(id));
  console.log(data)

  return (
    <div>
      <div className="product-header">
        <ProductFigure data={data} />
        <h2>{data?.name}</h2>
      </div>
    </div>
  );
};

export default Product;
