import React from 'react'
import { motion } from 'framer-motion'
import Banner from '../../pages/Home/Banner'
import Metrics from '../../pages/Home/Metrics'
import About_apx from '../../pages/Home/About_apx'
import Tech_Services from '../../pages/Home/Tech_Services'
import Roadmap from '../../pages/Home/Roadmap'
import Tokenomics from '../../pages/Home/Tokenomics'
import Impact from '../../pages/Home/Impact'
import ContactUs from '../../pages/Home/ContactUs'
// import Footer from '../Footer/Footer'

const matureFadeVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const Home = () => {
  const sections = [
    <Banner />,
    <Metrics />,
    <About_apx />,
    <Tech_Services />,
    <Roadmap />,
    <Tokenomics />,
    <Impact />,
    <ContactUs />
    // <Footer />
  ]

  return (
    <div>
      {sections.map((Section, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={matureFadeVariant}
        >
          {Section}
        </motion.div>
      ))}
    </div>
  )
}

export default Home
