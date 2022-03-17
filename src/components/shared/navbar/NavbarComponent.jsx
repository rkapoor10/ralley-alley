import React from "react";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import BrandTitle from "../BrandTitle";
import NavIcons from "./NavIcons";


const Navbar = () => {
  return (
    <header className=" lp-header navbar-container-flex bg-white">
      <div className="nav-title">
        <h1>The</h1>
        <Logo/>
        <BrandTitle/>
      </div>
      <SearchBar/>
      <NavIcons/>
    </header>
  );

  
};

export default Navbar;
