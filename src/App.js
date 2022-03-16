// import "./App.css";
import Router from "./router/Router";
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default App;
