import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductFigure from "../components/ProductCard/ProductFigure";
import { getProducts } from "../api/products";
import CatergoryRow from "../components/CategoryRow/CatergoryRow";
import Aside from "../components/Aside/Aside";

const Earphones = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const product = () => {
    if (data) {
      const product = data[0];
      return product;
    }
    return [];
  };

  const earphone = product();
  return (
    <div>
      <h1 className="category-header">Earphones</h1>
      <div className="card-row">
        <ProductFigure data={earphone} />
        <ProductCard data={earphone} />
      </div>
      <CatergoryRow />
      <Aside />
    </div>
  );
};

export default Earphones;
