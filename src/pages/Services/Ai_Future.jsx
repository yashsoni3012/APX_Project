import React from 'react';
import { motion } from 'framer-motion';
import ai_future from '../../assets/ai_future.png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 8px rgb(34 197 94 / 0.8)", // green glow
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Ai_Future = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-full mx-auto mt-10 mb-10 overflow-hidden">
      {/* Left Column */}
      <div
        className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between items-start"
        style={{ backgroundColor: '#151515' }}
      >
        {/* Container for staggered animation */}
        <motion.div
          className="ml-0 md:ml-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h6
            className="text-sm sm:text-base mb-4 text-green-600"
            variants={itemVariants}
          >
            AI Future
          </motion.h6>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Data-Driven Farming. <br />Real-World Profits.
          </motion.h2>

          <motion.p
            className="text-white text-sm sm:text-base leading-relaxed font-semibold mb-4 text-justify"
            variants={itemVariants}
          >
            Data-driven farming uses AI and analytics to optimize crop production,
            reduce waste, and enhance sustainability—transforming smart agricultural
            practices into measurable, real-world financial returns.
          </motion.p>

          <motion.button
            className="bg-green-600 text-white py-3 px-12 sm:px-16 mt-4 rounded-md font-semibold w-full sm:w-auto"
            variants={itemVariants}
            whileHover="hover"
            variant={buttonVariants}
          >
            Join The Movement
          </motion.button>
        </motion.div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 md:mt-0">
        <img
          src={ai_future}
          alt="Strategy Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Ai_Future;
