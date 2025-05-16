import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Apx_token from "./components/APX_Token/Apx_token";
import Nft from "./components/NFT/Nft";
import Services from "./components/Services/Services";
import Insights from "./components/Insights/Insights";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner"; // Spinner Component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show spinner for 1 second on initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Show spinner while loading
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <div className="pt-22">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apx_token" element={<Apx_token />} />
            <Route path="/nft" element={<Nft />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
