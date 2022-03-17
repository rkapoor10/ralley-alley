import React from "react";
import {FaSearch} from "react-icons/fa";

const SearchBar = () => {
    return(
        <div className="nav-search-box">
        <input
          className="search-bar fs-1r"
          type="search"
          placeholder="Search for producs, brands and more.."
        />
        <button className="search-btn" type="submit">
          <FaSearch/>
        </button>
      </div>
    )
}

export default SearchBar