import React from 'react';
import { motion } from 'framer-motion';
import Service_banner from '../../pages/Services/Service_banner';
import Ai_Services from '../../pages/Services/Ai_Services';
import Ai_Future from '../../pages/Services/Ai_Future';
import Blog_Resources from '../../pages/Services/Blog_Resources';
import FAQ from '../../pages/Services/FAQ';
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

const Services = () => {
  return (
    <div className="space-y-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Service_banner />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Ai_Services />
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Ai_Future />
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Blog_Resources />
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <FAQ />
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

export default Services;
