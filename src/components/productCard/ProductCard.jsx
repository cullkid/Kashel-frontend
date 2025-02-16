import React from "react";
import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link className="link">
      <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
