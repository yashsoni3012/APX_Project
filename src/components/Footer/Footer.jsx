import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-8 pb-4 w-full ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {/* Column 1 - Logo & Social */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        className="flex flex-col items-center"
                    >
                        <motion.img
                            src={logo}
                            alt="Logo"
                            className="mb-2 w-28 h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <p className="mb-2 text-sm font-bold">Follow us on:</p>
                        <div className="flex space-x-3 justify-center">
                            {[FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                                <a key={index} href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                        className="flex flex-col items-center"
                    >
                        <h4 className="text-lg font-semibold mb-2">Company</h4>
                        <Link to="/apx_token"><p className="text-sm mb-3 cursor-pointer hover:underline">APX Token</p></Link>
                        <p className="text-sm mb-3 cursor-pointer hover:underline">Join The Movement</p>
                        <Link to="/insights"><p className="text-sm mb-3 cursor-pointer hover:underline">Insights</p></Link>
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={2}
                        className="flex flex-col items-center"
                    >
                        <h4 className="text-lg font-semibold mb-2">Explore</h4>
                        <Link to="/"><p className="text-sm mb-3 cursor-pointer hover:underline">Home</p></Link>
                        <Link to="/aboutus"><p className="text-sm mb-3 cursor-pointer hover:underline">About Us</p></Link>
                        <p className="text-sm mb-3 cursor-pointer hover:underline">Contact Us</p>
                    </motion.div>
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={3}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center text-sm mt-8"
                >
                    <p>&copy; All copyrights reserved &copy; 2025 - APX Token</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
