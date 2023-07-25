import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import ProductFigure from "../components/ProductCard/ProductFigure";
import ProductCard from "../components/ProductCard/ProductCard";
import CatergoryRow from "../components/CategoryRow/CatergoryRow";
import Aside from "../components/Aside/Aside";

const Headphones = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const productOne = () => {
    if (data) {
      const product = data[3];
      return product;
    }
    return [];
  };
  const productTwo = () => {
    if (data) {
      const product = data[2];
      return product;
    }
    return [];
  };
  const productThree = () => {
    if (data) {
      const product = data[1];
      return product;
    }
    return [];
  };

  const headphoneOne = productOne();
  const headphoneTwo = productTwo();
  const headphoneThree = productThree();
  return (
    <div>
      <h1 className="category-header">Headphones</h1>
      <div className="card-row">
        <ProductFigure data={headphoneOne} />
        <ProductCard data={headphoneOne} />
      </div>
      <div className="card-row">
        <ProductCard data={headphoneTwo} />
        <ProductFigure data={headphoneTwo} />
      </div>
      <div className="card-row">
        <ProductFigure data={headphoneThree} />
        <ProductCard data={headphoneThree} />
      </div>
      <CatergoryRow/>
      <Aside/>
    </div>
  );
};

export default Headphones;
