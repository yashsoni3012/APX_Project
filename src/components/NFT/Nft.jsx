import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NFT_banner from '../../pages/NFT/NFT_Banner';
import NFT_Barries from '../../pages/NFT/NFT_Barries';
import NFT_Barries_Cards from '../../pages/NFT/NFT_Barries_Cards';
import ContactUs from '../../pages/Home/ContactUs';

const Nft = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <div data-aos="fade-up"><NFT_banner /></div>
      <div data-aos="fade-up" data-aos-delay="100"><NFT_Barries /></div>
      <div data-aos="fade-up" data-aos-delay="200"><NFT_Barries_Cards /></div>
      <div data-aos="fade-up" data-aos-delay="300"><ContactUs /></div>
    </div>
  );
};

export default Nft;
