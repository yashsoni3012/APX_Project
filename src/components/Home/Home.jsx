import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../pages/Home/Banner';
import Metrics from '../../pages/Home/Metrics';
import About_apx from '../../pages/Home/About_apx';
import Tech_Services from '../../pages/Home/Tech_Services';
import Roadmap from '../../pages/Home/Roadmap';
import Tokenomics from '../../pages/Home/Tokenomics';
import Impact from '../../pages/Home/Impact';
import ContactUs from '../../pages/Home/ContactUs';

const Home = () => {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Banner: Fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <Banner />
      </motion.div>

      {/* Metrics: Slide from left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <Metrics />
      </motion.div>

      {/* About_apx: Scale up */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <About_apx />
      </motion.div>

      {/* Tech_Services: Slide from left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <Tech_Services />
      </motion.div>

      {/* Roadmap: Fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <Roadmap />
      </motion.div>

      {/* Tokenomics: Slide from right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <Tokenomics />
      </motion.div>

      {/* Impact: Fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <Impact />
      </motion.div>

      {/* ContactUs: Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-full"
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default Home;
