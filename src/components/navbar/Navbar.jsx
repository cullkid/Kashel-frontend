import React, { useEffect, useState } from "react";
import "./navbar.scss";
import "./app.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    //create cleaner function
    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);

  const sellerUser = {
    id: 1,
    username: "Eze Anthony",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Kashel</span>
          </Link>
          <span className="dot">...</span>
        </div>
        <div className="links">
          <span>Kashel Business</span>
          <span>Explore</span>
          <span>English</span>
          {!sellerUser?.isSeller && <span>Become a seller</span>}
          <span>sign in</span>
          {!sellerUser && <button>Join</button>}
          {sellerUser ? (
            <div className="sellerUser" onClick={() => setOpen(!open)}>
              <img
                // src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                alt=""
              />
              <span>{sellerUser?.username}</span>
              {open && (
                <div className="options">
                  {sellerUser?.isSeller && (
                    <>
                      <Link to="category" className="link">
                        Categories
                      </Link>
                      <Link to="addcategory" className="link">
                        Add New Category
                      </Link>
                    </>
                  )}
                  <Link to="order" className="link">
                    Orders
                  </Link>
                  <Link to="message" className="link">
                    Messages
                  </Link>
                  <Link to="/" className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
