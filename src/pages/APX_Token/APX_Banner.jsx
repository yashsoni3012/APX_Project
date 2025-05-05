import React, { useState } from 'react';
import APX_Banner from '../../assets/apx_banner.png';
import logoImg from '../../assets/logo.png';

const APX = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Banner Section */}
            <div className="relative">
                <img
                    src={APX_Banner}
                    alt="About Banner"
                    className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center bg-black/40 px-4 sm:px-8 md:px-20 text-center text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">APX Token</h1>
                </div>
            </div>

            {/* Main Section */}
            <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col items-center justify-center p-4 mt-10">
                {/* Icon Section */}
                <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                        { label: "Staking", icon: "🌱" },
                        { label: "Deposit", icon: "💰" },
                        { label: "NFT", icon: "📢" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center border border-green-500 rounded-md p-6 hover:bg-[#222] transition"
                        >
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <div className="text-sm text-white">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* Token Purchase Box */}
                <div className="w-full max-w-3xl border border-green-500 rounded-md p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 bg-[#111]">
                    {/* Image */}
                    <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
                        <img
                            src={logoImg}
                            alt="Token"
                            className="w-24 h-24 object-contain"
                        />
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                        <div className="border border-green-500 rounded-md px-4 py-2 bg-[#222] text-sm text-center">
                            1 = 0.002 APX
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-600 hover:bg-green-700 transition text-white font-bold py-2 px-6 rounded-md"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>




                {/* CTA Button */}
                <button className="bg-green-600 hover:bg-green-700 transition text-white font-bold py-3 px-8 rounded-md">
                    Join The Movement
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 px-4">
                    <div className="bg-[#1A1A1A] border border-green-500 rounded-lg p-6 w-full max-w-md relative text-white">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
                        >
                            &times;
                        </button>

                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-6 text-center">Buy APX Token</h2>

                        {/* Spend Section */}
                        <div className="bg-[#111] border border-gray-700 rounded-md flex justify-between items-center px-4 py-3 mb-4">
                            <div>
                                <p className="text-gray-400 text-sm">You Spend</p>
                                <p className="text-lg font-semibold">10</p>
                            </div>
                            <div className="border border-green-500 rounded-md px-3 py-1 text-sm flex items-center gap-1">
                                <span>💎</span>
                                <span>USDT</span>
                            </div>
                        </div>

                        {/* Receive Section */}
                        <div className="bg-[#111] border border-gray-700 rounded-md flex justify-between items-center px-4 py-3 mb-2">
                            <div>
                                <p className="text-gray-400 text-sm">You Get</p>
                                <p className="text-lg font-semibold">5000</p>
                            </div>
                            <div className="border border-green-500 rounded-md px-3 py-1 text-sm flex items-center gap-1">
                                <img src={logoImg} alt="APX" className="w-5 h-5" />
                                <span>APX</span>
                            </div>
                        </div>

                        {/* Conversion Note */}
                        <p className="text-center text-xs text-gray-400 mb-4">
                            1 USDT = 500 APX TOKENS
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3">
                            <button className="border border-white rounded-md py-2 font-semibold hover:bg-white hover:text-black transition">
                                Custom Amount
                            </button>
                            <button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 font-semibold">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default APX;
