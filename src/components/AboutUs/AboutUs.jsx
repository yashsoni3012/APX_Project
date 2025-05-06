import React from 'react';
import { motion } from 'framer-motion';
import About_Banner from '../../pages/Aboutus/About_Banner';
import Story_Started from '../../pages/Aboutus/Story_Started';
import Vision_mission from '../../pages/Aboutus/Vision_mission';
import Strategy from '../../pages/Aboutus/Strategy';
import Comparison from '../../pages/Aboutus/Comparison';
import ContactUs from '../../pages/Home/ContactUs';

// Animation variant
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
};

const AboutUs = () => {
  return (
    <div className="space-y-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <About_Banner />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Story_Started />
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Vision_mission />
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Strategy />
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Comparison />
      </motion.div>

      <motion.div
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default AboutUs;
