import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import nftBannerImg from '../../assets/nft_banner.png'; // Adjust the path as necessary

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const NFT_banner = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src={nftBannerImg}
        alt="Home Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="px-4 sm:px-8 lg:px-16 w-full max-w-8xl mx-auto">
          <motion.div
            className="text-white text-center sm:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              variants={itemVariants}
            >
              NFT Nomenclature & Structure for APX Berries
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6"
              variants={itemVariants}
            >
              Each NFT represents a batch of berries harvested from an APX vertical farm.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
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

export default NFT_banner;
