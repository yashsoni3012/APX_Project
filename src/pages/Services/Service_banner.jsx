import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImg from '../../assets/service_banner.png';

const Service_banner = () => {
    return (
        <div className="relative w-full h-[500px] sm:h-[600px]">
            {/* Background Image */}
            <img
                src={ServiceImg}
                alt="Home Banner"
                className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30 flex items-center">
                <div className="px-4 sm:px-8 lg:px-16">
                    <div className="text-white max-w-xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            AI-Powered Farming
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-6">
                            Smart climate control, automated systems.
                        </p>
                        <Link
                            to
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service_banner;
