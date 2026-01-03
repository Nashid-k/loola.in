import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { PiShoppingBagLight, PiListLight, PiXLight, PiMagnifyingGlassLight, PiHeartLight, PiUserLight } from 'react-icons/pi';
import brandLogo from '../assets/images/brand-logo-new.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const navbarBg = useTransform(
        scrollY,
        [0, 50],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
    );

    const navbarBorder = useTransform(
        scrollY,
        [0, 50],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)']
    );

    const navbarBackdrop = useTransform(
        scrollY,
        [0, 50],
        ['blur(0px)', 'blur(12px)']
    );

    // Add this globally in App or Context ideally, but here for now
    React.useEffect(() => {
        const handleAddToCart = () => setCartCount(prev => prev + 1);
        window.addEventListener('addToCart', handleAddToCart);
        return () => window.removeEventListener('addToCart', handleAddToCart);
    }, []);

    return (
        <motion.nav
            className="fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent"
            style={{
                backgroundColor: navbarBg,
                backdropFilter: navbarBackdrop,
                borderColor: navbarBorder
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - Apple Style: Clean & Minimal */}
                    <motion.div
                        className="flex items-center space-x-3 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden shadow-sm border border-white/20">
                            <img src={brandLogo} alt="LOOLA.in" className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl md:text-2xl font-serif font-bold text-brown-900 tracking-tight leading-none text-shadow-sm">
                                LOOLA<span className="text-gold-600">.in</span>
                            </h1>
                        </div>
                    </motion.div>

                    {/* Desktop Menu - Apple Style: Clean Typography */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-brown-900 hover:text-gold-700 transition-colors tracking-wide"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Icons - Thin & Premium (Phosphor) */}
                    <div className="hidden md:flex items-center space-x-2">
                        {[PiMagnifyingGlassLight, PiHeartLight, PiUserLight].map((Icon, index) => (
                            <motion.button
                                key={index}
                                className="p-2.5 hover:bg-black/5 rounded-full transition-colors text-brown-900"
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="w-5 h-5" strokeWidth={2} /> {/* Using strokeWidth via class if supported or Icon prop */}
                            </motion.button>
                        ))}
                        <motion.button
                            className="relative p-2.5 hover:bg-black/5 rounded-full transition-colors text-brown-900 cart-icon"
                            whileTap={{ scale: 0.95 }}
                        >
                            <PiShoppingBagLight className="w-5 h-5" />
                            {cartCount > 0 && (
                                <motion.span
                                    className="absolute top-1 right-1 bg-gold-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button - Minimal */}
                    <motion.button
                        className="md:hidden p-2 text-brown-900"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <PiXLight className="w-6 h-6" /> : <PiListLight className="w-6 h-6" />}
                    </motion.button>
                </div>

                {/* Mobile Menu - Glassmorphism Overlay */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} // Apple-like easing
                    className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-xl"
                >
                    <div className="flex flex-col space-y-1 py-4 px-2">
                        {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-base font-medium text-brown-900 px-4 py-3 rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors"
                                initial={{ x: -10, opacity: 0 }}
                                animate={isOpen ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </motion.a>
                        ))}
                        <div className="flex justify-around pt-4 border-t border-brown-100/30">
                            {[PiMagnifyingGlassLight, PiHeartLight, PiUserLight, PiShoppingBagLight].map((Icon, index) => (
                                <button key={index} className="p-3 bg-black/5 rounded-full shadow-sm hover:bg-black/10 transition-colors">
                                    <Icon className="w-5 h-5 text-brown-900" />
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
