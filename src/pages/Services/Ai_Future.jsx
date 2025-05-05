import React from 'react';
import ai_future from '../../assets/ai_future.png'; // Adjust the path as necessary

const Ai_Future = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-full mx-auto mt-10 mb-10 overflow-hidden">
            {/* Left Column */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between items-start" style={{ backgroundColor: '#151515' }}>

                {/* Content + Button Together */}
                <div className='ml-0 md:ml-20'>
                    <h6 className="text-sm sm:text-base mb-4 text-green-600">AI Future</h6>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Data-Driven Farming. <br />Real-World Profits.
                    </h2>
                    
                    <p className="text-white text-sm sm:text-base leading-relaxed font-semibold mb-4">
                        Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.
                    </p>

                    {/* Button placed directly below the text */}
                    <button className="bg-green-600 text-white py-3 px-12 sm:px-16 mt-4 rounded-md font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto">
                        Join The Movement
                    </button>
                </div>
            </div>

            {/* Right Column with Image */}
            <div className="w-full md:w-1/2 md:mt-0">
                <img
                    src={ai_future}
                    alt="Strategy Visual"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Ai_Future;
