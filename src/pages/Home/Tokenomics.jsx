import React from 'react';
import { motion } from 'framer-motion';
import token_coin from '../../assets/token-coin.png';
import badge from '../../assets/badge.png';
import membership from '../../assets/card-club.png';

const ThreeHorizontalCards = () => {
  const cards = [
    {
      title: 'APX Token Utility',
      image: token_coin,
    },
    {
      title: 'Investor Rewards',
      image: badge,
    },
    {
      title: 'Green Club Membership',
      image: membership,
    },
  ];

  // Variants for text sliding from top to down
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Variants for cards sliding from bottom to up
  const cardsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      {/* Text Section */}
      <motion.div
        className='max-w-7xl mx-auto text-start px-4 mt-10'
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h6 className="text-green-700 text-sm md:text-base">APX TOKEN</h6>
        <h1 className='text-black text-3xl md:text-4xl font-bold mt-4'>Tokenomics & Rewards</h1>
        <p className='w-full md:w-[40%] mt-4 text-sm sm:text-base'>
          Our Tokenomics supply, distribution, and utility, ensuring ecosystem stability. Rewards incentivize participation, staking, and transactions, fostering user engagement, liquidity, and long-term value growth.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-gray-200 p-6 sm:p-8 md:p-10 rounded-xl shadow-md"
              custom={index}
              variants={cardsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded mr-4"
              />
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Join The Movement Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-green-600 text-white py-3 px-12 sm:px-16 md:px-20 rounded-md font-semibold hover:bg-green-700 transition-colors cursor-pointer">
            Join The Movement
          </button>
        </div>
      </div>
    </>
  );
};

export default ThreeHorizontalCards;
