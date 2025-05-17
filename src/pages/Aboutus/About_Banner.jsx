import React from 'react';
import { motion } from 'framer-motion';
import About_Banner from '../../assets/about_banner.png';

const AboutBanner = () => {
  return (
    <div className="relative">
      {/* Image with fade-in */}
      <motion.img
        src={About_Banner}
        alt="About Banner"
        className="w-full h-[300px] md:h-[500px] object-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center bg-black/40 px-4 sm:px-8 md:px-20 text-left text-white">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg max-w-xl italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Learn more about our journey, mission, and the team behind our success.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutBanner;
