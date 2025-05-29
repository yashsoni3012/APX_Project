import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png'; // Replace with your actual logo path
import visionImg from '../../assets/visionImg.png'; // Replace with your actual vision image path
import missionImg from '../../assets/missionImg.png'; // Replace with your actual mission image path

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay },
  },
});

const MissionVisionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {/* Left - Vision */}
      <motion.div
        className="bg-black text-white p-10 md:p-16 flex flex-col justify-center h-[400px] md:h-[500px] pl-12 md:pl-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h3 className="text-xs md:text-sm font-semibold mb-2 text-left" variants={fadeInUp(0)}>
          The Vision
        </motion.h3>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          variants={fadeInUp(0.2)}
        >
          Full-scale urban farm<br /> network deployment.
        </motion.h2>

        <motion.img
          src={visionImg}
          alt="Mission Logo"
          className="w-20 h-auto mb-4"
          variants={fadeInUp(0.4)}
        />

        <motion.p
          className="text-sm md:text-base max-w-md italic text-justify"
          variants={fadeInUp(0.6)}
        >
          By integrating smart contracts, tokenized assets, and NFT-based ownership, we empower
          communities with secure, data-driven agricultural practices.
        </motion.p>
      </motion.div>

      {/* Right - Mission */}
      <motion.div
        className="bg-green-600 text-white p-10 md:p-16 flex flex-col justify-center h-[400px] md:h-[500px] pr-12 md:pl-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h3 className="text-xs md:text-sm font-semibold mb-2 text-left" variants={fadeInUp(0)}>
          Our Mission
        </motion.h3>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          variants={fadeInUp(0.2)}
        >
          Blockchain-powered sustainable <br />urban farming.
        </motion.h2>

        <motion.img
          src={missionImg}
          alt="Vision Logo"
          className="w-20 h-auto mb-4"
          variants={fadeInUp(0.4)}
        />

        <motion.p
          className="text-sm md:text-base text-justify max-w-md italic"
          variants={fadeInUp(0.6)}
        >
          By integrating smart contracts, tokenized assets, and NFT-based ownership, we empower
          communities with secure, data-driven agricultural practices.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MissionVisionSection;
