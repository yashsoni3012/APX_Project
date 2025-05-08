import React from 'react';
import { FaHome, FaCity, FaLeaf } from 'react-icons/fa';

const IconRow = () => {
    return (
        <div className="bg-white py-12">
            {/* Heading Section */}
            <div className="max-w-7xl mx-auto text-center sm:text-start px-4 mb-8">
                <h6 className="text-green-700 italic text-sm md:text-base text-left">METRICS</h6>
                <h3 className="text-black text-2xl md:text-3xl font-semibold mt-2">Quick Status</h3>
            </div>

            {/* Icon Row */}
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-8">
                <div className="flex flex-col items-center text-center flex-1">
                    <FaHome className="text-5xl sm:text-6xl md:text-7xl text-green-700 mb-3" />
                    <p className="text-black font-semibold text-base sm:text-lg">Farm Houses</p>
                </div>
                <div className="flex flex-col items-center text-center flex-1">
                    <FaCity className="text-5xl sm:text-6xl md:text-7xl text-green-700 mb-3" />
                    <p className="text-black font-semibold text-base sm:text-lg">Cities</p>
                </div>
                <div className="flex flex-col items-center text-center flex-1">
                    <FaLeaf className="text-5xl sm:text-6xl md:text-7xl text-green-700 mb-3" />
                    <p className="text-black font-semibold text-base sm:text-lg">
                        CO₂ & Water Savings
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IconRow;
