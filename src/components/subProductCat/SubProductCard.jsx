import React from "react";
import "./subProductCard.scss";
import { Link } from "react-router-dom";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const SubProductCard = ({ item }) => {
  return (
    <Link to="/product/1234" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p className="desc">{item.desc}</p>
          <div className="star">
            <AiFillStar />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <AiFillHeart className="img" />
          <div className="price">
            <span>START AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubProductCard;
