import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Footer from "./components/Footer";
import Home from './pages/Home/Home';
import Mypage from "./pages/Mypage/Mypage";
import Diffuser from "./pages/ProductPage/Diffuser";
import Perfume from "./pages/ProductPage/Perfume";
import Header from "./components/Header";



function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/diffuser" element={<Diffuser />} />
        <Route path="/perfume" element={<Perfume />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;