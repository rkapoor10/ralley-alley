import React from "react";
import Logo from "../Logo";
import BrandTitle from "../BrandTitle";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="white footer-container-ec">
        <div className="child-1 footer-top-wrapper">
          <div className="footer-logo">
            <div className="nav-title">
              <Logo/>
              <BrandTitle/>
            </div>
          </div>
          <div className="footer-socials gray">
            <li>
              <a href="./">Youtube</a>
            </li>
            <li>
              <a href="./">Instagram</a>
            </li>
            <li>
              <a href="./">Twitter</a>
            </li>
          </div>
        </div>

        <div className="child-2 footer-middle-wrapper">
          <div className="category-flex fw-bold gray">
            <div className="category">
              <Link  to="/products">Racquets |</Link>
            </div>
            <div className="category">
              <Link  to="/products">Shoes |</Link>
            </div>
            <div className="category">
              <Link  to="/products">Apparel</Link>
            </div>
          </div>
          <div className="category-flex"></div>
        </div>

        <div className="child-3 gray footer-bottom-wrapper">
          <div className="copyright">© 2022 SWIFT-UI</div>
          <ul className="credits wrapit flex-txt">
            <li>
              <a href="https://swift-uiv1.netlify.app/">Swift UI</a>
            </li>
            <li>
              <a href="http://">Github</a>
            </li>
            <li>
              <a href="http://">Canva</a>
            </li>
            <li>
              <a href="http://">FontAwesome</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
