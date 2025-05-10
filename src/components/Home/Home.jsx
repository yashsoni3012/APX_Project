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

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const slideLeftVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const slideRightVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Home = () => {
  const sections = [
    { component: <Banner />, variant: fadeVariant },
    { component: <Metrics />, variant: fadeVariant },
    { component: <About_apx />, variant: fadeVariant },
    { component: <Tech_Services />, variant: slideLeftVariant },
    { component: <Roadmap />, variant: fadeVariant },
    { component: <Tokenomics />, variant: slideRightVariant },
    { component: <Impact />, variant: fadeVariant },
    { component: <ContactUs />, variant: fadeVariant },
  ]

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {sections.map((section, index) => (
        <div key={index} className="overflow-x-hidden w-full max-w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={section.variant}
            className="w-full max-w-full"
          >
            {section.component}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default Home
