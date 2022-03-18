import React from "react";
import Navbar from "../../components/shared/navbar/NavbarComponent";
import Footer from "../../components/shared/footer/FooterComponent";
import BannerLarge from "../../components/banner/BannerLarge";
import Category from "../../components/category/Category";
import BannerSmall from "../../components/banner/BannerSmall";


const HomePage = () => {
  return (
    <>
    <div className="landing-page-layout">
      <Navbar/>
      <BannerLarge/>
      <Category/>
      <BannerSmall/>
    </div>
      
      <Footer/>
    </>
  );
};

export default HomePage;
