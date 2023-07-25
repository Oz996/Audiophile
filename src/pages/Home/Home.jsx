import { useQuery } from "@tanstack/react-query";
import "./Home.scss";
import { getProducts } from "../../api/products";
import speakerBig from "/assets/home/desktop/speakers.svg";
import speaker from "/assets/home/desktop/image-speaker-zx7.jpg";
import earphones from "/assets/home/desktop/image-earphones-yx1.jpg";
import CatergoryRow from "../../components/CategoryRow/CatergoryRow";
import Aside from "../../components/Aside/Aside";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <main>
        <div className="hero-banner">
          <div className="width-div mt">
            <div className="banner-div">
              <span>new product</span>
              <h1>{data && data[3]?.name}</h1>
              <p>{data && data[3]?.description}</p>
              <button>see product</button>
            </div>
          </div>
        </div>
      </main>

      <article className="width-div">
        <CatergoryRow />
      </article>

      <section className="grid-section">
        <article className="speaker-section-orange">
          <div>
            <img src={speakerBig} alt="speakers" />
            <div>
              <h2>{data && data[5]?.name}</h2>
              <p>{data && data[5]?.description}</p>
              <button>See Product</button>
            </div>
          </div>
        </article>

        <article className="speaker-section">
          <img src={speaker} alt="speakers" />
          <div>
            <h2>{data && data[4]?.name}</h2>
            <button>See Product</button>
          </div>
        </article>

        <div className="earphones-home-div">
          <div className="earphones-home">
            <img src={earphones} alt="earphones" />
          </div>
          <div className="earphones-home-second">
            <h2>{data && data[0]?.name}</h2>
            <button>See Product</button>
          </div>
        </div>

        <Aside />
      </section>
    </>
  );
};

export default Home;
