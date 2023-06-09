import React from "react";
import "./gigCard.scss";
import { Link } from "react-router-dom";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const GigCard = ({ item }) => {
  return (
    <Link>
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <AiFillStar />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detals">
          <AiFillHeart className="img" />
          <div className="price">
            <span>START AT</span>
            <h2>{item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
