import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="lp-categories">
      <h2 className="align-center mb-2 gray">
        FIND YOUR <span className="baseteal">CATEGORY</span>
      </h2>
      <div className="category-wrapper">
        <div className="catg-card">
          <Link to="/products">
            <div className="overlay-grid">
              <div className="circle center background bg-baseorange"></div>
              <div className="center center-flex-column white content">
                <h3 className="fs-2">Racquets</h3>
                <p className="txt-xs">Starting at Rs. 1245</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="catg-card">
          <Link to="/products">
            <div className="overlay-grid">
              <div className="circle center background bg-baseorange"></div>
              <div className="center center-flex-column white content">
                <h3 className="fs-2">Shoes</h3>
                <p className="txt-xs">Starting at Rs. 1200</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="catg-card">
          <Link to="/products">
            <div className="overlay-grid">
              <div className="circle center background bg-baseorange"></div>
              <div className="center center-flex-column white content">
                <h3 className="fs-2">Apparel</h3>
                <p className="txt-xs">Starting at Rs. 999</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="catg-card">
          <Link to="/products">
            <div className="overlay-grid">
              <div className="circle center background bg-baseorange"></div>
              <div className="center center-flex-column white content">
                <h3 className="fs-2">Bags</h3>
                <p className="txt-xs">Starting at Rs. 1545</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
