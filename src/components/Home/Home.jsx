import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../../pages/Home/Banner';
import Metrics from '../../pages/Home/Metrics';
import About_apx from '../../pages/Home/About_apx';
import Tech_Services from '../../pages/Home/Tech_Services';
import Roadmap from '../../pages/Home/Roadmap';
import Tokenomics from '../../pages/Home/Tokenomics';
import Impact from '../../pages/Home/Impact';
import ContactUs from '../../pages/Home/ContactUs';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <div data-aos="fade-up"><Banner /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Metrics /></div>
      <div data-aos="fade-up" data-aos-delay="200"><About_apx /></div>
      <div data-aos="fade-up" data-aos-delay="300"><Tech_Services /></div>
      <div data-aos="fade-up" data-aos-delay="400"><Roadmap /></div>
      <div data-aos="fade-up" data-aos-delay="500"><Tokenomics /></div>
      <div data-aos="fade-up" data-aos-delay="600"><Impact /></div>
      <div data-aos="fade-up" data-aos-delay="700"><ContactUs /></div>
    </div>
  );
};

export default Home;
