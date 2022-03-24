import React from "react";
import Login from "../../components/auth/Login.jsx";
import Footer from "../../components/shared/footer/FooterComponent";
import Navbar from "../../components/shared/navbar/NavbarComponent";

const LoginForm = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

export default LoginForm;
