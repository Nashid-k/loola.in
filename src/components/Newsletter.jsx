import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiCheck } from 'react-icons/fi';
import { fadeInUp } from '../utils/animations';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => {
            setEmail('');
            setSubscribed(false);
        }, 3000);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-r from-gold-500 via-gold-600 to-brown-600 relative overflow-hidden">
            {/* Animated background shapes */}
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.2, 1],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-brown-500 rounded-full blur-3xl opacity-30"
                animate={{
                    scale: [1.2, 1, 1.2],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            />

            <motion.div
                ref={ref}
                className="max-w-4xl mx-auto text-center relative z-10"
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h2
                    className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.2 }}
                >
                    Stay in the Loop
                </motion.h2>
                <motion.p
                    className="text-gold-100 text-lg md:text-xl mb-8"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Subscribe to get exclusive offers, new arrivals, and special discounts
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row gap-3">
                        <motion.input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white bg-white/95 text-brown-800 placeholder-brown-400"
                            whileFocus={{ scale: 1.02 }}
                            disabled={subscribed}
                        />
                        <motion.button
                            type="submit"
                            className="bg-brown-800 hover:bg-brown-900 text-white px-8 py-4 rounded-full font-medium shadow-lg flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={subscribed}
                        >
                            {subscribed ? (
                                <>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring' }}
                                    >
                                        <FiCheck className="w-5 h-5" />
                                    </motion.div>
                                    Subscribed!
                                </>
                            ) : (
                                <>
                                    Subscribe
                                    <FiSend className="w-5 h-5" />
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.form>

                <motion.p
                    className="text-gold-100 text-sm mt-6"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    🎁 Get 10% off your first order when you subscribe!
                </motion.p>

                {/* Success animation */}
                {subscribed && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-32 h-32 bg-white rounded-full flex items-center justify-center"
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{ duration: 1.5 }}
                        >
                            <FiCheck className="w-16 h-16 text-gold-600" />
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default Newsletter;
