import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black fixed top-0 left-0 w-full z-50 border-b border-white shadow-md">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
                {/* Logo aligned to left */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-17 w-auto" />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link to="/apx_token" className="text-white hover:text-green-400 transition">APX Token</Link>
                    <Link to="/nft" className="text-white hover:text-green-400 transition">NFT</Link>
                    <Link to="/services" className="text-white hover:text-green-400 transition">Services</Link>
                    <Link to="/insights" className="text-white hover:text-green-400 transition">Insights</Link>
                    <Link to="/aboutus" className="text-white hover:text-green-400 transition">About Us</Link>
                    <Link
                        to
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 px-4 pt-2 pb-4 space-y-3">
                    <Link to="/apx_token" className="block text-white hover:text-green-400">APX Token</Link>
                    <Link to="/nft" className="block text-white hover:text-green-400">NFT</Link>
                    <Link to="/services" className="block text-white hover:text-green-400">Services</Link>
                    <Link to="/insights" className="block text-white hover:text-green-400">Insights</Link>
                    <Link to="/aboutus" className="block text-white hover:text-green-400">About Us</Link>
                    <Link
                        to
                        className="block bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
