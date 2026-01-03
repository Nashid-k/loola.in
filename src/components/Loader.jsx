import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream via-gold-50/50 to-brown-50">
            <div className="text-center">
                <motion.div
                    className="flex items-end justify-center space-x-1"
                    initial="hidden"
                    animate="visible"
                >
                    {/* L */}
                    <motion.span
                        className="text-4xl md:text-8xl font-serif font-bold text-brown-900"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        L
                    </motion.span>

                    {/* O */}
                    <motion.div
                        className="active-flower" // Optional class if we want to add CSS specifics
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: { scale: 1, opacity: 1 }
                        }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
                    >
                        <span className="text-4xl md:text-8xl font-serif font-bold text-brown-900 mx-1">O</span>
                    </motion.div>

                    {/* O */}
                    <motion.span
                        className="text-4xl md:text-8xl font-serif font-bold text-brown-900"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        O
                    </motion.span>

                    {/* L */}
                    <motion.span
                        className="text-4xl md:text-8xl font-serif font-bold text-brown-900"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        L
                    </motion.span>

                    {/* A */}
                    <motion.span
                        className="text-4xl md:text-8xl font-serif font-bold text-brown-900"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        A
                    </motion.span>

                    {/* Dot - The 'Bloom' */}
                    <motion.span
                        className="text-4xl md:text-8xl font-serif font-bold text-gold-500"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 }
                        }}
                        transition={{
                            delay: 1.2,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        .
                    </motion.span>

                    {/* i */}
                    <motion.span
                        className="text-4xl md:text-8xl font-serif font-bold text-brown-900"
                        variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                    >
                        i
                    </motion.span>

                    {/* n */}
                    <motion.span
                        className="text-4xl md:text-8xl font-serif font-bold text-brown-900"
                        variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        n
                    </motion.span>
                </motion.div>

                {/* Loading Line */}
                <div className="w-full max-w-[200px] h-0.5 bg-brown-100 mt-8 mx-auto overflow-hidden rounded-full">
                    <motion.div
                        className="h-full bg-gold-600"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    />
                </div>

                <motion.p
                    className="mt-4 text-brown-600/60 font-medium tracking-[0.3em] text-xs uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    Where Beauty Blooms
                </motion.p>
            </div>
        </div>
    );
};

export default Loader;
