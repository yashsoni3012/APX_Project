import React from 'react';
import ApxImg from '../../assets/about_apx.png';
import ApxImg2 from '../../assets/about_apx_2.png';

const About_apx = () => {
    return (
        <div className="relative w-full ">
            {/* Background Image as container background */}
            <div
                className="w-full bg-cover bg-center pt-10"
                style={{ backgroundImage: `url(${ApxImg})` }}
            >
                <div className='max-w-7xl mx-auto text-start px-4'>
                    <h6 className="text-green-600 text-sm md:text-base">APX TOKEN</h6>
                    <h1 className='text-white text-4xl font-bold'>About  APX</h1>
                </div>




                {/* Semi-transparent overlay for readability */}
                <div className=" bg-opacity-50 w-full h-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-20 flex flex-col md:flex-row items-center md:items-start">
                        {/* Left-side Image */}
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <img
                                src={ApxImg2}
                                alt="Overlay"
                                className="w-[700px] h-[400px] object-cover rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Right-side Text */}
                        <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-8 text-white">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
                                Mission Statement
                            </h2>

                            <div className="w-20 h-[3px] bg-green-600 mt-4 mb-8 mx-auto md:mx-0"></div>

                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold italic text-center md:text-left mb-4">
                                Blockchain-powered sustainable urban farming.
                            </h3>

                            <p className="text-sm sm:text-base italic text-center md:text-left leading-relaxed">
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
