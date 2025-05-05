import React from 'react'
import Service_banner from '../../pages/Services/Service_banner'
import Ai_Services from '../../pages/Services/Ai_Services'
import Ai_Future from '../../pages/Services/Ai_Future'
import ContactUs from '../../pages/Home/ContactUs'
import Blog_Resources from '../../pages/Services/Blog_Resources'
import FAQ from '../../pages/Services/FAQ'

const Services = () => {
  return (
    <div>
      <Service_banner/>
      <Ai_Services/>
      <Ai_Future/>
      <Blog_Resources/>
      <FAQ/>
      <ContactUs/>
    </div>
  )
}

export default Services
