import React from "react";
import "./footer.scss";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsCoin, BsFacebook, BsUniversalAccess } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
            <span>Graghic & design</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Kashel</h2>
            <span>O Kashel international Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <BsFacebook />
              <AiFillInstagram />
            </div>
            <div className="link">
              <GrLanguage />
              <span>English</span>
            </div>
            <div className="link">
              <BsCoin />
              <span>USD</span>
            </div>
            <BsUniversalAccess />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
