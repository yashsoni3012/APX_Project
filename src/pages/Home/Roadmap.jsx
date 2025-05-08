import React from 'react';
import roadmap from '../../assets/roadmap.png'; // Adjust the path to your roadmap image

const Roadmap = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading Section */}
        <div className="text-start mb-8">
          <h6 className="text-green-700 italic text-sm md:text-base">ROADMAP</h6>
          <h1 className="text-white text-2xl md:text-3xl font-semibold mt-2">Project Roadmap</h1>
        </div>

        {/* Responsive Image Section */}
        <div className="w-full">
          <img
            src={roadmap}
            alt="Roadmap"
            className="w-full max-w-full md:max-w-6xl h-auto object-contain rounded-md shadow-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
