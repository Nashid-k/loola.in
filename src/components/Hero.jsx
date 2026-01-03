import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PiArrowRightLight, PiStarFill } from 'react-icons/pi';
import AnimatedCounter from './AnimatedCounter';
import FloatingShapes from './FloatingShapes';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';
import heroImage from '../assets/images/hero-image.png';

const Hero = () => {
    // Optimized Scroll Hook (No re-renders)
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 250]); // Parallax for bg 1
    const y2 = useTransform(scrollY, [0, 500], [0, -250]); // Parallax for bg 2
    const imageY = useTransform(scrollY, [0, 500], [0, -100]); // Parallax for hero image

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
            {/* Layer 0: Atmospheric Background Image (Right Side) */}
            <motion.div
                className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0"
                style={{ y: y1 }}
            >
                <div className="relative w-full h-full">
                    <img
                        src={heroImage}
                        alt="LOOLA Jewelry Collection"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Cinematic Gradient Mask: Fades image into cream background on the left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent sm:via-cream/40" />

                    {/* Bottom fade for smooth transition to next section */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
                </div>
            </motion.div>

            {/* Floating Shapes - Now more subtle in background */}
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <FloatingShapes />
            </div>

            {/* Layer 1: Content Container */}
            <div className="max-w-7xl mx-auto px-4 w-full relative z-10" ref={ref}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Left Content - Takes up 7 columns on desktop */}
                    <motion.div
                        className="md:col-span-7 lg:col-span-6 pt-20 md:pt-0"
                        variants={slideInLeft}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="flex items-center space-x-2 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                                    >
                                        <PiStarFill className="w-5 h-5 text-gold-500" />
                                    </motion.div>
                                ))}
                            </div>
                            <span className="text-sm text-brown-600 font-medium">7,190+ Happy Customers</span>
                        </motion.div>

                        <motion.h1
                            className="font-serif text-6xl md:text-7xl lg:text-9xl font-bold text-brown-900 mb-8 leading-[0.9] flex flex-wrap tracking-tight"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                                }
                            }}
                            initial="hidden"
                            animate="visible"
                        >
                            {"Where Beauty Blooms".split(" ").map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block mr-4 whitespace-nowrap">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={charIndex}
                                            className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-brown-900 to-gold-900"
                                            variants={{
                                                hidden: { opacity: 0, y: 40, rotateX: 90 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    rotateX: 0,
                                                    transition: {
                                                        type: "spring",
                                                        damping: 20,
                                                        stiffness: 100
                                                    }
                                                }
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-brown-700 mb-10 leading-relaxed max-w-xl font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            Discover our exquisite collection of <span className="font-medium text-gold-700">anti-tarnish jewelry</span>,
                            elegant watches, and premium accessories.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-5 mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <motion.button
                                className="btn-primary group relative overflow-hidden bg-brown-900 text-white px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center justify-center text-lg tracking-wide">
                                    Shop Collection
                                    <PiArrowRightLight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 rounded-full border border-brown-300 text-brown-800 font-medium hover:bg-brown-50 transition-colors text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View New Arrivals
                            </motion.button>
                        </motion.div>

                        {/* Animated Statistics */}
                        <motion.div
                            className="flex gap-12 border-t border-brown-200/50 pt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                        >
                            <div>
                                <div className="text-3xl font-bold text-brown-900 font-serif">
                                    <AnimatedCounter end={163} suffix="+" />
                                </div>
                                <p className="text-sm text-brown-500 uppercase tracking-wider mt-1">Products</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-brown-900 font-serif">
                                    <AnimatedCounter end={7.1} suffix="K" duration={2.5} />
                                </div>
                                <p className="text-sm text-brown-500 uppercase tracking-wider mt-1">Customers</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side spacer for image */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-6 relative h-full">
                        {/* Floating Badge moved here, absolutely positioned relative to container */}
                        <motion.div
                            className="absolute bottom-20 right-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 border border-white/40 max-w-xs cursor-pointer z-20"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 2, duration: 0.8 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-2xl">
                                    🚚
                                </div>
                                <div>
                                    <p className="font-serif font-bold text-brown-900 text-lg leading-none mb-1">Free Delivery</p>
                                    <p className="text-xs text-brown-600 font-medium">On all prepaid orders</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
