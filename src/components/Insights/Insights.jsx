import React from 'react';
import { motion } from 'framer-motion';
import Blog_Banner from '../../pages/Blogs_Insights/Blog_Banner';
import SearchBar from '../../pages/Blogs_Insights/Searchbar';
import Blog_technology from '../../pages/Blogs_Insights/Blog_technology';
import Details from '../../pages/Blogs_Insights/Details';
import ContactUs from '../../pages/Home/ContactUs';

// Animation variants
const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const slideLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const slideRightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Insights = () => {
  return (
    <div className="space-y-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant} // Fade animation for Blog_Banner
      >
        <Blog_Banner />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleUpVariant} // Scale-up animation for SearchBar
      >
        <SearchBar />
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideRightVariant} // Slide right for Blog_technology
      >
        <Blog_technology />
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant} // Fade animation for Details
      >
        <Details />
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant} // Fade animation for ContactUs
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default Insights;
