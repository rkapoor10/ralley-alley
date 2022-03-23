import React from "react";
import Navbar from "../../components/shared/navbar/NavbarComponent";
import Footer from "../../components/shared/footer/FooterComponent";
import CartProducts from "../../components/cart/CartProducts";
import CartCheckout from "../../components/cart/CartCheckout";

const CartPage = () => {
  return (
    <>
      <div className="cart-pg-layout">
        <div className="child cart-pg-navbar">
          <Navbar />
        </div>
        <CartProducts />
        <CartCheckout />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
