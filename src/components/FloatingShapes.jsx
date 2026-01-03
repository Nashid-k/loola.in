import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingShapes = () => {
    const { scrollY } = useScroll();

    // Create optimized transforms for each shape to run on compositor thread
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 100]);
    const y4 = useTransform(scrollY, [0, 1000], [0, -80]);

    const shapes = [
        { size: 120, top: '10%', left: '5%', delay: 0, color: 'bg-gold-200', y: y1 },
        { size: 80, top: '60%', right: '10%', delay: 0.5, color: 'bg-brown-200', y: y2 },
        { size: 100, bottom: '20%', left: '15%', delay: 1, color: 'bg-gold-300', y: y3 },
        { size: 60, top: '40%', right: '20%', delay: 1.5, color: 'bg-brown-300', y: y4 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${shape.color} rounded-full blur-3xl opacity-20 will-change-transform`} // Added will-change-transform
                    style={{
                        top: shape.top,
                        bottom: shape.bottom,
                        left: shape.left,
                        right: shape.right,
                        width: shape.size,
                        height: shape.size,
                        y: shape.y // Bound to the MotionValue
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8 + index * 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "easeInOut",
                        delay: shape.delay
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
