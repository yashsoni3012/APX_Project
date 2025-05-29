import React from 'react';

import Service_banner from '../../pages/Services/Service_banner';
import Ai_Services from '../../pages/Services/Ai_Services';
import Ai_Future from '../../pages/Services/Ai_Future';
import Blog_Resources from '../../pages/Services/Blog_Resources';
import FAQ from '../../pages/Services/FAQ';
import ContactUs from '../../pages/Home/ContactUs';

const Services = () => {
  return (
    <div className="overflow-x-hidden w-full space-y-10">
      <Service_banner />
      <Ai_Services />
      <Ai_Future />
      <Blog_Resources />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default Services;
