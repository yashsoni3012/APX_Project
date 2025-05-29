import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const isActive = (path) =>
        currentPath === path
            ? "text-green-500 font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-green-500 after:transition-all after:duration-300"
            : "text-white relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-green-400 hover:after:transition-all hover:after:duration-300";

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <nav className="bg-black fixed top-0 left-0 w-full z-50 border-b border-white shadow-md transition-none">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 min-h-[70px]">
                <Link to="/" onClick={closeMenu}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 w-auto transition-transform duration-200 ease-in-out hover:scale-105"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link to="/apx_token" className={`${isActive("/apx_token")} transition-all duration-300 hover:scale-105`}>APX Token</Link>
                    <Link to="/nft" className={`${isActive("/nft")} transition-all duration-300 hover:scale-105`}>NFT</Link>
                    <Link to="/services" className={`${isActive("/services")} transition-all duration-300 hover:scale-105`}>Services</Link>
                    <Link to="/insights" className={`${isActive("/insights")} transition-all duration-300 hover:scale-105`}>Insights</Link>
                    <Link to="/aboutus" className={`${isActive("/aboutus")} transition-all duration-300 hover:scale-105`}>About Us</Link>
                    <Link
                        to="/"
                        className={`bg-green-600 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-green-700 ${currentPath === "/" ? "ring-2 ring-white" : ""}`}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Toggle Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="fixed inset-0 bg-black/30" onClick={closeMenu}></div>

                <div className="absolute top-0 right-0 h-full w-full bg-gray-900 shadow-lg p-7 space-y-6 overflow-y-auto">
                    <button onClick={closeMenu} className="absolute top-4 left-4 text-white text-2xl font-bold focus:outline-none">
                        &times;
                    </button>

                    <div className="mt-10 flex flex-col items-start space-y-4 w-full">
                        <Link to="/apx_token" onClick={closeMenu} className={`${isActive("/apx_token")} text-lg hover:text-green-400 transition-all duration-200 active:scale-95`}>APX Token</Link>
                        <hr className="border-t border-white w-full" />

                        <Link to="/nft" onClick={closeMenu} className={`${isActive("/nft")} text-lg hover:text-green-400 transition-all duration-200 active:scale-95`}>NFT</Link>
                        <hr className="border-t border-white w-full" />

                        <Link to="/services" onClick={closeMenu} className={`${isActive("/services")} text-lg hover:text-green-400 transition-all duration-200 active:scale-95`}>Services</Link>
                        <hr className="border-t border-white w-full" />

                        <Link to="/insights" onClick={closeMenu} className={`${isActive("/insights")} text-lg hover:text-green-400 transition-all duration-200 active:scale-95`}>Insights</Link>
                        <hr className="border-t border-white w-full" />

                        <Link to="/aboutus" onClick={closeMenu} className={`${isActive("/aboutus")} text-lg hover:text-green-400 transition-all duration-200 active:scale-95`}>About Us</Link>
                        <hr className="border-t border-white w-full" />

                        <Link
                            to
                            onClick={closeMenu}
                            className="bg-green-600 text-white text-center w-full py-2 mt-10 rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
