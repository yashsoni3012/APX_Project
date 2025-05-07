import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Blog_Resources from '../../assets/blog_resources.png';
import Blog_Resources2 from '../../assets/blog_resources.png'; // Add unique images if available

const Ai_Services = () => {
  const allCards = [
    {
      category: 'Block chain',
      image: Blog_Resources,
      title: 'Blockchain-powered farming.',
      description: 'Using blockchain for transparency and traceability in farming.',
      link: '#',
    },
    {
      category: 'APX Token',
      image: Blog_Resources2,
      title: 'Understanding APX Tokenomics.',
      description: 'Explore how APX tokens are distributed and used in the ecosystem.',
      link: '#',
    },
    {
      category: 'Ai farming',
      image: Blog_Resources,
      title: 'AI in agriculture.',
      description: 'Using AI for precision farming, yield prediction, and automation.',
      link: '#',
    },
    {
      category: 'urban farming',
      image: Blog_Resources2,
      title: 'Urban farming innovations.',
      description: 'Growing food efficiently in urban environments using tech.',
      link: '#',
    },
    {
      category: 'NFT',
      image: Blog_Resources,
      title: 'NFT identity tools.',
      description: 'Using NFTs for digital ID management across platforms.',
      link: '#',
    },
    {
      category: 'Block chain',
      image: Blog_Resources2,
      title: 'Blockchain in supply chains.',
      description: 'Track goods with transparency using blockchain.',
      link: '#',
    },
  ];

  const categories = [
    'All',
    'Block chain',
    'APX Token',
    'Ai farming',
    'urban farming',
    'NFT',
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCards =
    activeCategory === 'All'
      ? allCards
      : allCards.filter((card) => card.category === activeCategory);

  // Animation variants for scroll-in effect
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {filteredCards.map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant} // Apply fadeIn variant
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-green-600"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-black">
                {card.title}
              </h3>
              <p className="text-sm text-gray-800 mb-4">{card.description}</p>
              <a
                href={card.link}
                className="text-green-700 text-sm font-semibold hover:underline mt-auto"
              >
                Read more →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ai_Services;
