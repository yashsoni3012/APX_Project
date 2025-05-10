import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Apx_token from './components/APX_Token/Apx_token';
import Nft from './components/NFT/Nft';
import Services from './components/Services/Services';
import Insights from './components/Insights/Insights';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <div className="pt-22"> {/* Add padding-top to avoid navbar overlap */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/apx_token" element={<Apx_token />} />
            <Route path='/nft' element={<Nft />} />
            <Route path="/service" element={<Services />} />
            <Route path='/insights' element={<Insights />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
