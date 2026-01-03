import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Footer = () => {
    return (
        <footer id="contact" className="bg-brown-900 text-brown-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-white mb-4">
                            LOOLA<span className="text-gold-400">.in</span>
                        </h3>
                        <p className="text-gold-300 italic mb-4">Where Beauty Blooms</p>
                        <p className="text-brown-300 mb-4">
                            Your trusted destination for anti-tarnish jewelry, watches, and premium accessories.
                        </p>
                        <div className="flex space-x-3">
                            <a href="https://instagram.com" className="p-2 bg-brown-800 hover:bg-gold-600 rounded-full transition-colors">
                                <FiInstagram className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" className="p-2 bg-brown-800 hover:bg-gold-600 rounded-full transition-colors">
                                <FiFacebook className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" className="p-2 bg-brown-800 hover:bg-gold-600 rounded-full transition-colors">
                                <FiTwitter className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/c/919633109813" className="p-2 bg-brown-800 hover:bg-gold-600 rounded-full transition-colors">
                                <SiWhatsapp className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gold-400 transition-colors">Home</a></li>
                            <li><a href="#products" className="hover:text-gold-400 transition-colors">Shop</a></li>
                            <li><a href="#categories" className="hover:text-gold-400 transition-colors">Categories</a></li>
                            <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold text-white text-lg mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gold-400 transition-colors">Rings</a></li>
                            <li><a href="#" className="hover:text-gold-400 transition-colors">Necklaces</a></li>
                            <li><a href="#" className="hover:text-gold-400 transition-colors">Bracelets</a></li>
                            <li><a href="#" className="hover:text-gold-400 transition-colors">Watches</a></li>
                            <li><a href="#" className="hover:text-gold-400 transition-colors">Accessories</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <FiMapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                                <span>Based in India<br />All India Delivery Available</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FiPhone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                                <span>DM for orders</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <SiWhatsapp className="w-5 h-5 text-gold-400 flex-shrink-0" />
                                <a href="https://wa.me/c/919633109813" className="hover:text-gold-400 transition-colors">
                                    +91 96331 09813
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FiInstagram className="w-5 h-5 text-gold-400 flex-shrink-0" />
                                <a href="https://instagram.com/loolaa.in" className="hover:text-gold-400 transition-colors">
                                    @loolaa.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brown-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-brown-400 text-sm">
                            © 2024 LOOLA.in. All rights reserved. | Where luxury meets affordability
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-gold-400 transition-colors">Shipping Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
