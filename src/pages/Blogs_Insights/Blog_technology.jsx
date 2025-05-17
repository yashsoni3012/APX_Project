import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Blog_Resources from '../../assets/blog_resources.png';
import Blog_Resources2 from '../../assets/blog_resources.png'; // Replace with other image if needed

const Blog_technologies = () => {
  const cards = [
    {
      image: Blog_Resources,
      title: 'Blockchain-powered sustainable urban farming.',
      description:
        'Ensures transparency, efficiency, and eco-friendly food production through smart tech, tokenization, and decentralized participation.',
      link: '#',
    },
    {
      image: Blog_Resources2,
      title: 'AI-driven carbon tracking systems.',
      description:
        'AI tools monitor carbon emissions in real time to help cities reduce pollution and find eco-friendly alternatives.',
      link: '#',
    },
    {
      image: Blog_Resources,
      title: 'Smart contracts in real estate.',
      description:
        'Streamline transactions, remove intermediaries, and enable trustless deals with blockchain smart contracts.',
      link: '#',
    },
    {
      image: Blog_Resources2,
      title: 'NFTs in digital identity management.',
      description:
        'NFTs secure identity data, enabling user privacy and seamless cross-platform verification.',
      link: '#',
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.slice(0, visibleCount).map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-green-600"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[200px] object-cover"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={textVariant}
              className="p-5 flex flex-col flex-1"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">{card.title}</h3>
              <p className="text-sm text-gray-800 mb-4 text-justify">{card.description}</p>
              <a
                href={card.link}
                className="text-green-700 text-sm font-semibold hover:underline mt-auto"
              >
                Read more →
              </a>
            </motion.div>
          </div>
        ))}
      </div>

      {visibleCount < cards.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="mt-8 bg-green-600 text-white py-3 px-12 sm:px-30 rounded-md font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog_technologies;
