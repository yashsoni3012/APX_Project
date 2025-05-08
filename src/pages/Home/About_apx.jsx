import React from 'react';
import ApxImg from '../../assets/about_apx.png';
import ApxImg2 from '../../assets/about_apx_2.png';

const About_apx = () => {
    return (
        <div
            className="relative w-full bg-cover bg-center pt-10"
            style={{ backgroundImage: `url(${ApxImg})` }}
        >
            {/* Semi-transparent overlay */}
            <div className="bg-black/20 w-full h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                    {/* Heading */}
                    <div className="text-start mb-6">
                        <h6 className="text-green-600 text-sm md:text-base">APX TOKEN</h6>
                        <h1 className="text-white text-3xl sm:text-4xl font-bold">About APX</h1>
                    </div>

                    {/* Content Section */}
                    <div className="py-10 flex flex-col md:flex-row items-center md:items-start gap-10">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                            <img
                                src={ApxImg2}
                                alt="Overlay"
                                className="w-full max-w-md h-auto md:h-[350px] object-cover rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-white">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                                Mission Statement
                            </h2>

                            <div className="w-24 h-[3px] bg-green-600 mb-6 mx-auto md:mx-0"></div>

                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold italic text-center md:text-left mb-4">
                                Blockchain-powered sustainable urban farming.
                            </h3>

                            <p className="text-sm sm:text-base italic text-justify leading-relaxed">
                                Our mission is to revolutionize urban farming with blockchain-powered solutions, ensuring transparency,
                                efficiency, and sustainability. By integrating smart contracts, tokenized assets, and NFT-based ownership,
                                we empower communities with secure, data-driven agricultural practices. This fosters eco-friendly food
                                production, carbon credit trading, and decentralized investment opportunities for a greener future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_apx;
