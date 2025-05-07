import React from 'react';
import { motion } from 'framer-motion';
import About_Banner from '../../pages/Aboutus/About_Banner';
import Story_Started from '../../pages/Aboutus/Story_Started';
import Vision_mission from '../../pages/Aboutus/Vision_mission';
import Strategy from '../../pages/Aboutus/Strategy';
import Comparison from '../../pages/Aboutus/Comparison';
import ContactUs from '../../pages/Home/ContactUs';

// Fade in with vertical movement
const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Slide in from left to right
const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Slide in from right to left
const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const AboutUs = () => {
  return (
    <div className="space-y-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant}
      >
        <About_Banner />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant}
      >
        <Story_Started />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideFromLeft} // Animate from left to right
      >
        <Vision_mission />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideFromRight} // Animate from right to left
      >
        <Strategy />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant}
      >
        <Comparison />
      </motion.div>

      <motion.div
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

export default AboutUs;
