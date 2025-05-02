import React from 'react'
import impactImg from '../../assets/about_apx.png';
import impactImg2 from '../../assets/impactImg.png';

const Impact = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Background Image as container background */}
        <div
          className="w-full bg-cover bg-center pt-10"
          style={{ backgroundImage: `url(${impactImg})` }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="w-full md:w-1/2 ml-auto">
              <h6 className="text-green-600 text-sm md:text-base">Metrics</h6>
              <h1 className="text-white text-4xl font-bold">Environmental & Social Impact</h1>
            </div>
          </div>


          {/* Semi-transparent overlay for readability */}
          <div className="bg-opacity-50 w-full h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-20 flex flex-col md:flex-row items-center md:items-start">

              {/* Right-side Text (now first for left positioning) */}
              <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-8 text-white mb-8 md:mb-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
                  Sustainability Metrics
                </h2>


                <h3 className="text-xs font-normal text-center md:text-left mb-4">
                  15,000 tons CO₂ saved yearly.<br />
                  (~3,000 cars removed).
                </h3>

                {/* green line */}
                <div className="w-15 h-[3px] bg-green-600 mt-10 mb-8 mx-auto md:mx-0"></div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
                  Water Efficiency
                </h2>
                <h3 className="text-xs font-normal text-center md:text-left mb-4">
                  90 million liters saved annually
                </h3>

                {/* green line */}
                <div className="w-15 h-[3px] bg-green-600 mt-10 mb-8 mx-auto md:mx-0"></div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
                Job Creation
                </h2>
                <h3 className="text-xs font-normal text-center md:text-left mb-4">
                  90 million liters saved annuallyOver 2,500 local employment opportunities.
                </h3>


              </div>

              

              {/* Left-side Image (now second for right positioning) */}
              <div className="w-full md:w-1/2">
                <img
                  src={impactImg2}
                  alt="Overlay"
                  className="w-[700px] h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
