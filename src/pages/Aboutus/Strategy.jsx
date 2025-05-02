import React from 'react';
import strategyImg from '../../assets/strategy.png';

const TwoColumnLayout = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white max-w-7xl mx-auto mt-10 mb-10 overflow-hidden">
            {/* Left Column */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between items-start">
                <div>
                    <h6 className="text-green-700 text-sm sm:text-base mb-2">Strategy</h6>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">How it Works?</h2>
                    <p className="text-black text-sm sm:text-base leading-relaxed font-semibold mb-2">
                        Our system operates in three key steps:
                    </p>
                    <p className="text-black text-sm sm:text-base leading-relaxed font-semibold space-y-2">
                        1. Investment - Users invest through blockchain-powered tokenization, securing fractional ownership in urban farms.<br />
                        2. Farming - Smart automation optimizes crop growth, ensuring sustainability and efficiency.<br />
                        3. Rewards - Investors earn through yields, carbon credits, and token incentives sustainably.
                    </p>
                </div>


                {/* Left-aligned Button */}
                <button className="mt-8 bg-green-600 text-white py-3 px-12 sm:px-16 rounded-md font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto">
                    Join The Movement
                </button>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2">
                <img
                    src={strategyImg}
                    alt="Strategy Visual"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default TwoColumnLayout;
