import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Optional: Prevent background scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <nav className="bg-black fixed top-0 left-0 w-full z-50 border-b border-white shadow-md">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
                {/* Logo */}
                <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link to="/apx_token" className="text-white hover:text-green-400 transition">APX Token</Link>
                    <Link to="/nft" className="text-white hover:text-green-400 transition">NFT</Link>
                    <Link to="/services" className="text-white hover:text-green-400 transition">Services</Link>
                    <Link to="/insights" className="text-white hover:text-green-400 transition">Insights</Link>
                    <Link to="/aboutus" className="text-white hover:text-green-400 transition">About Us</Link>
                    <Link to="/" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Contact Us</Link>
                </div>

                {/* Toggle Button */}
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

            {/* Offcanvas Sidebar */}
            <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transform`}>
                {/* Overlay */}
                <div className="fixed inset-0 bg-black/50" onClick={closeMenu}></div>

                {/* Sidebar Panel */}
                <div className="absolute top-0 right-0 h-full w-64 bg-gray-900 shadow-lg p-6 space-y-6">
                    <Link to="/apx_token" onClick={closeMenu} className="block text-white hover:text-green-400">APX Token</Link>
                    <Link to="/nft" onClick={closeMenu} className="block text-white hover:text-green-400">NFT</Link>
                    <Link to="/services" onClick={closeMenu} className="block text-white hover:text-green-400">Services</Link>
                    <Link to="/insights" onClick={closeMenu} className="block text-white hover:text-green-400">Insights</Link>
                    <Link to="/aboutus" onClick={closeMenu} className="block text-white hover:text-green-400">About Us</Link>
                    <Link to="/" onClick={closeMenu} className="block bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700 transition">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
