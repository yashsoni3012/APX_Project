import React from 'react';
import logo from '../../assets/logo.png'; // Replace with your actual logo path

const MissionVisionSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            {/* Left - Vision */}
            <div className="bg-black text-white p-10 md:p-16 flex flex-col justify-center h-[400px] md:h-[500px] pl-12 md:pl-30">
                <h3 className="text-xs md:text-sm font-semibold mb-2 text-left">The Vision</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Full-scale urban farm<br /> network deployment.</h2>

                <img src={logo} alt="Mission Logo" className="w-20 h-auto mb-4" />
                <p className="text-sm md:text-base text-left max-w-md italic">
                    By integrating smart contracts, tokenized assets, and NFT-based ownership, we empower communities with secure, data-driven agricultural practices.
                </p>
            </div>

            {/* Right - Mission */}
            <div className="bg-green-600 text-white p-10 md:p-16 flex flex-col justify-center h-[400px] md:h-[500px] pr-12 md:pl-30">
                <h3 className="text-xs md:text-sm font-semibold mb-2 text-left">Our Mission</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Blockchain-powered sustainable <br />urban farming.</h2>

                <img src={logo} alt="Vision Logo" className="w-20 h-auto mb-4" />
                <p className="text-sm md:text-base text-left max-w-md italic">
                    By integrating smart contracts, tokenized assets, and NFT-based ownership, we empower communities with secure, data-driven agricultural practices.
                </p>
            </div>
        </div>
    );
};

export default MissionVisionSection;
