import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Service_banner from '../../pages/Services/Service_banner';
import Ai_Services from '../../pages/Services/Ai_Services';
import Ai_Future from '../../pages/Services/Ai_Future';
import Blog_Resources from '../../pages/Services/Blog_Resources';
import FAQ from '../../pages/Services/FAQ';
import ContactUs from '../../pages/Home/ContactUs';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full space-y-10">
      <div data-aos="fade-up"><Service_banner /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Ai_Services /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Ai_Future /></div>
      <div data-aos="fade-up" data-aos-delay="300"><Blog_Resources /></div>
      <div data-aos="fade-up" data-aos-delay="400"><FAQ /></div>
      <div data-aos="fade-up" data-aos-delay="500"><ContactUs /></div>
    </div>
  );
};

export default Services;
