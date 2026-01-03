import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PiWatchLight, PiHeartLight, PiHandbagLight, PiStarLight, PiDiamondLight, PiSketchLogoLight, PiArrowUpRightLight } from 'react-icons/pi';
import { staggerContainer } from '../utils/animations';

const categories = [
    { icon: PiDiamondLight, name: 'Rings', count: '45+ Items', color: 'from-gold-400 to-gold-600' },
    { icon: PiSketchLogoLight, name: 'Necklaces', count: '32+ Items', color: 'from-brown-400 to-brown-600' },
    { icon: PiHeartLight, name: 'Bracelets', count: '28+ Items', color: 'from-gold-500 to-brown-500' },
    { icon: PiWatchLight, name: 'Watches', count: '18+ Items', color: 'from-brown-500 to-gold-500' },
    { icon: PiHandbagLight, name: 'Accessories', count: '40+ Items', color: 'from-gold-400 to-brown-400' },
    { icon: PiStarLight, name: 'Premium', count: 'Exclusive', color: 'from-brown-600 to-gold-700' },
];

const Categories = () => {
    const { scrollYProgress } = useScroll();
    const ribbonY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="categories" className="py-24 px-4 bg-cream relative overflow-hidden">
            {/* Parallax Ribbon Background */}
            <motion.div
                className="absolute top-1/2 left-0 w-[120%] h-32 bg-gradient-to-r from-gold-100/20 via-gold-200/20 to-transparent -rotate-6 blur-3xl pointer-events-none"
                style={{ y: ribbonY }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    className="flex justify-between items-end mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="text-gold-600 font-medium tracking-widest uppercase mb-3 block text-sm">
                            Curated Selection
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-brown-900 leading-none">
                            Shop by Category
                        </h2>
                    </div>
                    <div className="hidden md:block w-32 h-[1px] bg-brown-200 mb-2"></div>
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
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } }
                                }}
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer"
                            >
                                <div className="h-[280px] bg-white rounded-[2rem] p-6 flex flex-col items-center justify-center relative overflow-hidden border border-brown-100 shadow-sm hover:shadow-2xl transition-all duration-500 will-change-transform">

                                    {/* Frosted Gradient Glass Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold-50/80 via-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

                                    {/* Icon Container */}
                                    <div className="relative z-10 mb-6">
                                        <div className={`w-16 h-16 rounded-full bg-cream border border-gold-100 flex items-center justify-center text-brown-400 group-hover:text-gold-600 group-hover:scale-110 transition-all duration-500 shadow-inner`}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="relative z-10 text-center">
                                        <h3 className="font-serif text-xl text-brown-900 mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                                            {category.name}
                                        </h3>
                                        <p className="text-xs font-medium text-brown-400 uppercase tracking-wider group-hover:text-gold-600 transition-colors">
                                            {category.count}
                                        </p>
                                    </div>

                                    {/* Bottom Arrow (Reveals on Hover) */}
                                    <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-gold-600">
                                        <PiArrowUpRightLight className="w-6 h-6" />
                                    </div>

                                    {/* Border Glow */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-200/50 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
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
