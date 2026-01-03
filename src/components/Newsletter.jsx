import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PiArrowRightLight, PiCheckLight } from 'react-icons/pi';

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
        <section className="py-24 px-4 bg-brown-50 relative overflow-hidden text-brown-900">
            {/* Ambient Lighting Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gold-400/5 blur-[100px] pointer-events-none" />

            <motion.div
                ref={ref}
                className="max-w-2xl mx-auto text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <span className="text-gold-600 text-xs font-semibold tracking-[0.3em] uppercase">
                        Exclusive Access
                    </span>
                </motion.div>

                <motion.h2
                    className="font-serif text-5xl md:text-6xl text-brown-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                >
                    Join the Inner Circle
                </motion.h2>

                <motion.p
                    className="text-brown-500 text-lg md:text-xl mb-12 font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Be the first to view our limited edition collections and receive
                    <span className="text-gold-600 italic font-serif px-1">private invitations</span>
                    to seasonal sales.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="relative group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email Address"
                            required
                            className="w-full bg-transparent border-b border-brown-300 py-4 px-2 text-center text-xl text-brown-900 placeholder-brown-400 focus:outline-none focus:border-gold-500 transition-colors duration-500"
                            disabled={subscribed}
                        />

                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                            <button
                                type="submit"
                                className="text-brown-400 hover:text-gold-600 transition-colors p-2"
                                disabled={subscribed}
                            >
                                {subscribed ? (
                                    <PiCheckLight className="w-6 h-6 text-green-600" />
                                ) : (
                                    <PiArrowRightLight className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-brown-400 tracking-wide">
                        By subscribing, you agree to our Privacy Policy
                    </p>
                </motion.form>
            </motion.div>
        </section>
    );
};
export default Newsletter;
