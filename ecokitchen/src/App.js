// version 3

// update nav bar to include donation
// update food card to fix error when duplicating records

// create a feature/branch : git checkout -b <name of branch>
// git commit and upstream branch
// merge locally
// create pull request

//--------------------------------------------------------

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Donate from "./pages/Donate";
import LandingPage from "../src/pages/LandingPage";
import Styles from "./pages/Styles";
import Header from "./components/header/Header";
import Shopping from "./pages/Shopping";
import Food from "./pages/Food";
import Breakdown from "./pages/Breakdown";
import Navbar from "./components/Navbar";
import Additem from "./pages/AdditemPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/HomePage" element={<Home />} />
            <Route path="/Food" element={<Food />} />
            <Route path="/Breakdown" element={<Breakdown />} />
            <Route path="Recipes" element={<Recipes />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/Donate" element={<Donate />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/additem" element={<Additem />} />

            <Route path="/Styles" element={<Styles />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
export default App;
