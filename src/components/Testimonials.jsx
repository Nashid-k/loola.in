import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';

const testimonials = [
    {
        name: 'Priya Sharma',
        rating: 5,
        comment: 'Absolutely love my gold necklace! The quality is amazing and it hasn\'t tarnished at all. LOOLA is my go-to for jewelry now!',
        avatar: '👩',
        location: 'Mumbai'
    },
    {
        name: 'Anjali Mehta',
        rating: 5,
        comment: 'Beautiful collection and affordable prices. The watch I ordered arrived perfectly packaged. Highly recommend!',
        avatar: '👩‍🦰',
        location: 'Delhi'
    },
    {
        name: 'Sneha Patel',
        rating: 5,
        comment: 'The anti-tarnish jewelry is a game changer! Plus free delivery all over India. Great experience shopping here.',
        avatar: '🧑',
        location: 'Bangalore'
    },
];

const Testimonials = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-cream">
            <div className="max-w-7xl mx-auto">
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
                        What Our Customers Say
                    </motion.p>
                    <motion.h2
                        className="section-title bg-clip-text text-transparent bg-gradient-to-r from-brown-900 to-brown-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 }}
                    >
                        Customer Reviews
                    </motion.h2>
                    <motion.p
                        className="text-brown-600 max-w-2xl mx-auto mt-4 text-lg"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Join 7,000+ happy customers who trust LOOLA for their jewelry needs
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Quote mark decoration */}
                            <div className="absolute top-4 right-4 text-6xl text-gold-200 opacity-30 font-serif">"</div>

                            <motion.div
                                className="flex mb-4"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05, type: 'spring' }}
                                    >
                                        <FiStar className="w-5 h-5 text-gold-500 fill-gold-500" />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <p className="text-brown-700 mb-6 leading-relaxed italic relative z-10">
                                "{testimonial.comment}"
                            </p>

                            <div className="flex items-center space-x-3 relative z-10">
                                <motion.div
                                    className="w-14 h-14 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-2xl"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {testimonial.avatar}
                                </motion.div>
                                <div>
                                    <p className="font-semibold text-brown-800">{testimonial.name}</p>
                                    <p className="text-sm text-gold-600">{testimonial.location}</p>
                                    <p className="text-xs text-brown-500 mt-1">Verified Customer ✓</p>
                                </div>
                            </div>

                            {/* Animated gradient background on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-gold-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ zIndex: 0 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
