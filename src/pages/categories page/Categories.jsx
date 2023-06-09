import React, { useState } from "react";
import "./categories.scss";
import { AiOutlineArrowDown } from "react-icons/ai";

const Categories = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="categories">
      <div className="container">
        <span className="breadcrumbs">KASHEL GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Kashel's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <AiOutlineArrowDown
              className="img"
              size={20}
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
