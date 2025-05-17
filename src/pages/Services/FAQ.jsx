import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What is AI-powered urban farming?',
    answer: 'It uses artificial intelligence to monitor and optimize farming processes in urban environments for higher efficiency and yield.',
  },
  {
    question: 'How does AI control the climate in greenhouses?',
    answer: 'AI uses real-time data to adjust temperature, humidity, and lighting automatically, creating optimal growth conditions.',
  },
  {
    question: 'What are the benefits of automated crop monitoring?',
    answer: 'It enables early detection of issues and ensures better health and productivity of crops using sensors and vision systems.',
  },
  {
    question: 'How does predictive analytics help in farming?',
    answer: 'It forecasts crop yields and trends, allowing better planning and resource management for farmers.',
  },
  {
    question: 'Is AI farming sustainable?',
    answer: 'Yes, it reduces waste, minimizes energy use, and promotes efficient farming practices with minimal human intervention.',
  },
];

// Variants for each FAQ item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('down'); // 'down' or 'up'
  const lastScrollY = useRef(window.scrollY);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Container variants with stagger direction based on scroll direction
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: scrollDirection === 'down' ? 1 : -1,
      },
    },
  };

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-8">
          <h6 className="text-green-600 text-sm md:text-base mb-2">FAQs</h6>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <motion.div
          key={scrollDirection} // re-mount component to restart animation on scroll direction change
          className="space-y-4 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden w-full"
              variants={itemVariants}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-4 bg-black text-left"
              >
                <span className="text-green-500 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-green-500" />
                ) : (
                  <FaPlus className="text-green-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-300 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
              <hr className="border-t border-white mx-4 mt-2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
