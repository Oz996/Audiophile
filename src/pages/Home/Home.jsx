import { useQuery } from "@tanstack/react-query";
import "./Home.scss";
import header from "/images/desktop/image-hero.jpg";
import { getProducts } from "../../api/products";
import Row from "../../components/Row/Row";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <main>
        <figure className="hero-banner">
          <img src={header} alt="hero" />
        </figure>
        <div className="width-div">
          <div className="banner-div">
            <span>new product</span>
            {isLoading ? (
              <span>loading...</span>
            ) : (
              <>
                <h1>{data[3]?.name}</h1>
                <p>{data[3]?.description}</p>
                <button>see product</button>
              </>
            )}
          </div>
        </div>
      </main>

      <section>
        <Row data={data}/>
      </section>
    </>
  );
};

export default Home;
