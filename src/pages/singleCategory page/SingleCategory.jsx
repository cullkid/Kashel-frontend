import React from "react";
import "./singleCategory.scss";
import { AiFillStar } from "react-icons/ai";
import { Slider } from "infinite-react-carousel";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { FaRecycle } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

const SingleCategory = () => {
  return (
    <div className="singleCat">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Kashel Graphic & Design</span>
          <h1>I will create ai generated art for you</h1>

          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
              alt=""
              style={{ width: "20px", height: "20px", borderRadius: "50%" }}
            />
            <span>Eze</span>
            <div className="star">
              <AiFillStar style={{ color: "yellow" }} />
              <AiFillStar style={{ color: "yellow" }} />
              <AiFillStar style={{ color: "yellow" }} />
              <AiFillStar style={{ color: "yellow" }} />
              <span>4</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Category</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            dignissimos laudantium accusamus ab aut quod, molestiae beatae?
            Aspernatur, vel magnam dolor sit amet consectetur adipisicing elit.
            Placeat dignissi olor sit amet consectetur adipisicing elit. Placeat
            dignissimos laudantium accusamus ab aut quod, molestiae beatae?
            Aspernatur, vel magnam dolor sit amet consectetur adipisicing olor
            sit amet consectetur adipisicing elit. Placeat dignissimos
            laudantium accusamus ab aut quod, molestiae beatae? Aspernatur, vel
            magnam dolor sit amet consectetur adipisicing olor sit amet
            consectetur adipisicing elit. Placeat dignissimos laudantium
            accusamus ab aut quod, molestiae bea
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                alt=""
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              />
              <div className="info">
                <span>Eze</span>
                <div className="star">
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <span>4</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member sincr</span>
                  <span className="desc">March 2020</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">6 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quibusdam blanditiis laboriosam harum illum commodi? Natus
                magnam pariatur numquam laboriosam inventore ipsa excepturi
                soluta quo!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                  alt=""
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                />
                <div className="info">
                  <span>Eze</span>
                  <div className="country">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1675875487765-5f29a3b20e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"
                      alt=""
                      style={{ width: "20px" }}
                    />
                    <span>Portugal</span>
                  </div>
                </div>
              </div>
              <div className="star">
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <span>4</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem recusandae qui asperiores repellendus? Reprehenderit non
                commodi libero aspernatur reiciendis enim!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FaRegThumbsUp />
                <span>Yes</span>
                <FaRegThumbsDown />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                  alt=""
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                />
                <div className="info">
                  <span>Eze</span>
                  <div className="country">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1675875487765-5f29a3b20e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"
                      alt=""
                      style={{ width: "20px" }}
                    />
                    <span>Portugal</span>
                  </div>
                </div>
              </div>
              <div className="star">
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <span>4</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem recusandae qui asperiores repellendus? Reprehenderit non
                commodi libero aspernatur reiciendis enim!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FaRegThumbsUp />
                <span>Yes</span>
                <FaRegThumbsDown />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                  alt=""
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                />
                <div className="info">
                  <span>Eze</span>
                  <div className="country">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1675875487765-5f29a3b20e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"
                      alt=""
                      style={{ width: "20px" }}
                    />
                    <span>Portugal</span>
                  </div>
                </div>
              </div>
              <div className="star">
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <AiFillStar style={{ color: "yellow" }} />
                <span>4</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem recusandae qui asperiores repellendus? Reprehenderit non
                commodi libero aspernatur reiciendis enim!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FaRegThumbsUp />
                <span>Yes</span>
                <FaRegThumbsDown />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 69.99</h2>
          </div>
          <p>
            I will create a unique high quality AI geerated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <BiTimeFive size={20} />
              <span>3 days Delivery</span>
            </div>
            <div className="item">
              <FaRecycle size={20} />
              <span>2Revisions</span>
            </div>
          </div>
          <div className="feature">
            <div className="item">
              <AiOutlineCheck
                style={{ color: "green", fontWeight: "bolder" }}
                size={15}
              />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <AiOutlineCheck
                style={{ color: "green", fontWeight: "bolder" }}
                size={15}
              />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <AiOutlineCheck
                style={{ color: "green", fontWeight: "bolder" }}
                size={15}
              />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <AiOutlineCheck
                style={{ color: "green", fontWeight: "bolder" }}
                size={15}
              />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <AiOutlineCheck
                style={{ color: "green", fontWeight: "bolder" }}
                size={15}
              />
              <span>Prompt writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
