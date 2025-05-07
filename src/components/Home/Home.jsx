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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const slideLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const slideRightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
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
    <ContactUs />,
  ]

  return (
    <div>
      {sections.map((Section, index) => {
        const ComponentType = Section.type
        let variant = fadeVariant

        if (ComponentType === Tech_Services) {
          variant = slideLeftVariant
        } else if (ComponentType === Tokenomics) {
          variant = slideRightVariant
        } else if (ComponentType === Impact || ComponentType === ContactUs) {
          variant = fadeVariant // shared subtle fade-up
        }

        return (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={variant}
          >
            {Section}
          </motion.div>
        )
      })}
    </div>
  )
}

export default Home
