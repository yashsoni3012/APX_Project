import React from 'react';
import { motion } from 'framer-motion';
import blueberryImg from '../../assets/blueberry.png';
import strawberryImg from '../../assets/strawberry.png';
import raspberryImg from '../../assets/raspberry.png';
import blackberryImg from '../../assets/blackberry.png';
import goldenberryImg from '../../assets/golden_berry.png';
import mulberryImg from '../../assets/mulberry.png';

const App = () => {
  const sections = [
    {
      background: 'bg-green-600',
      title: 'Blueberry',
      text: 'Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.',
      image: blueberryImg,
    },
    {
      background: 'bg-black',
      title: 'Strawberry',
      text: 'Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.',
      image: strawberryImg,
    },
    {
      background: 'bg-green-600',
      title: 'Raspberry',
      text: 'Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.',
      image: raspberryImg,
    },
    {
      background: 'bg-black',
      title: 'Blackberry',
      text: 'Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.',
      image: blackberryImg,
    },
    {
      background: 'bg-green-600',
      title: 'Goldenberry',
      text: 'Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.',
      image: goldenberryImg,
    },
    {
      background: 'bg-black',
      title: 'Mulberry',
      text: 'Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.',
      image: mulberryImg,
    },
  ];

  // Animation variants for sliding text
  const leftSlide = {
    hidden: { opacity: 0, x: 100 }, // from right to left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const rightSlide = {
    hidden: { opacity: 0, x: -100 }, // from left to right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="space-y-6 overflow-x-hidden">
      {sections.map((section, index) => {
        const layoutClass = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';

        // Determine button style based on background
        const isGreen = section.background.includes('green');
        const buttonClass = isGreen
          ? 'bg-black hover:bg-gray-800 text-white py-3 px-6 min-w-[300px] rounded-lg'
          : 'bg-green-600 hover:bg-green-700 text-white py-3 px-6 min-w-[300px] rounded-lg';

        // For left side (even index), slide from right to left (leftSlide)
        // For right side (odd index), slide from left to right (rightSlide)
        const textVariant = index % 2 === 0 ? leftSlide : rightSlide;

        return (
          <div
            key={index}
            className={`w-full flex flex-col ${layoutClass} items-center ${section.background} rounded-3xl text-white`}
          >
            {/* Image Section */}
            <div className="w-full h-64 md:w-1/2 md:h-[400px]">
              <img
                src={section.image}
                alt={`Image for ${section.title}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Text Section with animation */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 sm:p-6 space-y-4 text-center"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-white w-full sm:text-start max-w-7xl">
                AI FUTURE
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold">{section.title}</h2>
              <p className="text-sm w-full text-justify sm:text-start md:w-11/12 lg:w-9/12 xl:w-8/12">
                {section.text}
              </p>

              <button
                className={`${buttonClass} w-full sm:w-1/2 md:w-auto px-6 py-2 rounded-lg text-sm font-semibold transition`}
              >
                Buy Now
              </button>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
