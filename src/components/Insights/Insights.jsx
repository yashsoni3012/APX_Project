import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Blog_Banner from '../../pages/Blogs_Insights/Blog_Banner';
import SearchBar from '../../pages/Blogs_Insights/Searchbar';
import Blog_technology from '../../pages/Blogs_Insights/Blog_technology';
import Details from '../../pages/Blogs_Insights/Details';
import ContactUs from '../../pages/Home/ContactUs';

const Insights = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full space-y-10">
      <div data-aos="fade-up"><Blog_Banner /></div>
      <div data-aos="fade-up" data-aos-delay="100"><SearchBar /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Blog_technology /></div>
      <div data-aos="fade-up" data-aos-delay="300"><Details /></div>
      <div data-aos="fade-up" data-aos-delay="400"><ContactUs /></div>
    </div>
  );
};

export default Insights;
