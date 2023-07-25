import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../api/products";
import ProductFigure from "../components/ProductCard/ProductFigure";
import CatergoryRow from "../components/CategoryRow/CatergoryRow";
import Aside from "../components/Aside/Aside";

export const Speakers = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const productOne = () => {
    if (data) {
      const product = data[5];
      return product;
    }
    return [];
  };
  const productTwo = () => {
    if (data) {
      const product = data[4];
      return product;
    }
    return [];
  };

  const speakerOne = productOne();
  const speakerTwo = productTwo();
  console.log(speakerOne);
  return (
    <div>
      <h1 className="category-header">Speakers</h1>
      <div className="card-row">
        <ProductFigure data={speakerOne} />
        <ProductCard data={speakerOne} />
      </div>
      <div className="card-row">
        <ProductCard data={speakerTwo} />
        <ProductFigure data={speakerTwo} />
      </div>
      <CatergoryRow />
      <Aside />
    </div>
  );
};
