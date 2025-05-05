import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Banner from '../../pages/Home/Banner'
import Metrics from '../../pages/Home/Metrics'
import About_apx from '../../pages/Home/About_apx'
import Tech_Services from '../../pages/Home/Tech_Services'
import Roadmap from '../../pages/Home/Roadmap'
import Tokenomics from '../../pages/Home/Tokenomics'
import Impact from '../../pages/Home/Impact'
import ContactUs from '../../pages/Home/ContactUs'
import Footer from '../Footer/Footer'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div>
      <div data-aos="fade-up">
        <Banner />
      </div>
      <div data-aos="fade-up">
        <Metrics />
      </div>
      <div data-aos="fade-up">
        <About_apx />
      </div>
      <div data-aos="fade-right">
        <Tech_Services />
      </div>
      <div data-aos="fade-left">
        <Roadmap />
      </div>
      <div data-aos="zoom-in">
        <Tokenomics />
      </div>
      <div data-aos="fade-up">
        <Impact />
      </div>
      <div data-aos="fade-up">
        <ContactUs />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
