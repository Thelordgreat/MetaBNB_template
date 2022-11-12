import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AllNFT from "./pages/AllNFT"
import "./index.css";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nfts" element={<AllNFT/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
