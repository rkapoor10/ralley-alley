import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import NavIconsStyles from "../NavIconsStyles";

const NavIcons = () => {
  return (
    <NavIconsStyles>
      <button className="search-btn-alone" type="submit">
        <FaSearch title="search" />
      </button>
      <button className="btn btn-padding txt-s btn-solid white login-btn bg-baseteal">
        <Link to="/login">Login</Link>
      </button>
      <Link to="/wishlist">
        <BsHeart className="navbar-icons fs-15 gray" />
      </Link>
      <Link to="/cart">
        <FaShoppingCart className="navbar-icons fs-15 gray" title="Cart" />
      </Link>
    </NavIconsStyles>
  );
};

export default NavIcons;
