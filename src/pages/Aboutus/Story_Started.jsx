import React from 'react';
import image1 from '../../assets/storyImg1.png'; // replace with actual image path
import image2 from '../../assets/storyImg2.png'; // replace with actual image path

const Story_Started = () => {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column - Title and Text */}
                <div>
                    <h6 className="text-green-700 text-sm md:text-base mb-2">Our story</h6>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">How it started?</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic font-semibold">
                        Our mission is to revolutionize urban farming with blockchain-powered solutions, ensuring transparency,
                        efficiency, and sustainability. By integrating smart contracts, tokenized assets, and NFT-based ownership,
                        we empower communities with secure, data-driven agricultural practices. This fosters eco-friendly food
                        production, carbon credit trading, and decentralized investment opportunities for a greener future.
                    </p>
                </div>

                {/* Right Column - Two Images in Row, Wrapping on Tablet */}
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                    <img
                        src={image1}
                        alt="Story Visual 1"
                        className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-xl shadow-md"
                    />
                    <img
                        src={image2}
                        alt="Story Visual 2"
                        className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-xl shadow-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default Story_Started;
