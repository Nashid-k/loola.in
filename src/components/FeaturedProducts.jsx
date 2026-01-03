import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShoppingCart, FiHeart, FiEye, FiArrowRight } from 'react-icons/fi';
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

const ProductCard = ({ product }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isAdding) return;

        setIsAdding(true);

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

            // Trigger reflow
            void flyingItem.offsetWidth;

            requestAnimationFrame(() => {
                flyingItem.style.left = `${cartRect.left + 10}px`;
                flyingItem.style.top = `${cartRect.top + 10}px`;
                flyingItem.style.transform = 'scale(0.2)';
                flyingItem.style.opacity = '0';
            });

            setTimeout(() => {
                if (document.body.contains(flyingItem)) {
                    document.body.removeChild(flyingItem);
                }
                setIsAdding(false);
                window.dispatchEvent(new CustomEvent('addToCart', { detail: product }));
            }, 800);
        } else {
            // Fallback if cart not found
            setIsAdding(false);
            window.dispatchEvent(new CustomEvent('addToCart', { detail: product }));
        }
    };

    return (
        <motion.div
            variants={fadeInUp}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-brown-100 transition-all duration-300 hover:shadow-xl hover:border-gold-200 hover:-translate-y-1 will-change-transform"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 border-b border-brown-50">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
                    style={{
                        ...product.imageStyle,
                        transform: product.imageStyle?.transform ? undefined : '', // Let CSS handle scale unless specific style overrides
                        objectPosition: product.imageStyle?.objectPosition || 'center'
                    }}
                />
                {/* Explicitly apply the scale transform via inline style if it exists in the product data, combined with hover logic via CSS is tricky. 
                    Actually, for the specific products with 'scale(1.4)', we should apply that as the base. 
                    Let's use a wrapper for the CSS hover zoom to avoid conflict, or simple CSS variable.
                 */}
                {/* Re-implementing image logic to support the custom scale + hover zoom cleanly */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={product.imageStyle?.transform ? { transform: product.imageStyle.transform } : {}}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: product.imageStyle?.objectPosition || 'center' }}
                    />
                </div>


                {/* Badges */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 flex flex-col gap-2 pointer-events-none">
                    {product.badge && (
                        <span className="bg-white/95 backdrop-blur-sm text-brown-900 text-[8px] md:text-[10px] font-bold px-2 py-1 md:px-3 md:py-1 uppercase tracking-[0.2em] shadow-sm rounded-sm">
                            {product.badge}
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsLiked(!isLiked);
                    }}
                    className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 bg-white/60 backdrop-blur-sm rounded-full text-brown-800 hover:bg-white hover:text-gold-500 transition-all duration-300 z-20 shadow-sm active:scale-90"
                    aria-label="Add to wishlist"
                >
                    <FiHeart
                        className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${isLiked ? 'fill-gold-500 text-gold-500' : 'stroke-current stroke-[1.5]'}`}
                    />
                </button>

                {/* Mobile Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className="lg:hidden absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-brown-900 shadow-sm z-20 active:scale-95 transition-transform"
                >
                    <FiShoppingCart className="w-4 h-4" />
                </button>

                {/* Desktop Hover Action - Slide Up with CSS */}
                <div className="hidden lg:block absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 will-change-transform">
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdding}
                        className="w-full bg-white/95 backdrop-blur-md text-brown-900 py-4 font-medium uppercase text-xs tracking-[0.15em] hover:bg-brown-900 hover:text-white transition-colors flex items-center justify-center gap-2 border-t border-brown-100"
                    >
                        {isAdding ? (
                            <span className="animate-pulse">Adding...</span>
                        ) : (
                            <>
                                <span>Add to Cart</span>
                                <FiArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow p-3 md:p-5">
                <div className="flex justify-between items-start">
                    <div className="space-y-1 w-full">
                        <p className="text-[8px] md:text-[10px] font-bold text-gold-600 uppercase tracking-widest">
                            {product.category}
                        </p>
                        <h3 className="text-sm md:text-lg font-serif text-brown-900 leading-tight group-hover:text-gold-600 transition-colors duration-300 truncate">
                            {product.name}
                        </h3>
                    </div>
                </div>
                <div className="mt-auto pt-3 md:pt-4 flex items-center justify-between border-t border-brown-50">
                    <span className="font-serif text-base md:text-lg font-medium text-brown-900">
                        ₹{product.price}
                    </span>
                    <span className="hidden md:inline-block text-xs text-brown-400 font-medium tracking-wide group-hover:text-brown-600 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300">
                        View Details
                    </span>
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
        <section id="products" className="py-12 md:py-24 px-4 bg-cream/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-gold-600 text-xs md:text-sm font-medium tracking-widest uppercase mb-2 block">
                        Our Collection
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-brown-900 mb-4">
                        Curated Elegance
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 gap-y-8 md:gap-y-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {loading ? (
                        [...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)
                    ) : (
                        products.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))
                    )}
                </motion.div>

                <motion.div
                    className="text-center mt-12 md:mt-20"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <button className="text-sm md:text-base border-b-2 border-brown-800 text-brown-800 pb-1 hover:text-gold-600 hover:border-gold-600 transition-all font-medium tracking-wide">
                        VIEW ALL PRODUCTS
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
