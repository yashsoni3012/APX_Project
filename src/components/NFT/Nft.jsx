import React from 'react';
import { motion } from 'framer-motion';
import NFT_banner from '../../pages/NFT/NFT_Banner';
import NFT_Barries from '../../pages/NFT/NFT_Barries';
import NFT_Barries_Cards from '../../pages/NFT/NFT_Barries_Cards';
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

const Nft = () => {
  return (
    <div className="space-y-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <NFT_banner />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <NFT_Barries />
      </motion.div>

      <motion.div
        custom={2} // Control the timing and animation delay here
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0, // Immediately show the cards once scrolled to
              duration: 0.4, // Faster animation
              ease: 'easeOut',
            },
          },
        }}
      >
        <NFT_Barries_Cards />
      </motion.div>

      <motion.div
        custom={3}
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

export default Nft;
