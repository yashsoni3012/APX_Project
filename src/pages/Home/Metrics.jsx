import React from 'react';
import { FaHome, FaCity, FaLeaf } from 'react-icons/fa';

const IconRow = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto text-start px-4 mb-8">
                <h6 className="text-green-700 italic text-sm md:text-base">METRICS</h6>
                <h3 className="text-black text-2xl md:text-3xl font-semibold mt-2">Quick Status</h3>
            </div>

            <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center">
                    <FaHome className="text-7xl text-green-700 mb-2" />
                    <p className="text-black font-semibold text-center">Farm Houses</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaCity className="text-7xl text-green-700 mb-2" />
                    <p className="text-black font-semibold text-center">Cities</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaLeaf className="text-7xl text-green-700 mb-2" />
                    <p className="text-black font-semibold text-center">CO₂ & Water Savings</p>
                </div>
            </div>
        </div>
    );
};

export default IconRow;
