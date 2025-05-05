import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import About_Banner from '../../pages/Aboutus/About_Banner'
import Story_Started from '../../pages/Aboutus/Story_Started'
import Vision_mission from '../../pages/Aboutus/Vision_mission'
import Strategy from '../../pages/Aboutus/Strategy'
import Comparison from '../../pages/Aboutus/Comparison'
import ContactUs from '../../pages/Home/ContactUs'

const AboutUs = () => {
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
        <About_Banner />
      </div>
      <div data-aos="fade-up" className="transition-all duration-700 delay-100">
        <Story_Started />
      </div>
      <div data-aos="fade-left" className="transition-all duration-700 delay-200">
        <Vision_mission />
      </div>
      <div data-aos="fade-right" className="transition-all duration-700 delay-300">
        <Strategy />
      </div>
      <div data-aos="fade-up" className="transition-all duration-700 delay-400">
        <Comparison />
      </div>
      <div data-aos="fade" className="transition-all duration-700 delay-500">
        <ContactUs />
      </div>
    </div>
  )
}

export default AboutUs
