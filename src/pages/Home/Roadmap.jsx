import React from 'react';
import roadmap from '../../assets/roadmap.png'; // Adjust the path to your roadmap image

const Roadmap = () => {
  return (
    <div className='bg-black py-12'>
      {/* Wrap everything inside the max-w-8xl container for consistent alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Heading Section with left margin */}
        <div className="text-start mb-8 ml-4 md:ml-0">
          <h6 className="text-green-700 italic text-sm md:text-base">ROADMAP</h6>
          <h1 className="text-white text-2xl md:text-3xl font-semibold mt-2">Project Roadmap</h1>
        </div>

        {/* Image Section with centered alignment */}
        <div className="w-full flex justify-center">
          <img
            src={roadmap}
            alt="Roadmap"
            className="w-full max-w-6xl h-auto object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
