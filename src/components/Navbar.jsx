import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX, FiSearch, FiHeart, FiUser } from 'react-icons/fi';
import brandLogo from '../assets/images/brand-logo-new.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const { scrollY } = useScroll();

    const navbarBg = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
    );

    const navbarShadow = useTransform(
        scrollY,
        [0, 100],
        ['0 0 0 rgba(0, 0, 0, 0)', '0 10px 30px rgba(0, 0, 0, 0.1)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleAddToCart = () => {
            setCartCount(prev => prev + 1);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('addToCart', handleAddToCart);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('addToCart', handleAddToCart);
        };
    }, []);

    return (
        <motion.nav
            className="fixed top-0 w-full backdrop-blur-sm z-40"
            style={{
                backgroundColor: navbarBg,
                boxShadow: navbarShadow,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="h-16 w-16 rounded-full overflow-hidden">
                            <img src={brandLogo} alt="LOOLA.in" className="h-full w-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-serif font-bold text-brown-800">
                                LOOLA<span className="text-gold-500">.in</span>
                            </h1>
                            <p className="text-xs text-gold-600 italic">Where Beauty Blooms</p>
                        </div>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-brown-700 hover:text-gold-600 font-medium relative"
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-600"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {[FiSearch, FiHeart, FiUser].map((Icon, index) => (
                            <motion.button
                                key={index}
                                className="p-2 hover:bg-gold-50 rounded-full transition-colors relative"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon className="w-5 h-5 text-brown-700" />
                            </motion.button>
                        ))}
                        <motion.button
                            className="relative p-2 hover:bg-gold-50 rounded-full transition-colors cart-icon"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FiShoppingBag className="w-5 h-5 text-brown-700" />
                            {cartCount > 0 && (
                                <motion.span
                                    className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500 }}
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <FiX className="w-6 h-6 text-brown-700" />
                            ) : (
                                <FiMenu className="w-6 h-6 text-brown-700" />
                            )}
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="flex flex-col space-y-4 py-4">
                        {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-brown-700 hover:text-gold-600 font-medium"
                                initial={{ x: -20, opacity: 0 }}
                                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </motion.a>
                        ))}
                        <div className="flex space-x-4 pt-4 border-t border-gold-200">
                            {[FiSearch, FiHeart, FiUser, FiShoppingBag].map((Icon, index) => (
                                <motion.button
                                    key={index}
                                    className="p-2 hover:bg-gold-50 rounded-full transition-colors"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon className="w-5 h-5 text-brown-700" />
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
