import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceImg from '../../assets/service_banner.png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const Service_banner = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-x-hidden">
      {/* Background Image */}
      <img
        src={ServiceImg}
        alt="Home Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30 flex items-center">
        <div className="px-4 sm:px-8 lg:px-16">
          <motion.div
            className="text-white max-w-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% visible, replay on scroll
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              variants={itemVariants}
            >
              AI-Powered Farming
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6"
              variants={itemVariants}
            >
              Smart climate control, automated systems.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service_banner;
