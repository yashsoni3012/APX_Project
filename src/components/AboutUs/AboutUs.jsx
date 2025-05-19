import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About_Banner from '../../pages/Aboutus/About_Banner';
import Story_Started from '../../pages/Aboutus/Story_Started';
import Vision_mission from '../../pages/Aboutus/Vision_mission';
import Strategy from '../../pages/Aboutus/Strategy';
import Comparison from '../../pages/Aboutus/Comparison';
import ContactUs from '../../pages/Home/ContactUs';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full space-y-10">
      <div data-aos="fade-up"><About_Banner /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Story_Started /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Vision_mission /></div>
      <div data-aos="fade-up" data-aos-delay="300"><Strategy /></div>
      <div data-aos="fade-up" data-aos-delay="400"><Comparison /></div>
      <div data-aos="fade-up" data-aos-delay="500"><ContactUs /></div>
    </div>
  );
};

export default AboutUs;
