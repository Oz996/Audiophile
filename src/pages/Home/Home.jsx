import { useQuery } from "@tanstack/react-query";
import "./Home.scss";
import { getProducts } from "../../api/products";
import speakerBig from "/assets/home/desktop/speakers.svg";
import earphones from "/assets/home/desktop/image-earphones-yx1.jpg";
import CatergoryRow from "../../components/CategoryRow/CatergoryRow";
import Aside from "../../components/Aside/Aside";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useQuery({
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
              <h1>{data && data[3]?.name}</h1>
              <p>{data && data[3]?.description}</p>
              <Link to={data && `/${data[3]?.slug}`}>
                <button>see product</button>
              </Link>
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
              <Link to={data && `/${data[5]?.slug}`} onClick={scrollToTop}>
                <button>See Product</button>
              </Link>
            </div>
          </div>
        </article>

        <article className="speaker-section">
          <div>
            <h2>{data && data[4]?.name}</h2>
            <Link to={data && `/${data[4]?.slug}`} onClick={scrollToTop}>
              <button>See Product</button>
            </Link>
          </div>
        </article>

        <div className="earphones-home-div">
          <div className="earphones-home">
            <img src={earphones} alt="earphones" />
          </div>
          <div className="earphones-home-second">
            <h2>{data && data[0]?.name}</h2>
            <Link to={data && `/${data[0]?.slug}`} onClick={scrollToTop}>
              <button>See Product</button>
            </Link>
          </div>
        </div>

        <Aside />
      </section>
    </>
  );
};

export default Home;
