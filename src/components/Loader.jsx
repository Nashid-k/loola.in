import React, { useState, useEffect } from 'react';
import brandLogo from '../assets/images/brand-logo-new.jpg';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream via-gold-50 to-brown-50">
            <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl shimmer">
                    <img
                        src={brandLogo}
                        alt="LOOLA.in"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex space-x-2 justify-center">
                    <div className="w-3 h-3 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <p className="mt-4 text-gold-600 font-serif text-xl">Where Beauty Blooms</p>
            </div>
        </div>
    );
};

export default Loader;
