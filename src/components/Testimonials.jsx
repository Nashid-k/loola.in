import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PiStarFill, PiArrowLeftLight, PiArrowRightLight, PiQuotesFill } from 'react-icons/pi';

const testimonials = [
    {
        name: 'Priya Sharma',
        rating: 5,
        comment: 'Absolutely love my gold necklace! The quality is amazing and it hasn\'t tarnished at all. LOOLA is my go-to for jewelry now! The packaging felt like receiving a gift from a friend.',
        avatar: '👩',
        location: 'Mumbai'
    },
    {
        name: 'Anjali Mehta',
        rating: 5,
        comment: 'Beautiful collection and affordable prices. The watch I ordered arrived perfectly packaged. Highly recommend! It looks even better in person than on the website.',
        avatar: '👩‍🦰',
        location: 'Delhi'
    },
    {
        name: 'Sneha Patel',
        rating: 5,
        comment: 'The anti-tarnish jewelry is a game changer! Plus free delivery all over India. Great experience shopping here. Customer service was also very helpful with my sizing questions.',
        avatar: '🧑',
        location: 'Bangalore'
    },
    {
        name: 'Zara Khan',
        rating: 5,
        comment: 'I was skeptical about buying jewelry online, but LOOLA exceeded my expectations. The finish is premium and luxurious. Will definitely buy again.',
        avatar: '👱‍♀️',
        location: 'Hyderabad'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-cream overflow-hidden">
            <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative">

                {/* Section Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-gold-600 font-medium tracking-widest uppercase mb-3 block text-sm">
                        Voice of Customer
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-brown-900">
                        Editorial Reviews
                    </h2>
                </motion.div>

                {/* Editorial Slider */}
                <div className="relative w-full max-w-4xl mx-auto min-h-[400px] flex items-center">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/50 hover:bg-white text-brown-800 hover:text-gold-600 transition-all backdrop-blur-sm shadow-sm hidden md:block group"
                    >
                        <PiArrowLeftLight className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/50 hover:bg-white text-brown-800 hover:text-gold-600 transition-all backdrop-blur-sm shadow-sm hidden md:block group"
                    >
                        <PiArrowRightLight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="w-full relative overflow-hidden py-10 px-4 md:px-0">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Giant Quote Icon */}
                                <div className="text-gold-200 mb-6 opacity-40">
                                    <PiQuotesFill className="w-16 h-16 md:w-20 md:h-20" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-8">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <PiStarFill key={i} className="w-5 h-5 text-gold-500" />
                                    ))}
                                </div>

                                {/* The Quote - Large Serif Typography */}
                                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-brown-900 leading-tight mb-10 max-w-3xl italic mx-auto">
                                    "{testimonials[currentIndex].comment}"
                                </h3>

                                {/* User Info */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center text-3xl shadow-inner">
                                        {testimonials[currentIndex].avatar}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-brown-900 text-lg">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-brown-500">
                                            <span>{testimonials[currentIndex].location}</span>
                                            <span className="w-1 h-1 bg-gold-400 rounded-full" />
                                            <span className="text-gold-600 font-medium">Verified Buyer</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-8 bg-brown-800'
                                    : 'w-2 bg-brown-200 hover:bg-brown-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
