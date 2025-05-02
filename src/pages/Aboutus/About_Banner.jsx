import React from 'react';
import About_Banner from '../../assets/about_banner.png';

const AboutBanner = () => {
    return (
        <div className="relative">
            {/* Responsive Image */}
            <img
                src={About_Banner}
                alt="About Banner"
                className="w-full h-[300px] md:h-[500px] object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center bg-black/40 px-4 sm:px-8 md:px-20 text-left text-white">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">About Us</h1>
                <p className="text-sm sm:text-base md:text-lg max-w-xl italic">
                    Learn more about our journey, mission, and the team behind our success.
                </p>
            </div>
        </div>
    );
};

export default AboutBanner;
