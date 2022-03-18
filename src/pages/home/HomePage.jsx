import React from "react";
import Navbar from "../../components/shared/navbar/NavbarComponent";
import Footer from "../../components/shared/footer/FooterComponent";
import BannerLarge from "../../components/banner/BannerLarge";


const HomePage = () => {
  return (
    <>
    <div className="landing-page-layout">
      <Navbar/>
      <BannerLarge/>
    </div>
      <Footer/>
    </>
  );
};

export default HomePage;
