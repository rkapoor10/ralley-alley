import React from "react";
import Navbar from "../../components/shared/navbar/NavbarComponent";
import Footer from "../../components/shared/footer/FooterComponent";
import BannerLarge from "../../components/banner/BannerLarge";
import Category from "../../components/category/Category";
import BannerSmall from "../../components/banner/BannerSmall";
import BannerBrands from "../../components/banner/BannerBrands";


const HomePage = () => {
  return (
    <>
    <div className="landing-page-layout">
      <Navbar/>
      <BannerLarge/>
      <Category/>
      <BannerSmall/>
      <BannerBrands/>
    </div>
      
      <Footer/>
    </>
  );
};

export default HomePage;
