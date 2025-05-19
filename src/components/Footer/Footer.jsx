import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4"> {/* Reduced py from 8 to 4 */}
            <div className="max-w-7xl mx-auto px-4"> {/* Reduced horizontal padding */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center"> {/* Reduced gap from 8 to 4 */}
                    {/* Column 1 - Logo and Social Icons */}
                    <div className="flex flex-col items-center">
                        <img src={logo} alt="Logo" className="mb-2 w-28 h-auto" /> {/* Reduced size and mb */}
                        <p className="text-white mb-2 text-sm font-bold">Follow us on:</p>
                        <div className="flex space-x-3 justify-center cursor-pointer"> {/* Reduced spacing */}
                            <a href target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaFacebookF size={20} />
                            </a>
                            <a href target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaYoutube size={20} />
                            </a>
                            <a href target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaTwitter size={20} />
                            </a>
                            <a href target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-2 ">Company</h4>
                        <Link to="apx_token"><p className="text-sm mb-3 cursor-pointer hover:underline">APX Token</p></Link>
                        <p className="text-sm mb-3 cursor-pointer hover:underline">Join The Movement</p>
                        <Link to="/insights"><p className="text-sm mb-3 cursor-pointer hover:underline">Insights</p></Link>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-2">Company</h4>
                        <Link to="/"><p className="text-sm mb-3 cursor-pointer hover:underline">Home</p></Link>
                        <Link to="/aboutus"><p className="text-sm mb-3 cursor-pointer hover:underline">About Us</p></Link>
                        <p className="text-sm mb-3 cursor-pointer hover:underline">Contact Us</p>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center text-sm mt-6"> {/* Reduced mt */}
                <p>&copy; All copyrights reserved &copy; 2025 - APX Token</p>
            </div>
        </footer>
    );
};

export default Footer;
