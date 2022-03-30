import React from "react";
import Footer from "../../components/shared/footer/FooterComponent";
import Navbar from "../../components/shared/navbar/NavbarComponent";
import WishlistProducts from "../../components/wishlist/WishlistProducts";


const WishlistPage = () => {
  return (
    <div className="wishlist-pg-layout">
      <div className="child wishlist-pg-navbar">
        <Navbar />
      </div>
      <div className="child wishlist-pg-main pad-1">
        <WishlistProducts/>
      </div>
      <div className="child wishlist-pg-footer">
        <Footer />
      </div>
    </div>
  );
};

export default WishlistPage;
