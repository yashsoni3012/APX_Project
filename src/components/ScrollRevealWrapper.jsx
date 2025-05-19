// src/components/ScrollRevealWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const ScrollRevealWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // Animate every time it enters view
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealWrapper;
