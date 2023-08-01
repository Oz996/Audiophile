import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import ProductFigure from "../components/ProductCard/ProductFigure";
import ProductCard from "../components/ProductCard/ProductCard";
import CatergoryRow from "../components/CategoryRow/CatergoryRow";
import Aside from "../components/Aside/Aside";
import { useEffect, useState } from "react";

const Headphones = () => {
  const [product, setProduct] = useState([]);
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    const filteredProducts = data.filter(
      (product) => product.category === "headphones"
    );
    setProduct(filteredProducts);
  }, [data]);

  return (
    <div>
      <h1 className="category-header">Headphones</h1>
      <div className="card-row">
        <ProductFigure data={product[2]} />
        <ProductCard data={product[2]} />
      </div>
      <div className="card-row">
        <ProductCard data={product[1]} />
        <ProductFigure data={product[1]} />
      </div>
      <div className="card-row">
        <ProductFigure data={product[0]} />
        <ProductCard data={product[0]} />
      </div>
      <CatergoryRow />
      <Aside />
    </div>
  );
};

export default Headphones;
