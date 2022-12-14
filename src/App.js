import "./App.css";

import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="entirepage">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
