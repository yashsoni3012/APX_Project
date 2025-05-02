import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        question: 'What is AI-powered urban farming?',
        answer: 'It uses artificial intelligence to monitor and optimize farming processes in urban environments for higher efficiency and yield.',
    },
    {
        question: 'How does AI control the climate in greenhouses?',
        answer: 'AI uses real-time data to adjust temperature, humidity, and lighting automatically, creating optimal growth conditions.',
    },
    {
        question: 'What are the benefits of automated crop monitoring?',
        answer: 'It enables early detection of issues and ensures better health and productivity of crops using sensors and vision systems.',
    },
    {
        question: 'How does predictive analytics help in farming?',
        answer: 'It forecasts crop yields and trends, allowing better planning and resource management for farmers.',
    },
    {
        question: 'Is AI farming sustainable?',
        answer: 'Yes, it reduces waste, minimizes energy use, and promotes efficient farming practices with minimal human intervention.',
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-20">
                <h6 className="text-green-600 text-sm md:text-base mb-5">FAQs</h6>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-start text-white">
                Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-4 py-4 bg-black text-left"
                        >
                            <span className="text-green-500 font-medium">{faq.question}</span>
                            {openIndex === index ? (
                                <FaMinus className="text-green-500" />
                            ) : (
                                <FaPlus className="text-green-500" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="px-4 pb-4 text-sm text-gray-300 transition-all duration-300">
                                {faq.answer}
                            </div>
                        )}
                        {/* HR line shown always below the question or below answer if visible */}
                        <hr className="border-t border-white mx-4 mt-2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
