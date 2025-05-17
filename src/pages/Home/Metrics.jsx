import React from "react";
import { FaHome, FaCity, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const IconRow = () => {
  const icons = [
    { icon: <FaHome className="text-5xl sm:text-6xl md:text-7xl text-green-700 mb-3" />, label: "Farm Houses" },
    { icon: <FaCity className="text-5xl sm:text-6xl md:text-7xl text-green-700 mb-3" />, label: "Cities" },
    { icon: <FaLeaf className="text-5xl sm:text-6xl md:text-7xl text-green-700 mb-3" />, label: "CO₂ & Water Savings" },
  ];

  return (
    <div className="bg-white py-12">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center sm:text-start px-4 mb-8">
        <h6 className="text-green-700 italic text-sm md:text-base text-left">METRICS</h6>
        <h3 className="text-black text-2xl md:text-3xl font-semibold mt-2">Quick Status</h3>
      </div>

      {/* Icon Row */}
      <motion.div
        className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {icons.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center flex-1"
            variants={itemVariants}
          >
            {item.icon}
            <p className="text-black font-semibold text-base sm:text-lg">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IconRow;
