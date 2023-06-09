import React from "react";
import "./gitCard.scss";
import { Link } from "react-router-dom";

const GitCard = ({ item }) => {
  return (
    <Link>
      <div className="gitCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default GitCard;
