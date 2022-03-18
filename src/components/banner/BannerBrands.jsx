import React from "react";
import { Link } from "react-router-dom";

const BannerBrands = () => {
  return (
    <div className="lp-brands">
      <h2 className="align-center mb-2 gray">
        BRANDS @
        <span className="fw-bold baseshade-gray">
          RALLY<span className="baseteal">ALLEY</span>
        </span>
      </h2>
      <div className="brands-wrapper">
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://download.logo.wine/logo/Yonex/Yonex-Logo.wine.png"
              alt="yonex"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4p3jx-wlKhChnubYNfWBQWSQUzOB24OAH-N8iksSyaIpDlVhqAUExEDfqUQNfJn77v4g&usqp=CAU"
              alt="li ning"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61pVNlq1w11r_r1ffNLvBeorqzn1xp8lcJlNbDh-g5vqjpAVNC30bTeqnnoioozDCStA&usqp=CAU"
              alt="cartlon"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2019/06/27172619/3_adidas_originals.jpg"
              alt="adidas"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://i.pinimg.com/originals/c6/05/6c/c6056c40fd89dffeea082a8901d01865.jpg"
              alt="artengo"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/2496/brand.gif?itok=_1gvxAwm"
              alt="new balance"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://assets.website-files.com/610cd20103d2ba6f878d0029/617a6783e57d629f5f0bb08e_612cc71478946b38f8878eca_Logo%2520Puma.png"
              alt="puma"
            />
          </div>
        </Link>
        <Link to="/products">
          <div className="brand-image">
            <img
              className="img-responsive img-container"
              src="https://thetidkes.com/wp-content/uploads/2021/02/ssda.jpg"
              alt="nivia"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BannerBrands;
