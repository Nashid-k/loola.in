import React from 'react';
import { motion } from 'framer-motion';
import useScrollPosition from '../hooks/useScrollPosition';

const FloatingShapes = () => {
    const scrollPosition = useScrollPosition();

    const shapes = [
        { size: 120, top: '10%', left: '5%', delay: 0, color: 'gold-200' },
        { size: 80, top: '60%', right: '10%', delay: 0.5, color: 'brown-200' },
        { size: 100, bottom: '20%', left: '15%', delay: 1, color: 'gold-300' },
        { size: 60, top: '40%', right: '20%', delay: 1.5, color: 'brown-300' },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => {
                const offset = scrollPosition * (0.1 + index * 0.05);

                return (
                    <motion.div
                        key={index}
                        className={`absolute w-${shape.size} h-${shape.size} bg-${shape.color} rounded-full blur-3xl opacity-20`}
                        style={{
                            top: shape.top,
                            bottom: shape.bottom,
                            left: shape.left,
                            right: shape.right,
                            width: `${shape.size}px`,
                            height: `${shape.size}px`,
                            transform: `translateY(${offset}px)`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                            y: [0, 30, 0]
                        }}
                        transition={{
                            duration: 8 + index * 2,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                            delay: shape.delay
                        }}
                    />
                );
            })}
        </div>
    );
};

export default FloatingShapes;
