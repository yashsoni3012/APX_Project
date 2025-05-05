import React from 'react';
import contactImg from '../../assets/contact.png'; // Replace with your image path

const ContactForm = () => {
    return (
        <div className="bg-white py-10">
            <div className="max-w-7xl mx-auto rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center md:items-start justify-between">

                {/* Left Side - Title + Image */}
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                    <h6 className="text-green-600 text-sm md:text-base mb-2 self-start">CONTACT US</h6>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-left">
                        Reach out to us by<br />
                        filling the form
                    </h1>
                    <img src={contactImg} alt="Contact" className="rounded-xl w-full h-auto max-w-md" />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2">

                    {/* Name, Email, Country, Phone - stacked with labels */}
                    <div className="flex flex-col gap-4 mb-6">
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Business Email*</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border border-gray-300 rounded px-3 py-2 text-sm"
                            />
                        </div>

                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Name*</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="border border-gray-300 rounded px-3 py-2 text-sm"
                            />
                        </div>

                        {/* Country and Phone - in one row */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm font-medium text-gray-700 mb-1">Country*</label>
                                <select
                                    className="border border-gray-300 rounded px-3 py-2 text-sm"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select your country</option>
                                    <option value="USA">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="India">India</option>
                                    <option value="Australia">Australia</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Mexico">Mexico</option>
                                    {/* Add more countries as needed */}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-sm font-medium text-gray-700 mb-1">Phone No</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="border border-gray-300 rounded px-3 py-2 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col mb-4">
                        <label className="text-sm font-medium text-gray-700 mb-1">Your Message</label>
                        <textarea
                            placeholder="Tell us a little about the project..."
                            rows="4"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="bg-green-600 hover:bg-green-700 text-white w-full px-6 py-3 rounded text-sm font-semibold cursor-pointer">
                        Submit
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;
