import React from "react";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import HomePage from "../pages/home/HomePage";
import ProductListingPage from "../pages/products/ProductListingPage";
import WishlistPage from "../pages/wishlist/WishlistPage";
import CartPage from "../pages/cart/CartPage";
import SignupForm from "../pages/auth/SignupForm";
import LoginForm from "../pages/auth/LoginForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/mockman" element={<MockMan/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/products" element={<ProductListingPage/>}/>
      <Route path="/wishlist" element={<WishlistPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/Signup" element={<SignupForm/>}/>
    </Routes>
  );
};

export default Router;
