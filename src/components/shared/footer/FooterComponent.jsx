import React from "react";
import Logo from "../Logo";
import BrandTitle from "../BrandTitle";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-black">
      <div class="white footer-container-ec">
        <div class="child-1 footer-top-wrapper">
          <div class="footer-logo">
            <div class="nav-title">
              <Logo/>
              <BrandTitle/>
            </div>
          </div>
          <div class="footer-socials gray">
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

        <div class="child-2 footer-middle-wrapper">
          <div class="category-flex fw-bold gray">
            <div class="category">
              <Link  to="/products">Racquets |</Link>
            </div>
            <div class="category">
              <Link  to="/products">Shoes |</Link>
            </div>
            <div class="category">
              <Link  to="/products">Apparel</Link>
            </div>
          </div>
          <div class="category-flex"></div>
        </div>

        <div class="child-3 gray footer-bottom-wrapper">
          <div class="copyright">© 2022 SWIFT-UI</div>
          <ul class="credits wrapit flex-txt">
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
