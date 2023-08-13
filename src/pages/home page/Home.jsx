import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedby/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import { RiCheckboxCircleLine } from "react-icons/ri";
import ProductCard from "../../components/productCard/ProductCard";
import CategoryCard from "../../components/categoryCard/CategoryCard";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4} autoplay={false}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A vast pool of freelance expertise just a click away.</h1>
            <div className="title">
              <RiCheckboxCircleLine />
              Quality tailored to fit any budget.
            </div>
            <p>
              Discover top-notch services with transparent project-based
              pricing, no hourly rates.
            </p>
            <div className="title">
              <RiCheckboxCircleLine />
              Quality tailored to fit any budget.
            </div>
            <p>
              Discover top-notch services with transparent project-based
              pricing, no hourly rates.
            </p>
            <div className="title">
              <RiCheckboxCircleLine />
              Quality tailored to fit any budget.
            </div>
            <p>
              Discover top-notch services with transparent project-based
              pricing, no hourly rates.
            </p>
            <button>Explore Kashel Business</button>
          </div>
          <div className="item">
            <video src="./images/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <Slide slidesToShow={3} arrowsScroll={4} autoplay={false}>
        {projects.map((card) => (
          <ProductCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
