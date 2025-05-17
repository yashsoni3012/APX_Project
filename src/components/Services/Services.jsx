import React from 'react';
import Service_banner from '../../pages/Services/Service_banner';
import Ai_Services from '../../pages/Services/Ai_Services';
import Ai_Future from '../../pages/Services/Ai_Future';
import Blog_Resources from '../../pages/Services/Blog_Resources';
import FAQ from '../../pages/Services/FAQ';
import ContactUs from '../../pages/Home/ContactUs';

const Services = () => {
  return (
    <div className="space-y-10">
      <div>
        <Service_banner />
      </div>

      <div>
        <Ai_Services />
      </div>

      <div>
        <Ai_Future />
      </div>

      <div>
        <Blog_Resources />
      </div>

      <div>
        <FAQ />
      </div>

      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Services;
