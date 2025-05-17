import React from 'react';
import { motion } from 'framer-motion';
import comparisonImg from '../../assets/comparisonImg.png';

// Animation variant for fade and slide up
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay, ease: 'easeOut' },
  },
});

const Comparison = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Static Image */}
      <img
        src={comparisonImg}
        alt="About Banner"
        className="w-full h-[300px] md:h-[500px] object-cover"
      />

      {/* Animated Overlay Text */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center bg-black/20 px-4 sm:px-8 md:px-20 text-left text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h6
          className="text-green-700 text-sm md:text-base mb-2"
          variants={fadeInUp(0.3)}
        >
          Comparison Table
        </motion.h6>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4"
          variants={fadeInUp(0.6)}
        >
          Problems & Solutions
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Comparison;
