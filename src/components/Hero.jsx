import React, { useState, useEffect } from 'react';
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

    // Typewriter effect
    const [typewriterText, setTypewriterText] = useState('');
    const fullText = 'Where Beauty Blooms';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypewriterText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-cream via-gold-50 to-brown-50 min-h-screen flex items-center">
            {/* Floating Shapes Background */}
            <FloatingShapes />

            {/* Animated Gradient Mesh (Hardware Accelerated) */}
            <div className="absolute inset-0 opacity-30 select-none pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-3xl will-change-transform"
                    style={{ y: y1 }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-brown-400 to-brown-600 rounded-full blur-3xl will-change-transform"
                    style={{ y: y2 }}
                ></motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
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

                        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-brown-900 mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brown-900 to-brown-700">
                                {typewriterText}
                            </span>
                            <motion.span
                                className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-gold-600 ml-2"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                            />
                        </h1>

                        <motion.p
                            className="text-xl md:text-2xl text-brown-600 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3, duration: 0.6 }}
                        >
                            Discover our exquisite collection of <span className="font-semibold text-gold-700">anti-tarnish jewelry</span>,
                            elegant watches, and premium accessories. Where luxury meets affordability.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.5, duration: 0.6 }}
                        >
                            <motion.button
                                className="btn-primary group relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    Shop Collection
                                    <PiArrowRightLight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View New Arrivals
                            </motion.button>
                        </motion.div>

                        {/* Animated Statistics */}
                        <motion.div
                            className="grid grid-cols-3 gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 4, duration: 0.6 }}
                        >
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-gold-600">
                                    <AnimatedCounter end={163} suffix="+" />
                                </div>
                                <p className="text-sm md:text-base text-brown-600 mt-2">Products</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-gold-600">
                                    <AnimatedCounter end={7.1} suffix="K+" duration={2.5} />
                                </div>
                                <p className="text-sm md:text-base text-brown-600 mt-2">Followers</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-gold-600">
                                    <AnimatedCounter end={4.9} suffix="★" duration={2} />
                                </div>
                                <p className="text-sm md:text-base text-brown-600 mt-2">Rating</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image with Advanced Effects */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="relative"
                    >
                        <motion.div
                            className="relative will-change-transform"
                            style={{ y: imageY }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Glowing background */}
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-gold-300 to-brown-300 rounded-3xl blur-2xl"
                                animate={{
                                    opacity: [0.3, 0.5, 0.3],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }}
                            />

                            <img
                                src={heroImage}
                                alt="LOOLA Jewelry Collection"
                                className="relative rounded-3xl shadow-2xl w-full object-cover transform hover:rotate-1 transition-transform duration-300"
                            />
                        </motion.div>

                        {/* Floating Badge with animation */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 4.5, duration: 0.6 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <div className="flex items-center space-x-3">
                                <motion.div
                                    className="w-14 h-14 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-2xl"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                >
                                    🚚
                                </motion.div>
                                <div>
                                    <p className="font-semibold text-brown-800 text-lg">Free Delivery</p>
                                    <p className="text-sm text-brown-600">All India Available</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
