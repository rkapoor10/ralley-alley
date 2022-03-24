import React from "react";
import Signup from "../../components/auth/Signup";
import Footer from "../../components/shared/footer/FooterComponent";
import Navbar from "../../components/shared/navbar/NavbarComponent";

const SignupForm = () => {
  return (
    <>
      <Navbar />
      <Signup />
      <Footer />
    </>
  );
};

export default SignupForm;
