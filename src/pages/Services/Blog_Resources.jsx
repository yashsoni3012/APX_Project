import React from 'react';
import Blog_Resources from '../../assets/blog_resources.png';
import Blog_Resources2 from '../../assets/blog_resources.png';

const Ai_Services = () => {
    const cards = [
        {
            image: Blog_Resources,
            title: 'Blockchain-powered sustainable urban farming.',
            description:
                'Blockchain-powered sustainable urban farming ensures transparency, efficiency, and eco-friendly food production in city environments through smart technology, tokenization, and decentralized participation.',
            link: '#',
        },
        {
            image: Blog_Resources2,
            title: 'Blockchain-powered sustainable urban farming.',
            description:
                'Blockchain-powered sustainable urban farming ensures transparency, efficiency, and eco-friendly food production in city environments through smart technology, tokenization, and decentralized participation.',
            link: '#',
        },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
            <div className="max-w-7xl mx-auto mb-10">
                <h6 className="text-green-700 text-sm md:text-base">Insights</h6>
                <h3 className="text-black text-2xl md:text-3xl font-semibold mt-2">
                Blogs & Resources
                </h3>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-green-600"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-[250px] object-cover rounded-2xl"
                        />
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl  font-semibold mb-2 text-black">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-800 mb-4 text-justify">{card.description}</p>
                            <a href={card.link} className="text-green-700 text-sm font-semibold hover:underline mt-auto">
                                Read more →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ai_Services;
