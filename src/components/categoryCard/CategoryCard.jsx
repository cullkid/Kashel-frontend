import React from "react";
import "./categoryCard.scss";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  return (
    <Link to="/product/123">
      <div className="gitCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
