import React from 'react';
import Img1 from '../../assets/ai_farming.png';
import Img2 from '../../assets/blockchain.png';
import Img3 from '../../assets/nft-based.png';

const CardSection = () => {
    const cards = [
        {
            image: Img1,
            title: 'AI-Powered Farming',
            description: 'AI-powered farming optimizes climate control and automates irrigation, fertilization, and pest management, ensuring higher yields, resource efficiency, and sustainable agriculture with minimal human intervention.',
            link: '#',
        },
        {
            image: Img2,
            title: 'Blockchain & Tokenization',
            description: 'APX token enables secure, transparent investments and transactions through blockchain, ensuring trust, decentralization, and efficiency in digital asset management, smart contracts, and financial ecosystems.',
            link: '#',
        },
        {
            image: Img3,
            title: 'NFT-Based Ownership',
            description: 'NFT-based ownership provides verifiable digital proof of farm yield and carbon credits, enabling transparent, secure trading while promoting sustainability & incentivizing eco-friendly agricultural practices.',
            link: '#',
        },
    ];

    return (
        <div className="  lg:px-20 py-12 bg-white">
            <div className='max-w-7xl text-start mb-10'>
                <h6 className='text-green-700 italic text-sm md:text-base'>Services</h6>
                <h3 className='text-black text-2xl md:text-3xl font-semibold mt-2'>Technology & Implementation</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col max-w-7xl">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-[200px] object-cover rounded-t-2xl"
                        />
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-800 mb-4">{card.description}</p>
                            <a href={card.link} className="text-green-600 font-semibold hover:underline mt-auto">
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
