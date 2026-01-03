import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PiShoppingBagLight, PiHeartLight, PiHeartFill, PiEyeLight, PiArrowRightLight } from 'react-icons/pi';
import { ProductCardSkeleton } from './Skeleton';
import { fadeInUp, staggerContainer } from '../utils/animations';
import product1 from '../assets/images/product-1.jpg';
import product2 from '../assets/images/product-2.jpg';
import product3 from '../assets/images/product-3.jpg';
import product4 from '../assets/images/product-4.png';
import product5 from '../assets/images/product-5.png';
import product6 from '../assets/images/product-6.png';
import product7 from '../assets/images/product-7.jpg';
import product8 from '../assets/images/product-8.jpg';
import product9 from '../assets/images/product-9.jpg';
import product10 from '../assets/images/product-10.jpg';

const products = [
    { id: 1, name: 'Gold Nail Bracelet', price: 899, image: product1, category: 'Bracelets', badge: 'Best Seller' },
    { id: 2, name: 'Bamboo Ring Set', price: 699, image: product2, category: 'Rings', badge: 'New' },
    { id: 3, name: 'Leather Wallet', price: 1299, image: product3, category: 'Accessories' },

    { id: 7, name: 'Screw Bracelet', price: 1899, image: product7, category: 'Bracelets', badge: 'Luxury' },
    { id: 8, name: 'Ornate Gold Ring', price: 799, image: product8, category: 'Rings' },
    { id: 9, name: 'Chain Link Ring', price: 899, image: product9, category: 'Rings', badge: 'Popular' },
    { id: 10, name: 'Lattice Band Ring', price: 849, image: product10, category: 'Rings' },
];

const ProductCard = ({ product, index }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isAdding) return;

        setIsAdding(true);

        // Fly-to-cart animation logic
        const button = e.currentTarget;
        const buttonRect = button.getBoundingClientRect();
        const cartIcon = document.querySelector('.cart-icon');
        const cartRect = cartIcon?.getBoundingClientRect();

        if (cartRect) {
            const flyingItem = document.createElement('div');
            flyingItem.style.cssText = `
                position: fixed;
                left: ${buttonRect.left + buttonRect.width / 2}px;
                top: ${buttonRect.top}px;
                width: 20px;
                height: 20px;
                background: linear-gradient(135deg, #e99d37, #d88d31);
                border-radius: 50%;
                z-index: 9999;
                pointer-events: none;
                box-shadow: 0 4px 12px rgba(233, 157, 55, 0.4);
                transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            `;
            document.body.appendChild(flyingItem);

            requestAnimationFrame(() => {
                flyingItem.style.left = `${cartRect.left + cartRect.width / 2}px`;
                flyingItem.style.top = `${cartRect.top + cartRect.height / 2}px`;
                flyingItem.style.opacity = '0';
                flyingItem.style.transform = 'scale(0.5)';
            });

            setTimeout(() => document.body.removeChild(flyingItem), 800);
        }

        setTimeout(() => setIsAdding(false), 800); // Reset state
    };

    // Standard Card Layout
    return (
        <motion.div
            variants={fadeInUp}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 will-change-transform"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badge && (
                        <span className="bg-white/90 backdrop-blur-sm text-brown-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                            {product.badge}
                        </span>
                    )}
                </div>

                {/* Action Buttons (Right) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLiked(!isLiked);
                        }}
                        className="p-2.5 bg-white text-brown-900 rounded-full hover:bg-gold-500 hover:text-white transition-colors shadow-md"
                    >
                        {isLiked ? <PiHeartFill className="w-4 h-4 text-gold-500" /> : <PiHeartLight className="w-4 h-4" />}
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className="p-2.5 bg-white text-brown-900 rounded-full hover:bg-gold-500 hover:text-white transition-colors shadow-md delay-75"
                    >
                        <PiShoppingBagLight className="w-4 h-4" />
                    </button>
                </div>

                {/* Quick View Button (Bottom Center) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-white/90 backdrop-blur-xl text-brown-900 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brown-900 hover:text-white transition-colors shadow-lg whitespace-nowrap">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col flex-grow bg-white">
                <div className="mb-1">
                    <p className="text-[10px] font-bold text-gold-600 uppercase tracking-widest">
                        {product.category}
                    </p>
                </div>
                <h3 className="font-serif text-lg text-brown-900 leading-tight group-hover:text-gold-600 transition-colors duration-300 mb-2 truncate">
                    {product.name}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                    <span className="font-serif text-lg font-medium text-brown-900">
                        ₹{product.price}
                    </span>
                    <div className="w-8 h-[1px] bg-brown-200 group-hover:w-12 group-hover:bg-gold-500 transition-all duration-300" />
                </div>
            </div>
        </motion.div>
    );
};

const FeaturedProducts = () => {
    const [loading, setLoading] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="products" className="py-24 px-4 bg-cream relative overflow-hidden">
            {/* Atmospheric Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-50 to-transparent pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl">
                        <span className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                            Discover
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl text-brown-900 leading-none">
                            The Collection
                        </h2>
                    </div>

                    <button className="hidden md:flex items-center gap-3 text-brown-900 font-medium hover:text-gold-600 transition-colors group">
                        <span className="border-b border-brown-900 group-hover:border-gold-600 pb-0.5 transition-colors">View Full Catalog</span>
                        <PiArrowRightLight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <button className="btn-secondary w-full">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
