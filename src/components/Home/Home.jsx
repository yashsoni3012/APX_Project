import React from 'react';

import Banner from '../../pages/Home/Banner';
import Metrics from '../../pages/Home/Metrics';
import About_apx from '../../pages/Home/About_apx';
import Tech_Services from '../../pages/Home/Tech_Services';
import Roadmap from '../../pages/Home/Roadmap';
import Tokenomics from '../../pages/Home/Tokenomics';
import Impact from '../../pages/Home/Impact';
import ContactUs from '../../pages/Home/ContactUs';

const Home = () => {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <div><Banner /></div>
      <div><Metrics /></div>
      <div><About_apx /></div>
      <div><Tech_Services /></div>
      <div><Roadmap /></div>
      <div><Tokenomics /></div>
      <div><Impact /></div>
      <div><ContactUs /></div>
    </div>
  );
};

export default Home;
