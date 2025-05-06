import React from 'react';
import { motion } from 'framer-motion';
import Blog_Banner from '../../pages/Blogs_Insights/Blog_Banner';
import SearchBar from '../../pages/Blogs_Insights/Searchbar';
import Blog_technology from '../../pages/Blogs_Insights/Blog_technology';
import Details from '../../pages/Blogs_Insights/Details';
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

const Insights = () => {
  return (
    <div className="space-y-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Blog_Banner />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <SearchBar />
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Blog_technology />
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <Details />
      </motion.div>

      <motion.div
        custom={4}
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

export default Insights;
