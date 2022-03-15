import "./App.css";
import MockMan from "mockman-js";
import {Routes, Route, Link} from "react-router-dom";
// import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<MockMan/>}></Route>
      </Routes>

      <Link to="/mockman">Go to mockman</Link>
    </div>
  );
}

export default App;
