// import "./App.css";
import React from "react";
import Router from "./router/Router";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Link to="/mockman">Go to MockMan || </Link>
      <Link to="/home">HomePage || </Link>
      <Link to="/products">Products Page || </Link>
      <Link to="/wishlist">Wishlist Page || </Link>
      <Link to="/cart">Cart Page || </Link>
      <Link to="/login">Login Form || </Link>
      <Link to="/signup">SignUp Form </Link>
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
