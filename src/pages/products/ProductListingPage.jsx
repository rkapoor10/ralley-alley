import React from "react";
import FilterSidebar from "../../components/filters/Filter";
import Products from "../../components/products/Products";
import Footer from "../../components/shared/footer/FooterComponent";
import Navbar from "../../components/shared/navbar/NavbarComponent";
import { FilterProvider } from "../../context/filterContext/FilterContext";

const ProductListingPage = () => {
  return (
    <>
      <div className="products-pg-layout">
        <Navbar />
        <FilterProvider>
          <FilterSidebar />
          <Products />
        </FilterProvider>
      </div>
      <Footer />
    </>
  );
};

export default ProductListingPage;
