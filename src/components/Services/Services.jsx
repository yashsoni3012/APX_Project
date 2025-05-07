import React from 'react';
import { motion } from 'framer-motion';
import Service_banner from '../../pages/Services/Service_banner';
import Ai_Services from '../../pages/Services/Ai_Services';
import Ai_Future from '../../pages/Services/Ai_Future';
import Blog_Resources from '../../pages/Services/Blog_Resources';
import FAQ from '../../pages/Services/FAQ';
import ContactUs from '../../pages/Home/ContactUs';

// Animation variants
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

// New scale variant for FAQ
const scaleVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const Services = () => {
  return (
    <div className="space-y-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant}
      >
        <Service_banner />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideLeftVariant} // Slide left for Ai_Services
      >
        <Ai_Services />
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideRightVariant} // Slide right for Ai_Future
      >
        <Ai_Future />
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant}
      >
        <Blog_Resources />
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleVariant} // New scale animation for FAQ
      >
        <FAQ />
      </motion.div>

      <motion.div
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default Services;
