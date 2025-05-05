import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Service_banner from '../../pages/Services/Service_banner'
import Ai_Services from '../../pages/Services/Ai_Services'
import Ai_Future from '../../pages/Services/Ai_Future'
import Blog_Resources from '../../pages/Services/Blog_Resources'
import FAQ from '../../pages/Services/FAQ'
import ContactUs from '../../pages/Home/ContactUs'

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Controls animation duration
      once: true,     // Ensures animation runs only once
      offset: 100,    // Delays animation start by 100px
    })
  }, [])

  return (
    <div>
      <div data-aos="fade" className="transition-all duration-700">
        <Service_banner />
      </div>
      <div data-aos="fade-up" className="transition-all duration-700 delay-100">
        <Ai_Services />
      </div>
      <div data-aos="fade-left" className="transition-all duration-700 delay-200">
        <Ai_Future />
      </div>
      <div data-aos="fade-right" className="transition-all duration-700 delay-300">
        <Blog_Resources />
      </div>
      <div data-aos="fade-up" className="transition-all duration-700 delay-400">
        <FAQ />
      </div>
      <div data-aos="fade" className="transition-all duration-700 delay-500">
        <ContactUs />
      </div>
    </div>
  )
}

export default Services
