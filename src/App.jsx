import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Marquee from './components/Marquee';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // Smooth scroll behavior
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="App overflow-x-hidden">
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Hero />
                <FeaturedProducts />
                <Categories />
                <Marquee />
                <Testimonials />
                <Newsletter />
                <Footer />
                <BackToTop />
            </motion.div>
        </div>
    );
}

export default App;
