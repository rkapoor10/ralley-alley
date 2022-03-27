import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import "./navicons.css"
import NavIconsStyles from "../NavIconsStyles";
import { useCart } from "../../../context/cartContext/CartContext";

const NavIcons = () => {
  const {cartState} = useCart()
  return (
    <NavIconsStyles>
      <button className="search-btn-alone" type="submit">
        <FaSearch title="search" />
      </button>
      <button className="btn btn-padding txt-s btn-solid white login-btn bg-baseteal">
        <Link to="/login">Login</Link>
      </button>
      <Link to="/wishlist">
        <div className="badge-parent">
          <BsHeart className="navbar-icons gray icon white" title="Cart" />
          <div className="badge-font icons-disp bg-basepink badge-top white">
            10
          </div>
        </div>
      </Link>
      <Link to="/cart">
        
        <div className="badge-parent">
          <FaShoppingCart
            className="navbar-icons gray icon white"
            title="Cart"
          />
          {(cartState.totalCartItems!==0)&&<div className="badge-font icons-disp bg-basepink badge-top white">
            {cartState.totalCartItems}
          </div>
        }
          
        </div>
      </Link>
    </NavIconsStyles>
  );
};

export default NavIcons;
