import React from 'react';
import { motion } from 'framer-motion';  // add framer-motion import
import Img1 from '../../assets/ai_service1.png';
import Img2 from '../../assets/ai_service2.png';
import Img3 from '../../assets/ai_service3.png';

const Ai_Services = () => {
  const cards = [
    {
      image: Img1,
      title: 'Smart Climate Control',
      description:
        'AI systems regulate temperature, humidity, and lighting based on real-time data and crop requirements. This creates ideal growing conditions year-round, maximizing yield, minimizing energy usage, and reducing reliance on manual intervention.',
      link: '#',
    },
    {
      image: Img2,
      title: 'Automated Crop Monitoring',
      description:
        'AI-integrated sensors and computer vision continuously monitor plant health, nutrient levels, pests, and growth patterns. This enables early detection and precise treatment, improving crop quality and productivity.',
      link: '#',
    },
    {
      image: Img3,
      title: 'Predictive Analytics',
      description:
        'AI analyzes historical and live data to forecast yields, detect trends, and optimize planting cycles. This improves decision-making, efficiency, and profitability in urban farming environments.',
      link: '#',
    },
  ];

  // Animation variants same as your CardSection
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h6 className="text-green-700 text-sm md:text-base">Services</h6>
        <h3 className="text-black text-2xl md:text-3xl font-semibold mt-2">
          AI-Powered Urban Farming
        </h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-green-600"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[200px] object-cover rounded-t-2xl"
            />

            {/* Animated content */}
            <motion.div
              className="p-5 flex flex-col flex-1"
              custom={index}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // re-trigger on scroll
            >
              <h3 className="text-lg font-semibold mb-2 text-green-600">
                {card.title}
              </h3>
              <p className="text-sm text-justify text-gray-800">{card.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ai_Services;
