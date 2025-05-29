import React from 'react';
import { motion } from 'framer-motion';
import strategyImg from '../../assets/strategy.png';

const slideInFromLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  },
});

const TwoColumnLayout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white max-w-7xl mx-auto mt-10 mb-10 overflow-hidden">
      
      {/* Left Column */}
      <motion.div
        className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div>
          <motion.h6
            className="text-green-600 text-sm sm:text-base mb-2"
            variants={slideInFromLeft(0)}
          >
            Strategy
          </motion.h6>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={slideInFromLeft(0.3)}
          >
            How it Works?
          </motion.h2>

          <motion.p
            className="text-black text-sm sm:text-base leading-relaxed font-semibold mb-2"
            variants={slideInFromLeft(0.4)}
          >
            Our system operates in three key steps:
          </motion.p>

          <motion.p
            className="text-black text-sm sm:text-base leading-relaxed font-semibold space-y-2 text-justify"
            variants={slideInFromLeft(0.3)}
          >
            1. Investment - Users invest through blockchain-powered tokenization, securing fractional ownership in urban farms.<br />
            2. Farming - Smart automation optimizes crop growth, ensuring sustainability and efficiency.<br />
            3. Rewards - Investors earn through yields, carbon credits, and token incentives sustainably.
          </motion.p>
        </div>
        <motion.button
          className="mt-8 bg-green-600 text-white py-3 px-12 sm:px-16 rounded-md font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto"
          variants={slideInFromLeft(0.3)}
        >
          Join The Movement
        </motion.button>
      </motion.div>

      {/* Right Column - Image (No Animation) */}
      <div className="w-full md:w-1/2">
        <img
          src={strategyImg}
          alt="Strategy Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
