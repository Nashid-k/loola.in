import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, suffix = '', duration = 2.5 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div ref={ref}>
            {inView && (
                <CountUp
                    end={end}
                    duration={duration}
                    suffix={suffix}
                    separator=","
                />
            )}
        </div>
    );
};

export default AnimatedCounter;
