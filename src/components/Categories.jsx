import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PiWatchLight, PiHeartLight, PiHandbagLight, PiStarLight, PiDiamondLight, PiSketchLogoLight } from 'react-icons/pi';
import { fadeInUp, staggerContainer } from '../utils/animations';

const categories = [
    { icon: PiDiamondLight, name: 'Rings', count: '45+', color: 'from-gold-400 to-gold-600' },
    { icon: PiSketchLogoLight, name: 'Necklaces', count: '32+', color: 'from-brown-400 to-brown-600' },
    { icon: PiHeartLight, name: 'Bracelets', count: '28+', color: 'from-gold-500 to-brown-500' },
    { icon: PiWatchLight, name: 'Watches', count: '18+', color: 'from-brown-500 to-gold-500' },
    { icon: PiHandbagLight, name: 'Accessories', count: '40+', color: 'from-gold-400 to-brown-400' },
    { icon: PiStarLight, name: 'Premium', count: '15+', color: 'from-brown-600 to-gold-700' },
];

const Categories = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="categories" className="py-20 px-4 bg-gradient-to-br from-cream to-gold-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gold-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-brown-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p
                        className="text-gold-600 font-medium mb-2 text-lg"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Explore Our Range
                    </motion.p>
                    <motion.h2
                        className="section-title bg-clip-text text-transparent bg-gradient-to-r from-brown-900 to-brown-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 }}
                    >
                        Shop by Category
                    </motion.h2>
                    <motion.p
                        className="text-brown-600 max-w-2xl mx-auto mt-4 text-lg"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        From delicate jewelry to sophisticated watches, find your perfect piece
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.name}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer"
                            >
                                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-white/30 will-change-transform">
                                    {/* Animated gradient background on hover */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                    />

                                    <motion.div
                                        className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center relative z-10 shadow-inner`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon className="w-10 h-10 text-white" />
                                    </motion.div>

                                    <h3 className="font-semibold text-brown-800 mb-1 text-lg relative z-10">
                                        {category.name}
                                    </h3>
                                    <motion.p
                                        className="text-sm text-gold-700 font-medium relative z-10"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {category.count} Items
                                    </motion.p>

                                    {/* Ripple effect on click */}
                                    <motion.div
                                        className="absolute inset-0 bg-gold-400 rounded-full"
                                        initial={{ scale: 0, opacity: 0.5 }}
                                        whileTap={{ scale: 2, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;
