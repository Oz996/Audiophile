import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductFigure from "../components/ProductCard/ProductFigure";
import { getProducts } from "../api/products";
import CatergoryRow from "../components/CategoryRow/CatergoryRow";
import Aside from "../components/Aside/Aside";
import { useEffect, useState } from "react";

const Earphones = () => {
  const [product, setProduct] = useState([]);
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    const filteredProducts = data.filter(
      (product) => product.category === "earphones"
    );
    setProduct(filteredProducts);
  }, [data]);

  return (
    <div>
      <h1 className="category-header">Earphones</h1>
      <div className="card-row">
        <ProductFigure data={product[0]} />
        <ProductCard data={product[0]} />
      </div>
      <CatergoryRow />
      <Aside />
    </div>
  );
};

export default Earphones;
