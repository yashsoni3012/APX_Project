import React from 'react';
import logo from '../../assets/logo.png'; // Replace with your logo image path
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1 - Logo and Social Icons */}

                    <div className="flex flex-col items-start">
                        <img src={logo} alt="Logo" className="mb-4 w-32 h-auto" />

                        {/* "Follow us on" text below the logo */}
                        <p className="text-white mb-4 text-sm font-bold">Follow us on:</p>

                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 cursor-pointer">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 cursor-pointer">
                                <FaYoutube size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 cursor-pointer">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 cursor-pointer">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>


                    {/* Column 2 - Some Information with Title */}
                    <div className="flex flex-col">
                        <h4 className="text-xl font-semibold mb-4">Company</h4>
                        <Link to="apx_token"><p className="text-sm mb-5 relative cursor-pointer">
                            <span className="hover:underline">APX Token</span>
                        </p></Link>
                        <p className="text-sm mb-5 relative cursor-pointer">
                            <span className="hover:underline">Join The Movement</span>
                        </p>
                        <Link to="/insights"><p className="text-sm mb-5 relative cursor-pointer">
                            <span className="hover:underline">Insights</span>
                        </p></Link>
                    </div>

                    {/* Column 3 - Contact Information */}
                    <div className="flex flex-col">
                        <h4 className="text-xl font-semibold mb-4">Company</h4>

                        <Link to="/"><p className="text-sm mb-5 relative cursor-pointer">
                            <span className="hover:underline">Home</span>
                        </p></Link>

                        <Link to="/aboutus"><p className="text-sm mb-5 relative cursor-pointer">
                            <span className="hover:underline">About Us</span>
                        </p></Link>
                        <p className="text-sm mb-5 relative cursor-pointer">
                            <span className="hover:underline">Contact Us</span>
                        </p>
                    </div>



                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center text-sm mt-8">
                <p>&copy; All copyrights reserved &copy; 2025 - APX Token</p>
            </div>
        </footer>
    );
};

export default Footer;
