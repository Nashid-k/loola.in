import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const reviews = [
    { name: 'Priya S.', text: 'Absolutely in love with my jewelry!', stars: 5 },
    { name: 'Anjali M.', text: 'Best quality at amazing prices!', stars: 5 },
    { name: 'Sneha P.', text: 'Fast delivery and beautiful packaging', stars: 5 },
    { name: 'Riya K.', text: 'Highly recommend LOOLA.in', stars: 5 },
    { name: 'Kavya R.', text: 'Premium quality jewelry', stars: 5 },
];

const Marquee = () => {
    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...reviews, ...reviews, ...reviews];

    return (
        <div className="py-12 bg-gradient-to-r from-gold-100 via-cream to-brown-100 overflow-hidden">
            <h3 className="text-center text-2xl font-serif font-bold text-brown-800 mb-8">
                What Our Customers Say
            </h3>
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gold-100 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brown-100 to-transparent z-10"></div>

                <motion.div
                    className="flex space-x-6 will-change-transform"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedReviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg w-80"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex mb-3">
                                {[...Array(review.stars)].map((_, i) => (
                                    <FiStar key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                                ))}
                            </div>
                            <p className="text-brown-700 italic mb-4">"{review.text}"</p>
                            <p className="font-semibold text-brown-800">{review.name}</p>
                            <p className="text-sm text-gold-600">Verified Customer</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
