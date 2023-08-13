import React from "react";
import "./featured.scss";
import { BiSearchAlt2 } from "react-icons/bi";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Discover the ideal freelance solution that suits your business
            needs.
          </h1>
          <div className="search">
            <div className="searchInput">
              <BiSearchAlt2 className="icon" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>web design</button>
            <button>worldpres</button>
            <button>Logo design</button>
            <button>AI services</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/man.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
