import React from 'react';
import impactImg from '../../assets/about_apx.png';
import impactImg2 from '../../assets/impactImg.png';

const Impact = () => {
  return (
    <div className="relative w-full bg-cover bg-center pt-10" style={{ backgroundImage: `url(${impactImg})` }}>
      <div className="bg-black/50 w-full h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

          {/* Heading */}
          <div className="w-full md:w-1/2 ml-auto mb-8">
            <h6 className="text-green-600 text-sm md:text-base">Metrics</h6>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Environmental & Social Impact</h1>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 py-10">

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                Sustainability Metrics
              </h2>
              <h3 className="text-xs font-normal text-center md:text-left mb-4">
                15,000 tons CO₂ saved yearly.<br /> (~3,000 cars removed).
              </h3>
              <div className="w-28 h-[3px] bg-green-600 mt-6 mb-6 mx-auto md:mx-0"></div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                Water Efficiency
              </h2>
              <h3 className="text-xs font-normal text-center md:text-left mb-4">
                90 million liters saved annually
              </h3>
              <div className="w-28 h-[3px] bg-green-600 mt-6 mb-6 mx-auto md:mx-0"></div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                Job Creation
              </h2>
              <h3 className="text-xs font-normal text-center md:text-left">
                Over 2,500 local employment opportunities.
              </h3>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={impactImg2}
                alt="Overlay"
                className="w-full max-w-xl h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Impact;
