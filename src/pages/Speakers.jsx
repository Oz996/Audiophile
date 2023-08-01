import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../api/products";
import ProductFigure from "../components/ProductCard/ProductFigure";
import CatergoryRow from "../components/CategoryRow/CatergoryRow";
import Aside from "../components/Aside/Aside";
import { useEffect, useState } from "react";

export const Speakers = () => {
  const [product, setProduct] = useState([]);
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    const filteredProducts = data.filter(
      (product) => product.category === "speakers"
    );
    setProduct(filteredProducts);
  }, [data]);

  return (
    <div>
      <h1 className="category-header">Speakers</h1>
      <div className="card-row">
        <ProductFigure data={product[1]} />
        <ProductCard data={product[1]} />
      </div>
      <div className="card-row">
        <ProductCard data={product[0]} />
        <ProductFigure data={product[0]} />
      </div>
      <CatergoryRow />
      <Aside />
    </div>
  );
};
