import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate scroll progress
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full shadow-2xl flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* Progress ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                            cx="28"
                            cy="28"
                            r="26"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            fill="none"
                        />
                        <motion.circle
                            cx="28"
                            cy="28"
                            r="26"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray={163}
                            strokeDashoffset={163 - (163 * scrollProgress) / 100}
                            strokeLinecap="round"
                        />
                    </svg>
                    <FiArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
