import React from "react";
import { Link } from "react-router-dom";

const BannerSmall = () => {
  return (
    <div className="lp-prod-banner">
      <div className="grid-50-layout bg-lightshade-blue">
        <div>
          <picture>
            <source
              media="(min-width:1050px)"
              srcSet="
              https://cdn.wallpapersafari.com/24/64/3sv8EZ.jpg
                "
            />
            <img src="https://wallpaperaccess.com/full/7484898.jpg " alt="" />
          </picture>
        </div>
        <div className="center">
          <h4 className="baseblue">New Launch</h4>
          <h1>Yonex Astrox 150</h1>
          <h2 className="darkorange">Unleash the Beast</h2>
          <button className="btn-secondary txt-s bg-color-transparent">
            <Link to="/products">Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSmall;
