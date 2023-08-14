import { useQuery } from "@tanstack/react-query";
import "./Home.scss";
import { getProducts } from "../../api/products";
import CatergoryRow from "../../components/CategoryRow/CatergoryRow";
import Aside from "../../components/Aside/Aside";
import { Link } from "react-router-dom";

const Home = () => {
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <main>
        <div className="hero-banner">
          <div className="width-div mt">
            <div className="banner-div">
              <span>new product</span>
              <h1>{data[3]?.name}</h1>
              <p>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link to={`/${data[3]?.slug}`}>
                <button>see product</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <CatergoryRow />
      <article className="speaker-section-orange">
        <div>
          <div>
            <h2>{data[5]?.name}</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={`/${data[5]?.slug}`} onClick={scrollToTop}>
              <button>See Product</button>
            </Link>
          </div>
        </div>
      </article>

      <article className="speaker-section">
        <div>
          <h2>{data[4]?.name}</h2>
          <Link to={`/${data[4]?.slug}`} onClick={scrollToTop}>
            <button>See Product</button>
          </Link>
        </div>
      </article>

      <article className="earphones-home-div">
        <div className="earphones-home"/>
        <div className="earphones-home-second">
          <h2>Yx1 earphones</h2>
          <Link to={`/${data[0]?.slug}`} onClick={scrollToTop}>
            <button>See Product</button>
          </Link>
        </div>
      </article>

      <Aside />
    </>
  );
};

export default Home;
