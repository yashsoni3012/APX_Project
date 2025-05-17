import React from 'react';
import About_Banner from '../../pages/Aboutus/About_Banner';
import Story_Started from '../../pages/Aboutus/Story_Started';
import Vision_mission from '../../pages/Aboutus/Vision_mission';
import Strategy from '../../pages/Aboutus/Strategy';
import Comparison from '../../pages/Aboutus/Comparison';
import ContactUs from '../../pages/Home/ContactUs';

const AboutUs = () => {
  return (
    <div className="space-y-10">
      <About_Banner />
      <Story_Started />
      <Vision_mission />
      <Strategy />
      <Comparison />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
