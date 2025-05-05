import React from 'react'
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
  return (
    <div>
      <Banner/>
      <Metrics/>
      <About_apx/>
      <Tech_Services/>
      <Roadmap/>
      <Tokenomics/>
      <Impact/>
      <ContactUs/>
      {/* <Footer/> */} 
    </div>
  )
}

export default Home
