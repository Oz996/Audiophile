import { useEffect, useState } from "react";
import "./Row.scss";

const Row = ({ data }) => {
  const [randomData, setRandomData] = useState([]);

  const displayRandomProduct = (data) => {
    if (data) {
      // chatGPT solution
      const shuffleData = data.slice();
      for (let i = shuffleData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleData[i], shuffleData[j]] = [shuffleData[j], shuffleData[i]];
      }
      const randomProduct = shuffleData.slice(0, 3);
      setRandomData(randomProduct);
    }
  };
  console.log(randomData);

  useEffect(() => {
    displayRandomProduct(data);
  }, [data]);

  return (
    <div className="grid-row-3">
      {randomData?.map((product, index) => (
        <div key={index}>
          <div className="row-div">
            <figure>
              <img src={product.image.desktop} alt={product.name} />
            </figure>
            <h2>{product?.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Row;
